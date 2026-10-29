import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  personalInfo, 
  experienceData, 
  educationData, 
  technicalSkills, 
  activitiesData 
} from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 sticky top-0 z-10 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h3 className="font-bold text-white text-sm sm:text-base">Varun Behl — Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950/50 text-slate-100">
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide uppercase">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-300 font-mono">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-brand-400 hover:underline">
                {personalInfo.email}
              </a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline">
                {personalInfo.linkedinDisplay}
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline">
                {personalInfo.githubDisplay}
              </a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2 font-mono">
              Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Relevant Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-4 font-mono">
              Relevant Experience
            </h4>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-slate-800 pl-4">
                  <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                    <div>
                      <span className="font-bold text-white text-sm">{exp.company}</span>
                      <span className="text-slate-400 text-xs">, {exp.location}</span>
                      <span className="text-slate-400 text-xs"> — </span>
                      <span className="text-brand-300 font-medium text-xs">{exp.role}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium">{exp.period}</span>
                  </div>
                  {exp.team && (
                    <p className="text-[11px] text-slate-400 italic mb-2">{exp.team}</p>
                  )}
                  <ul className="space-y-1.5 mt-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 font-mono">
              Technical Skills
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <p>
                <strong className="text-white">Languages:</strong>{' '}
                {technicalSkills.languages.join(', ')}
              </p>
              <p>
                <strong className="text-white">Distributed Systems & Cloud:</strong>{' '}
                {technicalSkills.distributedCloud.join(', ')}
              </p>
              <p>
                <strong className="text-white">AI Frameworks & Tooling:</strong>{' '}
                {technicalSkills.aiTooling.join(', ')}
              </p>
              <p>
                <strong className="text-white">Frontend, Databases & Infra:</strong>{' '}
                {technicalSkills.frontendInfra.join(', ')}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 font-mono">
              Education
            </h4>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.institution}</span>
                    <p className="text-slate-300 font-medium">{edu.degree}</p>
                    <p className="text-slate-400 text-[11px]">{edu.details}</p>
                  </div>
                  <span className="font-mono text-slate-400 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 font-mono">
              Activities & Leadership
            </h4>
            <div className="space-y-2 text-xs">
              {activitiesData.map((act, idx) => (
                <div key={idx} className="flex justify-between text-slate-300">
                  <span>{act.title}</span>
                  <span className="font-mono text-slate-400 ml-2">{act.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
