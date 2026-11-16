'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Database } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Resource Persons', href: '#speakers' },
    { label: 'Committee', href: '#committee' },
    { label: 'Payment', href: '#payment' },
    { label: 'Register', href: '#registration-portal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d10]/95 backdrop-blur-md border-b border-neutral-800">
      {/* Top micro announcement bar */}
      <div className="bg-[#18181b] border-b border-neutral-800/80 text-[11px] text-neutral-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="font-semibold text-white">ANRF Six-Day Workshop</span>
            <span className="hidden sm:inline text-neutral-500">|</span>
            <span className="hidden sm:inline text-neutral-400">
              Velammal Institute of Technology, Chennai
            </span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline text-neutral-400">
              Affiliated to Anna University · NAAC & NBA Accredited
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-neutral-400 font-mono text-[11px]">
              21 – 26 Dec 2026
            </span>
            <Link
              href="/admin"
              className="text-neutral-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              <Database className="w-3 h-3 text-emerald-400" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-orange-600 transition-colors">
            VIT
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm sm:text-base tracking-tight leading-snug">
              VELAMMAL INSTITUTE OF TECHNOLOGY
            </span>
            <span className="text-[11px] font-medium text-neutral-400 tracking-wide uppercase">
              Research & Development Cell · ANRF Workshop
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#registration-portal"
            className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all shadow-sm"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121214] border-b border-neutral-800 px-5 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="#registration-portal"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg text-sm"
            >
              Register (Fee: ₹500)
            </a>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs text-neutral-400 hover:text-white py-1.5"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
