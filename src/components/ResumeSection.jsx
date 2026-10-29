import React from 'react';
import { 
  FileText, 
  Printer, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  personalInfo, 
  experienceData, 
  educationData, 
  technicalSkills, 
  activitiesData 
} from '../data/portfolioData';

export default function ResumeSection({ onPrintResume }) {
  return (
    <section id="resume" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Executive Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Resume & Career Trajectory
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-all hover:scale-105 shadow-sm"
              title="Print or Save PDF"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Header Block in Resume */}
          <div className="border-b border-slate-800 pb-8 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base text-brand-400 font-medium mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-slate-300 space-y-1.5 flex-shrink-0">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.phone}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-brand-400">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand-400">
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.linkedinDisplay}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand-400">
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.githubDisplay}
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-10">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400 flex items-center gap-2 mb-6 font-mono">
              <Briefcase className="w-4 h-4" />
              <span>Relevant Experience</span>
            </h3>

            <div className="space-y-8">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-slate-800 hover:border-brand-500/50 transition-colors">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-brand-500" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div>
                      <span className="text-lg font-bold text-white">{exp.company}</span>
                      <span className="text-slate-400 text-sm">, {exp.location}</span>
                      <span className="text-slate-400 text-sm"> — </span>
                      <span className="text-brand-300 font-semibold text-sm">{exp.role}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-slate-400 mt-1 sm:mt-0 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  {exp.team && (
                    <p className="text-xs text-slate-400 italic mb-3">{exp.team}</p>
                  )}

                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-slate-500 mt-1.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="mb-10 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400 flex items-center gap-2 mb-6 font-mono">
              <Code className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="font-semibold text-white block mb-2 font-mono text-xs uppercase text-slate-400">
                  Programming Languages
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.languages.map((l) => (
                    <span key={l} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 font-mono text-xs">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="font-semibold text-white block mb-2 font-mono text-xs uppercase text-slate-400">
                  Distributed Systems & Cloud
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.distributedCloud.map((d) => (
                    <span key={d} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 font-mono text-xs">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="font-semibold text-white block mb-2 font-mono text-xs uppercase text-slate-400">
                  AI Frameworks & Tooling
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.aiTooling.map((a) => (
                    <span key={a} className="px-2.5 py-1 rounded-md bg-slate-800 text-brand-300 font-mono text-xs">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="font-semibold text-white block mb-2 font-mono text-xs uppercase text-slate-400">
                  Frontend, Databases & Infra
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.frontendInfra.map((f) => (
                    <span key={f} className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 font-mono text-xs">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-10 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400 flex items-center gap-2 mb-6 font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-white">{edu.institution}</h4>
                    <p className="text-sm text-brand-300 font-medium">{edu.degree}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.details}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 mt-2 sm:mt-0 font-medium">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Community */}
          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-sm font-bold tracking-wider uppercase text-brand-400 flex items-center gap-2 mb-6 font-mono">
              <Heart className="w-4 h-4" />
              <span>Leadership & Community Activities</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activitiesData.map((act, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white text-sm">{act.title}</span>
                    <span className="text-xs font-mono text-slate-400 ml-2 flex-shrink-0">{act.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
