import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Compass, ShieldCheck, Users, Sparkles, Building, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-transparent bg-corporate-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            About Njure Group
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Rooted in Kerala. Guided by Conviction. Building for the World.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            From our headquarters in Vattoli Bazar, Balussery, Kozhikode, we are crafting a new kind
            of corporate conglomerate—one that refuses to trade human soul for cold automation.
          </p>
        </div>

        {/* The Heart of the Story: Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white">
              Why We Call Kozhikode Home
            </h2>
            <p>
              For centuries, the historic Malabar coast has welcomed thinkers, voyagers, and master
              artisans from across the seas. It is a region renowned for warm hospitality, mercantile
              integrity, and fierce independence.
            </p>
            <p>
              When founding Njure Group, we made a conscious choice to establish our headquarters
              in <strong className="text-white">Vattoli Bazar, Balussery</strong> in Kozhikode District. We did not want to become
              another anonymous corporation in a glass skyscraper divorced from real community life.
              We wanted our engineers, designers, and strategists to walk the same neighborhood streets as
              the weavers, carpenters, mechanics, and local shopkeepers whose lives our work is meant to enrich.
            </p>
            <p>
              This geographic grounding gives Njure Group its moral clarity. We understand the daily realities
              of Indian families: the dignity of earning honest wages, the pride of wearing authentic heritage
              handlooms, the sting of rising fuel costs on monthly budgets, and the desire of young technologists
              to build world-class careers without leaving their elders behind.
            </p>

            <div className="p-6 rounded-xl bg-blue-950/40 border border-blue-400/20 space-y-2 mt-4">
              <div className="flex items-center gap-2 text-blue-300 font-semibold text-sm">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Our Core Operating Creed</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed italic">
                &ldquo;We measure our strength not by the complexity of our algorithms, but by the security
                we bring to a weaver&apos;s household, the peace of mind we grant an everyday commuter,
                and the dependable support we deliver to growing businesses.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Visual Brand Seal & Location Pin */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#092548] border border-white/15 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                  Institutional Heritage
                </span>
                <span className="text-xs text-slate-400 font-mono-numbers">
                  EST. MALABAR
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  Rooted in the trading heritage of Kozhikode, our business model bridges traditional
                  mercantile ethics with high-velocity modern engineering.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-white font-mono-numbers">4 Divisions</div>
                    <div className="text-[11px] text-slate-400">Interlocking Ventures</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="text-lg font-bold text-white font-mono-numbers">100% Direct</div>
                    <div className="text-[11px] text-slate-400">Artisan Accountability</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 italic border-t border-white/5">
                Technical discipline and human dignity moving forward in unison.
              </div>
            </div>

            {/* Registered Headquarters Card */}
            <div className="p-6 rounded-xl bg-[#081d36] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Corporate Headquarters</span>
              </div>
              <p className="text-sm text-white font-medium">
                Vattoli Bazar, Balussery
              </p>
              <p className="text-xs text-slate-300">
                Kozhikode District, Kerala State, India — PIN 673612
              </p>
              <div className="pt-2 text-xs text-slate-400">
                Operating across enterprise software, cultural textiles, hyperlocal trade, and clean vehicle engineering.
              </div>
            </div>

          </div>

        </div>

        {/* Leadership & Cultural Principles */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="mt-2 text-slate-300 text-sm">
              The four emotional and architectural anchors that every venture in the Njure ecosystem upholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-[#081d36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-base font-bold text-white">
                Dignity for Labor
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether a master weaver sitting at a traditional pit loom or a local plumber on call,
                we build systems that protect their margins, dignity, and independence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#081d36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Technical Sovereignty
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We engineer and own our fundamental platforms—from ScribbleIT ITSM to battery management
                firmware—avoiding shallow white-labeling.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#081d36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Cultural Reverence
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We celebrate our cultural inheritance. We do not disrupt traditional crafts to displace them;
                we build digital bridges so they flourish in the 21st century.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#081d36] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Regional Reinvestment
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The wealth created by our commercial ventures is continuously channeled back into local
                employment, research fellowships, and community welfare.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA to Explore Verticals */}
        <div className="p-8 md:p-12 rounded-2xl bg-[#092548] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              See How Our Philosophy Translates to Action
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Inspect our four specialized operating verticals across technology, apparel, local commerce, and clean transport.
            </p>
          </div>
          <Link
            to="/verticals"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
