import React from 'react';
import { ArrowUpRight, CheckCircle2, GraduationCap, Building2, Calendar, MapPin } from 'lucide-react';

export default function AboutWorkshop() {
  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Overview & Vision
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            About the Workshop & Host Institution
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Bridging fundamental inquiry with national strategic priorities to catalyze high-impact proposals for funding bodies.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Scope & Audience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                The Research Journey: Problem to Proposal
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-4">
                This ANRF six-day workshop takes faculty members and researchers through the complete research journey — from identifying critical research gaps aligned with national priorities to writing competitive interdisciplinary research proposals.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-4">
                Experts from national agencies, <strong>IIT Madras</strong>, and industry will address India’s research priorities under <strong>Viksit Bharat 2047</strong> and <strong>Atmanirbhar Bharat</strong>; emerging areas such as <strong>AI, semiconductors, quantum technology, robotics, advanced materials, clean energy, and healthcare</strong>; and the path from laboratory to market.
              </p>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                It also covers the responsible use of AI tools in research, and concludes with a hands-on session in which participants form interdisciplinary teams and draft collaborative research proposals.
              </p>
            </div>

            {/* Who Can Attend Banner */}
            <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Who Can Attend?</h4>
                  <p className="text-xs text-neutral-400">Open to participants across Engineering, Sciences & Technology</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-300 pt-2 border-t border-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span><strong>Faculty Members</strong> (All Departments)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span><strong>Research Scholars</strong> (Ph.D. / MS / Postdoc)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Velammal IT & Key Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Host Institution Info */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    Velammal Institute of Technology
                  </h3>
                  <p className="text-xs text-neutral-500">Panchetti, Thiruvallur District, Chennai</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                Velammal Institute of Technology, Chennai, is the brainchild of <strong>Shri M. V. Muthuramalingam</strong>, a pioneer in the field of education. Established in 2008 by the Velammal Educational Trust, the Institution is approved by <strong>AICTE</strong>, New Delhi, and affiliated to <strong>Anna University</strong>, Chennai.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-neutral-100 text-neutral-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-neutral-200">
                  NAAC Accredited
                </span>
                <span className="bg-neutral-100 text-neutral-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-neutral-200">
                  NBA Accredited UG
                </span>
                <span className="bg-neutral-100 text-neutral-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-neutral-200">
                  Funded by DST, DRDO, TNSCST
                </span>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed">
                The Institution offers undergraduate programmes in CSE, ECE, EEE, IT, Mechanical Engineering, AI & DS and Mechatronics Engineering with state-of-the-art laboratories, and has received funded research grants from DST, DRDO, TNSCST, and the Ministry of Mines.
              </p>
            </div>

            {/* Event Key Facts Card */}
            <div className="bg-[#121216] text-white rounded-xl p-6 border border-neutral-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Important Dates & Venue</span>
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Workshop Dates:</span>
                  <span className="font-semibold text-white">21 – 26 December 2026</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Last Date to Register:</span>
                  <span className="font-semibold text-orange-400">14 December 2026</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                  <span className="text-neutral-400">Registration Fee:</span>
                  <span className="font-semibold text-white">Rs. 500/-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Venue:</span>
                  <span className="font-semibold text-white text-right">Seminar Hall 1, Velammal IT</span>
                </div>
              </div>

              <a
                href="#registration-portal"
                className="mt-6 w-full inline-flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-colors"
              >
                <span>Go to Registration Portal</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
