import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ExternalLink, Heart, MapPin, Mail } from 'lucide-react';
import { NjureEmblem } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051325] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Purpose Column */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <NjureEmblem size={44} className="group-hover:scale-105 transition-transform" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-sans block leading-none">
                  Njure Group
                </span>
                <span className="font-script text-base text-amber-200/90 tracking-wide mt-1 block">
                  The Blueprint for a Bolder World
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              A diversified corporate ecosystem founded on human conviction, engineering rigor,
              and community dignity. Bridging world-class enterprise software with living cultural
              traditions and sustainable clean mobility.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Vattoli Bazar, Balussery, Kozhikode, Kerala — 673612</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@njuregroup.in" className="hover:text-white transition-colors">
                  contact@njuregroup.in
                </a>
              </div>
            </div>


          </div>

          {/* Multi-Page Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Corporate Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Overview &amp; Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story &amp; Roots
                </Link>
              </li>
              <li>
                <Link to="/verticals" className="hover:text-white transition-colors">
                  Operating Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-white transition-colors">
                  Vision &amp; Governance
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers &amp; Life at Njure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Corporate Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Operating Divisions & Live Portals Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Live Venture Portals
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://tech.njuregroup.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                >
                  <div className="flex items-center justify-between text-sky-400 group-hover:text-sky-300 font-medium">
                    <span>Njure Tech</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    tech.njuregroup.in · ScribbleIT ITSM &amp; Voice AI
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://vastrathalam.njuregroup.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                >
                  <div className="flex items-center justify-between text-amber-300 group-hover:text-amber-200 font-medium">
                    <span>Vastrathalam</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    vastrathalam.njuregroup.in · Kerala Handloom Heritage
                  </span>
                </a>
              </li>

              <li>
                <Link
                  to="/verticals"
                  className="flex flex-col p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                >
                  <div className="flex items-center justify-between text-emerald-400 font-medium">
                    <span>Dozo</span>
                    <span className="text-[11px] text-slate-400">In Development</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Hyperlocal Marketplace &amp; Dignified Gig Platform
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/verticals"
                  className="flex flex-col p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all"
                >
                  <div className="flex items-center justify-between text-blue-400 font-medium">
                    <span>B+ Energies</span>
                    <span className="text-[11px] text-slate-400">R&amp;D Phase</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">
                    Hybrid Two-Wheeler Clean Mobility R&amp;D
                  </span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Njure Group. All rights reserved. Registered in Kerala, India.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-script text-base text-amber-200/90">
              The Blueprint for a Bolder World
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
