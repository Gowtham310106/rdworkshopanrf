import React from 'react';
import { Landmark, ArrowUpRight } from 'lucide-react';

export default function ResourcePersons() {
  const bodies = [
    {
      code: 'ANRF',
      title: 'Anusandhan National Research Foundation',
      desc: 'National R&D grant strategy, peer-review expectations, and funding frameworks under India’s apex research foundation.',
    },
    {
      code: 'DRDO',
      title: 'Defence Research & Development Organisation',
      desc: 'Mission-mode defense technologies, strategic funding mechanisms, and academia-defense translational programs.',
    },
    {
      code: 'MeitY',
      title: 'Ministry of Electronics & Information Technology',
      desc: 'Semiconductor initiatives, AI mission frameworks, quantum technologies, and electronic hardware innovation.',
    },
    {
      code: 'DST & DBT',
      title: 'Department of Science and Tech / Biotechnology',
      desc: 'Core research grants (CRG), interdisciplinary cyber-physical systems, and bio-engineering project proposals.',
    },
    {
      code: 'CSIR & NIOT',
      title: 'Council of Scientific & Industrial Research / NIOT',
      desc: 'Applied industrial sciences, ocean engineering, environmental monitoring, and sustainable deep-sea technology.',
    },
    {
      code: 'IIT Madras',
      title: 'Indian Institute of Technology Madras',
      desc: 'Distinguished faculty delivering technical masterclasses on advanced materials, robotics, AI, and proposal drafting.',
    },
    {
      code: 'AICTE',
      title: 'All India Council for Technical Education',
      desc: 'Institutional innovation councils, research promotion schemes (RPS), and modern academic infrastructure funding.',
    },
    {
      code: 'Industry Leaders',
      title: 'Chief Technology Officers & Corporate R&D Heads',
      desc: 'Translating TRL 1–4 laboratory findings into TRL 7–9 commercial products, IP strategies, and venture incubation.',
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Distinguished Mentors
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Resource Persons & Participating Agencies
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Scientists from ANRF, DRDO, MeitY, DST, DBT, CSIR, NIOT and AICTE, faculty from IIT Madras, and industry experts shall deliver lectures and hands-on sessions.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {bodies.map((b) => (
            <div
              key={b.code}
              className="bg-white border border-neutral-200 hover:border-neutral-400 rounded-xl p-5 sm:p-6 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-extrabold text-neutral-900 tracking-tight">
                    {b.code}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                </div>

                <h4 className="text-xs font-semibold text-neutral-800 line-clamp-1 mb-2">
                  {b.title}
                </h4>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 text-[11px] font-medium text-orange-600 flex items-center justify-between">
                <span>Lecture & Mentoring</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
