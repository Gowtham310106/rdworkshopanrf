import { put, list } from '@vercel/blob';
import { RegistrationData } from '@/types/registration';
import fs from 'fs';
import path from 'path';

const LOCAL_DATA_DIR = path.join(process.cwd(), 'data');
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIR, 'registrations.json');
const LOCAL_UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

// Ensure local fallback directories exist
function ensureLocalDirs() {
  if (!fs.existsSync(LOCAL_DATA_DIR)) {
    fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_UPLOADS_DIR)) {
    fs.mkdirSync(LOCAL_UPLOADS_DIR, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DATA_FILE)) {
    fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

// Check if Vercel Blob token is available
export function isVercelBlobConfigured(): boolean {
  return !!process.env.BLOB_READ_WRITE_TOKEN;
}

/**
 * Upload receipt screenshot/document to Vercel Blob (or fallback to local file)
 */
export async function saveReceiptFile(
  file: File,
  registrationId: string
): Promise<{ url: string; fileName: string }> {
  const fileExt = path.extname(file.name) || '.jpg';
  const cleanFileName = `receipt-${registrationId}${fileExt}`;

  if (isVercelBlobConfigured()) {
    try {
      const blob = await put(`receipts/${cleanFileName}`, file, {
        access: 'public',
        addRandomSuffix: false,
      });
      return { url: blob.url, fileName: cleanFileName };
    } catch (err) {
      console.error('Vercel Blob upload failed, falling back to local file storage:', err);
    }
  }

  // Fallback: local storage
  ensureLocalDirs();
  const filePath = path.join(LOCAL_UPLOADS_DIR, cleanFileName);
  const bytes = await file.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(bytes));

  return {
    url: `/uploads/${cleanFileName}`,
    fileName: cleanFileName,
  };
}

/**
 * Save registration record to Vercel Blob (or fallback to local JSON file)
 */
export async function saveRegistration(
  data: RegistrationData
): Promise<RegistrationData> {
  if (isVercelBlobConfigured()) {
    try {
      // 1. Store individual registration JSON
      await put(
        `registrations/${data.id}.json`,
        JSON.stringify(data, null, 2),
        {
          access: 'public',
          addRandomSuffix: false,
        }
      );

      // 2. Also keep a master index blob for quick listing
      try {
        let masterList: RegistrationData[] = [];
        try {
          const indexBlobUrl = `https://${process.env.VERCEL_URL || 'blob'}/registrations-master.json`;
          const res = await fetch(indexBlobUrl, { cache: 'no-store' });
          if (res.ok) {
            masterList = await res.json();
          }
        } catch {
          // If master not yet created, start fresh
        }
        masterList = [data, ...masterList.filter((r) => r.id !== data.id)];
        await put(
          `registrations-master.json`,
          JSON.stringify(masterList, null, 2),
          {
            access: 'public',
            addRandomSuffix: false,
          }
        );
      } catch (e) {
        console.warn('Could not update registrations-master.json blob:', e);
      }

      return data;
    } catch (err) {
      console.error('Vercel Blob record save failed, falling back to local JSON:', err);
    }
  }

  // Fallback: local JSON file
  ensureLocalDirs();
  try {
    const raw = fs.readFileSync(LOCAL_DATA_FILE, 'utf-8');
    const existing: RegistrationData[] = raw ? JSON.parse(raw) : [];
    existing.unshift(data);
    fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing to local registrations.json:', err);
  }

  return data;
}

/**
 * Retrieve all registrations (from Vercel Blob or local fallback)
 */
export async function getAllRegistrations(): Promise<RegistrationData[]> {
  if (isVercelBlobConfigured()) {
    try {
      // First attempt to read master list
      try {
        const { blobs } = await list({ prefix: 'registrations-master.json' });
        if (blobs.length > 0) {
          const res = await fetch(blobs[0].url, { cache: 'no-store' });
          if (res.ok) {
            return await res.json();
          }
        }
      } catch {
        // Fallback to reading individual blobs
      }

      // If no master list, fetch individual registration blobs
      const { blobs } = await list({ prefix: 'registrations/' });
      const records: RegistrationData[] = [];
      for (const blob of blobs) {
        if (blob.pathname.endsWith('.json')) {
          try {
            const res = await fetch(blob.url, { cache: 'no-store' });
            if (res.ok) {
              const reg = await res.json();
              records.push(reg);
            }
          } catch (e) {
            console.error(`Failed to fetch blob ${blob.url}:`, e);
          }
        }
      }
      return records.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } catch (err) {
      console.error('Failed to list blobs, falling back to local storage:', err);
    }
  }

  // Fallback: read local JSON
  ensureLocalDirs();
  try {
    const raw = fs.readFileSync(LOCAL_DATA_FILE, 'utf-8');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
