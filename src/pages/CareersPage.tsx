import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Briefcase, 
  Users, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  division: string;
  category: 'Engineering' | 'Textiles' | 'Operations' | 'Mobility';
  location: string;
  type: string;
  desc: string;
  highlights: string[];
}

export const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Full-Stack Software Engineer (Njure Tech)',
    portfolio: '',
    note: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const openRoles: JobOpening[] = [
    {
      id: 'njure-tech-engineer',
      title: 'Full-Stack Software Engineer',
      division: 'Njure Tech',
      category: 'Engineering',
      location: 'Kozhikode, Kerala (Hybrid)',
      type: 'Full-time',
      desc: 'Architect next-generation ITSM orchestration modules for ScribbleIT, low-latency conversational voice AI pipelines, and enterprise-grade distributed systems.',
      highlights: ['React & Node.js / TypeScript', 'Distributed Systems & WebSockets', 'Voice AI Latency Optimization']
    },
    {
      id: 'vastrathalam-merchandiser',
      title: 'Artisan Sourcing & Textile Merchandiser',
      division: 'Vastrathalam',
      category: 'Textiles',
      location: 'Kozhikode / Trivandrum Belt',
      type: 'Full-time',
      desc: 'Work directly with Kerala handloom weaver cooperatives, certify authentic Kasavu zari thread counts, and curate seasonal bridal and heritage collections.',
      highlights: ['Direct Weaver Cooperative Liaison', 'Quality & Thread Count Certification', 'Global Ethical Export Logistics']
    },
    {
      id: 'dozo-ops-lead',
      title: 'Hyperlocal Operations & Community Lead',
      division: 'Dozo',
      category: 'Operations',
      location: 'Kozhikode Regional Hub',
      type: 'Full-time',
      desc: 'Onboard and empower verified neighborhood electricians, plumbers, and local merchants across Malabar, ensuring fair-pay compliance and community trust.',
      highlights: ['Ground-Level Community Trust Building', 'Service Provider Dignity & Fair Pay', 'Neighborhood Onboarding & Training']
    },
    {
      id: 'bplus-powertrain-engineer',
      title: 'Powertrain & Battery Systems Prototype Engineer',
      division: 'B+ Energies',
      category: 'Mobility',
      location: 'Kozhikode Engineering Lab',
      type: 'Full-time',
      desc: 'Research, design, and bench-test parallel hybrid two-wheeler motor couplings and thermal-safe battery management systems calibrated for tropical conditions.',
      highlights: ['Parallel Hybrid Mechanical Couplings', 'BMS Thermal Safety for Tropical Climates', 'Rapid Bench Prototyping']
    }
  ];

  const filteredRoles = selectedCategory === 'All' 
    ? openRoles 
    : openRoles.filter(r => r.category === selectedCategory);

  const handleApplyClick = (roleTitle: string, division: string) => {
    setFormData(prev => ({ ...prev, role: `${roleTitle} (${division})` }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('applicant-name-input') as HTMLInputElement | null;
        if (input) input.focus();
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    const recipient = 'info@njuregroup.in';
    const cc = 'neerej.suresan.s@gmail.com';
    const subject = `[Njure Group Career Application] ${formData.role} - ${formData.name}`;
    const body = `Njure Group Talent Application
==================================================
Applicant Name: ${formData.name}
Email Address: ${formData.email}
${formData.phone ? `Phone Number: ${formData.phone}\n` : ''}Target Role / Area of Passion: ${formData.role}
${formData.portfolio ? `Portfolio / Profile URL: ${formData.portfolio}\n` : ''}
Applicant Statement & Motivation:
${formData.note}
==================================================
Transmitted via Njure Group Careers Portal
Corporate Office: Vattoli Bazar, Balussery, Kozhikode, Kerala - 673612
Contact: +91 8281877050 | info@njuregroup.in`;

    const url = `mailto:${recipient}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoLink(url);

    // Safely trigger mail client without disrupting HashRouter navigation
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {}

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const formElement = document.getElementById('application-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  const handleCopy = () => {
    const text = `Applicant: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Target Role: ${formData.role}
Portfolio: ${formData.portfolio || 'N/A'}

Motivation:
${formData.note}

Sent to: info@njuregroup.in
CC: neerej.suresan.s@gmail.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyEmailDirect = () => {
    navigator.clipboard.writeText('info@njuregroup.in, neerej.suresan.s@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: 'Full-Stack Software Engineer (Njure Tech)',
      portfolio: '',
      note: ''
    });
    setIsSubmitted(false);
    setCopied(false);
  };

  return (
    <div className="bg-transparent bg-corporate-canvas py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Careers &amp; Life at Njure Group</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Do World-Class Work. Stay Close to What Truly Matters.
          </h1>
          <p className="text-lg text-slate-200 leading-relaxed">
            We are creating an ambitious, compassionate home for software engineers, heritage craft curators,
            and clean mobility researchers who want to build transformative enterprises right here in Kerala.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Headquarters: Balussery, Kozhikode, Kerala</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Careers Desk: info@njuregroup.in</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 font-mono-numbers">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+918281877050" className="hover:text-white transition-colors">
                +91 8281877050
              </a>
            </span>
          </div>
        </div>

        {/* Culture Narrative Cards */}
        <div className="p-8 md:p-10 rounded-2xl bg-[#092548]/70 backdrop-blur-md border border-white/15 grid grid-cols-1 md:grid-cols-3 gap-8 shadow-xl">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Life Beyond the Metro Rat-Race</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              You do not have to endure 3-hour daily commutes in distant megacities to build transformative
              software or clean vehicles. At Njure, we believe in rooted, balanced living surrounded by family,
              greenery, and cultural heritage.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sky-300 font-semibold text-sm">
              <Briefcase className="w-4 h-4" />
              <span>True Cross-Discipline Mastery</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Collaborate directly with AI architects, textile historians, automotive powertrain engineers,
              and community organizers. Expand your horizons across diverse real-world domains under one roof.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
              <Users className="w-4 h-4" />
              <span>Human Dignity Above All</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              No toxic vanity metrics or disposable churn. We value thoughtful engineering, deep respect
              for team members, transparent compensation, and long-term intellectual growth.
            </p>
          </div>
        </div>

        {/* Open Opportunities Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                Strategic Openings
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Current Career Opportunities
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
              {['All', 'Engineering', 'Textiles', 'Operations', 'Mobility'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat === 'All' ? 'All Roles (4)' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#081d36]/80 backdrop-blur-md border border-white/15 hover:border-blue-400/50 hover:bg-[#081d36]/90 transition-all flex flex-col justify-between space-y-5 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 uppercase tracking-wide">
                      {role.division}
                    </span>
                    <span className="text-slate-400">{role.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {role.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {role.desc}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {role.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-slate-300"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Reviewed directly by founders
                  </span>
                  
                  {/* Working Action Button with smooth scrolling to form */}
                  <button
                    type="button"
                    onClick={() => handleApplyClick(role.title, role.division)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm hover:shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Email Guidance Box */}
        <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Executive Transmission</span>
            </div>
            <p className="text-sm text-slate-200">
              Prefer writing via your own email client? Send your resume and portfolio directly to:
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 font-mono text-xs">
              <span className="text-white bg-white/10 px-2 py-0.5 rounded border border-white/10">
                To: info@njuregroup.in
              </span>
              <span className="text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                CC: neerej.suresan.s@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:info@njuregroup.in?cc=neerej.suresan.s@gmail.com&subject=Njure%20Group%20Direct%20Career%20Application"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email Us Directly</span>
            </a>
            <button
              onClick={copyEmailDirect}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors cursor-pointer"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Emails</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Talent Application Form */}
        <div id="application-form" className="max-w-2xl mx-auto p-8 md:p-10 rounded-2xl bg-[#081d36]/90 backdrop-blur-md border border-white/20 shadow-2xl">
          {isSubmitted ? (
            <div className="py-8 flex flex-col items-center text-center space-y-5">
              <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Application Formatted &amp; Linked to Mail
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-md leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your talent profile for{' '}
                <span className="text-blue-300 font-semibold">{formData.role}</span> has been structured and linked to our careers inbox.
              </p>

              {/* Prefilled destination confirmation card */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 w-full text-left text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-mono text-[11px] uppercase">Primary Recipient:</span>
                  <span className="text-white font-medium">info@njuregroup.in</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-mono text-[11px] uppercase">Carbon Copy (CC):</span>
                  <span className="text-amber-300 font-mono text-[11px]">neerej.suresan.s@gmail.com</span>
                </div>
                <div className="pt-1 border-t border-white/5">
                  <span className="text-slate-400 font-mono text-[11px] uppercase block mb-0.5">Subject:</span>
                  <span className="text-sky-300 truncate block">[Njure Group Career Application] {formData.role} - {formData.name}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full">
                {mailtoLink && (
                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Full Application Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-slate-300 hover:text-white underline cursor-pointer"
                >
                  Submit Another Profile
                </button>
                <span className="text-white/20">•</span>
                <Link to="/verticals" className="text-blue-300 hover:underline">
                  Explore Operating Verticals
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Join the Njure Group Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Don’t see an exact title matching your experience? We constantly welcome exceptional engineers, craftsmen, and operational builders.
                </p>
              </div>

              <div>
                <label htmlFor="applicant-name-input" className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="applicant-name-input"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anjali Nair"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="applicant-email-input" className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="applicant-email-input"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="applicant-phone-input" className="block text-xs font-medium text-slate-300 mb-1">
                    Contact Phone (Optional)
                  </label>
                  <input
                    id="applicant-phone-input"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="applicant-role-input" className="block text-xs font-medium text-slate-300 mb-1">
                  Target Role or Area of Passion
                </label>
                <input
                  id="applicant-role-input"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="applicant-portfolio-input" className="block text-xs font-medium text-slate-300 mb-1">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <input
                  id="applicant-portfolio-input"
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label htmlFor="applicant-note-input" className="block text-xs font-medium text-slate-300 mb-1">
                  What Drives You to Build With Njure Group?
                </label>
                <textarea
                  id="applicant-note-input"
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Tell us about your craft, your roots, and what kind of challenges inspire you..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#07192f] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md hover:shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Preparing Application Email...</span>
                  ) : (
                    <>
                      <span>Transmit Application</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-300 leading-tight">
                  Submitting formats and routes this application directly to{' '}
                  <strong className="text-white">info@njuregroup.in</strong> with CC to{' '}
                  <strong className="text-amber-300">neerej.suresan.s@gmail.com</strong>.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Cross-Page Discovery Links */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            Questions about working at Njure Group? Contact our team at{' '}
            <a href="mailto:info@njuregroup.in" className="text-blue-300 hover:underline">
              info@njuregroup.in
            </a>{' '}
            or call{' '}
            <a href="tel:+918281877050" className="text-blue-300 hover:underline font-mono-numbers">
              +91 8281877050
            </a>.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/verticals" className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors">
              <span>Explore All Verticals</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/about" className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors">
              <span>Our Kozhikode Story</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareersPage;
