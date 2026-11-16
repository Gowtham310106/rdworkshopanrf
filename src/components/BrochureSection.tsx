import React from 'react';
import { FileText, ArrowUpRight, Check, Globe } from 'lucide-react';

export default function BrochureSection() {
  const officialWebsiteUrl = 'https://rdworkshopanrf.vercel.app';

  return (
    <section id="brochure" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Brochure & Portal
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Official Workshop Circular
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            All session details, patron messages, resource person credentials, and registration procedures as approved by ANRF and the Institution R&D Cell.
          </p>
        </div>

        {/* Brochure Details Box */}
        <div className="max-w-4xl mx-auto bg-[#fafafa] border border-neutral-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <h3 className="text-lg font-bold text-neutral-900">
                Interdisciplinary Research for National Priorities
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Official circular published for circulation among universities, engineering colleges, and research institutes across India.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Includes complete Forenoon & Afternoon schedule for all 6 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Official Workshop Website: <strong className="text-neutral-900 font-mono">{officialWebsiteUrl}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                  <span>Direct registration & instant confirmation slip generation</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2.5">
              <a
                href="#registration-portal"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-colors"
              >
                <span>Register on this Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-medium py-2 px-4 rounded-lg text-xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span>Visit {officialWebsiteUrl}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
