import React from 'react';
import { FileText, Download, ExternalLink, Check, Sparkles } from 'lucide-react';

export default function BrochureSection() {
  return (
    <section id="brochure" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-200/60 px-3 py-1 rounded-full">
            Official Document
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshop Brochure & Circular
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Detailed brochure with background, resource persons, schedule, and committee information.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Brochure Feature Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Icon / Document Badge */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-amber-300" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full mb-2">
                Official PDF
              </span>
              <h4 className="font-bold text-lg text-white">ANRF Workshop Brochure</h4>
              <p className="text-xs text-blue-200 mt-1">Six-Day National Workshop</p>
            </div>

            {/* Content & Links */}
            <div className="md:col-span-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Interdisciplinary Research for National Priorities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Includes all session details, patron messages, resource person credentials, and registration procedures as approved by the ANRF and the Institution R&D Cell.
              </p>

              <div className="space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Workshop Website listed: <strong>https://rdworkshopanrf.netlify.app/</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes complete Forenoon & Afternoon schedule for all 6 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Contact details for Conveners & Faculty Coordinators</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#registration-form"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Register on this Portal</span>
                </a>
                <a
                  href="https://rdworkshopanrf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-slate-200 transition-all"
                >
                  <span>Open Netlify Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
