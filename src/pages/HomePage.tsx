import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Heart, Sparkles, MapPin, Compass, Shield, Users, CheckCircle2 } from 'lucide-react';
import { NjureLogo } from '../components/Logo';
import { VERTICALS } from '../data/verticals';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-[#07192f] bg-corporate-canvas">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Vision & Human Conviction */}
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

            {/* Right Column: Recreated Official Corporate Logo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-[#08203c]/80 border border-white/10 shadow-2xl flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20">
                <NjureLogo size={300} className="w-64 h-64 sm:w-72 sm:h-72 drop-shadow-2xl" />
              </div>
            </div>

          </div>

          {/* Impact Metric Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
                4 Verticals
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400">
                Operating Ecosystem
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
                24+ Cooperatives
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400">
                Kerala Handloom Weavers
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
                100% Direct
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-400">
                Artisan Fair Trade
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Ecosystem Overview Section */}
      <section className="py-20 md:py-28 bg-[#081d36] border-b border-white/10">
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

      {/* Emotional Thesis & Human Conviction */}
      <section className="py-20 md:py-28 bg-[#07192f] border-b border-white/10 relative">
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
