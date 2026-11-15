import React from 'react';
import { Mail, Phone, MapPin, Globe, Building2, User } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      title: 'Convener',
      name: 'Dr. B. Sridevi',
      role: 'Dean – Research & Development | Professor & Head, Dept. of ECE',
      email: 'bsd@velammalitech.edu.in',
    },
    {
      title: 'Organising Coordinator',
      name: 'Dr. Madhu',
      role: 'Department of Mechanical Engineering',
      phone: '+91 98416 07498',
      email: 'madhu@velammalitech.edu.in',
    },
    {
      title: 'Organising Coordinator',
      name: 'Dr. J. Nandhagopal',
      role: 'Department of Electrical & Electronics Engineering (EEE)',
      phone: '+91 99946 58433',
      email: 'jnandhagopal.eee@velammalitech.edu.in',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact & Venue Information
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            For registration queries, accommodation details, and workshop directions.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* 3-Column Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 hover:border-blue-400 rounded-2xl p-6 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full inline-block mb-3">
                  {c.title}
                </span>
                <h4 className="text-lg font-bold text-slate-900">{c.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-snug">{c.role}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 text-xs">
                {c.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <a href={`tel:${c.phone}`} className="font-bold text-slate-800 hover:text-blue-700">
                      {c.phone}
                    </a>
                  </div>
                )}
                {c.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <a href={`mailto:${c.email}`} className="text-slate-700 hover:text-blue-700 truncate">
                      {c.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Institution Address & General Office */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-300 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Velammal Institute of Technology
                  </h3>
                  <p className="text-xs text-blue-200">
                    “Velammal Knowledge Park”, Chennai–Kolkata Highway, Panchetti, Ponneri Taluk, Thiruvallur District – 601 204, Tamil Nadu, India.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>College Office: <strong>044-26591841</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="https://www.velammalitech.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline"
                  >
                    www.velammalitech.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-center sm:text-right w-full sm:w-auto">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                  Workshop Venue
                </span>
                <span className="text-base font-extrabold text-white block mt-1">
                  Seminar Hall 1
                </span>
                <span className="text-xs text-slate-300 block">
                  Velammal Institute of Technology
                </span>
                <a
                  href="https://maps.google.com/?q=Velammal+Institute+of+Technology+Panchetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs text-blue-200 hover:text-white font-bold bg-blue-800/60 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
