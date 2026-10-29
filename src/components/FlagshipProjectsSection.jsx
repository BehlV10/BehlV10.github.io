import React from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Home, 
  Flame, 
  Calendar, 
  MapPin, 
  Gamepad2,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { flagshipProjects } from '../data/portfolioData';

// Map icons to projects for visual interest
const getProjectIcon = (id) => {
  switch (id) {
    case 'borohop':
      return <Compass className="w-5 h-5 text-amber-400" />;
    case 'boston-housing-aggregator':
      return <Home className="w-5 h-5 text-emerald-400" />;
    case 'tight-pants-comedy':
      return <Flame className="w-5 h-5 text-rose-400" />;
    case 'wicked-boston-events':
      return <Calendar className="w-5 h-5 text-blue-400" />;
    case 'nyc-events':
      return <MapPin className="w-5 h-5 text-purple-400" />;
    case 'draculas-masquerade':
      return <Gamepad2 className="w-5 h-5 text-red-400" />;
    default:
      return <Layers className="w-5 h-5 text-brand-400" />;
  }
};

export default function FlagshipProjectsSection() {
  return (
    <section id="flagship-projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Independent Projects</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Production Web Apps & Real-Time Aggregators
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              Live web platforms, automated web scraping pipelines, and mobile-friendly consumer tools built with zero-latency architectures and zero-tracking privacy.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <span className="text-xs text-slate-400 font-mono">6 Live Applications Featured</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 flex flex-col justify-between relative group hover:border-brand-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10"
            >
              <div>
                {/* Top Badge & Header */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                        title="View Source on GitHub"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-600/90 hover:bg-brand-500 text-white text-xs font-semibold shadow-sm transition-all group-hover:scale-105"
                      >
                        <span>Live App</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-brand-300 transition-colors">
                  <span>{project.title}</span>
                </h3>
                <p className="text-sm font-medium text-brand-400 mb-4">{project.tagline}</p>

                {/* Visual Banner or Thumbnail if available */}
                {project.image && (
                  <div className="mb-5 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 max-h-48 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Overview */}
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {project.overview}
                </p>

                {/* Architecture & Engineering Highlights */}
                <div className="mb-6 space-y-2.5">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Engineering & Architecture:
                  </div>
                  <ul className="space-y-2">
                    {project.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Pills & Fallbacks */}
              <div className="pt-5 border-t border-slate-800/80 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 text-xs font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Additional mirror/fallback links if exists */}
                {project.fallbackUrl && (
                  <div className="text-xs text-slate-400 pt-1">
                    <span>Mirror: </span>
                    <a
                      href={project.fallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-400 hover:underline"
                    >
                      GitHub Pages Deployment
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
