import React from 'react';
import { User, Award, Shield, Phone, Mail } from 'lucide-react';

export default function Committee() {
  const patrons = [
    { name: 'Shri M. V. M. Velmurugan', role: 'Chief Executive Officer (CEO)' },
    { name: 'Shri M. V. M. Velmohan', role: 'Correspondent' },
    { name: 'Shri M. V. M. Sasi Kumar', role: 'Director' },
  ];

  const generalChairs = [
    { name: 'Dr. N. Balaji', role: 'Principal, Velammal Institute of Technology' },
    { name: 'Dr. S. Soundararajan', role: 'Vice-Principal, Velammal Institute of Technology' },
  ];

  const organisingTeam = [
    {
      name: 'Dr. B. Sridevi',
      role: 'Convener',
      dept: 'Dean – Research & Development | Professor & Head, Dept. of ECE',
      email: 'bsd@velammalitech.edu.in',
    },
    {
      name: 'Dr. Madhu',
      role: 'Organising Member',
      dept: 'Department of Mechanical Engineering',
      phone: '+91 98416 07498',
      email: 'madhu@velammalitech.edu.in',
    },
    {
      name: 'Dr. J. Nandhagopal',
      role: 'Organising Member',
      dept: 'Department of Electrical & Electronics Engineering (EEE)',
      phone: '+91 99946 58433',
      email: 'jnandhagopal.eee@velammalitech.edu.in',
    },
  ];

  return (
    <section id="committee" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
            Leadership & Organisers
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Organizing Committee
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Guiding visionary leadership and dedicated academic organising committee.
          </p>
          <div className="mt-2 w-20 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
        </div>

        {/* Chief Patron Highlight Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-blue-800">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 bg-blue-800/80 px-3 py-1 rounded-full inline-block mb-3">
              Chief Patron
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Shri M. V. Muthuramalingam
            </h3>
            <p className="text-blue-200 text-sm font-semibold mt-1">
              Chairman, Velammal Educational Trust
            </p>
          </div>
        </div>

        {/* Patrons & General Chairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Patrons */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md inline-block mb-4">
              Patrons
            </h4>
            <div className="space-y-4">
              {patrons.map((patron, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm">
                    {patron.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">{patron.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{patron.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Chairs */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-md inline-block mb-4">
              General Chairs
            </h4>
            <div className="space-y-4">
              {generalChairs.map((chair, i) => (
                <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                    {chair.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-base">{chair.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{chair.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Organising Team & Convener */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md inline-block">
              Organising Team
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-2">
              Convener & Faculty Coordinators
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {organisingTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {member.role}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{member.dept}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
                  {member.phone && (
                    <div className="flex items-center gap-2 text-slate-700 font-semibold">
                      <Phone className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-700">
                        {member.phone}
                      </a>
                    </div>
                  )}
                  {member.email && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-700 truncate">
                        {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
