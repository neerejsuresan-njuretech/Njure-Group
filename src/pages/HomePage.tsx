import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  Heart, 
  Sparkles, 
  MapPin, 
  Compass, 
  Shield, 
  Users, 
  Briefcase, 
  Handshake, 
  Globe2, 
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { VERTICALS } from '../data/verticals';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { FAQ } from '../components/FAQ';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-transparent bg-corporate-canvas">
      
      {/* Hero Section (No big logo, executive 2-column layout) */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Vision & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* Human-Centered Kicker Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/20 backdrop-blur-sm">
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-300">
                  Diversified Enterprise Ecosystem
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

              {/* Subheadline with Human Connection */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Njure Group is a diversified enterprise ecosystem built on the conviction that high-precision
                technology must enrich human lives—from empowering master handloom artisans and local service
                workers to pioneering clean, accessible mobility for everyday families.
              </p>

              {/* Trust & Roots Strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>HQ: Vattoli Bazar, Kozhikode, Kerala</span>
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Human-First Innovation</span>
                </span>
                <span className="text-white/20" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ethical Stewardship</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
                <Link
                  to="/verticals"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span>Explore Our Verticals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg backdrop-blur-sm active:scale-[0.98] transition-all whitespace-nowrap"
                >
                  <span>Our Story &amp; Ethos</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Executive Ecosystem Venture Matrix (Replaces big logo) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-md p-6 sm:p-7 rounded-2xl bg-[#08203c]/90 border border-white/15 shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Operating Ecosystem Matrix</span>
                  </div>
                  <span className="text-[11px] font-mono-numbers text-slate-400">
                    4 DIVISIONS
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Division 1: Njure Tech */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <span>Njure Tech</span>
                      </div>
                      <a
                        href="https://tech.njuregroup.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 font-medium"
                      >
                        <span>tech.njuregroup.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      ITSM workflow automation (ScribbleIT) &amp; low-latency conversational voice AI.
                    </p>
                  </div>

                  {/* Division 2: Vastrathalam */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>Vastrathalam</span>
                      </div>
                      <a
                        href="https://vastrathalam.njuregroup.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 font-medium"
                      >
                        <span>vastrathalam.njuregroup.in</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      Traditional Kerala Kasavu sarees, handlooms &amp; direct artisan fair trade.
                    </p>
                  </div>

                  {/* Division 3: Dozo */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Dozo</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono-numbers text-emerald-400/90">
                        In Development
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      Hyperlocal trade marketplace empowering verified local electricians &amp; carpenters.
                    </p>
                  </div>

                  {/* Division 4: B+ Energies */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>B+ Energies</span>
                      </div>
                      <span className="text-[10px] uppercase font-mono-numbers text-blue-400/90">
                        R&amp;D Phase
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      Sustainable parallel hybrid motorcycle powertrains cutting family commute costs.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    to="/verticals"
                    className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>View comprehensive technical roadmaps</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GLOBAL IMPACT STATISTICS SECTION WITH ANIMATED COUNTERS */}
      <section className="py-20 md:py-28 bg-[#06182c]/30 backdrop-blur-sm border-b border-white/10 relative overflow-hidden">
        {/* Subtle ambient gradient */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,116,144,0.12),transparent)]" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-2">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Operational Scale &amp; Footprint</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                Our Global Impact
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Measurable outcomes delivered across enterprise IT software deployments, cultural handloom
                preservation, and grassroots community empowerment.
              </p>
            </div>

            <div className="text-xs text-slate-400 shrink-0">
              Validated operational figures across all 4 group verticals
            </div>
          </div>

          {/* 4 Animated Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Metric 1: Projects Completed */}
            <div className="p-7 rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-numbers uppercase text-sky-300">
                  Delivered
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={180} suffix="+" duration={2000} />
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Projects Completed
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                Enterprise ITSM workflow suites, voice AI deployments, handloom lines, and engineering prototypes.
              </p>
            </div>

            {/* Metric 2: Partnerships Formed */}
            <div className="p-7 rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-400">
                  <Handshake className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-numbers uppercase text-amber-300">
                  Collaborative
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={48} suffix="+" duration={1800} />
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Partnerships Formed
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                Weaver cooperatives, enterprise cloud clients, institutional suppliers, and community associations.
              </p>
            </div>

            {/* Metric 3: Communities Reached */}
            <div className="p-7 rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-numbers uppercase text-emerald-300">
                  Regional Reach
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={26} suffix="+" duration={1600} />
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Communities Reached
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                Towns, handloom belts across Kerala, and diaspora distribution destinations globally.
              </p>
            </div>

            {/* Metric 4: Lives & Livelihoods Empowered */}
            <div className="p-7 rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-400/20 text-rose-400">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono-numbers uppercase text-rose-300">
                  Human Impact
                </span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={3850} suffix="+" duration={2200} />
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  Artisan &amp; Trade Lives
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                Master weavers receiving fair direct wages, trade specialists with steady work, and tech engineers.
              </p>
            </div>

          </div>

          {/* Adjoining Contextual Statement */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <span>
              All initiatives are audited under our internal ethical governance charter, guaranteeing transparent margins and direct worker welfare.
            </span>
            <Link to="/vision" className="text-sky-400 hover:text-sky-300 font-semibold whitespace-nowrap inline-flex items-center gap-1">
              <span>Read our ESG charter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* The Ecosystem Overview Section */}
      <section className="py-20 md:py-28 bg-[#081d36]/30 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
                Unified Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                Our Four Operating Divisions
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                Combining technical precision with deep empathy for traditional commerce, local services,
                and sustainable living.
              </p>
            </div>

            <Link
              to="/verticals"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
            >
              <span>Explore all vertical roadmaps</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERTICALS.map((vertical) => (
              <div
                key={vertical.id}
                className="rounded-2xl bg-[#092548] border border-white/10 hover:border-white/20 transition-all p-7 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      {vertical.division}
                    </span>
                    <span className="text-[11px] font-mono-numbers uppercase text-blue-300">
                      {vertical.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {vertical.name}
                  </h3>

                  <p className="text-sm font-medium text-amber-200/90 mb-3">
                    {vertical.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {vertical.humanMission}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                    {vertical.keyInitiatives.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-blue-400" aria-hidden="true">·</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  {vertical.externalLink ? (
                    <a
                      href={vertical.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Visit {vertical.externalLinkLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">
                      Corporate Incubation Phase
                    </span>
                  )}

                  <Link
                    to="/verticals"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-blue-300 transition-colors"
                  >
                    <span>Read Full Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <FAQ />

      {/* Emotional Thesis & Closing Dialogue CTA */}
      <section className="py-20 md:py-28 bg-[#07192f]/30 backdrop-blur-sm border-b border-white/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 p-2 rounded-full bg-blue-900/40 border border-blue-400/20 text-xs text-blue-300">
            <Heart className="w-4 h-4 text-rose-400" />
            <span>Our Human Promise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            &ldquo;Technology is only as noble as the human hands it strengthens.&rdquo;
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We reject the notion of cold, impersonal conglomerate expansion. At Njure Group, every line
            of code we deploy, every saree we send to a family across the globe, every electrician we match
            in a neighborhood, and every clean engine we prototype is designed to preserve human dignity,
            lighten household burdens, and elevate community pride.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/about"
              className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Discover Our Roots in Kozhikode
            </Link>
            <Link
              to="/careers"
              className="px-6 py-3 text-sm font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors"
            >
              Careers at Njure
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10 rounded-lg transition-colors"
            >
              Initiate Corporate Dialogue
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
