import React, { useState } from 'react';
import { X, ExternalLink, Github, Sparkles, Cpu, Layers, CheckCircle2, Copy, Check, BarChart2, Shield } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'prompt' | 'demo'>('overview');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!project) return null;

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handleSimulatedRun = () => {
    setIsProcessing(true);
    setDemoOutput(null);
    setTimeout(() => {
      setIsProcessing(false);
      if (project.id === 'cogniflow-ai') {
        setDemoOutput(`[Agent Graph Initialized]
- ResearcherAgent: Retrieved 4 context vectors from Pinecone (score: 0.94)
- CriticAgent: Validated fact citations against source document #DOC-849
- SynthesizerAgent: Generated final verified briefing in 1,120ms (0 hallucinations detected).`);
      } else if (project.id === 'promptcraft-studio') {
        setDemoOutput(`[Evaluation Matrix Complete]
- 50 Test Cases Evaluated across Gemini 2.0 & GPT-4o
- Accuracy: 98.4% | Determinism: 100% | Latency: 340ms
- DSPy Teleprompter recommended: 4 Few-Shot exemplars (Saved 38% tokens).`);
      } else {
        setDemoOutput(`[AST Security Scan Complete]
- Identified: Async state update on unmounted component (Line 42)
- Patch Generated: Added AbortController cleanup handler
- Verification: CI unit test suite passed (Exit Code 0).`);
      }
    }, 1200);
  };

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-4xl bg-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/90 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-white/40 backdrop-blur-md border-b border-white/60">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-200">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                {project.tagline}
              </p>
            </div>

            <button
              id="close-project-modal"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/70 text-slate-500 hover:text-slate-900 border border-white/80 hover:bg-white shadow-2xs transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Tab Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-white/50 backdrop-blur-md rounded-full border border-white/60 mt-6 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Overview &amp; Metrics
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === 'architecture'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === 'prompt'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Prompt Strategy
            </button>
            <button
              onClick={() => setActiveTab('demo')}
              className={`px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                activeTab === 'demo'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Live Simulator
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Project Deep Dive
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metrics Grid */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BarChart2 className="h-4 w-4 text-emerald-600" />
                  Key Production Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 text-center shadow-2xs">
                      <div className="text-2xl font-extrabold text-emerald-700 font-mono">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">{metric.label}</div>
                      {metric.subtext && (
                        <div className="text-[11px] text-slate-500 mt-0.5">{metric.subtext}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-white/70 text-slate-800 text-xs font-mono font-medium border border-white/80 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-blue-600" />
                Technical Architecture Highlights
              </h4>
              <div className="space-y-3">
                {project.architectureHighlights.map((arch, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex items-start gap-3 shadow-2xs"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{arch}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {project.promptStrategy.title}
                  </h4>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                    Technique: {project.promptStrategy.technique}
                  </p>
                </div>
                {project.promptStrategy.snippet && (
                  <button
                    onClick={() => copyPrompt(project.promptStrategy.snippet!)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-full border border-white/80 bg-white/60 hover:bg-white shadow-2xs"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copy Prompt
                      </>
                    )}
                  </button>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {project.promptStrategy.description}
              </p>

              {project.promptStrategy.snippet && (
                <div className="rounded-2xl bg-slate-900/95 backdrop-blur-xl p-4 text-slate-200 font-mono text-xs shadow-inner border border-slate-800">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    {project.promptStrategy.snippet}
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-900 text-xs">
                <strong>Simulated Execution Test:</strong> Test the prompt pipeline and agent state machine for <strong>{project.title}</strong>.
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Simulated Input Query:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder={`e.g. "Execute verification for ${project.title} workflow"`}
                    className="flex-1 px-4 py-2.5 rounded-full border border-white/80 bg-white/70 backdrop-blur-sm text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                  <button
                    onClick={handleSimulatedRun}
                    disabled={isProcessing}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center gap-1.5 shadow-2xs"
                  >
                    {isProcessing ? (
                      <>
                        <Sparkles className="h-3.5 w-3.5 animate-spin" /> Running...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-3.5 w-3.5" /> Run Test
                      </>
                    )}
                  </button>
                </div>
              </div>

              {demoOutput && (
                <div className="rounded-2xl bg-slate-900/95 backdrop-blur-xl p-4 text-slate-200 font-mono text-xs shadow-inner border border-slate-800">
                  <div className="text-[10px] text-emerald-400 font-bold uppercase mb-2 border-b border-slate-800 pb-1">
                    AGENT EXECUTION STREAM TELEMETRY
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed text-emerald-300">
                    {demoOutput}
                  </pre>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-white/40 backdrop-blur-md border-t border-white/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white/70 border border-white/90 text-slate-800 font-semibold text-xs hover:bg-white transition-colors shadow-2xs"
              >
                <Github className="h-4 w-4" /> View Source
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 shadow-md shadow-slate-900/20 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-slate-600 hover:text-slate-900 font-semibold text-xs transition-colors hover:bg-white/50"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
