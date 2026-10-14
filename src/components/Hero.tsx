import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, Compass, Layers } from 'lucide-react';
import { NjureEmblem } from './Logo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#07192f] bg-blueprint-grid pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10">
      {/* Ambient Radial Gradient Accent */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,116,144,0.25),rgba(7,25,47,0))]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tagline Lockup: The Blueprint for a Bolder World */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-400/20 backdrop-blur-sm">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-blue-300">
                Strategic Enterprise Ecosystem
              </span>
              <span className="text-white/20" aria-hidden="true">/</span>
              <span className="font-script text-base text-amber-200 tracking-wide">
                The Blueprint for a Bolder World
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl [text-wrap:balance]">
              Engineering the Future.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-white">
                Empowering Commerce.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Njure Group is a diversified enterprise ecosystem driving innovation across
              enterprise technology, digital apparel retail, hyperlocal marketplaces, and
              sustainable clean energy.
            </p>

            {/* Strategic Trust Signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>HQ: Kozhikode, Kerala</span>
              </span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>4 Specialized Verticals</span>
              </span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Execution-First Thesis</span>
              </span>
            </div>

            {/* Dual Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('verticals')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Verticals</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg backdrop-blur-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Get in Touch</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Anchor — Authentic Blueprint Emblem Lockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-gradient-to-b from-[#0c2f58]/80 to-[#071a33]/90 border border-white/15 p-8 flex flex-col items-center justify-center shadow-2xl backdrop-blur-md overflow-hidden group">
              
              {/* Concentric Blueprint Circles */}
              <div 
                aria-hidden="true" 
                className="absolute inset-4 rounded-full border border-blue-400/10 pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-12 rounded-full border border-dashed border-blue-400/15 pointer-events-none" 
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-20 rounded-full border border-blue-300/10 pointer-events-none" 
              />

              {/* Crosshair Technical Coordinate Marks */}
              <div className="absolute top-4 left-4 text-[10px] font-mono-numbers text-blue-400/40">
                11°27&apos;N · 75°49&apos;E
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono-numbers text-blue-400/40">
                SYS_VER: 2026.4
              </div>
              <div className="absolute bottom-4 left-4 text-[10px] font-mono-numbers text-blue-400/40">
                ENT_ID: NJR-01
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono-numbers text-blue-400/40">
                KERALA, IND
              </div>

              {/* Central Large Emblem Replica */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-all duration-500" />
                  <NjureEmblem size={124} className="relative shadow-2xl" />
                </div>

                <div className="mt-5 space-y-1">
                  <span className="block text-2xl font-bold tracking-tight text-white font-sans">
                    Njure Group
                  </span>
                  <p className="font-script text-lg text-amber-200 tracking-wide">
                    The Blueprint for a Bolder World
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>Multidisciplinary Venture Conglomerate</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Item Strategic KPI Strip Below Hero */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              4
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Operating Verticals
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Technical Ownership
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              673612
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              Kozhikode HQ PIN
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              &lt;450ms
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-400">
              AI Voice Pipeline
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
