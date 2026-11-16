import React from 'react';
import Link from 'next/link';
import { Database } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0c] text-neutral-400 text-xs py-14 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wide">
              <span className="w-6 h-6 rounded bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                V
              </span>
              <span>Velammal Institute of Technology</span>
            </div>
            <p className="text-neutral-400 max-w-sm text-xs leading-relaxed">
              ANRF Six-Day Workshop on Interdisciplinary Research for National Priorities: From Problem Identification to Proposal Writing (21 – 26 December 2026).
            </p>
            <p className="text-neutral-500 text-[11px]">
              Organized by the Research & Development Cell, Velammal Institute of Technology, Chennai.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Program Links
            </h4>
            <ul className="space-y-1.5 text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Workshop</a></li>
              <li><a href="#objectives" className="hover:text-white transition-colors">Objectives</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">6-Day Schedule</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Resource Persons</a></li>
              <li><a href="#committee" className="hover:text-white transition-colors">Organizing Committee</a></li>
              <li><a href="#payment" className="hover:text-white transition-colors">Fee & Payment Mode</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Portal & Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#registration-portal"
                  className="text-orange-400 hover:text-orange-300 font-medium"
                >
                  Register Online (₹500) →
                </a>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white"
                >
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Registrations Portal</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.velammalitech.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  www.velammalitech.edu.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © 2026 Velammal Institute of Technology. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Towards Viksit Bharat 2047 & Atmanirbhar Bharat</span>
            <span>·</span>
            <span className="text-orange-400 font-medium">ANRF Sponsored</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
