import React from 'react';
import { Cpu, Network, Globe2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Automation-First Approach',
      icon: Cpu,
      summary:
        'Eliminating manual friction across technical infrastructure, operational workflows, and software lifecycle pipelines.',
      description:
        'Across all business units, our architecture prioritizes deterministic automation. From ScribbleIT ITSM orchestrations to automated gig matching algorithms, we design systems that self-heal, scale smoothly, and reduce repetitive human toil while maximizing precision.'
    },
    {
      index: '02',
      title: 'Scalable Ecosystem',
      icon: Network,
      summary:
        'A multi-venture architectural model where each operating vertical shares core infrastructure, strategic capital, and intelligence.',
      description:
        'Rather than isolated experiments, Njure Group ventures function as an interconnected mesh. Operational learnings, technical components, and market logistics developed in one vertical cross-pollinate across digital commerce, enterprise software, and mobility engineering.'
    },
    {
      index: '03',
      title: 'Global Perspective with Local Roots',
      icon: Globe2,
      summary:
        'Grounding enterprise-grade engineering standards in deep grassroots context and authentic regional communities.',
      description:
        'Operating from Vattoli Bazar, Kozhikode, we celebrate Kerala’s rich mercantile traditions, handloom craftsmanship, and local trade ecosystems. We match international performance standards with deep local accountability, creating sustainable long-term economic value.'
    }
  ];

  return (
    <section id="vision" className="py-20 md:py-28 bg-[#081d36]/80 backdrop-blur-sm border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Operating Thesis
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Core Philosophy &amp; Strengths
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The fundamental architectural principles that govern how Njure Group initiates,
            engineers, and scales diversified ventures.
          </p>
        </div>

        {/* 3-Column Layout with Clean Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.index}
                className="p-8 rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Editorial Index Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-blue-400 font-mono-numbers">
                      {pillar.index}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-blue-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm font-medium text-slate-200 mb-3 leading-relaxed">
                    {pillar.summary}
                  </p>

                  {/* Expanded Body */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-[11px] font-mono-numbers text-slate-400 uppercase tracking-wider">
                  <span>Guiding Invariant</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
