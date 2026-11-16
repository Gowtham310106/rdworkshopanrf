import React from 'react';
import { Mail, Phone, MapPin, Globe, Building2 } from 'lucide-react';

export default function ContactSection() {
  const coordinators = [
    {
      role: 'Convener',
      name: 'Dr. B. Sridevi',
      title: 'Dean – Research & Development | Professor & Head, Dept. of ECE',
      email: 'bsd@velammalitech.edu.in',
    },
    {
      role: 'Organising Coordinator',
      name: 'Dr. Madhu',
      title: 'Department of Mechanical Engineering',
      phone: '+91 98416 07498',
      email: 'madhu@velammalitech.edu.in',
    },
    {
      role: 'Organising Coordinator',
      name: 'Dr. J. Nandhagopal',
      title: 'Department of Electrical & Electronics Engineering (EEE)',
      phone: '+91 99946 58433',
      email: 'jnandhagopal.eee@velammalitech.edu.in',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Connect
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Contact & Venue Location
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Reach out to our organizing team for queries regarding registration, accommodation, and campus logistics.
          </p>
        </div>

        {/* 3 Coordinators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {coordinators.map((c, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md inline-block mb-3">
                  {c.role}
                </span>
                <h4 className="text-base font-bold text-neutral-900">{c.name}</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-snug">{c.title}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-100 text-xs space-y-1.5">
                {c.phone && (
                  <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <a href={`tel:${c.phone}`} className="hover:text-orange-600">
                      {c.phone}
                    </a>
                  </div>
                )}
                {c.email && (
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <a href={`mailto:${c.email}`} className="hover:text-orange-600 truncate">
                      {c.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Campus Details */}
        <div className="bg-[#121216] text-white rounded-xl p-6 sm:p-8 border border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-bold text-white">
                  Velammal Institute of Technology
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                “Velammal Knowledge Park”, Chennai–Kolkata Highway, Panchetti, Ponneri Taluk, Thiruvallur District – 601 204, Tamil Nadu, India.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-neutral-400" />
                  <span>College Office: <strong>044-26591841</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-neutral-400" />
                  <a href="https://www.velammalitech.edu.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    www.velammalitech.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:items-end justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                Workshop Location
              </span>
              <span className="text-sm font-bold text-white block">
                Seminar Hall 1
              </span>
              <a
                href="https://maps.google.com/?q=Velammal+Institute+of+Technology+Panchetti"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 px-3 py-1.5 rounded-md transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
