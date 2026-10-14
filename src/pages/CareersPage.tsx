import React, { useState } from 'react';
import { Heart, Briefcase, Users, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Software Engineering (Njure Tech)',
    portfolio: '',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const openRoles = [
    {
      title: 'Full-Stack Software Engineer',
      division: 'Njure Tech',
      location: 'Kozhikode, Kerala (Hybrid)',
      type: 'Full-time',
      desc: 'Build next-generation ITSM orchestration modules for ScribbleIT, low-latency conversational voice AI, and scalable cloud services.'
    },
    {
      title: 'Artisan Sourcing & Textile Merchandiser',
      division: 'Vastrathalam',
      location: 'Kozhikode / Trivandrum Belt',
      type: 'Full-time',
      desc: 'Work directly with Kerala handloom weaver cooperatives, certify authentic Kasavu zari quality, and curate seasonal bridal collections.'
    },
    {
      title: 'Hyperlocal Operations & Community Lead',
      division: 'Dozo',
      location: 'Kozhikode Regional Hub',
      type: 'Full-time',
      desc: 'Onboard and empower verified neighborhood electricians, plumbers, and local merchants, ensuring fair-pay compliance and community trust.'
    },
    {
      title: 'Powertrain & Battery Systems Prototype Engineer',
      division: 'B+ Energies',
      location: 'Kozhikode Engineering Lab',
      type: 'Full-time',
      desc: 'Research, design, and bench-test parallel hybrid two-wheeler motor couplings and thermal-safe battery management systems for tropical conditions.'
    }
  ];

  return (
    <div className="bg-[#07192f] bg-corporate-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Careers &amp; Life at Njure
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Do World-Class Work. Stay Close to What Matters.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            We are creating an ambitious, compassionate home for engineers, craftsmen, and operators
            who want to build meaningful enterprises right here in Kerala.
          </p>
        </div>

        {/* Culture Narrative */}
        <div className="p-8 md:p-12 rounded-2xl bg-[#092548] border border-white/15 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Life Beyond the Metro Rat-Race</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              You do not have to endure 3-hour daily commutes in distant megacities to build transformative
              software or clean vehicles. At Njure, we believe in balanced, rooted living.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sky-300 font-semibold text-sm">
              <Briefcase className="w-4 h-4" />
              <span>True Cross-Discipline Mastery</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Work alongside AI architects, textile historians, automotive engineers, and community organizers.
              Expand your horizons across diverse real-world industries.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
              <Users className="w-4 h-4" />
              <span>Human Dignity Above All</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              No toxic vanity metrics, no disposable churn. We value thoughtful craftsmanship, deep respect
              for team members, and long-term intellectual growth.
            </p>
          </div>
        </div>

        {/* Open Opportunities */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Current Strategic Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#081d36] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-blue-300 uppercase">{role.division}</span>
                    <span>{role.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span>{role.location}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-2">
                    {role.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Immediate review by founders
                  </span>
                  <a
                    href="#application-form"
                    onClick={() => setFormData({ ...formData, role: `${role.title} (${role.division})` })}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Talent Application Form */}
        <div id="application-form" className="max-w-2xl mx-auto p-8 md:p-10 rounded-2xl bg-[#081d36] border border-white/15 shadow-2xl">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Application Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Thank you for your interest in joining Njure Group. Our team reviews all submissions
                personally and will be in touch with you at <strong className="text-white">{formData.email}</strong>.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Submit Another Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Join the Njure Ecosystem
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Don’t see a formal title that matches? We always welcome exceptional craftsmen, thinkers, and builders.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anjali Nair"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Target Role or Area of Passion
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  What Drives You to Build With Njure Group?
                </label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us about your craft, your values, and what kind of problems inspire you..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Profile...</span>
                  ) : (
                    <>
                      <span>Transmit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
