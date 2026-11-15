import React from 'react';
import { Landmark, Users2, Cpu, Atom, Sparkles } from 'lucide-react';

export default function ResourcePersons() {
  const organizations = [
    { name: 'ANRF', desc: 'Anusandhan National Research Foundation' },
    { name: 'DRDO', desc: 'Defence Research & Development Organisation' },
    { name: 'MeitY', desc: 'Ministry of Electronics & IT' },
    { name: 'DST', desc: 'Department of Science and Technology' },
    { name: 'DBT', desc: 'Department of Biotechnology' },
    { name: 'CSIR', desc: 'Council of Scientific & Industrial Research' },
    { name: 'NIOT', desc: 'National Institute of Ocean Technology' },
    { name: 'AICTE', desc: 'All India Council for Technical Education' },
    { name: 'IIT Madras', desc: 'Premier Faculty & Research Mentors' },
    { name: 'Industry Leaders', desc: 'Chief Technology Officers & R&D Heads' },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Eminent Speakers & Mentors
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Resource Persons
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Lectures, interactive masterclasses, and hands-on proposal reviews delivered by scientists and leaders from premier national funding bodies, research institutes, and industry.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Agency Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-2xl p-5 text-center transition-all duration-200 group flex flex-col items-center justify-center min-h-[130px]"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 group-hover:bg-blue-600 text-blue-800 group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                <Landmark className="w-5 h-5" />
              </div>
              <h4 className="font-black text-slate-900 text-base group-hover:text-blue-700">
                {org.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-tight">
                {org.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote / Highlight Box */}
        <div className="mt-10 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl text-amber-300">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Direct Engagement with Funding Decision-Makers</h4>
              <p className="text-xs sm:text-sm text-blue-200 mt-1">
                Gain first-hand insights on what evaluation committees look for in high-priority national grant applications.
              </p>
            </div>
          </div>
          <a
            href="#registration-form"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md"
          >
            Register Now
          </a>
        </div>

      </div>
    </section>
  );
}
