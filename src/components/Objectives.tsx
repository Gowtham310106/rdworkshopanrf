import React from 'react';
import { Search, Network, Compass, BrainCircuit, FileCheck, Award } from 'lucide-react';

export default function Objectives() {
  const objectives = [
    {
      num: '01',
      title: 'Identify Research Gaps',
      description:
        'Enable faculty members and researchers to identify critical research gaps and formulate problem statements addressing emerging global challenges and national priorities.',
      tag: 'Problem Formulation',
    },
    {
      num: '02',
      title: 'Promote Interdisciplinary Research',
      description:
        'Encourage collaboration across science, engineering, technology, healthcare and other disciplines to develop innovative solutions to complex societal and technological challenges.',
      tag: 'Cross-Disciplinary Synergies',
    },
    {
      num: '03',
      title: 'Align Research with National Priorities',
      description:
        'Promote research initiatives aligned with Viksit Bharat 2047, Atmanirbhar Bharat, and India’s science, technology, and innovation missions.',
      tag: 'Viksit Bharat 2047',
    },
    {
      num: '04',
      title: 'Leverage AI in Research',
      description:
        'Demonstrate the responsible use of AI tools for literature review, research gap identification, methodology development, and research proposal preparation.',
      tag: 'Responsible AI Tools',
    },
    {
      num: '05',
      title: 'Facilitate Funding Proposals',
      description:
        'Equip participants with practical skills to prepare scientifically sound, innovative, and competitive interdisciplinary research proposals aligned with the priorities of funding agencies.',
      tag: 'Grant Readiness',
    },
  ];

  return (
    <section id="objectives" className="py-20 bg-[#fafafa] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Program Goals
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Core Objectives
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Five strategic pillars designed to empower researchers to articulate and win competitive grants.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj) => (
            <div
              key={obj.num}
              className="bg-white border border-neutral-200 hover:border-neutral-400 rounded-xl p-6 sm:p-7 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md font-mono">
                    {obj.num}
                  </span>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                    {obj.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900">
                  {obj.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>ANRF Curriculum Focus</span>
                <span className="text-orange-500 font-medium">✓ Hands-on</span>
              </div>
            </div>
          ))}

          {/* Hands-on Output Card */}
          <div className="bg-[#121216] text-white rounded-xl p-6 sm:p-7 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-orange-400 bg-neutral-800 px-2.5 py-0.5 rounded-md font-mono">
                  FINAL
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Team Drafting
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">
                Syndicate Proposal Drafting
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                By Day 6, participants form multi-departmental teams to draft a live research grant proposal ready for submission to ANRF, DST, DRDO, or MeitY.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-orange-400 font-semibold">
              Pitch, Expert Peer Review & Valedictory
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
