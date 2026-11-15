# ANRF Six-Day Workshop Website & Registration Portal

> **Interdisciplinary Research for National Priorities: From Problem Identification to Proposal Writing**  
> **Dates:** 21 – 26 December 2026  
> **Venue:** Seminar Hall 1, Velammal Institute of Technology, Chennai  
> **Organized by:** Research and Development Cell, Velammal Institute of Technology, Chennai  
> **Theme:** Towards Viksit Bharat 2047 & Atmanirbhar Bharat  
> **Workshop Brochure Website:** [https://rdworkshopanrf.netlify.app/](https://rdworkshopanrf.netlify.app/)

---

## 🌟 Features

- **Academic Presentation**: Features institutional accreditation (AICTE, Anna University, NAAC, NBA), leadership, vision, and themes aligned with Viksit Bharat 2047.
- **Detailed 6-Day Schedule**: Forenoon and Afternoon sessions for all 6 days with interactive day-by-day tabs.
- **Resource Persons & Sponsoring Bodies**: ANRF, DRDO, MeitY, DST, DBT, CSIR, NIOT, AICTE, IIT Madras, and Industry Leaders.
- **Online Payment Mode (UPI / GPay)**:
  - Account: **S. Karthiga** (Banking Name: **S KARTHIGA**)
  - Phone / GPay No: **+91 89252 36141**
  - UPI ID: **`karthigadhanakd7508-1@okicici`**
  - Fee: **₹500/-**
  - Live dynamic QR code generator on canvas
  - Direct 1-click mobile UPI pay link (`upi://pay?...`)
  - One-click copy buttons with copied confirmation
- **Participant Registration Form**:
  - Full Name (with Title)
  - Designation (Faculty / Research Scholar / Postdoc)
  - Department & Institution Name
  - Email ID & Phone Number
  - Payment Mode & 12-digit UTR / UPI Reference ID
  - Payment Screenshot / Receipt file upload
  - Research domain interest selection & Food preferences
  - Real-time client-side validation
  - Confetti celebration upon registration
  - Instant printable / downloadable registration confirmation ticket with unique Registration ID (e.g. `ANRF-2026-XXXX`).
- **Free Cloud Storage with Vercel Blob**:
  - Leverages `@vercel/blob` free tier (1 GB storage, 10,000 operations/month) to securely store participant records and uploaded receipt screenshots.
  - Automatically falls back to local storage (`data/registrations.json` and `public/uploads/`) for offline development or testing without an active token.
- **Admin Portal (`/admin`)**:
  - Real-time KPI dashboard (Total Registrations, Fee Collected, Faculty vs Scholar count).
  - Searchable and filterable table of all registered participants.
  - One-click **Export to CSV / Excel** (`/api/registrations?format=csv`).
  - View uploaded payment receipts in an image modal.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Vercel Blob (Free Tier)
Create a `.env.local` file:
```env
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token_here
```
> *Note:* If you do not have a token yet, the website runs automatically using local fallback storage (`data/` and `public/uploads/`) with zero configuration.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to view the registrations admin dashboard.

---

## ☁️ Deploying to Vercel (1-Click Free Deployment)

1. Push this repository to GitHub: `https://github.com/Gowtham310106/rdworkshopanrf`
2. Import the repository in [Vercel](https://vercel.com).
3. In your Vercel Project dashboard:
   - Go to the **Storage** tab.
   - Click **Connect Store** -> **Blob**.
   - Click **Create Database** (Select the free Hobby tier).
   - Vercel will automatically connect `BLOB_READ_WRITE_TOKEN` to your deployment.
4. Redeploy or trigger a build. All registration records and receipt screenshots will now be stored in your free Vercel Blob account!

---

## 👥 Organizing Committee & Contact

- **Chief Patron**: Shri M. V. Muthuramalingam, Chairman, Velammal Educational Trust
- **Convener**: Dr. B. Sridevi, Dean – Research & Development, Professor & Head, Department of ECE (`bsd@velammalitech.edu.in`)
- **Organising Coordinator**: Dr. Madhu (`+91 98416 07498`, `madhu@velammalitech.edu.in`)
- **Organising Coordinator**: Dr. J. Nandhagopal (`+91 99946 58433`, `jnandhagopal.eee@velammalitech.edu.in`)
- **College Office**: `044-26591841` | [www.velammalitech.edu.in](https://www.velammalitech.edu.in)
