'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Users, ArrowRight, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  // Countdown to Registration Deadline: 14 Dec 2026 23:59:59 IST
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-14T23:59:59+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Subtle Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Sponsoring & National Priority Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-900" />
              ANRF Sponsored Six-Day Workshop
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-900/80 text-blue-200 border border-blue-700/60">
              Towards Viksit Bharat 2047 & Atmanirbhar Bharat
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/50">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Hands-on Proposal Drafting
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
            Interdisciplinary Research for{' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              National Priorities
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-2xl font-semibold text-blue-200 max-w-2xl mx-auto">
            From Problem Identification to Proposal Writing
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Organized by the <strong className="text-white">Research and Development Cell</strong>, Velammal Institute of Technology, Chennai. Taking faculty members and research scholars through the complete journey from national research gaps to competitive funding proposals with experts from ANRF, IIT Madras, DRDO, MeitY, and industry.
          </p>

          {/* Key Event Badges Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-blue-600/40 text-blue-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Workshop Dates</p>
                <p className="text-sm font-bold text-white">21 – 26 Dec 2026</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-amber-500/30 text-amber-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Venue</p>
                <p className="text-sm font-bold text-white">Seminar Hall 1, Velammal IT</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center justify-center gap-3 text-left">
              <div className="p-2.5 rounded-lg bg-emerald-500/30 text-emerald-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Registration Fee</p>
                <p className="text-sm font-bold text-emerald-300">Rs. 500/- Only</p>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900/90 border border-slate-700/80 rounded-2xl px-6 py-4 shadow-xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 animate-pulse" />
              Registration Closes 14 Dec 2026:
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-950 border border-blue-800/60 px-3 py-1.5 rounded-lg text-center min-w-[54px]">
                <span className="block text-xl font-extrabold text-white">{timeLeft.days}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Days</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="bg-blue-950 border border-blue-800/60 px-3 py-1.5 rounded-lg text-center min-w-[54px]">
                <span className="block text-xl font-extrabold text-white">{timeLeft.hours}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Hours</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="bg-blue-950 border border-blue-800/60 px-3 py-1.5 rounded-lg text-center min-w-[54px]">
                <span className="block text-xl font-extrabold text-white">{timeLeft.minutes}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Mins</span>
              </div>
              <span className="text-slate-500 font-bold">:</span>
              <div className="bg-blue-950 border border-blue-800/60 px-3 py-1.5 rounded-lg text-center min-w-[54px]">
                <span className="block text-xl font-extrabold text-white">{timeLeft.seconds}</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Secs</span>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#registration-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-extrabold px-8 py-3.5 rounded-xl shadow-lg shadow-amber-400/20 hover:shadow-xl hover:shadow-amber-400/30 transition-all text-base group"
            >
              <span>Register Now (₹500)</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#payment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all text-base"
            >
              <span>View UPI / Payment Mode</span>
            </a>
            <a
              href="#schedule"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-blue-200 hover:text-white font-semibold px-4 py-3 text-sm underline-offset-4 hover:underline"
            >
              Explore 6-Day Schedule ↓
            </a>
          </div>

          {/* Eligible Audience Tagline */}
          <p className="mt-5 text-xs text-blue-300/80">
            ★ Open to: <strong>Faculty Members</strong> & <strong>Research Scholars</strong> across Engineering, Science & Technology.
          </p>
        </div>
      </div>
    </section>
  );
}
