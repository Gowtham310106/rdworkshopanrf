'use client';

import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  User,
  Briefcase,
  Building,
  Mail,
  Phone,
  CreditCard,
  Hash,
  Upload,
  CheckCircle2,
  AlertCircle,
  Printer,
  Sparkles,
} from 'lucide-react';
import { RegistrationData } from '@/types/registration';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    title: 'Dr.',
    name: '',
    designation: 'Assistant Professor',
    department: '',
    institution: '',
    email: '',
    phone: '',
    paymentMode: 'Google Pay (GPay)',
    transactionId: '',
    foodPreference: 'Veg',
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Artificial Intelligence & Data Science',
  ]);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedRegistration, setConfirmedRegistration] = useState<RegistrationData | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const researchDomainOptions = [
    'Artificial Intelligence & Data Science',
    'Semiconductors & Microelectronics',
    'Quantum Technology',
    'Robotics & Automation',
    'Advanced Materials & Nanotechnology',
    'Clean Energy, Hydrogen & Batteries',
    'Healthcare & Biomedical Devices',
    'Aerospace & Interdisciplinary Systems',
  ];

  const toggleInterest = (opt: string) => {
    if (selectedInterests.includes(opt)) {
      setSelectedInterests(selectedInterests.filter((x) => x !== opt));
    } else {
      setSelectedInterests([...selectedInterests, opt]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 8 * 1024 * 1024) {
        setErrorMessage('File size exceeds 8MB limit.');
        return;
      }
      setReceiptFile(file);
      setErrorMessage(null);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setReceiptPreview(reader.result as string);
        reader.readAsDataURL(file);
      } else {
        setReceiptPreview(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.department.trim()) {
      setErrorMessage('Please specify your department.');
      return;
    }
    if (!formData.institution.trim()) {
      setErrorMessage('Please enter your institution name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!formData.transactionId.trim()) {
      setErrorMessage('Please provide the UPI Transaction ID / UTR number for fee verification.');
      return;
    }

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append('title', formData.title);
      body.append('name', formData.name);
      body.append('designation', formData.designation);
      body.append('department', formData.department);
      body.append('institution', formData.institution);
      body.append('email', formData.email);
      body.append('phone', formData.phone);
      body.append('paymentMode', formData.paymentMode);
      body.append('transactionId', formData.transactionId);
      body.append('foodPreference', formData.foodPreference);
      body.append('researchInterests', JSON.stringify(selectedInterests));

      if (receiptFile) {
        body.append('receipt', receiptFile);
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        body,
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to submit registration. Please try again.');
      }

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setConfirmedRegistration(result.registration);
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: 'Dr.',
      name: '',
      designation: 'Assistant Professor',
      department: '',
      institution: '',
      email: '',
      phone: '',
      paymentMode: 'Google Pay (GPay)',
      transactionId: '',
      foodPreference: 'Veg',
    });
    setReceiptFile(null);
    setReceiptPreview(null);
    setConfirmedRegistration(null);
    setErrorMessage(null);
  };

  return (
    <section id="registration-portal" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Online Registration
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Participant Registration Portal
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Register for the ANRF Six-Day Workshop (21 – 26 December 2026).
          </p>
        </div>

        {/* Confirmed Registration Ticket */}
        {confirmedRegistration && (
          <div className="bg-[#fafafa] border border-neutral-300 rounded-2xl p-6 sm:p-10 shadow-sm mb-12">
            <div className="pb-6 border-b border-neutral-200 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                Registration Confirmed
              </span>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                ANRF Six-Day Workshop 2026
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Velammal Institute of Technology, Chennai · Seminar Hall 1
              </p>
              <div className="mt-4 inline-block bg-neutral-900 text-orange-400 font-mono font-bold text-base px-4 py-1.5 rounded-lg">
                Registration ID: {confirmedRegistration.id}
              </div>
            </div>

            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm border-b border-neutral-200">
              <div>
                <span className="text-neutral-500 block text-xs">Participant Name</span>
                <span className="font-bold text-neutral-900">
                  {confirmedRegistration.title} {confirmedRegistration.name}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Designation</span>
                <span className="font-semibold text-neutral-800">{confirmedRegistration.designation}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Department</span>
                <span className="font-semibold text-neutral-800">{confirmedRegistration.department}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Institution</span>
                <span className="font-semibold text-neutral-800">{confirmedRegistration.institution}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Email ID</span>
                <span className="font-medium text-neutral-800">{confirmedRegistration.email}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Phone</span>
                <span className="font-medium text-neutral-800">{confirmedRegistration.phone}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Payment Mode</span>
                <span className="font-medium text-neutral-800">{confirmedRegistration.paymentMode}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-xs">Transaction ID / UTR</span>
                <span className="font-mono font-bold text-neutral-900">{confirmedRegistration.transactionId}</span>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-4 py-2 rounded-lg text-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Registration Slip</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline"
              >
                Register Another Participant
              </button>
            </div>
          </div>
        )}

        {/* Main Form */}
        {!confirmedRegistration && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#fafafa] border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-xs"
          >
            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-rose-800 text-xs sm:text-sm">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Section 1: Academic & Contact */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                1. Participant Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Title */}
                <div className="sm:col-span-3">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Title *
                  </label>
                  <select
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  >
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </div>

                {/* Name */}
                <div className="sm:col-span-9">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                {/* Designation */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Designation *
                  </label>
                  <select
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  >
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Associate Professor">Associate Professor</option>
                    <option value="Professor">Professor</option>
                    <option value="Research Scholar (Ph.D.)">Research Scholar (Ph.D.)</option>
                    <option value="Postdoctoral Fellow">Postdoctoral Fellow</option>
                    <option value="Dean / Head of Department">Dean / Head of Department</option>
                    <option value="Scientist / Industry Researcher">Scientist / Industry Researcher</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Department */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ECE / CSE / Mechanical / Physics"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                {/* Institution Name */}
                <div className="sm:col-span-12">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Institution / University / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Velammal Institute of Technology, Chennai"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@institution.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                {/* Phone */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Fee Payment */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                2. Fee Payment Verification (₹500)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Payment Mode */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Payment Mode Used *
                  </label>
                  <select
                    value={formData.paymentMode}
                    onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  >
                    <option value="Google Pay (GPay)">Google Pay (GPay)</option>
                    <option value="PhonePe">PhonePe</option>
                    <option value="Paytm UPI">Paytm UPI</option>
                    <option value="BHIM UPI">BHIM UPI</option>
                    <option value="Net Banking / NEFT">Net Banking / NEFT</option>
                    <option value="Other UPI">Other UPI</option>
                  </select>
                </div>

                {/* Transaction ID */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Transaction ID / UTR / Reference No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="12-digit UPI reference number"
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-mono text-neutral-800 focus:outline-hidden focus:border-neutral-900"
                  />
                </div>

                {/* File Upload */}
                <div className="sm:col-span-12">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Payment Screenshot / Receipt (Stored in Cloud / Vercel Blob)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-neutral-300 hover:border-neutral-500 bg-white rounded-xl p-5 text-center transition-colors"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*,application/pdf"
                      className="hidden"
                    />

                    {receiptFile ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-1" />
                        <span className="font-semibold text-neutral-800 text-xs sm:text-sm">{receiptFile.name}</span>
                        <span className="text-[11px] text-neutral-400">
                          {(receiptFile.size / 1024).toFixed(1)} KB · Click to change file
                        </span>
                        {receiptPreview && (
                          <div className="mt-2 w-28 h-16 border rounded overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={receiptPreview} alt="Receipt" className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-6 h-6 text-neutral-500 mb-1" />
                        <span className="font-semibold text-neutral-700 text-xs sm:text-sm">
                          Click to select receipt screenshot or PDF
                        </span>
                        <span className="text-[11px] text-neutral-400 mt-0.5">
                          Max size: 8MB
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Focus & Food Preference */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-neutral-900 mb-4 pb-2 border-b border-neutral-200">
                3. Focus Area & Preferences
              </h3>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Research Domain Interests
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {researchDomainOptions.map((opt) => {
                    const isSelected = selectedInterests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`text-left px-3 py-2 rounded-lg text-xs font-medium border transition-colors flex items-center justify-between ${
                          isSelected
                            ? 'bg-neutral-900 text-white border-neutral-900'
                            : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <span className="text-orange-400">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-2">
                  Food Preference *
                </label>
                <div className="flex gap-4">
                  {['Veg', 'Non-Veg'].map((pref) => (
                    <label
                      key={pref}
                      className={`flex-1 flex items-center justify-center p-2.5 rounded-lg border cursor-pointer font-medium text-xs sm:text-sm ${
                        formData.foodPreference === pref
                          ? 'bg-neutral-900 text-white border-neutral-900'
                          : 'bg-white text-neutral-700 border-neutral-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="foodPreference"
                        value={pref}
                        checked={formData.foodPreference === pref}
                        onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value })}
                        className="sr-only"
                      />
                      <span>{pref === 'Veg' ? '🥗 Vegetarian' : '🍗 Non-Vegetarian'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Recording Registration...</span>
                ) : (
                  <span>Complete Workshop Registration (₹500)</span>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
