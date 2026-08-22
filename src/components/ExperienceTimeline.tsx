import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Briefcase className="h-3.5 w-3.5 text-emerald-600" />
            Track Record
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience &amp; Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Delivering mission-critical LLM architectures and resilient full-stack systems across startups and fast-growing products.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-white/60">
          {WORK_EXPERIENCE.map((item, idx) => (
            <div
              key={item.id}
              className={`relative flex flex-col sm:flex-row items-start ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              } gap-6 sm:gap-12`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-xs z-10" />

              {/* Content Card */}
              <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                <div className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl border border-white/60 shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="h-3 w-3 text-emerald-600" />
                      {item.period}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                  <div className="text-sm font-semibold text-emerald-700 mb-3">{item.company}</div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/60 mb-4">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full bg-white/60 backdrop-blur-sm text-slate-700 text-[10px] font-mono font-medium border border-white/80 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
