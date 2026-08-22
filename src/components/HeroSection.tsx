import React, { useState } from 'react';
import { Sparkles, ArrowDown, ArrowUpRight, Cpu, Layers, Terminal, CheckCircle2, Play, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { TiltCard } from './TiltCard';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'architecture' | 'code'>('prompt');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const samplePrompt = `System: You are an Autonomous Architecture Critic Agent.
Instruction: Deconstruct user requirements into a reactive full-stack specification.
Rules:
1. Enforce strict type definitions with Zero-Hallucination output.
2. Formulate state management via React 19 streaming hooks.
3. Target sub-second p95 latency on vector RAG lookups.`;

  const copyPromptText = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D WebGL Three.js Neural Network Canvas */}
      <ThreeHeroCanvas />

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Subtle Glowing Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-200/20 via-sky-200/20 to-indigo-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines, Bio Intro & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xs text-xs font-semibold text-slate-800"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-slate-800 font-medium">Prompt Engineering &times; Full Stack Architecture</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500 font-black">AI Logic</span> with Full Stack Architecture.
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed"
            >
              Hi, I&apos;m <strong className="font-semibold text-slate-800">{PERSONAL_INFO.name}</strong>. I craft precise prompts and scalable code to build the next generation of intelligent web apps.
            </p>

            {/* Dual CTAs & Quick Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-base hover:bg-slate-800 shadow-lg shadow-slate-900/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowDown className="h-4.5 w-4.5" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/60 backdrop-blur-md text-slate-800 font-semibold text-base border border-slate-200/80 hover:bg-white/90 shadow-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4.5 w-4.5 text-emerald-600" />
              </a>

              <a
                id="hero-cta-prompt-lab"
                href="#prompt-lab"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 text-slate-700 font-semibold text-sm hover:bg-white/80 hover:text-emerald-700 transition-all shadow-2xs"
              >
                <Play className="h-3.5 w-3.5 text-emerald-600 fill-emerald-600" />
                Try Live Prompt Lab
              </a>
            </div>

            {/* Frosted Intersection Statement Card */}
            <div className="w-full p-5 sm:p-6 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-xs">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                The Intersection
              </h3>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                &ldquo;I believe the future of software lies in the seamless chain of LLM orchestration and robust, reactive user interfaces.&rdquo;
              </p>
            </div>

            {/* Micro Badges / Tech Matrix */}
            <div className="pt-2 w-full flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600">
              <span className="text-slate-400 font-sans text-xs mr-1 font-semibold uppercase tracking-wider">Core Tooling:</span>
              <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">System Prompts</span>
              <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">LangChain &amp; RAG</span>
              <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">DSPy</span>
              <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">React 19 &amp; Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/70 shadow-2xs">Python / FastAPI</span>
            </div>
          </div>

          {/* Right Column: 3D Interactive Synthesis Console */}
          <div className="lg:col-span-5 w-full">
            <TiltCard maxTilt={8} scale={1.015} className="w-full">
              <div
                id="hero-interactive-card"
                className="bg-white/40 backdrop-blur-xl rounded-3xl p-5 sm:p-7 shadow-xl border border-white/60 relative overflow-hidden"
              >
                {/* Top Window Header */}
                <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-xs font-mono font-medium text-slate-500">
                      synapse_engine_v3.ts
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200">
                      Live Bridge
                    </span>
                  </div>
                </div>

                {/* Tab Switcher: Prompt Logic vs Architecture vs Streaming Output */}
                <div className="flex items-center gap-1.5 p-1 bg-white/50 backdrop-blur-md rounded-2xl mb-4 text-xs font-medium border border-white/60">
                  <button
                    id="hero-tab-prompt"
                    onClick={() => setActiveTab('prompt')}
                    className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'prompt'
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    Prompt Tuning
                  </button>
                  <button
                    id="hero-tab-architecture"
                    onClick={() => setActiveTab('architecture')}
                    className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'architecture'
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <Layers className="h-3.5 w-3.5 text-blue-400" />
                    Full Stack DAG
                  </button>
                  <button
                    id="hero-tab-code"
                    onClick={() => setActiveTab('code')}
                    className={`flex-1 py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                      activeTab === 'code'
                        ? 'bg-slate-900 text-white shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                    }`}
                  >
                    <Terminal className="h-3.5 w-3.5 text-purple-400" />
                    API Stream
                  </button>
                </div>

                {/* Dynamic Content Panel */}
                <div className="min-h-[220px] rounded-2xl bg-slate-900/90 backdrop-blur-xl p-4 text-slate-100 font-mono text-xs shadow-inner relative overflow-hidden border border-slate-700/60">
                  
                  {/* Subtle Neon Accents inside terminal */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                  {activeTab === 'prompt' && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-emerald-300 border-b border-slate-800 pb-1.5">
                        <span>// Optimized System Prompt</span>
                        <button
                          onClick={copyPromptText}
                          className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        >
                          {copiedPrompt ? (
                            <>
                              <Check className="h-3 w-3 text-emerald-400" /> Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" /> Copy
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-auto text-[11px]">
                        <span className="text-purple-400">role:</span> <span className="text-amber-300">&quot;Autonomous System Architect&quot;</span>{'\n'}
                        <span className="text-purple-400">constraints:</span>{'\n'}
                        {'  '}- <span className="text-emerald-300">&quot;Pydantic JSON schema strictness&quot;</span>{'\n'}
                        {'  '}- <span className="text-emerald-300">&quot;Chain-of-Verification logic step&quot;</span>{'\n'}
                        {'  '}- <span className="text-emerald-300">&quot;Token budget: &lt;180 tokens/eval&quot;</span>{'\n'}
                        <span className="text-purple-400">execution_mode:</span> <span className="text-sky-300">&quot;Deterministic Multi-Agent&quot;</span>
                      </pre>
                      <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 mt-2">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" /> Deterministic Output: 100%
                        </span>
                        <span>Eval Score: 99.4/100</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'architecture' && (
                    <div className="space-y-2.5">
                      <div className="text-[11px] text-sky-300 border-b border-slate-800 pb-1.5">
                        // Pipeline Workflow DAG
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-emerald-300 font-semibold">1. Prompt Chaining</span>
                          <span className="text-slate-400 text-[10px]">Few-Shot + DSPy</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-sky-300 font-semibold">2. Hybrid RAG Vector Retrieval</span>
                          <span className="text-slate-400 text-[10px]">Pinecone + PGVector</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-indigo-300 font-semibold">3. React 19 Streaming UI</span>
                          <span className="text-slate-400 text-[10px]">SSE Token Chunks</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'code' && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-indigo-300 border-b border-slate-800 pb-1.5">
                        // Python FastAPI + LangGraph Agent
                      </div>
                      <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed text-[11px]">
                        <span className="text-rose-400">@app.post</span>(<span className="text-amber-300">&quot;/v1/synthesize&quot;</span>){'\n'}
                        <span className="text-sky-400">async def</span> <span className="text-yellow-300">execute_chain</span>(req: PromptSchema):{'\n'}
                        {'    '}state = <span className="text-sky-400">await</span> agent_dag.invoke(req){'\n'}
                        {'    '}<span className="text-rose-400">return</span> StreamingResponse({'\n'}
                        {'        '}state.stream_tokens(),{'\n'}
                        {'        '}media_type=<span className="text-amber-300">&quot;text/event-stream&quot;</span>{'\n'}
                        {'    '})
                      </pre>
                    </div>
                  )}

                </div>

                {/* Bottom Metric Footer inside Card */}
                <div className="mt-4 pt-3 border-t border-white/60 grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-2.5 border border-white/70 shadow-2xs">
                    <div className="text-xs text-slate-500 font-medium">Prompt Accuracy</div>
                    <div className="text-sm font-bold text-emerald-600 font-mono">99.4%</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-2.5 border border-white/70 shadow-2xs">
                    <div className="text-xs text-slate-500 font-medium">Token Efficiency</div>
                    <div className="text-sm font-bold text-blue-600 font-mono">+42%</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-2.5 border border-white/70 shadow-2xs">
                    <div className="text-xs text-slate-500 font-medium">UI Frame Rate</div>
                    <div className="text-sm font-bold text-purple-600 font-mono">60 FPS</div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
