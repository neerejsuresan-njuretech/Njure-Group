import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import { VERTICALS } from '../data/verticals';

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
          <div className="text-xs font-semibold tracking-wider text-amber-300">
            Enterprise Operating Divisions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Our Ecosystem &amp; Operating Verticals
          </h1>
          <p className="text-lg text-slate-200/90 leading-relaxed">
            Four specialized business divisions united by a single vision: engineering scalable solutions
            with deep reverence for people, craft, and sustainability.
          </p>
        </div>

        {/* Live Venture Quick Links Banner */}
        <div className="p-6 rounded-2xl bg-[#0b261d] border border-amber-200/20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-amber-200/15">
            <div>
              <div className="text-xs text-amber-300 font-semibold tracking-wider">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-red-700 hover:bg-red-600 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>tech.njuregroup.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-amber-200/15">
            <div>
              <div className="text-xs text-amber-300 font-semibold tracking-wider">
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
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#061812] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>vastrathalam.njuregroup.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#0b261d] rounded-xl border border-amber-200/15 max-w-fit">
          {[
            { id: 'all', label: 'All 4 Verticals' },
            { id: 'njure-tech', label: 'Njure Tech (IT & AI)' },
            { id: 'vastrathalam', label: 'Vastrathalam (Handlooms)' },
            { id: 'dozo', label: 'Dozo (Hyperlocal)' },
            { id: 'b-plus-energies', label: 'B+ Energies (Clean Mobility)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-red-700 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detailed Vertical Cards */}
        <div className="space-y-12">
          {filteredVerticals.map((vertical) => (
            <div
              key={vertical.id}
              id={vertical.id}
              className="p-8 md:p-10 rounded-2xl bg-[#0b261d] border border-amber-200/15 space-y-8 shadow-xl"
            >
              {/* Card Header & External Link Action */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-amber-200/10">
                <div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-300 font-semibold">
                      {vertical.division}
                    </span>
                    <span className="text-amber-200/30" aria-hidden="true">·</span>
                    <span className="font-mono-numbers text-amber-300">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-red-700 hover:bg-red-600 rounded-lg shadow-md transition-colors whitespace-nowrap"
                    >
                      <span>Visit {vertical.externalLinkLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to={`/contact/?vertical=${encodeURIComponent(vertical.name)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-amber-100 hover:text-white bg-white/5 hover:bg-white/10 border border-amber-200/20 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Human Mission & Emotional Narrative */}
              <div className="p-6 rounded-xl bg-[#0e3024]/80 border border-amber-300/15 flex items-start gap-4">
                <Heart className="w-5 h-5 text-rose-400 mt-1 shrink-0" />
                <div className="space-y-1">
                  <div className="text-xs tracking-wider text-amber-300 font-semibold">
                    The Human Mission
                  </div>
                  <p className="text-slate-100 text-sm leading-relaxed">
                    {vertical.humanMission}
                  </p>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4 text-slate-200 text-sm leading-relaxed">
                  <h3 className="text-base font-semibold text-white">
                    Operational Blueprint &amp; Focus
                  </h3>
                  <p>{vertical.description}</p>

                  <div className="pt-2">
                    <h4 className="text-xs tracking-wider text-amber-200/80 font-semibold mb-2">
                      Key Strategic Initiatives
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {vertical.keyInitiatives.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 p-2 rounded bg-white/[0.03]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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
                      <div key={sIdx} className="p-4 rounded-xl bg-[#0e3024] border border-amber-200/15 space-y-1.5">
                        <div className="text-xs font-semibold text-amber-300">
                          {story.title}
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          {story.story}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Quantitative Trust Metric */}
                  <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                    {vertical.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg bg-white/5 border border-amber-200/10">
                        <div className="text-sm font-bold text-white font-mono-numbers">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-300 leading-tight mt-0.5">
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
