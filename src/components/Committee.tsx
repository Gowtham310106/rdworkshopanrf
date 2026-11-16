import React from 'react';
import { Mail, Phone, UserCheck } from 'lucide-react';

export default function Committee() {
  const patrons = [
    { name: 'Shri M. V. M. Velmurugan', title: 'Chief Executive Officer (CEO)' },
    { name: 'Shri M. V. M. Velmohan', title: 'Correspondent' },
    { name: 'Shri M. V. M. Sasi Kumar', title: 'Director' },
  ];

  const generalChairs = [
    { name: 'Dr. N. Balaji', title: 'Principal, Velammal Institute of Technology' },
    { name: 'Dr. S. Soundararajan', title: 'Vice-Principal, Velammal Institute of Technology' },
  ];

  const team = [
    {
      role: 'Convener',
      name: 'Dr. B. Sridevi',
      designation: 'Dean – Research & Development | Professor & Head, Dept. of ECE',
      email: 'bsd@velammalitech.edu.in',
    },
    {
      role: 'Organising Coordinator',
      name: 'Dr. Madhu',
      designation: 'Department of Mechanical Engineering',
      phone: '+91 98416 07498',
      email: 'madhu@velammalitech.edu.in',
    },
    {
      role: 'Organising Coordinator',
      name: 'Dr. J. Nandhagopal',
      designation: 'Department of Electrical & Electronics Engineering (EEE)',
      phone: '+91 99946 58433',
      email: 'jnandhagopal.eee@velammalitech.edu.in',
    },
  ];

  return (
    <section id="committee" className="py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
            Governance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Organizing Committee
          </h2>
          <p className="mt-3 text-base text-neutral-600 leading-relaxed">
            Institutional leadership and faculty coordination behind the ANRF Six-Day Workshop.
          </p>
        </div>

        {/* Chief Patron Highlight Card */}
        <div className="bg-[#0f0f12] text-white rounded-xl p-6 sm:p-8 border border-neutral-800 mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-neutral-800 px-2.5 py-0.5 rounded-md inline-block mb-3">
            Chief Patron
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Shri M. V. Muthuramalingam
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Chairman, Velammal Educational Trust
          </p>
        </div>

        {/* Patrons & General Chairs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Patrons */}
          <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-6 sm:p-7">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 pb-2 border-b border-neutral-200">
              Patrons
            </h4>
            <div className="space-y-3">
              {patrons.map((p, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-bold text-neutral-900 text-sm">{p.name}</span>
                  <span className="text-xs text-neutral-500">{p.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* General Chairs */}
          <div className="bg-[#fafafa] border border-neutral-200 rounded-xl p-6 sm:p-7">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 pb-2 border-b border-neutral-200">
              General Chairs
            </h4>
            <div className="space-y-3">
              {generalChairs.map((c, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-bold text-neutral-900 text-sm">{c.name}</span>
                  <span className="text-xs text-neutral-500">{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organising Team (Convener & Coordinators) */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
            Convener & Organising Coordinators
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md inline-block mb-2">
                    {m.role}
                  </span>
                  <h5 className="text-base font-bold text-neutral-900">{m.name}</h5>
                  <p className="text-xs text-neutral-600 mt-1 leading-snug">{m.designation}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 text-xs space-y-1.5">
                  {m.phone && (
                    <div className="flex items-center gap-2 text-neutral-800 font-medium">
                      <Phone className="w-3.5 h-3.5 text-neutral-400" />
                      <a href={`tel:${m.phone}`} className="hover:text-orange-600">
                        {m.phone}
                      </a>
                    </div>
                  )}
                  {m.email && (
                    <div className="flex items-center gap-2 text-neutral-600">
                      <Mail className="w-3.5 h-3.5 text-neutral-400" />
                      <a href={`mailto:${m.email}`} className="hover:text-orange-600 truncate">
                        {m.email}
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
