import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NjureEmblem } from './Logo';

const FAIRY_BULBS = [
  { x: 40, color: '#fbbf24', delay: '0s' },
  { x: 140, color: '#ef4444', delay: '-0.8s' },
  { x: 240, color: '#34d399', delay: '-1.6s' },
  { x: 340, color: '#fde68a', delay: '-2.2s' },
  { x: 440, color: '#ef4444', delay: '-0.4s' },
  { x: 540, color: '#fbbf24', delay: '-1.2s' },
  { x: 640, color: '#34d399', delay: '-2.0s' },
  { x: 740, color: '#ef4444', delay: '-0.6s' },
  { x: 840, color: '#fde68a', delay: '-1.5s' },
  { x: 940, color: '#34d399', delay: '-2.5s' },
  { x: 1040, color: '#fbbf24', delay: '-0.9s' },
  { x: 1140, color: '#ef4444', delay: '-1.8s' },
  { x: 1240, color: '#34d399', delay: '-0.3s' },
  { x: 1340, color: '#fbbf24', delay: '-1.1s' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about/' },
    { label: 'Our Verticals', path: '/verticals/' },
    { label: 'Vision & Impact', path: '/vision/' },
    { label: 'Careers', path: '/careers/' },
    { label: 'Contact', path: '/contact/' },
  ];

  const normalize = (p: string) => p.replace(/\/+$/, '').toLowerCase() || '/';
  const currentPath = normalize(location.pathname);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#061812]/95 backdrop-blur-md border-b border-amber-200/15 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">

          {/* Brand Wordmark & Emblem */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg group whitespace-nowrap shrink-0"
            aria-label="Njure Group Corporate Portal Home"
          >
            <NjureEmblem size={40} className="group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold tracking-tight text-white font-sans leading-none">
              Njure Group
            </span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-emerald-100/80">
            {navLinks.map((link) => {
              const isActive = currentPath === normalize(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors py-1 cursor-pointer whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-amber-200 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-400'
                      : 'hover:text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400/70 hover:after:w-full after:transition-all'
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
              to="/contact/"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-red-700 hover:bg-red-600 rounded-lg shadow-sm hover:shadow-red-900/40 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-emerald-100/80 hover:text-white rounded-lg border border-amber-200/15 hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Subtle Festive Fairy-Light Wire tucked right along the bottom edge (zero layout height) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 inset-x-0 h-3.5 overflow-hidden"
      >
        <svg
          width="100%"
          height="14"
          viewBox="0 0 1380 14"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1 Q70 9 140 1 T280 1 T420 1 T560 1 T700 1 T840 1 T980 1 T1120 1 T1260 1 T1380 1"
            stroke="rgba(253, 230, 138, 0.25)"
            strokeWidth="1"
          />
          {FAIRY_BULBS.map((bulb) => (
            <circle
              key={bulb.x}
              cx={bulb.x}
              cy="6.5"
              r="2.8"
              fill={bulb.color}
              className="animate-christmas-twinkle"
              style={{
                animationDelay: bulb.delay,
                filter: `drop-shadow(0 0 5px ${bulb.color})`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-amber-200/15 bg-[#061812] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPath === normalize(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobile}
                  className={`flex items-center justify-between px-3 py-2.5 text-base rounded-md transition-colors ${
                    isActive
                      ? 'text-amber-200 bg-white/10 font-semibold'
                      : 'text-emerald-100/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-amber-200/15">
            <Link
              to="/contact/"
              onClick={closeMobile}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-red-700 hover:bg-red-600 rounded-lg shadow-sm"
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
