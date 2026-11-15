'use client';

import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { Copy, Check, Smartphone, QrCode, AlertCircle, ArrowDown, ExternalLink, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function PaymentSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const paymentDetails = {
    name: 'S. Karthiga',
    bankingName: 'S KARTHIGA',
    phone: '+91 89252 36141',
    cleanPhone: '8925236141',
    upiId: 'karthigadhanakd7508-1@okicici',
    amount: '500',
    note: 'ANRF Workshop Registration',
  };

  const upiUrl = `upi://pay?pa=${paymentDetails.upiId}&pn=${encodeURIComponent(
    paymentDetails.bankingName
  )}&am=${paymentDetails.amount}&cu=INR&tn=${encodeURIComponent(paymentDetails.note)}`;

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        upiUrl,
        {
          width: 220,
          margin: 2,
          color: {
            dark: '#0f172a',
            light: '#ffffff',
          },
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );
    }
  }, [upiUrl]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Fee & Online Payment
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Registration Fee & Payment Mode
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Pay the nominal registration fee of <strong>₹500/-</strong> via Google Pay, PhonePe, Paytm, or any UPI app.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        {/* Payment Main Container */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-blue-900 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Dynamic QR Code Box */}
            <div className="lg:col-span-5 flex flex-col items-center text-center bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 mb-3 text-xs font-extrabold uppercase tracking-wider text-blue-900">
                <QrCode className="w-4 h-4 text-emerald-600" />
                <span>Scan with Any UPI App</span>
              </div>

              {/* Dynamic QR Canvas */}
              <div className="p-3 bg-white rounded-xl border-2 border-slate-200 shadow-inner">
                <canvas ref={canvasRef} className="rounded-lg max-w-full h-auto" />
              </div>

              <div className="mt-3">
                <span className="text-2xl font-black text-slate-900">₹500</span>
                <span className="text-xs text-slate-500 font-medium block">Registration Fee</span>
              </div>

              {/* Mobile Direct Pay Button */}
              <a
                href={upiUrl}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all"
              >
                <Smartphone className="w-4 h-4" />
                <span>Pay via Installed UPI App</span>
              </a>
              <span className="text-[10px] text-slate-400 mt-1">
                (Google Pay, PhonePe, Paytm, BHIM)
              </span>
            </div>

            {/* Right: Account & UPI Details */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 inline-block mb-2">
                  Official Account Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Payment Mode (GPay / UPI)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Please verify recipient details before sending payment.
                </p>
              </div>

              <div className="space-y-3">
                {/* Name Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-medium block">Recipient Name</span>
                    <span className="font-bold text-white text-base">{paymentDetails.name}</span>
                    <span className="text-xs text-blue-200 block">Banking Name: {paymentDetails.bankingName}</span>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                {/* UPI ID with Copy Button */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-medium block">UPI ID</span>
                    <span className="font-mono font-bold text-amber-300 text-sm sm:text-base break-all">
                      {paymentDetails.upiId}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(paymentDetails.upiId, 'upi')}
                    className="ml-3 shrink-0 flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all"
                  >
                    {copiedField === 'upi' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy UPI</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone / GPay No with Copy Button */}
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-medium block">GPay / Phone Number</span>
                    <span className="font-mono font-bold text-white text-base">
                      {paymentDetails.phone}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(paymentDetails.phone, 'phone')}
                    className="ml-3 shrink-0 flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy No.</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 3 Step Instruction Pill */}
              <div className="bg-blue-900/40 border border-blue-700/50 rounded-xl p-3.5 text-xs text-blue-100 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Next Step: </strong>
                  After transferring ₹500, please note down the <strong>12-digit UPI Reference / UTR Number</strong> and take a screenshot of the successful payment. Enter them in the registration form below to confirm your seat!
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#registration-form"
                  className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-bold text-sm underline-offset-4 hover:underline"
                >
                  <span>Already paid? Fill the Registration Form</span>
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
