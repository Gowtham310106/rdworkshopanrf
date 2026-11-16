'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Copy, Check, QrCode, Smartphone, ArrowDown, ShieldCheck, AlertCircle } from 'lucide-react';

export default function PaymentSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  const payment = {
    name: 'S. Karthiga',
    bankingName: 'S KARTHIGA',
    phone: '+91 89252 36141',
    cleanPhone: '8925236141',
    upiId: 'karthigadhanakd7508-1@okicici',
    fee: '500',
    note: 'ANRF Workshop Registration',
  };

  const upiDeepLink = `upi://pay?pa=${payment.upiId}&pn=${encodeURIComponent(
    payment.bankingName
  )}&am=${payment.fee}&cu=INR&tn=${encodeURIComponent(payment.note)}`;

  useEffect(() => {
    if (qrCanvasRef.current) {
      QRCode.toCanvas(
        qrCanvasRef.current,
        upiDeepLink,
        {
          width: 200,
          margin: 1,
          color: {
            dark: '#111827',
            light: '#ffffff',
          },
        },
        (err) => {
          if (err) console.error('QR code error:', err);
        }
      );
    }
  }, [upiDeepLink]);

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="payment" className="py-20 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Registration Fee
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Payment Mode & Details
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Workshop fee of <strong>₹500/-</strong> can be remitted through Google Pay, PhonePe, Paytm, or any UPI application.
          </p>
        </div>

        {/* Payment Card Container */}
        <div className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* QR Code Column */}
            <div className="md:col-span-5 flex flex-col items-center text-center p-6 bg-[#fafafa] border border-neutral-200 rounded-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-orange-600" />
                Scan to Pay ₹500
              </span>

              <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-xs">
                <canvas ref={qrCanvasRef} className="max-w-full h-auto" />
              </div>

              <div className="mt-3">
                <span className="text-xl font-extrabold text-neutral-900">₹500</span>
                <span className="text-[11px] text-neutral-500 block">Registration Fee</span>
              </div>

              <a
                href={upiDeepLink}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2 px-3 rounded-lg text-xs transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Open in Mobile UPI App</span>
              </a>
            </div>

            {/* Account Details Column */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Beneficiary Account Information
                </span>
                <h3 className="text-xl font-bold text-neutral-900 mt-0.5">
                  Online Transfer (GPay / UPI)
                </h3>
              </div>

              {/* Recipient Name */}
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-neutral-500 block">Recipient</span>
                  <span className="font-bold text-neutral-900 text-sm sm:text-base">{payment.name}</span>
                  <span className="text-xs text-neutral-500 block">Banking Name: {payment.bankingName}</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>

              {/* UPI ID */}
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-neutral-500 block">UPI ID</span>
                  <span className="font-mono font-bold text-neutral-900 text-xs sm:text-sm break-all">
                    {payment.upiId}
                  </span>
                </div>
                <button
                  onClick={() => copyValue(payment.upiId, 'upi')}
                  className="ml-3 shrink-0 inline-flex items-center gap-1 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs font-semibold px-2.5 py-1.5 rounded-md transition-colors"
                >
                  {copiedKey === 'upi' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GPay Phone */}
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-3.5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-neutral-500 block">GPay / Mobile Number</span>
                  <span className="font-mono font-bold text-neutral-900 text-sm">
                    {payment.phone}
                  </span>
                </div>
                <button
                  onClick={() => copyValue(payment.phone, 'phone')}
                  className="ml-3 shrink-0 inline-flex items-center gap-1 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 text-xs font-semibold px-2.5 py-1.5 rounded-md transition-colors"
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step info banner */}
              <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-3 text-xs text-orange-950 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Verification Step: </strong>
                  After completing payment, please copy your <strong>12-digit Transaction / UTR Number</strong> and upload the screenshot in the registration form below.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#registration-portal"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-orange-600 underline underline-offset-4"
                >
                  <span>Proceed to enter UTR in the Registration Form</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
