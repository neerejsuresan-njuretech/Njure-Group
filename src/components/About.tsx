import React from 'react';
import { MapPin, Target, Shield, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#081d36] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Institutional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Who We Are
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Headquartered in Vattoli Bazar, Balussery, Kozhikode, Kerala, Njure Group operates
            at the nexus of software engineering, traditional trade modernizations, and green transport.
          </p>
        </div>

        {/* 2-Column Story & Strategic Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Njure Group was established with an uncompromising conviction: the most resilient enterprises
              of tomorrow will not be confined to a single digital silo. Instead, they will bridge
              high-precision technical execution with deep market adaptability across high-impact physical
              and digital sectors.
            </p>
            <p>
              From our operational base in Kozhikode, Kerala, we incubate, engineer, and scale agile business
              verticals designed to solve authentic economic and technological friction. Whether developing
              automated ITSM workflows for global cloud clients, curating authentic handloom Kerala textiles
              with fair-trade direct access, empowering local neighborhood trades through rapid matching,
              or engineering dual-powertrain hybrid two-wheelers for clean urban transit—every initiative
              is guided by the same foundational thesis.
            </p>
            
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 mt-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-400 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">
                    The Njure Mission
                  </h3>
                  <p className="text-sm text-slate-300 mt-1 leading-normal">
                    To engineer scalable, sovereign, and ethically grounded ventures that merge
                    advanced technical capability with pragmatic grassroots utility. We turn complex
                    operational friction into frictionless, human-centric systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Roots & Strategic Pillars Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Headquarters Card */}
            <div className="p-6 rounded-xl bg-[#092548] border border-white/15 relative overflow-hidden">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-blue-300 font-semibold mb-4">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Headquarters & Command Center</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Vattoli Bazar, Balussery
              </h4>
              <p className="text-sm text-slate-300 leading-normal mb-4">
                Kozhikode District, Kerala State, India — PIN 673612
              </p>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Coordinates: 11.45° N, 75.82° E</span>
                <span className="text-blue-400 font-medium">South India Hub</span>
              </div>
            </div>

            {/* Guiding Tenets Checklist */}
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                Foundational Tenets
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-normal">
                    <strong className="text-white font-medium">Independent Architectural Control:</strong> We build and own our core pipelines, from proprietary ITSM engines to battery management firmware.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-normal">
                    <strong className="text-white font-medium">Grassroots Impact with Global Standards:</strong> Global engineering benchmarks applied directly to regional commerce and traditional craftsmen.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-slate-300 leading-normal">
                    <strong className="text-white font-medium">Capital-Efficient Agility:</strong> Disciplined milestone-driven incubation across all 4 group verticals.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
