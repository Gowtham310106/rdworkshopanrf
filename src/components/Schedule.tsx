'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Sun, Moon, ArrowRight } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const days = [
    {
      day: 1,
      title: 'Day 1: Mon, 21 Dec',
      badge: 'Inaugural & Aero Applications',
      forenoon: {
        session: 'FORENOON · INAUGURAL ADDRESS & KEYNOTE',
        topic: 'Research Priorities of India: Bridging Science, Engineering, Industry and Society',
        summary:
          'Inaugural address highlighting national research strategies, Viksit Bharat 2047, and cross-disciplinary synergy between academia, national laboratories, and industry.',
      },
      afternoon: {
        session: 'AFTERNOON SESSION',
        topic: 'Challenges in Design and Development of Interdisciplinary Systems for Aero Applications',
        summary:
          'Systemic analysis of complex aerospace systems, aerodynamics, multi-physics simulations, advanced materials, and avionics integration.',
      },
    },
    {
      day: 2,
      title: 'Day 2: Tue, 22 Dec',
      badge: 'Innovation & Next-Gen Materials',
      forenoon: {
        session: 'FORENOON SESSION',
        topic: 'Building an Innovation Ecosystem: From Institutional Research to National Impact',
        summary:
          'Frameworks for nurturing R&D cells, patent prosecution, incubation support, translational tech pipelines, and institutional governance.',
      },
      afternoon: {
        session: 'AFTERNOON SESSION',
        topic: 'Computational Modelling, Artificial Intelligence and Experimental Research for Next-Generation Materials',
        summary:
          'Utilizing machine learning models and computational mechanics alongside laboratory validation for functional and structural materials.',
      },
    },
    {
      day: 3,
      title: 'Day 3: Wed, 23 Dec',
      badge: 'Deep Tech & Sustainability',
      forenoon: {
        session: 'FORENOON SESSION',
        topic: 'Emerging Research Opportunities in AI, Semiconductors, Quantum Technology, Robotics and Advanced Materials',
        summary:
          'Exploration of India Semiconductor Mission, National Quantum Mission, robotics automation, edge computing, and allied frontiers.',
      },
      afternoon: {
        session: 'AFTERNOON SESSION',
        topic: 'Research for Sustainable Development: Clean Energy, Climate Resilience, Water Security and Environmental Protection',
        summary:
          'Multidisciplinary approaches to green hydrogen, carbon capture, water purification systems, and climate vulnerability modeling.',
      },
    },
    {
      day: 4,
      title: 'Day 4: Thu, 24 Dec',
      badge: 'National Missions & Collaboration',
      forenoon: {
        session: 'FORENOON SESSION',
        topic: 'Interdisciplinary Research for National Missions: Integrating Science, Engineering, Technology and Social Sciences',
        summary:
          'Synthesizing STEM technologies with human behavior, regulatory ethics, societal adoption, and national public health/energy missions.',
      },
      afternoon: {
        session: 'AFTERNOON SESSION',
        topic: 'Building Academia–Industry–National Laboratory Collaborations for Mission-Oriented Research and Innovation',
        summary:
          'Tripartite collaboration models with DRDO, CSIR, DST, MeitY, and corporate R&D entities for sponsored, mission-mode initiatives.',
      },
    },
    {
      day: 5,
      title: 'Day 5: Fri, 25 Dec',
      badge: 'Healthcare & Commercialization',
      forenoon: {
        session: 'FORENOON SESSION',
        topic: 'Interdisciplinary Research for Healthcare, Biomedical Innovation and Affordable Medical Technologies',
        summary:
          'Biomedical devices, point-of-care diagnostics, microfluidics, wearable biosensors, and translational affordable health tech.',
      },
      afternoon: {
        session: 'AFTERNOON SESSION',
        topic: 'From Laboratory to Market: Technology Readiness Levels, Prototype Development, Patents and Commercialization',
        summary:
          'Navigating TRL 1 through 9, proof-of-concept validation, prototype testing, intellectual property protection, and commercial spin-offs.',
      },
    },
    {
      day: 6,
      title: 'Day 6: Sat, 26 Dec',
      badge: 'Proposal Drafting & Valedictory',
      forenoon: {
        session: 'FULL DAY · HANDS-ON SESSION (PART 1)',
        topic: 'Collaborative Research Proposal Writing through Interdisciplinary Team Formation',
        summary:
          'Participants form cross-departmental syndicates to write a complete proposal: literature synthesis, methodology, milestone plan, and budget.',
      },
      afternoon: {
        session: 'FULL DAY · HANDS-ON SESSION (PART 2) & VALEDICTORY',
        topic: 'Proposal Pitch, Expert Review & Valedictory Ceremony',
        summary:
          'Pitch presentations before a panel of expert reviewers from national bodies, feedback critique, awards, and valedictory certificates.',
      },
    },
  ];

  const current = days.find((d) => d.day === activeDay) || days[0];

  return (
    <section id="schedule" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Program Agenda
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Six-Day Programme Schedule
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Forenoon & Afternoon sessions spanning national mission priorities, deep-tech research, and hands-on proposal drafting.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-neutral-200">
          {days.map((item) => {
            const isSelected = item.day === activeDay;
            return (
              <button
                key={item.day}
                onClick={() => setActiveDay(item.day)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Selected Day Agenda Box */}
        <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-6 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {current.badge}
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                {current.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 bg-white border border-neutral-200 px-3 py-1.5 rounded-md">
              <Calendar className="w-3.5 h-3.5 text-neutral-700" />
              <span>Seminar Hall 1 · Velammal IT</span>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {/* Forenoon Session */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="shrink-0 w-36">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-md">
                  <Sun className="w-3.5 h-3.5" />
                  Forenoon
                </span>
                <span className="block text-[11px] text-neutral-400 mt-1">Morning Session</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {current.forenoon.session}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">
                  {current.forenoon.topic}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {current.forenoon.summary}
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-200"></div>

            {/* Afternoon Session */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
              <div className="shrink-0 w-36">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-1 rounded-md">
                  <Moon className="w-3.5 h-3.5" />
                  Afternoon
                </span>
                <span className="block text-[11px] text-neutral-400 mt-1">Post-Lunch Session</span>
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  {current.afternoon.session}
                </span>
                <h4 className="text-lg font-bold text-neutral-900 mt-1">
                  {current.afternoon.topic}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  {current.afternoon.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Schedule Footer */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-medium">
            <button
              onClick={() => setActiveDay((p) => Math.max(1, p - 1))}
              disabled={activeDay === 1}
              className="hover:text-neutral-900 font-semibold disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Day
            </button>
            <span className="text-neutral-400">Day {activeDay} of 6</span>
            <button
              onClick={() => setActiveDay((p) => Math.min(6, p + 1))}
              disabled={activeDay === 6}
              className="hover:text-neutral-900 font-semibold disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Day →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
