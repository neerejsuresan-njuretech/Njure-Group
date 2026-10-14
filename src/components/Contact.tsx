import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2, Building, ExternalLink } from 'lucide-react';

interface ContactProps {
  selectedVertical?: string;
  onVerticalChange?: (vertical: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  selectedVertical = 'General Partnership',
  onVerticalChange
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vertical: selectedVertical,
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if parent updates selected vertical
  React.useEffect(() => {
    if (selectedVertical) {
      setFormData((prev) => ({ ...prev, vertical: selectedVertical }));
    }
  }, [selectedVertical]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details on your inquiry';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const [mailtoLink, setMailtoLink] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const recipient = 'info@njuregroup.in';
    const subject = `[Njure Group Inquiry] ${formData.vertical} - ${formData.name}`;
    const body = `Corporate Inquiry for Njure Group
==================================================
From: ${formData.name}
Email: ${formData.email}
Vertical / Area of Focus: ${formData.vertical}

Message:
${formData.message}
==================================================
Transmitted via Njure Group Corporate Portal
Corporate Office: Vattoli Bazar, Balussery, Kozhikode, Kerala - 673612
Direct Contact: info@njuregroup.in | +91 8281877050`;

    const url = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMailtoLink(url);

    // Trigger user's mail client with prefilled data safely
    try {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback handled in UI
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleCopy = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nVertical: ${formData.vertical}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      vertical: 'General Partnership',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setCopied(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#07192f]/80 backdrop-blur-sm border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
            Corporate Communications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Corporate Headquarters &amp; Inquiries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Connect with our executive team, explore strategic joint ventures, or reach out to
            any of our operating divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headquarters Details & Map Pin */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 text-blue-400">
                <Building className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white">
                  Headquarters
                </span>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Registered Physical Address
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
                    Electronic Inquiries
                  </div>
                  <a
                    href="mailto:info@njuregroup.in"
                    className="text-white hover:text-blue-300 transition-colors font-medium text-base"
                  >
                    info@njuregroup.in
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Direct Telephone
                  </div>
                  <a
                    href="tel:+918281877050"
                    className="text-white hover:text-blue-300 transition-colors font-medium font-mono-numbers text-base"
                  >
                    +91 8281877050
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                    Technology Subsidiary Portal
                  </div>
                  <a
                    href="https://tech.njuregroup.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium text-sm"
                  >
                    <span>tech.njuregroup.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Map Directions Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Vattoli+Bazar,+Balussery,+Kozhikode,+Kerala+673612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>View Location in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Response Time Policy */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 leading-relaxed">
              Inquiries submitted through this corporate portal are reviewed directly by the
              executive leadership team. Verified enterprise proposals receive responses within
              1–2 business days.
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#081d36] border border-white/10 shadow-xl">
              
              {isSubmitted ? (
                <div className="py-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Formatted for info@njuregroup.in
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding{' '}
                    <span className="text-blue-300 font-medium">{formData.vertical}</span> has been prepared and linked to our official email desk.
                  </p>

                  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 w-full max-w-md text-left text-xs text-slate-300 space-y-1.5">
                    <div className="text-slate-400 font-mono text-[11px] uppercase">Destination</div>
                    <div className="text-white font-medium">info@njuregroup.in</div>
                    <div className="text-slate-400 font-mono text-[11px] uppercase pt-1">Subject</div>
                    <div className="text-sky-300 truncate">[Njure Group Inquiry] {formData.vertical} - {formData.name}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full max-w-md">
                    {mailtoLink && (
                      <a
                        href={mailtoLink}
                        className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Launch Mail App</span>
                      </a>
                    )}
                    <button
                      onClick={handleCopy}
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg transition-colors cursor-pointer"
                    >
                      {copied ? 'Copied to Clipboard!' : 'Copy Inquiry Text'}
                    </button>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Direct Corporate Inquiry
                  </h3>

                  {/* Name Input */}
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

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Corporate or Personal Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#07192f] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Vertical of Interest Selection */}
                  <div>
                    <label htmlFor="vertical" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Vertical or Subject of Interest
                    </label>
                    <select
                      id="vertical"
                      value={formData.vertical}
                      onChange={(e) => {
                        setFormData({ ...formData, vertical: e.target.value });
                        if (onVerticalChange) onVerticalChange(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-lg bg-[#07192f] border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                    >
                      <option value="General Partnership">General Partnership &amp; Executive Inquiries</option>
                      <option value="Njure Tech">Njure Tech (ITSM &amp; Enterprise Voice AI)</option>
                      <option value="Vastrathalam">Vastrathalam (Heritage Kerala Handloom &amp; Apparel)</option>
                      <option value="Dozo">Dozo (Hyperlocal Marketplace &amp; Gig Platform)</option>
                      <option value="B+ Energies">B+ Energies (Hybrid Motorcycle &amp; Clean Mobility)</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-slate-300 mb-1.5">
                      Inquiry Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Provide context regarding collaboration, technical pilots, or business inquiries..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#07192f] border text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-lg shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Preparing Email...</span>
                      ) : (
                        <>
                          <span>Transmit Corporate Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-slate-400">
                      Submitting compiles and opens this inquiry addressed to <strong className="text-slate-200">info@njuregroup.in</strong>.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
