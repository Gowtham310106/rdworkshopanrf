'use client';

import React from 'react';
import { ArrowUpRight, Calendar, MapPin, Sparkles, Check, Download, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 bg-[#0a0a0c] text-white overflow-hidden border-b border-neutral-800">
      {/* Subtle architectural background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-700/80 text-neutral-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-white font-semibold">ANRF Sponsored</span>
          <span className="text-neutral-500">·</span>
          <span>Towards Viksit Bharat 2047 & Atmanirbhar Bharat</span>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Interdisciplinary Research for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              National Priorities
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-neutral-300 font-medium">
            From Problem Identification to Proposal Writing
          </p>

          <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed">
            Organized by the <strong className="text-neutral-200">Research & Development Cell</strong>, Velammal Institute of Technology, Chennai. Taking faculty members and researchers through the complete research journey — from pinpointing critical national gaps in AI, semiconductors, quantum, robotics, clean energy, and healthcare to drafting competitive interdisciplinary proposals with scientists from <strong>ANRF, IIT Madras, DRDO, MeitY, and industry</strong>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#registration-portal"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-md shadow-orange-500/20"
          >
            <span>Register for Workshop (₹500)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#schedule"
            className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-medium px-5 py-3.5 rounded-lg text-sm sm:text-base border border-neutral-700 transition-colors"
          >
            <span>Explore 6-Day Schedule</span>
          </a>

          <a
            href="#payment"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white font-medium underline underline-offset-4"
          >
            <span>Payment Mode (GPay / UPI)</span>
          </a>
        </div>

        {/* Metrics Bar (Anna Incubator Style) */}
        <div className="mt-16 pt-10 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              21 – 26 Dec
            </div>
            <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Workshop Dates (2026)
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">
              14 Dec 2026
            </div>
            <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Registration Closes
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              ₹500/-
            </div>
            <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Registration Fee
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              Seminar Hall 1
            </div>
            <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">
              Velammal IT, Chennai
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
