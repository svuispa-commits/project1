import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'prompt-lab', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: '3D Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Prompt Lab', href: '#prompt-lab', id: 'prompt-lab' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="brand-logo"
          href="#hero"
          className="group flex items-center gap-2 text-slate-900 font-extrabold text-xl tracking-tighter hover:opacity-90 transition-opacity"
        >
          <div className="h-8 w-8 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-slate-900 tracking-tighter text-lg">
              ISPA MONDAL
            </span>
            <span className="text-emerald-500 text-xl leading-none font-black">.</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`nav-link-${link.id}`}
              href={link.href}
              className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-600 hover:text-slate-900 bg-white/50 backdrop-blur-md hover:bg-white/80 border border-white/60 rounded-full transition-all shadow-2xs"
            title="GitHub Profile"
          >
            <Terminal className="h-4 w-4" />
          </a>
          <a
            id="nav-cta-contact"
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/15 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 bg-white/60 backdrop-blur-md border border-white/60 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/60 backdrop-blur-xl border border-white/70 px-6 py-5 mt-2 mx-4 rounded-3xl shadow-xl flex flex-col gap-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                activeSection === link.id
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-white/60'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/60 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xs transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
