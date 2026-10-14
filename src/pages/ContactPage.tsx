import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Mail, Building, Send, CheckCircle2, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialVertical = searchParams.get('vertical') || searchParams.get('subject') || 'General Partnership';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    vertical: initialVertical,
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get('vertical')) {
      setFormData(prev => ({ ...prev, vertical: searchParams.get('vertical')! }));
    }
  }, [searchParams]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide message details';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      vertical: 'General Partnership',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-[#07192f] bg-corporate-canvas py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Corporate Communications
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Partner With Us. Connect with Leadership.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Whether exploring joint ventures, institutional investments, technology pilots, or community
            handloom partnerships, our corporate desk in Kozhikode welcomes your dialogue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headquarters Details & Official Logo Resource */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 text-blue-400">
                <Building className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  Corporate Command &amp; Registry
                </span>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Physical Headquarters
                  </div>
                  <p className="text-white font-medium text-base leading-snug">
                    Njure Group Corporate Headquarters
                  </p>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    Vattoli Bazar, Balussery, Kozhikode,
                    <br />
                    Kerala, India — PIN 673612
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Direct Corporate Email
                  </div>
                  <a
                    href="mailto:contact@njuregroup.in"
                    className="text-white hover:text-blue-300 transition-colors font-medium"
                  >
                    contact@njuregroup.in
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    Subsidiary Web Portals
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <a
                      href="https://tech.njuregroup.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300"
                    >
                      <span>tech.njuregroup.in (IT &amp; Voice AI)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://vastrathalam.njuregroup.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200"
                    >
                      <span>vastrathalam.njuregroup.in (Kerala Handlooms)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Directions Link */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Vattoli+Bazar,+Balussery,+Kozhikode,+Kerala+673612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>Locate Vattoli Bazar on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Corporate Assurance Card */}
            <div className="p-6 rounded-2xl bg-[#092548] border border-white/15 space-y-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Corporate Assurance &amp; Governance
                  </h4>
                  <p className="text-xs text-slate-300">
                    Direct executive responsiveness
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                All communications submitted through our corporate portal are reviewed with strict confidentiality by the leadership committee within 24 to 48 business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#081d36] border border-white/10 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding{' '}
                    <span className="text-blue-300 font-medium">{formData.vertical}</span> has been routed directly to our executive office.
                  </p>
                  <p className="text-xs text-slate-400">
                    Our team will reply to <span className="text-slate-200">{formData.email}</span> within 24 to 48 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={resetForm}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Direct Executive Inquiry
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      All corporate submissions are treated with complete confidentiality.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Neerej Suresan"
                      className={`w-full px-4 py-3 rounded-lg bg-[#07192f] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        errors.name ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@organization.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#07192f] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="org" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Organization / Company (Optional)
                    </label>
                    <input
                      id="org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Organization or Venture Name"
                      className="w-full px-4 py-3 rounded-lg bg-[#07192f] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="vertical" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Vertical / Matter of Focus
                    </label>
                    <select
                      id="vertical"
                      value={formData.vertical}
                      onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="General Partnership">General Partnership &amp; Executive Desk</option>
                      <option value="Njure Tech">Njure Tech (ITSM &amp; Voice AI Solutions)</option>
                      <option value="Vastrathalam">Vastrathalam (Kerala Handlooms &amp; Sourcing)</option>
                      <option value="Dozo">Dozo (Hyperlocal Platform &amp; Gig Economy)</option>
                      <option value="B+ Energies">B+ Energies (Hybrid Two-Wheeler R&amp;D)</option>
                      <option value="Institutional Governance">Institutional Governance &amp; ESG</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Detailed Inquiries <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Outline collaboration opportunities, technical trials, or institutional inquiries..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#07192f] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-lg shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Routing Message...</span>
                      ) : (
                        <>
                          <span>Transmit Corporate Inquiry</span>
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

      </div>
    </div>
  );
};

export default ContactPage;
