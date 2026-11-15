'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Database,
  ArrowLeft,
  Download,
  Search,
  RefreshCw,
  Eye,
  CheckCircle2,
  Users,
  DollarSign,
  Building,
  FileSpreadsheet,
  X,
} from 'lucide-react';
import { RegistrationData } from '@/types/registration';

export default function AdminPage() {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDesignation, setFilterDesignation] = useState('ALL');
  const [selectedReceipt, setSelectedReceipt] = useState<string | null>(null);

  const fetchRegistrations = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/registrations', { cache: 'no-store' });
      const data = await res.json();
      if (data.success) {
        setRegistrations(data.registrations || []);
      } else {
        setError(data.error || 'Failed to fetch registrations');
      }
    } catch (err: any) {
      setError(err.message || 'Error connecting to registration API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const filtered = registrations.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDesignation =
      filterDesignation === 'ALL' || r.designation === filterDesignation;

    return matchesSearch && matchesDesignation;
  });

  const totalFeeCollected = registrations.length * 500;
  const facultyCount = registrations.filter((r) =>
    r.designation.toLowerCase().includes('professor')
  ).length;
  const scholarCount = registrations.filter((r) =>
    r.designation.toLowerCase().includes('scholar')
  ).length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      {/* Admin Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <h1 className="font-extrabold text-base sm:text-lg">
                  ANRF Workshop Admin Portal
                </h1>
              </div>
              <p className="text-[11px] text-slate-400">
                Velammal Institute of Technology · Registrations Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchRegistrations}
              disabled={loading}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <a
              href="/api/registrations?format=csv"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* KPI Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Total Registered</span>
              <p className="text-2xl font-black text-slate-900">{registrations.length}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <span className="text-xl font-black">₹</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Fee Collected (@ ₹500)</span>
              <p className="text-2xl font-black text-emerald-600">₹{totalFeeCollected.toLocaleString('en-IN')}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Faculty Members</span>
              <p className="text-2xl font-black text-indigo-700">{facultyCount}</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium">Research Scholars</span>
              <p className="text-2xl font-black text-amber-700">{scholarCount}</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search by name, institute, UTR..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-slate-500 font-medium">Filter:</span>
            <select
              value={filterDesignation}
              onChange={(e) => setFilterDesignation(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            >
              <option value="ALL">All Designations</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Associate Professor">Associate Professor</option>
              <option value="Professor">Professor</option>
              <option value="Research Scholar (Ph.D.)">Research Scholar</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Registrations Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4">Reg ID</th>
                  <th className="py-3.5 px-4">Participant</th>
                  <th className="py-3.5 px-4">Designation & Dept</th>
                  <th className="py-3.5 px-4">Institution</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Payment / UTR</th>
                  <th className="py-3.5 px-4">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <RefreshCw className="w-6 h-6 animate-spin text-blue-600" />
                        <span>Loading registrations...</span>
                      </div>
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      No registrations found matching your query.
                    </td>
                  </tr>
                ) : (
                  filtered.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-700">
                        {r.id}
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-bold text-slate-900 block">
                          {r.title} {r.name}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {new Date(r.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-800 block">
                          {r.designation}
                        </span>
                        <span className="text-[11px] text-slate-500">{r.department}</span>
                      </td>
                      <td className="py-3 px-4 max-w-[200px] truncate" title={r.institution}>
                        {r.institution}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-slate-800 block font-medium">{r.email}</span>
                        <span className="text-slate-500">{r.phone}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-mono font-bold text-emerald-700 block">
                          {r.transactionId}
                        </span>
                        <span className="text-[10px] text-slate-500">{r.paymentMode}</span>
                      </td>
                      <td className="py-3 px-4">
                        {r.receiptUrl ? (
                          <button
                            onClick={() => setSelectedReceipt(r.receiptUrl || null)}
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-bold bg-blue-50 px-2 py-1 rounded-md"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View</span>
                          </button>
                        ) : (
                          <span className="text-slate-400 text-[10px]">No file</span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Receipt Modal */}
        {selectedReceipt && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-sm text-slate-800">Payment Receipt Preview</h3>
                <button
                  onClick={() => setSelectedReceipt(null)}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 flex items-center justify-center max-h-[70vh] overflow-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedReceipt}
                  alt="Receipt"
                  className="max-w-full max-h-[60vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-2">
                <a
                  href={selectedReceipt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Open in New Tab
                </a>
                <button
                  onClick={() => setSelectedReceipt(null)}
                  className="bg-slate-200 text-slate-800 font-semibold text-xs px-4 py-2 rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
