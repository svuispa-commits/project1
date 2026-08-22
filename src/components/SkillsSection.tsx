import React, { useState } from 'react';
import { Sparkles, Layout, Server, CheckCircle, Code, Copy, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const SkillsSection: React.FC = () => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('prompt-engineering');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-teal-600" />;
      case 'Layout':
        return <Layout className="h-5 w-5 text-sky-600" />;
      case 'Server':
        return <Server className="h-5 w-5 text-indigo-600" />;
      default:
        return <Sparkles className="h-5 w-5 text-teal-600" />;
    }
  };

  const copyCodeSnippet = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-blue-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Interactive 3D Skill Grid
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Expertise &amp; Technical Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Hover over the 3D cards to experience interactive perspective shifts. Each pillar represents deep, production-tested mastery from raw prompt design to distributed full-stack architecture.
          </p>
        </div>

        {/* 3D Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <TiltCard key={category.id} maxTilt={8} scale={1.015} className="h-full">
              <div
                id={`skill-card-${category.id}`}
                className="h-full flex flex-col justify-between bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/60 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Top Glowing Gradient Header */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.colorAccent}`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-2xs">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-slate-700 border border-white/80">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 mb-4">
                    {category.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 p-3.5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70">
                    {category.highlightSummary}
                  </p>

                  {/* Detailed Skill Items */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Specialized Competencies:
                    </div>
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-2xs hover:border-emerald-300 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 pl-5">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Code / Prompt Snippet Accordion */}
                <div className="pt-4 border-t border-white/60">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold text-slate-600 flex items-center gap-1">
                      <Code className="h-3.5 w-3.5 text-blue-600" />
                      {category.codePreview.title}
                    </span>
                    <button
                      onClick={() => copyCodeSnippet(category.id, category.codePreview.code)}
                      className="text-[11px] font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors px-2 py-0.5 rounded-full bg-white/60 border border-white/80"
                    >
                      {copiedCodeId === category.id ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" /> Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" /> Copy
                        </>
                      )}
                    </button>
                  </div>
                  <div className="rounded-2xl bg-slate-900/90 backdrop-blur-xl p-3.5 text-slate-200 font-mono text-[11px] overflow-x-auto max-h-36 shadow-inner border border-slate-700/60">
                    <pre className="whitespace-pre">{category.codePreview.code}</pre>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Prompt-to-Full-Stack Interactive Tooling Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-emerald-600 shadow-xs shrink-0">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Explore Live Prompt vs. Code Benchmarks
                </h4>
                <p className="text-sm text-slate-600 mt-0.5">
                  See how structural prompt engineering cuts token latency and prevents API regressions.
                </p>
              </div>
            </div>

            <a
              href="#prompt-lab"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-md shadow-slate-900/20 transition-all duration-200 shrink-0 hover:-translate-y-0.5"
            >
              Open Interactive Prompt Lab &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
