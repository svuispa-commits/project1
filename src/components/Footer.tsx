import React from 'react';
import { Sparkles, ArrowUp, Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Prompt Engineer &amp; Full Stack Developer. Crafting precise, deterministic system prompts and high-performance reactive web applications.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Prompt Engine Status: Online (0% Hallucination)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                &gt; About Ispa
              </a>
              <a href="#skills" className="text-slate-400 hover:text-white transition-colors">
                &gt; 3D Skill Grid
              </a>
              <a href="#projects" className="text-slate-400 hover:text-white transition-colors">
                &gt; Featured Projects
              </a>
              <a href="#prompt-lab" className="text-slate-400 hover:text-white transition-colors">
                &gt; Prompt Lab
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                &gt; Contact
              </a>
            </div>
          </div>

          {/* Connect & Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <div className="space-y-2 text-left md:text-right">
              <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Direct Channels
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors shadow-2xs"
            >
              Back to Top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Code2 className="h-3.5 w-3.5 text-emerald-400 inline" />
            <span>&amp; 3D WebGL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
