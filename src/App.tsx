/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { VerticalsPage } from './pages/VerticalsPage';
import { VisionPage } from './pages/VisionPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper upon route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#07192f] text-slate-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
        {/* Persistent Multi-Page Navigation */}
        <Navbar />

        {/* Dynamic Route View */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/verticals" element={<VerticalsPage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}
