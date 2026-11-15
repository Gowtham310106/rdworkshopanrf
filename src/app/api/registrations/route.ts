import { NextRequest, NextResponse } from 'next/server';
import { getAllRegistrations } from '@/lib/storage';

export async function GET(request: NextRequest) {
  try {
    const format = request.nextUrl.searchParams.get('format');

    const registrations = await getAllRegistrations();

    if (format === 'csv') {
      const headers = [
        'Registration ID',
        'Date Registered',
        'Title',
        'Full Name',
        'Designation',
        'Department',
        'Institution',
        'Email',
        'Phone',
        'Payment Mode',
        'Transaction ID / UTR',
        'Receipt URL',
        'Food Preference',
        'Research Interests',
      ];

      const csvRows = [headers.join(',')];

      for (const reg of registrations) {
        const clean = (val: string | undefined) =>
          `"${(val || '').replace(/"/g, '""')}"`;

        const row = [
          clean(reg.id),
          clean(new Date(reg.createdAt).toLocaleString()),
          clean(reg.title),
          clean(reg.name),
          clean(reg.designation),
          clean(reg.department),
          clean(reg.institution),
          clean(reg.email),
          clean(reg.phone),
          clean(reg.paymentMode),
          clean(reg.transactionId),
          clean(reg.receiptUrl),
          clean(reg.foodPreference),
          clean((reg.researchInterests || []).join('; ')),
        ];

        csvRows.push(row.join(','));
      }

      const csvContent = csvRows.join('\r\n');

      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="ANRF-Workshop-Registrations-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    return NextResponse.json({
      success: true,
      count: registrations.length,
      registrations,
    });
  } catch (error: any) {
    console.error('Failed to retrieve registrations:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to retrieve registrations.',
      },
      { status: 500 }
    );
  }
}
