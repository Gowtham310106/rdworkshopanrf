import React from 'react';
import { Building2, Calendar, Target, Award, CheckCircle, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function AboutWorkshop() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Workshop Overview & Background
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Empowering Researchers for National Impact
          </h2>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: About the Workshop */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 bg-blue-50 text-blue-800 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">About the ANRF Workshop</h3>
                <p className="text-xs text-slate-500 font-medium">From Problem Identification to Proposal Writing</p>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              This ANRF six-day workshop takes faculty members and researchers through the complete research journey — from identifying critical research gaps aligned with national priorities to writing competitive interdisciplinary research proposals.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
              Experts from national agencies, <strong>IIT Madras</strong>, and leading industry will address India’s research priorities under <strong className="text-blue-900">Viksit Bharat 2047</strong> and <strong className="text-blue-900">Atmanirbhar Bharat</strong>; emerging areas such as <strong>AI, semiconductors, quantum technology, robotics, advanced materials, clean energy, and healthcare</strong>; and the path from laboratory to market.
            </p>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              It also covers the responsible use of AI tools in research, and concludes with an intensive hands-on session where participants form interdisciplinary teams and draft collaborative, submission-ready research proposals.
            </p>

            {/* Who Can Attend Box */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
              <h4 className="font-bold text-amber-950 text-sm sm:text-base flex items-center gap-2 mb-2">
                <GraduationCap className="w-5 h-5 text-amber-700" />
                Target Audience (Who Can Attend)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-900">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Faculty Members</strong> (All Engineering & Sciences)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Research Scholars</strong> (Ph.D. / MS / Postdocs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Institution & Important Dates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Institution Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-800 rounded-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Velammal Institute of Technology</h3>
                  <p className="text-xs text-slate-500 font-medium">Panchetti, Thiruvallur District, Chennai</p>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                Velammal Institute of Technology, Chennai, is the brainchild of <strong>Shri M. V. Muthuramalingam</strong>, a pioneer in education. Established in 2008 by the Velammal Educational Trust, the Institution is approved by <strong>AICTE</strong>, New Delhi, and affiliated to <strong>Anna University</strong>, Chennai.
              </p>

              <div className="flex flex-wrap gap-2 my-3">
                <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                  NAAC Accredited
                </span>
                <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                  NBA Accredited UG
                </span>
                <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-200">
                  Funded by DST, DRDO, TNSCST
                </span>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                The Institution offers UG programmes in CSE, ECE, EEE, IT, Mechanical Engineering, AI & DS and Mechatronics Engineering with state-of-the-art laboratories and extensive funded research initiatives.
              </p>
            </div>

            {/* Important Dates & Quick Summary */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-300">
                <Calendar className="w-5 h-5" />
                Key Dates & Venue
              </h3>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-blue-800/60">
                  <span className="text-slate-300">Workshop Dates:</span>
                  <span className="font-bold text-white">21st – 26th Dec 2026</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-blue-800/60">
                  <span className="text-slate-300">Registration Fee:</span>
                  <span className="font-bold text-amber-300 text-base">Rs. 500/-</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-blue-800/60">
                  <span className="text-slate-300">Last Date to Register:</span>
                  <span className="font-bold text-rose-300">14th December 2026</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Venue:</span>
                  <span className="font-semibold text-white text-right">Seminar Hall 1, Velammal IT</span>
                </div>
              </div>

              <a
                href="#registration-form"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-sm transition-all"
              >
                <span>Proceed to Registration Form</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
