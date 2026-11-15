import React from 'react';
import { Search, Network, Compass, BrainCircuit, FileCheck } from 'lucide-react';

export default function Objectives() {
  const objectives = [
    {
      icon: Search,
      title: 'Identify Research Gaps',
      description:
        'Enable faculty members and researchers to identify critical research gaps and formulate problem statements addressing emerging global challenges and national priorities.',
      tag: 'Problem Formulation',
      color: 'blue',
    },
    {
      icon: Network,
      title: 'Promote Interdisciplinary Research',
      description:
        'Encourage collaboration across science, engineering, technology, healthcare and other disciplines to develop innovative solutions to complex societal and technological challenges.',
      tag: 'Cross-Disciplinary',
      color: 'indigo',
    },
    {
      icon: Compass,
      title: 'Align with National Priorities',
      description:
        'Promote research initiatives tightly aligned with Viksit Bharat 2047, Atmanirbhar Bharat, and India’s grand science, technology, and innovation missions.',
      tag: 'National Missions',
      color: 'emerald',
    },
    {
      icon: BrainCircuit,
      title: 'Leverage AI in Research',
      description:
        'Demonstrate the responsible use of AI tools for rapid literature review, research gap identification, methodology development, and high-impact proposal preparation.',
      tag: 'AI-Powered Research',
      color: 'purple',
    },
    {
      icon: FileCheck,
      title: 'Facilitate Funding Proposals',
      description:
        'Equip participants with practical skills to prepare scientifically sound, innovative, and highly competitive interdisciplinary proposals tailored for national funding agencies.',
      tag: 'Grant Writing',
      color: 'amber',
    },
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Workshop Goals
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Objectives
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Designed to transform how academic researchers formulate, articulate, and execute high-priority national research.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full group-hover:border-blue-300">
                      Objective 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {obj.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-blue-600">
                    Focus: {obj.tag}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Bonus Highlight Card: Hands-on Output */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-7 border border-blue-800 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-blue-800/80 border border-blue-700 px-2.5 py-1 rounded-full inline-block mb-4">
                Hands-on Deliverable
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Team Proposal Draft
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                By Day 6, every participant joins a multidisciplinary syndicate to co-author and refine an active research grant concept ready for submission to ANRF, DST, DRDO, or MeitY.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-800/80">
              <span className="text-xs font-bold text-amber-400">
                ✓ Hands-on Mentoring & Valedictory
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
