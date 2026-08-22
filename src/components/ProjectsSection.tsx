import React, { useState } from 'react';
import { Sparkles, ExternalLink, Github, ArrowUpRight, Cpu, Layers, BarChart2, Filter } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { TiltCard } from './TiltCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterCategories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'agentic', label: 'Agentic & RAG AI' },
    { id: 'devtools', label: 'Prompt & Dev Tools' },
    { id: 'fullstack', label: 'Full Stack Systems' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              Featured Engineering Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              AI Logic Meets Scalable Full-Stack
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Real-world architectures fusing few-shot system prompt tuning, multi-agent state machines, and high-performance React/Python backends.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-2xs overflow-x-auto self-start md:self-auto">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-tab-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={6} scale={1.015} className="h-full">
              <div
                id={`project-card-${project.id}`}
                className="h-full flex flex-col justify-between bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative Top Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-80" />

                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200 shadow-2xs">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-500 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 mb-6 text-center shadow-2xs">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-base sm:text-lg font-black text-emerald-700 font-mono">
                          {metric.value}
                        </span>
                        <span className="text-[11px] font-bold text-slate-700 leading-tight mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prompt Engineering Technique Pill */}
                  <div className="mb-6 p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald-200/80 flex items-start gap-2.5 shadow-2xs">
                    <Sparkles className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Prompt Strategy: {project.promptStrategy.technique}
                      </span>
                      <span className="text-[11px] text-slate-600 leading-relaxed">
                        {project.promptStrategy.description}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm text-slate-700 text-[11px] font-mono font-medium border border-white/80 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/60 flex items-center justify-between gap-3">
                  <button
                    id={`view-details-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-2xs"
                  >
                    View System Blueprint
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-slate-600 hover:text-slate-900 bg-white/60 hover:bg-white transition-colors border border-white/80 shadow-2xs"
                        title="GitHub Repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full text-emerald-700 hover:text-emerald-900 bg-white/60 hover:bg-white transition-colors border border-white/80 shadow-2xs"
                        title="Live Applet Preview"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
