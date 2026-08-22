import React, { useState } from 'react';
import { Sparkles, Brain, Cpu, Code2, Database, ShieldCheck, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      id: "step-1",
      icon: Sparkles,
      title: "1. Prompt Engineering & System Design",
      badge: "AI Logic",
      tagline: "Deterministic Guidance & Guardrails",
      color: "from-teal-500 to-emerald-500",
      description: "Crafting structured role framing, Few-Shot exemplars, Chain-of-Verification (CoVe) reasoning, and strict Pydantic/Zod schemas that eliminate hallucinations and reduce token costs.",
      details: ["Zero & Few-Shot Prompt Compilations", "Dynamic In-Context Exemplar Selection", "Token Economy & DSPy Optimization"]
    },
    {
      id: "step-2",
      icon: Brain,
      title: "2. Chained Workflows & Vector RAG",
      badge: "Orchestration",
      tagline: "Stateful Agent Choreography",
      color: "from-sky-500 to-blue-500",
      description: "Chaining autonomous agent pipelines with LangChain & LangGraph. Implementing hybrid semantic search (Pinecone, ChromaDB) with contextual re-ranking and memory persistence.",
      details: ["Cyclic State Graphs with LangGraph", "Hybrid BM25 + Dense Vector Indexing", "Semantic Cache with Redis"]
    },
    {
      id: "step-3",
      icon: Database,
      title: "3. Robust Backend Architecture",
      badge: "Infrastructure",
      tagline: "High-Throughput APIs & Microservices",
      color: "from-indigo-500 to-violet-500",
      description: "Building resilient Node.js (Express/NestJS) and Python (FastAPI) backends. Handling concurrent asynchronous worker queues, WebSockets, and ACID-compliant PostgreSQL databases.",
      details: ["FastAPI Async AI Workers", "PostgreSQL & Prisma / Drizzle ORM", "Docker Containerization & CI/CD"]
    },
    {
      id: "step-4",
      icon: Code2,
      title: "4. Reactive 3D Frontend Experience",
      badge: "User Interface",
      tagline: "Fluid, Token-Streaming Web Apps",
      color: "from-emerald-500 to-teal-500",
      description: "Designing modern, accessible, and responsive user interfaces with React 19, Next.js 15, Tailwind CSS, and WebGL/Three.js 3D visuals with live token streaming.",
      details: ["Server-Sent Events (SSE) Token Streaming", "Micro-Interactions with Motion", "Responsive 3D Canvas Interactivity"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Dots and Ambient Glow */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            About Ispa Mondal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Dual-Threat Advantage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most software engineers treat AI models as opaque black-box APIs. Most prompt writers can&apos;t architect production backends. I bridge both worlds — designing surgical system prompts that chain seamlessly into scalable full-stack applications.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/40 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-white/60 shadow-xs hover:shadow-md hover:bg-white/60 transition-all duration-200 hover:-translate-y-0.5 text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Bio & The End-to-End Synergy Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xs relative">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
                Prompt Engineering Meets Systems Engineering
              </h3>
              
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed mt-4">
                <p>
                  As an engineer operating at the convergence of generative AI logic and full-stack software, I specialize in transforming non-deterministic LLM behaviors into rock-solid, production-grade applications.
                </p>
                <p>
                  Whether it&apos;s fine-tuning system prompts with <strong>DSPy</strong> and <strong>Chain-of-Verification</strong>, orchestrating stateful <strong>LangGraph</strong> multi-agent networks, or implementing high-concurrency <strong>React &amp; FastAPI</strong> architectures, every component is built for speed, cost-efficiency, and zero hallucination.
                </p>
              </div>

              {/* Core Pillars Checkmarks */}
              <div className="mt-6 pt-6 border-t border-white/60 space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Deterministic JSON Outputs</strong> with Zod and Pydantic validation schemas.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Context-Aware RAG Pipelines</strong> with semantic re-ranking &amp; vector memory.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
                  <span><strong>60 FPS Reactive UI</strong> with live token chunk streams &amp; 3D micro-interactions.</span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Based &bull; Available Worldwide</span>
                <a
                  href="#skills"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  View 3D Skill Grid <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Architecture Stepper */}
          <div className="lg:col-span-7">
            <div className="bg-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    The End-to-End Production Pipeline
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click through each stage to inspect the engineering workflow
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/60 backdrop-blur-md text-slate-700 font-semibold border border-white/80">
                  Interactive DAG
                </span>
              </div>

              {/* Step Navigation Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {workflowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-white/90 border-emerald-500 shadow-xs ring-2 ring-emerald-500/20'
                          : 'bg-white/30 backdrop-blur-sm border-white/60 hover:bg-white/60 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-1.5 rounded-xl text-white bg-gradient-to-tr ${step.color}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">0{idx + 1}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 line-clamp-1">{step.badge}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Step Detail Panel */}
              <div className="bg-slate-900/90 backdrop-blur-xl text-slate-100 rounded-2xl p-5 sm:p-6 shadow-inner relative overflow-hidden border border-slate-700/60">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      {workflowSteps[activeStep].badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {workflowSteps[activeStep].tagline}
                    </span>
                  </div>
                  <Zap className="h-4 w-4 text-amber-400" />
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  {workflowSteps[activeStep].title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {workflowSteps[activeStep].description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-1">
                    KEY IMPLEMENTATION SPECS:
                  </span>
                  {workflowSteps[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="text-emerald-400">&gt;</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
