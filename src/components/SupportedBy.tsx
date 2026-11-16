import React from 'react';

export default function SupportedBy() {
  const partners = [
    { name: 'ANRF', label: 'Anusandhan National Research Foundation' },
    { name: 'DST', label: 'Dept. of Science & Technology' },
    { name: 'DRDO', label: 'Defence R&D Organisation' },
    { name: 'MeitY', label: 'Ministry of Electronics & IT' },
    { name: 'CSIR', label: 'Council of Scientific & Industrial Research' },
    { name: 'IIT Madras', label: 'Premier Academic Mentorship' },
    { name: 'AICTE', label: 'Approved Institution' },
    { name: 'Anna University', label: 'Affiliating University' },
  ];

  return (
    <section className="bg-[#121216] border-b border-neutral-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          Supported & Addressed by Scientists and Leaders from
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-3 text-center hover:border-neutral-700 transition-colors"
            >
              <span className="block font-bold text-white text-sm tracking-wide">
                {partner.name}
              </span>
              <span className="text-[10px] text-neutral-400 block truncate mt-0.5" title={partner.label}>
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
