import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare, Clock, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: 'prompt-and-fullstack',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        serviceInterest: 'prompt-and-fullstack',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to Build Next-Gen Intelligent Web Apps?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need deterministic LLM prompt pipelines, high-concurrency full-stack architectures, or technical leadership, let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info, Copy Email, Socials & Timezone */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="bg-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/60 shadow-xs relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shadow-2xs">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Email</h3>
                  <p className="text-xs text-slate-500">Fast response guaranteed</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-between gap-3 shadow-2xs">
                <span className="text-sm font-mono font-bold text-slate-800 truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  id="copy-email-btn"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-white/80 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold shadow-2xs transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>

              {/* Status and Timezone */}
              <div className="mt-6 pt-6 border-t border-white/60 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span><strong>Status:</strong> Available for Select Projects &amp; Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span><strong>Turnaround:</strong> Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-600" />
                  <span><strong>Location:</strong> Remote / Global Availability</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-white/60 flex items-center gap-3">
                <a
                  id="contact-github-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-colors shadow-2xs"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  id="contact-linkedin-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-xs font-semibold transition-colors shadow-2xs"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>

            {/* Quick Engineering Consultation Card */}
            <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 text-emerald-700" />
                Prompt Audits &amp; Architecture Reviews
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have an existing LLM pipeline suffering from hallucinations, high latency, or excessive OpenAI/Gemini costs? Let&apos;s run a structured audit.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.005} className="w-full">
              <div className="bg-white/40 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/60 shadow-xl relative">
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and I&apos;ll get back to you promptly.
                </p>

                {formStatus === 'success' ? (
                  <div className="p-8 rounded-3xl bg-emerald-50/90 backdrop-blur-sm border border-emerald-200 text-center space-y-3">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <Check className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-900">Message Received!</h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you for reaching out. I have received your message and will reply to you shortly at your email.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 px-6 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-2xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block mb-1.5">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block mb-1.5">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="text-xs font-bold text-slate-700 block mb-1.5">
                        Area of Collaboration
                      </label>
                      <select
                        id="contact-service"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden transition-all shadow-2xs"
                      >
                        <option value="prompt-and-fullstack">Prompt Engineering &times; Full-Stack App</option>
                        <option value="prompt-architecture">Custom System Prompts &amp; RAG Architecture</option>
                        <option value="frontend-3d">Frontend Development &amp; 3D UI / Next.js</option>
                        <option value="backend-fastapi">Backend Microservices &amp; Vector Databases</option>
                        <option value="hiring-opportunity">Full-Time / Contract Engineering Role</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block mb-1.5">
                        Project Details or Inquiry *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your goals, tech stack, timeline, or challenge..."
                        className="w-full px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/90 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden transition-all resize-none shadow-2xs"
                      />
                    </div>

                    <button
                      id="submit-contact-form"
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-md shadow-slate-900/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <Sparkles className="h-4 w-4 animate-spin" /> Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
