'use client';

import React, { useState } from 'react';
import { Calendar, Sun, Moon, Sparkles, CheckCircle2, Award } from 'lucide-react';

interface DaySchedule {
  dayNumber: number;
  dateStr: string;
  dayName: string;
  badge: string;
  forenoon: {
    type: string;
    title: string;
    description: string;
  };
  afternoon: {
    type: string;
    title: string;
    description: string;
  };
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(1);

  const scheduleData: DaySchedule[] = [
    {
      dayNumber: 1,
      dateStr: '21 December 2026',
      dayName: 'Monday',
      badge: 'Inauguration & Keynote',
      forenoon: {
        type: 'FORENOON · INAUGURAL ADDRESS & KEYNOTE',
        title: 'Research Priorities of India: Bridging Science, Engineering, Industry and Society',
        description:
          'Official workshop inauguration, keynote perspective on India’s national priorities under Viksit Bharat 2047, and cross-sector strategic alignment.',
      },
      afternoon: {
        type: 'AFTERNOON SESSION',
        title: 'Challenges in Design and Development of Interdisciplinary Systems for Aero Applications',
        description:
          'Deep dive into high-tech aerospace systems, cross-disciplinary integration, structural mechanics, sensors, and avionics innovation.',
      },
    },
    {
      dayNumber: 2,
      dateStr: '22 December 2026',
      dayName: 'Tuesday',
      badge: 'Ecosystem & Next-Gen Materials',
      forenoon: {
        type: 'FORENOON SESSION',
        title: 'Building an Innovation Ecosystem: From Institutional Research to National Impact',
        description:
          'Frameworks for creating thriving institutional R&D hubs, IP incubation, grant stewardship, and translating academic findings into scalable impact.',
      },
      afternoon: {
        type: 'AFTERNOON SESSION',
        title: 'Computational Modelling, Artificial Intelligence and Experimental Research for Next-Generation Materials',
        description:
          'Harnessing ML, multi-scale atomistic simulations, and high-throughput experimental workflows for next-generation composite and functional materials.',
      },
    },
    {
      dayNumber: 3,
      dateStr: '23 December 2026',
      dayName: 'Wednesday',
      badge: 'Deep Tech & Sustainability',
      forenoon: {
        type: 'FORENOON SESSION',
        title: 'Emerging Research Opportunities in AI, Semiconductors, Quantum Technology, Robotics and Advanced Materials',
        description:
          'Focus on India Semiconductor Mission, National Quantum Mission, robotics automation, and interdisciplinary AI applications across domains.',
      },
      afternoon: {
        type: 'AFTERNOON SESSION',
        title: 'Research for Sustainable Development: Clean Energy, Climate Resilience, Water Security and Environmental Protection',
        description:
          'Grand challenges in green hydrogen, battery storage, circular economies, climate modelling, and sustainable environmental engineering.',
      },
    },
    {
      dayNumber: 4,
      dateStr: '24 December 2026',
      dayName: 'Thursday',
      badge: 'National Missions & Collaboration',
      forenoon: {
        type: 'FORENOON SESSION',
        title: 'Interdisciplinary Research for National Missions: Integrating Science, Engineering, Technology and Social Sciences',
        description:
          'Bridging STEM with socioeconomic impact, human factors, ethical AI governance, and techno-social deployment strategies.',
      },
      afternoon: {
        type: 'AFTERNOON SESSION',
        title: 'Building Academia–Industry–National Laboratory Collaborations for Mission-Oriented Research and Innovation',
        description:
          'Mechanisms for tripartite partnerships with DRDO, CSIR, DST, MeitY, and premier R&D industries for sponsored contract research.',
      },
    },
    {
      dayNumber: 5,
      dateStr: '25 December 2026',
      dayName: 'Friday',
      badge: 'Healthcare & Lab-to-Market',
      forenoon: {
        type: 'FORENOON SESSION',
        title: 'Interdisciplinary Research for Healthcare, Biomedical Innovation and Affordable Medical Technologies',
        description:
          'Point-of-care diagnostics, medical devices, bio-MEMS, translational telemedicine, and healthcare engineering for national health missions.',
      },
      afternoon: {
        type: 'AFTERNOON SESSION',
        title: 'From Laboratory to Market: Technology Readiness Levels, Prototype Development, Patents and Commercialization',
        description:
          'Navigating TRL 1 to 9, prototype de-risking, Indian and global patent filing, technology transfer agreements, and spin-offs.',
      },
    },
    {
      dayNumber: 6,
      dateStr: '26 December 2026',
      dayName: 'Saturday',
      badge: 'Hands-on Proposal & Valedictory',
      forenoon: {
        type: 'FULL DAY · HANDS-ON SESSION (PART 1)',
        title: 'Collaborative Research Proposal Writing through Interdisciplinary Team Formation',
        description:
          'Participants form multi-departmental teams, select problem statements, formulate methodology, budgetary justifications, and draft real proposals.',
      },
      afternoon: {
        type: 'FULL DAY · HANDS-ON SESSION (PART 2) & VALEDICTORY',
        title: 'Proposal Pitch, Expert Peer Review & Valedictory Ceremony',
        description:
          'Proposal presentations to expert reviewer panel, actionable critique for funding submission, feedback session, and certificate distribution.',
      },
    },
  ];

  const currentDay = scheduleData.find((d) => d.dayNumber === activeDay) || scheduleData[0];

  return (
    <section id="schedule" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-200/60 px-3 py-1 rounded-full">
            6-Day Detailed Timeline
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Programme Schedule
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Structured six-day immersive journey from national problem formulation to proposal pitch and peer review.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Day Selector Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {scheduleData.map((d) => {
            const isActive = d.dayNumber === activeDay;
            return (
              <button
                key={d.dayNumber}
                onClick={() => setActiveDay(d.dayNumber)}
                className={`flex-shrink-0 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex flex-col items-center gap-0.5 border ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/25 scale-105'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span className="uppercase text-[10px] tracking-wider opacity-80">
                  {d.dayName.slice(0, 3)}
                </span>
                <span className="text-sm font-extrabold">Day {d.dayNumber}</span>
                <span className="text-[10px] opacity-75">{d.dateStr.split(' ')[0]} Dec</span>
              </button>
            );
          })}
        </div>

        {/* Active Day Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-4xl mx-auto">
          {/* Day Title & Date Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold text-blue-700 tracking-wider uppercase bg-blue-50 px-2.5 py-1 rounded-md">
                {currentDay.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Day {currentDay.dayNumber}: {currentDay.dayName}
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 text-slate-800 font-bold text-sm px-4 py-2 rounded-xl border border-slate-200">
              <Calendar className="w-4 h-4 text-blue-700" />
              <span>{currentDay.dateStr}</span>
            </div>
          </div>

          {/* Forenoon Session Box */}
          <div className="mt-8 relative pl-6 sm:pl-8 border-l-4 border-amber-500">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-sm">
                {currentDay.forenoon.type}
              </span>
              <h4 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentDay.forenoon.title}
              </h4>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {currentDay.forenoon.description}
              </p>
            </div>
          </div>

          {/* Afternoon Session Box */}
          <div className="mt-8 relative pl-6 sm:pl-8 border-l-4 border-indigo-600">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Moon className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-sm">
                {currentDay.afternoon.type}
              </span>
              <h4 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {currentDay.afternoon.title}
              </h4>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {currentDay.afternoon.description}
              </p>
            </div>
          </div>

          {/* Quick Schedule Navigation Footer */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <button
              onClick={() => setActiveDay((prev) => Math.max(1, prev - 1))}
              disabled={activeDay === 1}
              className="hover:text-blue-700 font-bold disabled:opacity-30 disabled:pointer-events-none"
            >
              ← Previous Day
            </button>
            <span>Seminar Hall 1 · Velammal IT</span>
            <button
              onClick={() => setActiveDay((prev) => Math.min(6, prev + 1))}
              disabled={activeDay === 6}
              className="hover:text-blue-700 font-bold disabled:opacity-30 disabled:pointer-events-none"
            >
              Next Day →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
