import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Server, Sparkles, MapPin, Zap } from 'lucide-react';
import { VERTICALS, VerticalData } from '../data/verticals';
import { VerticalModal } from './VerticalModal';

// Dedicated SVG Motifs for each vertical reflecting their exact technological and physical domain
const VerticalIllustration: React.FC<{ id: string }> = ({ id }) => {
  if (id === 'njure-tech') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-gradient-to-br from-[#061e38] to-[#041224] border border-sky-500/20 p-4 flex flex-col justify-between overflow-hidden">
        {/* Network & Flow Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="flex items-center justify-between text-[11px] font-mono-numbers text-sky-400/80 z-10">
          <span>SCRIBBLE_IT // ITSM_CORE</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            ACTIVE 99.98%
          </span>
        </div>

        {/* Server & Pipeline Architecture Graphic */}
        <div className="relative z-10 my-auto flex items-center justify-center gap-3">
          <div className="flex flex-col gap-1.5 p-2 rounded-md bg-white/5 border border-sky-400/20 text-sky-200">
            <div className="w-16 h-1.5 rounded bg-sky-400/60" />
            <div className="w-10 h-1.5 rounded bg-sky-400/30" />
            <div className="w-14 h-1.5 rounded bg-sky-400/40" />
          </div>

          <div className="w-8 h-[1px] bg-sky-400/40 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-sky-400 bg-[#07192f]" />
          </div>

          <div className="flex flex-col items-center p-2 rounded-md bg-sky-950/80 border border-sky-400/40 text-white text-[10px] font-mono-numbers">
            <Server className="w-5 h-5 text-sky-400 mb-1" />
            <span>VOICE AI</span>
          </div>

          <div className="w-8 h-[1px] bg-sky-400/40 relative">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-sky-400 bg-[#07192f]" />
          </div>

          <div className="flex flex-col gap-1.5 p-2 rounded-md bg-white/5 border border-sky-400/20 text-sky-200">
            <div className="w-12 h-1.5 rounded bg-sky-400/50" />
            <div className="w-16 h-1.5 rounded bg-sky-400/60" />
            <div className="w-8 h-1.5 rounded bg-sky-400/30" />
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 z-10">
          <span>Infrastructure Automation</span>
          <span className="text-sky-300 font-mono-numbers">&lt;450ms TTS/ASR</span>
        </div>
      </div>
    );
  }

  if (id === 'vastrathalam') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-gradient-to-br from-[#241708] to-[#140b02] border border-amber-500/20 p-4 flex flex-col justify-between overflow-hidden">
        {/* Subtle Kasavu Gold Weave Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <div className="flex items-center justify-between text-[11px] font-mono-numbers text-amber-300/80 z-10">
          <span>KERALA HANDLOOM HERITAGE</span>
          <span>BALARAMAPURAM &amp; CHENDAMANGALAM</span>
        </div>

        {/* Textile & Saree Zari Graphic */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center">
          <div className="w-48 h-12 border-y-2 border-amber-400/60 relative flex items-center justify-center bg-amber-950/40">
            <div className="absolute inset-x-0 top-1 h-[1px] bg-amber-300/40" />
            <div className="absolute inset-x-0 bottom-1 h-[1px] bg-amber-300/40" />
            <div className="flex items-center gap-3 text-amber-200 text-xs tracking-widest uppercase font-medium">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Kasavu Gold Zari</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-300 z-10">
          <span>100% Traditional Cotton &amp; Silk</span>
          <span className="text-amber-300">D2C Digital Platform</span>
        </div>
      </div>
    );
  }

  if (id === 'dozo') {
    return (
      <div className="relative w-full h-44 rounded-lg bg-gradient-to-br from-[#062419] to-[#03130d] border border-emerald-500/20 p-4 flex flex-col justify-between overflow-hidden">
        {/* Hyperlocal Radar / Grid Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="flex items-center justify-between text-[11px] font-mono-numbers text-emerald-400/80 z-10">
          <span>HYPERLOCAL TRADE NETWORK</span>
          <span>5KM PROXIMITY RADIUS</span>
        </div>

        {/* Geographic Community Nodes Graphic */}
        <div className="relative z-10 my-auto flex items-center justify-center">
          <div className="relative flex items-center justify-center w-28 h-20">
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping opacity-25" />
            <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
            <div className="p-2.5 rounded-full bg-emerald-950/80 border border-emerald-400/60 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            
            {/* Satellite Gig Work Nodes */}
            <div className="absolute -top-1 -right-2 px-1.5 py-0.5 rounded bg-emerald-900/80 border border-emerald-400/30 text-[9px] text-emerald-200">
              Techs
            </div>
            <div className="absolute -bottom-1 -left-2 px-1.5 py-0.5 rounded bg-emerald-900/80 border border-emerald-400/30 text-[9px] text-emerald-200">
              Trades
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-300 z-10">
          <span>On-Demand Gig Discovery</span>
          <span className="text-emerald-300 font-mono-numbers">Instant Escrow</span>
        </div>
      </div>
    );
  }

  // B+ Energies
  return (
    <div className="relative w-full h-44 rounded-lg bg-gradient-to-br from-[#0a203f] to-[#040e1e] border border-blue-500/20 p-4 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="flex items-center justify-between text-[11px] font-mono-numbers text-blue-400/80 z-10">
        <span>CLEAN MOBILITY R&amp;D</span>
        <span>HYBRID POWERTRAIN // TWO-WHEELER</span>
      </div>

      {/* Powertrain & Battery Schematic */}
      <div className="relative z-10 my-auto flex items-center justify-center gap-3">
        <div className="px-2.5 py-1.5 rounded-md bg-blue-950/80 border border-blue-400/40 text-blue-300 text-center">
          <div className="text-[10px] font-mono-numbers">ICE CORE</div>
          <div className="text-[9px] text-slate-400">Cruising</div>
        </div>

        <div className="flex items-center text-blue-400">
          <Zap className="w-4 h-4 animate-pulse" />
        </div>

        <div className="px-2.5 py-1.5 rounded-md bg-sky-950/80 border border-sky-400/40 text-sky-300 text-center">
          <div className="text-[10px] font-mono-numbers">EV TORQUE</div>
          <div className="text-[9px] text-slate-400">Urban Boost</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-300 z-10">
        <span>Regenerative Kinetic Braking</span>
        <span className="text-blue-300 font-mono-numbers">-50% Fuel Target</span>
      </div>
    </div>
  );
};

interface VerticalsProps {
  onSelectInquiryVertical?: (verticalName: string) => void;
}

export const Verticals: React.FC<VerticalsProps> = ({ onSelectInquiryVertical }) => {
  const [selectedVertical, setSelectedVertical] = useState<VerticalData | null>(null);

  const handleInquire = (verticalName: string) => {
    if (onSelectInquiryVertical) {
      onSelectInquiryVertical(verticalName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="verticals" className="py-20 md:py-28 bg-[#07192f] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              Enterprise Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our Verticals
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
              Four specialized operating divisions united by rigorous technical execution,
              market adaptability, and scalable domain leadership.
            </p>
          </div>

          <div className="text-xs text-slate-400 shrink-0">
            Click any vertical to inspect technical architecture
          </div>
        </div>

        {/* 4 Cards Grid Layout (2x2 on Desktop, 1-col on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VERTICALS.map((vertical) => {
            return (
              <div
                key={vertical.id}
                className="group relative rounded-2xl bg-[#081d36] border border-white/10 hover:border-white/25 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div>
                  {/* Visual Header / Illustration */}
                  <VerticalIllustration id={vertical.id} />

                  {/* Card Title & Meta Block */}
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-medium text-slate-400">
                        {vertical.division}
                      </div>
                      <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-blue-300 transition-colors">
                        {vertical.name}
                      </h3>
                    </div>

                    {/* Status Badge (clean unboxed text per guidelines) */}
                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono-numbers uppercase text-blue-300">
                        {vertical.status}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {vertical.summary}
                  </p>

                  {/* Clean Unboxed Key Features */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                    {vertical.keyInitiatives.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-blue-400" aria-hidden="true">·</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  {vertical.externalLink ? (
                    <a
                      href={vertical.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                      aria-label={`Visit ${vertical.name} website (tech.njuregroup.in)`}
                    >
                      <span>tech.njuregroup.in</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono-numbers">
                      PORTFOLIO ENTITY
                    </span>
                  )}

                  <button
                    onClick={() => setSelectedVertical(vertical)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Inspect Venture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Venture Deep-Dive Modal */}
      {selectedVertical && (
        <VerticalModal
          vertical={selectedVertical}
          onClose={() => setSelectedVertical(null)}
          onInquire={handleInquire}
        />
      )}
    </section>
  );
};

export default Verticals;
