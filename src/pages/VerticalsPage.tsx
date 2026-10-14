import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Heart, Sparkles, MapPin, Cpu, Zap, CheckCircle2 } from 'lucide-react';
import { VERTICALS, VerticalData } from '../data/verticals';

export const VerticalsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredVerticals = activeTab === 'all' 
    ? VERTICALS 
    : VERTICALS.filter(v => v.id === activeTab);

  return (
    <div className="bg-transparent bg-corporate-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Enterprise Operating Divisions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Our Ecosystem &amp; Operating Verticals
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Four specialized business divisions united by a single vision: engineering scalable solutions
            with deep reverence for people, craft, and sustainability.
          </p>
        </div>

        {/* Live Venture Quick Links Banner */}
        <div className="p-6 rounded-2xl bg-[#092548] border border-white/15 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <div className="text-xs text-sky-400 font-semibold uppercase tracking-wider">
                Enterprise Technology Portal
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Njure Tech
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                ScribbleIT ITSM Suite &amp; Conversational Voice AI
              </p>
            </div>
            <a
              href="https://tech.njuregroup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>tech.njuregroup.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
            <div>
              <div className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                Kerala Handloom Heritage Portal
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Vastrathalam
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Kasavu Sarees, Handlooms &amp; Bespoke Ethnic Drapes
              </p>
            </div>
            <a
              href="https://vastrathalam.njuregroup.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>vastrathalam.njuregroup.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#081d36] rounded-xl border border-white/10 max-w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All 4 Verticals
          </button>
          <button
            onClick={() => setActiveTab('njure-tech')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'njure-tech'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Njure Tech (IT &amp; AI)
          </button>
          <button
            onClick={() => setActiveTab('vastrathalam')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'vastrathalam'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Vastrathalam (Handlooms)
          </button>
          <button
            onClick={() => setActiveTab('dozo')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'dozo'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Dozo (Hyperlocal)
          </button>
          <button
            onClick={() => setActiveTab('b-plus-energies')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'b-plus-energies'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            B+ Energies (Clean Mobility)
          </button>
        </div>

        {/* Detailed Vertical Cards */}
        <div className="space-y-12">
          {filteredVerticals.map((vertical) => (
            <div
              key={vertical.id}
              id={vertical.id}
              className="p-8 md:p-10 rounded-2xl bg-[#081d36] border border-white/15 space-y-8 shadow-xl"
            >
              {/* Card Header & External Link Action */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                      {vertical.division}
                    </span>
                    <span className="text-white/20" aria-hidden="true">·</span>
                    <span className="text-xs font-mono-numbers text-blue-300 uppercase">
                      {vertical.status}
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white mt-2">
                    {vertical.name}
                  </h2>
                  <p className="text-base text-amber-200/90 font-medium mt-1">
                    {vertical.tagline}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  {vertical.externalLink && (
                    <a
                      href={vertical.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
                    >
                      <span>Visit {vertical.externalLinkLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to={`/contact?vertical=${encodeURIComponent(vertical.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Human Mission & Emotional Narrative */}
              <div className="p-6 rounded-xl bg-blue-950/30 border border-blue-400/15 flex items-start gap-4">
                <Heart className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                    The Human Mission
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {vertical.humanMission}
                  </p>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm leading-relaxed">
                  <h3 className="text-base font-semibold text-white">
                    Operational Blueprint &amp; Focus
                  </h3>
                  <p>{vertical.description}</p>

                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Strategic Initiatives
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vertical.keyInitiatives.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2 rounded bg-white/[0.03]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Real-World Human Impact Stories */}
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="text-base font-semibold text-white">
                    Real-World Human Impact
                  </h3>
                  <div className="space-y-3">
                    {vertical.impactStories.map((story, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-xl bg-[#092548] border border-white/10 space-y-1.5">
                        <div className="text-xs font-semibold text-blue-300">
                          {story.title}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {story.story}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quantitative Trust Metric */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    {vertical.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-sm font-bold text-white font-mono-numbers">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default VerticalsPage;
