'use client';

import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  User,
  Briefcase,
  Building,
  GraduationCap,
  Mail,
  Phone,
  CreditCard,
  Hash,
  Upload,
  CheckCircle,
  AlertCircle,
  FileText,
  Printer,
  Sparkles,
  Download,
  X,
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

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 8 * 1024 * 1024) {
        setErrorMessage('File size exceeds 8MB. Please select a smaller screenshot/receipt.');
        return;
      }
      setReceiptFile(file);
      setErrorMessage(null);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setReceiptPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setReceiptPreview(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
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
      setErrorMessage('Please provide a valid email address.');
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
        throw new Error(result.error || 'Registration failed. Please try again.');
      }

      // Success! Fire confetti
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });

      setConfirmedRegistration(result.registration);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
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
    <section id="registration-form" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Online Registration Portal
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshop Registration Form
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Please fill in your participant details and payment verification number.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Confirmation Modal / Card */}
        {confirmedRegistration && (
          <div className="mb-12 bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-500 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600"></div>

            <div className="text-center pb-6 border-b border-slate-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-10 h-10" />
              </div>
              <span className="text-xs font-extrabold tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                Registration Confirmed
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black text-slate-900">
                Welcome to ANRF Six-Day Workshop 2026!
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Velammal Institute of Technology · 21 to 26 December 2026
              </p>
              <div className="mt-4 inline-block bg-slate-900 text-amber-300 font-mono font-bold text-lg px-5 py-2 rounded-xl shadow-inner">
                Reg ID: {confirmedRegistration.id}
              </div>
            </div>

            {/* Registration Details Summary */}
            <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-b border-slate-200">
              <div>
                <span className="text-xs text-slate-500 block">Participant Name</span>
                <span className="font-bold text-slate-900">
                  {confirmedRegistration.title} {confirmedRegistration.name}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Designation</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.designation}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Department</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.department}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Institution</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.institution}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Email ID</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.email}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Phone Number</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.phone}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Payment Mode</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.paymentMode}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Transaction / UTR ID</span>
                <span className="font-mono font-bold text-blue-700">{confirmedRegistration.transactionId}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Food Preference</span>
                <span className="font-semibold text-slate-800">{confirmedRegistration.foodPreference}</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Venue & Date</span>
                <span className="font-semibold text-slate-800">Seminar Hall 1 · 21–26 Dec 2026</span>
              </div>
            </div>

            {/* Actions for Confirmed Participant */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print / Save Registration Slip</span>
              </button>

              <button
                onClick={handleResetForm}
                className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline"
              >
                Register Another Participant
              </button>
            </div>
          </div>
        )}

        {/* Main Form Container */}
        {!confirmedRegistration && (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl"
          >
            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-3 text-rose-800 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Please check your inputs:</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* SECTION 1: Personal Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Personal & Academic Details</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                {/* Title */}
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Title *
                  </label>
                  <select
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar S"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    />
                  </div>
                </div>

                {/* Designation */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Designation *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
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
                </div>

                {/* Department */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Electronics & Communication Engineering"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                  />
                </div>

                {/* Institution Name */}
                <div className="sm:col-span-12">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Institution / University / College Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Velammal Institute of Technology, Chennai"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email ID *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="e.g. ramesh.ece@univ.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: Payment Mode & Verification */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Fee Payment Verification</h3>
                  <p className="text-xs text-slate-500">
                    Registration Fee: <strong>Rs. 500/-</strong> (Paid to: S. Karthiga, +91 89252 36141)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                {/* Payment Mode */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Payment Mode Used *
                  </label>
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.paymentMode}
                      onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    >
                      <option value="Google Pay (GPay)">Google Pay (GPay)</option>
                      <option value="PhonePe">PhonePe</option>
                      <option value="Paytm UPI">Paytm UPI</option>
                      <option value="BHIM UPI">BHIM UPI</option>
                      <option value="Cred / Other UPI">Cred / Other UPI</option>
                      <option value="Net Banking / IMPS / NEFT">Net Banking / IMPS / NEFT</option>
                    </select>
                  </div>
                </div>

                {/* Transaction ID / UTR */}
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Transaction ID / UPI Ref / UTR No. *
                  </label>
                  <div className="relative">
                    <Hash className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. 432156789012"
                      value={formData.transactionId}
                      onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono text-slate-800 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-hidden"
                    />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Find this 12-digit number in your UPI app receipt.
                  </span>
                </div>

                {/* Upload Screenshot */}
                <div className="sm:col-span-12">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Upload Payment Screenshot / Receipt (Stored in Cloud / Vercel Blob)
                  </label>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/50 rounded-2xl p-6 text-center transition-all"
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
                        <CheckCircle className="w-8 h-8 text-emerald-600 mb-2" />
                        <span className="font-bold text-slate-800 text-sm">{receiptFile.name}</span>
                        <span className="text-xs text-slate-500">
                          {(receiptFile.size / 1024).toFixed(1)} KB · Click to change file
                        </span>
                        {receiptPreview && (
                          <div className="mt-3 relative w-32 h-20 border rounded-lg overflow-hidden shadow-xs">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={receiptPreview}
                              alt="Receipt Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="w-8 h-8 text-blue-600 mb-2" />
                        <span className="font-bold text-slate-700 text-sm">
                          Click to select payment receipt screenshot or PDF
                        </span>
                        <span className="text-xs text-slate-400 mt-1">
                          PNG, JPG, JPEG, or PDF up to 8MB
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: Preferences & Domains */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-lg">Workshop Focus & Preferences</h3>
              </div>

              {/* Research Areas */}
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Primary Research Interests (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {researchDomainOptions.map((opt) => {
                    const isSelected = selectedInterests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInterestToggle(opt)}
                        className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Food Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Food Preference *
                </label>
                <div className="flex gap-4">
                  {['Veg', 'Non-Veg'].map((pref) => (
                    <label
                      key={pref}
                      className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer font-bold text-sm ${
                        formData.foodPreference === pref
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="foodPreference"
                        value={pref}
                        checked={formData.foodPreference === pref}
                        onChange={(e) =>
                          setFormData({ ...formData, foodPreference: e.target.value })
                        }
                        className="sr-only"
                      />
                      <span>{pref === 'Veg' ? '🥗 Vegetarian' : '🍗 Non-Vegetarian'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/35 transition-all text-base flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving Registration to Vercel Storage...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Workshop Registration</span>
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">
                A confirmation slip with your unique Registration ID will be generated upon submission.
              </p>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
