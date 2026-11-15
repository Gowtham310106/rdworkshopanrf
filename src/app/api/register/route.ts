import { NextRequest, NextResponse } from 'next/server';
import { RegistrationData, RegistrationResponse } from '@/types/registration';
import { saveReceiptFile, saveRegistration, isVercelBlobConfigured } from '@/lib/storage';

export async function POST(request: NextRequest): Promise<NextResponse<RegistrationResponse>> {
  try {
    const formData = await request.formData();

    const title = (formData.get('title') as string) || '';
    const name = (formData.get('name') as string)?.trim();
    const designation = (formData.get('designation') as string)?.trim();
    const department = (formData.get('department') as string)?.trim();
    const institution = (formData.get('institution') as string)?.trim();
    const email = (formData.get('email') as string)?.trim()?.toLowerCase();
    const phone = (formData.get('phone') as string)?.trim();
    const paymentMode = (formData.get('paymentMode') as string)?.trim() || 'UPI';
    const transactionId = (formData.get('transactionId') as string)?.trim();
    const foodPreference = (formData.get('foodPreference') as string)?.trim() || 'Veg';
    const researchInterestsRaw = formData.get('researchInterests') as string;
    let researchInterests: string[] = [];
    if (researchInterestsRaw) {
      try {
        researchInterests = JSON.parse(researchInterestsRaw);
      } catch {
        researchInterests = [researchInterestsRaw];
      }
    }

    // Validation
    if (!name || !designation || !department || !institution || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please fill in all mandatory personal and institutional details.',
        },
        { status: 400 }
      );
    }

    if (!transactionId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Please provide the UPI Transaction ID / UTR number for verification.',
        },
        { status: 400 }
      );
    }

    // Generate unique registration ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const regId = `ANRF-2026-${randomSuffix}`;

    // Handle receipt file if uploaded
    let receiptUrl: string | undefined;
    let receiptFileName: string | undefined;
    const receiptFile = formData.get('receipt') as File | null;

    if (receiptFile && receiptFile.size > 0) {
      try {
        const fileResult = await saveReceiptFile(receiptFile, regId);
        receiptUrl = fileResult.url;
        receiptFileName = fileResult.fileName;
      } catch (uploadErr) {
        console.error('Receipt upload error:', uploadErr);
      }
    }

    const newRecord: RegistrationData = {
      id: regId,
      title: title || 'Dr.',
      name,
      designation,
      department,
      institution,
      email,
      phone,
      paymentMode,
      transactionId,
      receiptUrl,
      receiptFileName,
      researchInterests,
      foodPreference,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    await saveRegistration(newRecord);

    return NextResponse.json({
      success: true,
      message: isVercelBlobConfigured()
        ? 'Registration successfully saved to Vercel Blob!'
        : 'Registration recorded successfully!',
      registration: newRecord,
    });
  } catch (error: any) {
    console.error('Registration processing failed:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error while processing registration.',
      },
      { status: 500 }
    );
  }
}
