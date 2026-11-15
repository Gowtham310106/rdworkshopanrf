'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Award, ShieldCheck, ArrowRight, Database } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Committee', href: '#committee' },
    { name: 'Payment', href: '#payment' },
    { name: 'Brochure', href: '#brochure' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification / Accreditation Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-950 text-white text-xs py-1.5 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              ANRF Sponsored
            </span>
            <span className="hidden sm:inline text-blue-200">|</span>
            <span className="hidden sm:inline text-blue-100">
              Approved by AICTE, Affiliated to Anna University, Chennai
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:inline text-amber-300 font-semibold">
              Accredited by NAAC & NBA
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-xs text-blue-200">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              21 – 26 December 2026
            </span>
            <Link
              href="/admin"
              className="flex items-center gap-1 text-blue-200 hover:text-white transition-colors bg-blue-900/60 hover:bg-blue-800 px-2.5 py-0.5 rounded border border-blue-700/50"
            >
              <Database className="w-3 h-3 text-emerald-400" />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Institute Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-900 via-indigo-800 to-blue-700 flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-tight">
                VELAMMAL
              </span>
              <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                Institute of Technology
              </span>
              <span className="text-[10px] text-slate-500 font-medium hidden sm:block">
                Research & Development Cell
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#registration-form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 hover:from-blue-800 hover:to-indigo-800 text-white font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-700/25 hover:shadow-lg hover:shadow-blue-700/35 transition-all text-sm group"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#registration-form"
              className="inline-flex items-center bg-blue-700 text-white font-semibold px-3 py-1.5 rounded-lg text-xs"
            >
              Register
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#registration-form"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-sm shadow-md"
              >
                Register Now (Fee: ₹500)
              </a>
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs text-slate-600 hover:text-blue-700 py-1.5"
              >
                Admin Registrations Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
