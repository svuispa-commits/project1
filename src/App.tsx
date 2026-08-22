import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PromptLabDemo } from './components/PromptLabDemo';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen frosted-canvas-bg text-slate-800 selection:bg-emerald-200 selection:text-slate-900 flex flex-col relative overflow-x-hidden">
      {/* Ambient Large Frosted Glow Lights */}
      <div className="fixed top-12 right-[-80px] w-[550px] h-[550px] bg-emerald-200/25 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] left-[-100px] w-[480px] h-[480px] bg-blue-200/25 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 relative z-10">
        {/* Hero Section with 3D Three.js Neural Network */}
        <HeroSection />

        {/* About & Dual-Threat Synergy Workflow */}
        <AboutSection />

        {/* 3D Interactive Skills Grid */}
        <SkillsSection />

        {/* Featured Full-Stack & AI Projects */}
        <ProjectsSection />

        {/* Live Interactive Prompt Engineering Lab */}
        <PromptLabDemo />

        {/* Professional Experience & Timeline */}
        <ExperienceTimeline />

        {/* Contact Section & Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
