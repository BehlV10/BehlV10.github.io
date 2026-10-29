import React, { useState } from 'react';
import { 
  Building2, 
  GitBranch, 
  Cpu, 
  Server, 
  Zap, 
  ShieldCheck, 
  Database, 
  Bot, 
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import { enterpriseProjects } from '../data/portfolioData';

export default function EnterpriseProjectsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? enterpriseProjects 
    : enterpriseProjects.filter(p => p.company.toLowerCase() === activeTab);

  return (
    <section id="enterprise-systems" className="py-20 md:py-28 relative bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tech Lead & Enterprise Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Throughput Distributed Systems & Microservices
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Architectural leadership at HubSpot, Pegasystems, and Oracle spanning catalog decomposition, eventual consistency publishing engines, sandbox portability, AI listing generation, and multi-region observability.
          </p>
        </div>

        {/* Company Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Enterprise Architecture ({enterpriseProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('hubspot')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'hubspot'
                ? 'bg-[#ff7a59] text-white shadow-md shadow-[#ff7a59]/30'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            HubSpot Systems (5)
          </button>
          <button
            onClick={() => setActiveTab('pegasystems')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'pegasystems'
                ? 'bg-[#002B49] text-sky-200 border border-sky-400 shadow-md'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Pegasystems
          </button>
          <button
            onClick={() => setActiveTab('oracle')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'oracle'
                ? 'bg-[#C74634] text-white shadow-md'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Oracle
          </button>
        </div>

        {/* Projects Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-indigo-500/40 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-indigo-500/5"
            >
              <div>
                {/* Meta Top Pill */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                        proj.company === 'HubSpot'
                          ? 'bg-[#ff7a59]/15 text-[#ff7a59] border border-[#ff7a59]/30'
                          : proj.company === 'Pegasystems'
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                          : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {proj.company}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{proj.role}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{proj.period}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mb-6 leading-relaxed">
                  {proj.tagline}
                </p>

                {/* Impact Bullets */}
                <div className="space-y-2.5 mb-6">
                  {proj.impact.map((point, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 border-t border-slate-800/70 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
