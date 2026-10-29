import { ExternalLink, Sparkles, Store, Cake, Scissors, Utensils, Search } from 'lucide-react';
import { GithubIcon } from './Icons';
import { clientAndToolProjects } from '../data/portfolioData';

const getCategoryIcon = (category) => {
  if (category.includes('Bakery') || category.includes('Artisanal')) {
    return <Cake className="w-4 h-4 text-amber-400" />;
  }
  if (category.includes('Luxury')) {
    return <Scissors className="w-4 h-4 text-sky-400" />;
  }
  if (category.includes('Culinary')) {
    return <Utensils className="w-4 h-4 text-rose-400" />;
  }
  return <Search className="w-4 h-4 text-emerald-400" />;
};

export default function ClientProjectsSection() {
  return (
    <section id="client-work" className="py-20 md:py-28 relative bg-slate-900/20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>Web Portfolio & Client Showcases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Client Web Experiences & Custom Tools
          </h2>
          <p className="mt-4 text-base text-slate-300">
            High-converting digital storefronts, interactive order calculators, and automated data tools built for local Boston & NYC businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientAndToolProjects.map((p) => (
            <div
              key={p.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(p.category)}
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                      {p.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-brand-600/80 hover:bg-brand-500 text-white"
                        title="Live Site"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-brand-400 font-medium mb-3">{p.tagline}</p>

                {p.image && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-800 h-36">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                      loading="lazy"
                    />
                  </div>
                )}

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono"
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
