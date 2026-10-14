import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Compass, Shield, Award, Users, Globe2, ArrowRight } from 'lucide-react';
import { Philosophy } from '../components/Philosophy';

export const VisionPage: React.FC = () => {
  return (
    <div className="bg-[#07192f] bg-corporate-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Vision &amp; Corporate Governance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            The Blueprint for a Bolder World
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Our corporate governance is anchored in long-term societal stewardship. We build businesses
            to last generations, guided by ethics, community empowerment, and environmental responsibility.
          </p>
        </div>

        {/* Core Philosophy Section (Reused clean component) */}
        <Philosophy />

        {/* ESG & Community Governance Commitments */}
        <div className="space-y-8 pt-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Our Four Commitments to People &amp; Planet
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              How Njure Group translates corporate purpose into tangible ethical benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-amber-300">
                <Heart className="w-5 h-5 text-rose-400" />
                <h3 className="text-lg font-bold text-white">
                  1. Artisan Dignity &amp; Heritage Preservation
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                In an era of disposable fast-fashion and synthetic imitations, we stand unequivocally
                with the master handloom weavers of Kerala. Through Vastrathalam, 100% of retail transactions
                return honest compensation to weaving families, safeguarding living cultural heritage
                from extinction.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-sky-400">
                <Shield className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  2. Ethical AI &amp; Software Sovereignty
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe artificial intelligence must serve as an amplifier of human creativity,
                not a replacement for human empathy. In Njure Tech, all automated workflows and voice AI
                pipelines adhere to strict privacy safeguards, transparent failovers, and ethical oversight.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-emerald-400">
                <Users className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  3. Anti-Exploitative Gig Economy Standards
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Through Dozo, we openly challenge the exploitative model of modern aggregator platforms.
                We ensure local electricians, plumbers, and small neighborhood trades retain more than 92%
                of their service fees with instantaneous escrow releases and transparent rating accountability.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 text-blue-400">
                <Globe2 className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  4. Grassroots Clean Mobility Access
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clean transport cannot be restricted to high-income demographics. At B+ Energies, our R&amp;D
                focuses on practical, accessible hybrid two-wheelers that reduce emissions in Tier-2 and Tier-3
                cities while directly easing monthly fuel strain on middle-class working families.
              </p>
            </div>

          </div>
        </div>

        {/* Connect Action */}
        <div className="p-8 md:p-12 rounded-2xl bg-[#092548] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Interested in ESG &amp; Institutional Partnerships?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              We collaborate with ethical investors, research institutions, and community foundations.
            </p>
          </div>
          <Link
            to="/contact?subject=Institutional+Governance"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Engage With Leadership</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VisionPage;
