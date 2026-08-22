import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertTriangle, Cpu, Copy, Check, BarChart3, RefreshCw, Zap } from 'lucide-react';
import { PROMPT_LAB_DEMOS } from '../data/portfolioData';
import { PromptDemoCase } from '../types';

export const PromptLabDemo: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(PROMPT_LAB_DEMOS[0].id);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const activeDemo = PROMPT_LAB_DEMOS.find(d => d.id === selectedCaseId) || PROMPT_LAB_DEMOS[0];

  const copyText = (section: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const triggerReSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 600);
  };

  return (
    <section id="prompt-lab" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Live Prompt Engineering Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Deterministic Systems vs. Naïve Zero-Shot
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See the exact difference between standard chatbot prompts and production-engineered prompt pipelines with strict schema enforcement, CoVe reflection, and context compression.
          </p>
        </div>

        {/* Lab Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {PROMPT_LAB_DEMOS.map((demo) => (
            <button
              key={demo.id}
              id={`prompt-demo-tab-${demo.id}`}
              onClick={() => {
                setSelectedCaseId(demo.id);
                triggerReSimulation();
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                selectedCaseId === demo.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white/50 backdrop-blur-md text-slate-700 hover:bg-white/80 border border-white/70 shadow-2xs'
              }`}
            >
              <Cpu className="h-4 w-4 text-emerald-400" />
              {demo.title}
            </button>
          ))}
        </div>

        {/* Lab Main Comparison Canvas */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/60 shadow-xl relative overflow-hidden">
          
          {/* Top Scenario Summary Bar */}
          <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                Scenario Objective:
              </span>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                {activeDemo.userGoal}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200 shrink-0">
                {activeDemo.technique}
              </span>
              <button
                onClick={triggerReSimulation}
                className="p-2 rounded-full bg-white/70 text-slate-600 hover:text-slate-900 border border-white/80 hover:bg-white transition-colors shrink-0 shadow-2xs"
                title="Re-run Simulation"
              >
                <RefreshCw className={`h-4 w-4 ${isSimulating ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Side by Side Grid: Prompts and Outputs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left: Naïve Zero-Shot Approach */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Naïve Zero-Shot Approach
                  </h4>
                </div>
                <span className="text-xs font-mono text-rose-700 bg-rose-100/80 px-3 py-0.5 rounded-full border border-rose-200">
                  Fragile &bull; Non-Deterministic
                </span>
              </div>

              {/* Raw Prompt Box */}
              <div className="rounded-2xl bg-white/60 backdrop-blur-sm p-4 border border-white/80 text-xs font-mono text-slate-700 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2 border-b border-slate-200/60 pb-1">
                  <span>INPUT PROMPT</span>
                </div>
                <p className="whitespace-pre-wrap">{activeDemo.rawPrompt}</p>
              </div>

              {/* Raw Output Box */}
              <div className="flex-1 rounded-2xl bg-rose-50/60 backdrop-blur-sm p-4 border border-rose-200/80 text-xs font-mono text-slate-800 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-rose-700 font-bold mb-2 border-b border-rose-200 pb-1">
                  <span className="flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                    RAW UNSTRUCTURED OUTPUT
                  </span>
                </div>
                <pre className="whitespace-pre-wrap leading-relaxed text-[11px]">
                  {activeDemo.rawOutput}
                </pre>
                <div className="mt-4 pt-3 border-t border-rose-200 text-[11px] text-rose-700 flex items-center gap-1.5 font-medium">
                  <span>&times; Requires regex parser &bull; Inconsistent keys &bull; Conversational fluff</span>
                </div>
              </div>
            </div>

            {/* Right: Engineered System Prompt with Guardrails */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Ispa&apos;s Engineered Prompt Architecture
                  </h4>
                </div>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-100/90 px-3 py-0.5 rounded-full border border-emerald-200">
                  Deterministic &bull; Production-Grade
                </span>
              </div>

              {/* Engineered Prompt Box */}
              <div className="rounded-2xl bg-slate-900/95 backdrop-blur-xl p-4 text-slate-200 font-mono text-xs shadow-inner relative border border-slate-800">
                <div className="flex items-center justify-between text-[11px] text-emerald-400 mb-2 border-b border-slate-800 pb-1">
                  <span>SYSTEM GUIDANCE &amp; SCHEMAS</span>
                  <button
                    onClick={() => copyText('optimized-prompt', activeDemo.optimizedPrompt)}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-0.5 rounded-full bg-slate-800"
                  >
                    {copiedSection === 'optimized-prompt' ? (
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
                <pre className="whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto text-[11px]">
                  {activeDemo.optimizedPrompt}
                </pre>
              </div>

              {/* Optimized Output Box */}
              <div className="flex-1 rounded-2xl bg-emerald-50/70 backdrop-blur-sm p-4 border border-emerald-200 text-xs font-mono text-slate-900 shadow-2xs">
                <div className="flex items-center justify-between text-[11px] text-emerald-800 font-bold mb-2 border-b border-emerald-200 pb-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    STRUCTURED PARSEABLE OUTPUT
                  </span>
                  <button
                    onClick={() => copyText('optimized-output', activeDemo.optimizedOutput)}
                    className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors px-2.5 py-0.5 rounded-full bg-white/70"
                  >
                    {copiedSection === 'optimized-output' ? (
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
                <pre className="whitespace-pre-wrap leading-relaxed text-emerald-950 text-[11px]">
                  {activeDemo.optimizedOutput}
                </pre>
                <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-emerald-800 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>100% Valid JSON &bull; Direct DB Insert &bull; Zero Hallucinations</span>
                </div>
              </div>
            </div>

          </div>

          {/* Performance & Token Impact Analysis Banner */}
          <div className="mt-8 pt-6 border-t border-white/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-2xs">
              <div className="text-xs font-mono text-slate-500 uppercase">Token &amp; Parse Overhead</div>
              <div className="text-sm font-bold text-slate-900 mt-1">{activeDemo.analysis.tokenReduction}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-2xs">
              <div className="text-xs font-mono text-slate-500 uppercase">Deterministic Reliability</div>
              <div className="text-sm font-bold text-emerald-700 mt-1">{activeDemo.analysis.reliability}</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/70 shadow-2xs">
              <div className="text-xs font-mono text-slate-500 uppercase">Latency Delta</div>
              <div className="text-sm font-bold text-blue-700 mt-1">{activeDemo.analysis.latencyDelta}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
