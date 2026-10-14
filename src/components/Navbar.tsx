import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Heart } from 'lucide-react';
import { NjureEmblem } from './Logo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Verticals', path: '/verticals' },
    { label: 'Vision & Impact', path: '/vision' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#07192f]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Brand Wordmark & Emblem */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg group whitespace-nowrap shrink-0"
            aria-label="Njure Group Corporate Portal Home"
          >
            <NjureEmblem size={40} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold tracking-tight text-white font-sans leading-none">
                Njure Group
              </span>
              <span className="font-script text-xs text-amber-200/90 tracking-wide mt-1">
                The Blueprint for a Bolder World
              </span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-400'
                      : 'hover:text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-400/60 hover:after:w-full after:transition-all'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 active:scale-[0.98] transition-all whitespace-nowrap shrink-0"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#07192f] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`flex items-center justify-between px-3 py-2.5 text-base rounded-md transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10">
            <Link
              to="/contact"
              onClick={closeMobile}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
