import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  ArrowDown, 
  Copy, 
  Check, 
  Layers, 
  Server, 
  Cpu, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal }) {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 rounded-full blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Top availability / role pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-200 text-xs sm:text-sm font-medium mb-6 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-300">HubSpot Tech Lead (2022–2026)</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">10+ Years Systems Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Tech Lead and{' '}
            <span className="bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Senior Software Engineer
            </span>
          </h1>

          {/* Subtitle / summary */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl">
            {personalInfo.summary}
          </p>

          {/* Contact Pills & Direct Links */}
          <div className="flex flex-wrap items-center gap-3 mb-10 text-sm">
            {/* Location & Relocation */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Cambridge, MA</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">Open to Relocation: New York, NY</span>
            </div>

            {/* Email with copy */}
            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Click to copy email address"
            >
              <Mail className="w-4 h-4 text-brand-400" />
              <span>{personalInfo.email}</span>
              {copiedType === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 ml-1" />
              )}
            </button>

            {/* Phone with copy */}
            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Click to copy phone number"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              <span>{personalInfo.phone}</span>
              {copiedType === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 ml-1" />
              )}
            </button>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
              <span>{personalInfo.linkedinDisplay}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{personalInfo.githubDisplay}</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#resume"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-base shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Executive Resume</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#enterprise-systems"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 transition-all hover:-translate-y-0.5 flex items-center gap-2.5 shadow-sm"
            >
              <span>HubSpot Enterprise Systems</span>
            </a>

            <a
              href="#projects"
              className="px-5 py-3.5 rounded-xl text-slate-300 hover:text-white text-base font-medium transition-colors flex items-center gap-2"
            >
              <span>Explore Projects & Apps</span>
              <span className="text-brand-400">→</span>
            </a>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 bg-gradient-to-r from-brand-300 to-white bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
