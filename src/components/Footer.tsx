import React from 'react';
import Link from 'next/link';
import { Database, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white text-lg">
                V
              </div>
              <span>Velammal Institute of Technology</span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              ANRF Six-Day Workshop on Interdisciplinary Research for National Priorities: From Problem Identification to Proposal Writing (21 – 26 December 2026).
            </p>
            <p className="text-slate-500 text-[11px]">
              Organized by the Research & Development Cell, Velammal Institute of Technology, Chennai.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-white transition-colors">About Workshop</a></li>
              <li><a href="#objectives" className="hover:text-white transition-colors">Key Objectives</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">6-Day Schedule</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Resource Persons</a></li>
              <li><a href="#committee" className="hover:text-white transition-colors">Organizing Committee</a></li>
              <li><a href="#payment" className="hover:text-white transition-colors">Fee & Payment Mode</a></li>
              <li><a href="#registration-form" className="hover:text-white transition-colors">Registration Form</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm mb-3">Administration & Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-blue-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
                >
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Admin Registrations Portal</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://rdworkshopanrf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  Official Brochure Web Link
                </a>
              </li>
              <li>
                <a
                  href="https://www.velammalitech.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white"
                >
                  www.velammalitech.edu.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Velammal Institute of Technology, Chennai. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Towards Viksit Bharat 2047 & Atmanirbhar Bharat</span>
            <span>•</span>
            <span className="text-emerald-400">ANRF Sponsored</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
