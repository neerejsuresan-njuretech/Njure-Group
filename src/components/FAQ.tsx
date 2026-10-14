import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'Corporate Overview',
      question: "What is Njure Group and how do its four operating divisions collaborate?",
      answer:
        "Njure Group is a diversified enterprise ecosystem headquartered in Vattoli Bazar, Balussery, Kozhikode, Kerala. We operate across four high-impact divisions: enterprise technology (Njure Tech), handloom heritage apparel (Vastrathalam), hyperlocal community trade (Dozo), and sustainable mobility engineering (B+ Energies). Each venture functions with operational independence while sharing core technological infrastructure, strategic capital, and our guiding ethos of human dignity."
    },
    {
      category: 'Enterprise Technology',
      question: "How can businesses collaborate with Njure Tech for ITSM automation and Voice AI?",
      answer:
        "Njure Tech engineers proprietary IT Service Management solutions through ScribbleIT, low-latency multilingual conversational voice AI, and zero-trust cloud infrastructure. Enterprises can schedule architectural reviews and pilots directly through tech.njuregroup.in or submit an inquiry through our corporate desk."
    },
    {
      category: 'Handloom Heritage',
      question: "How does Vastrathalam ensure 100% fair trade and authenticity for Kerala weavers?",
      answer:
        "We bypass exploitative middlemen by partnering directly with master weaver cooperatives in Balaramapuram, Chendamangalam, and Kuthampully. Every Kasavu saree and ethnic drape is certified for authenticity, and sales margins flow directly into artisan household bank accounts. Discover the collections at vastrathalam.njuregroup.in."
    },
    {
      category: 'Hyperlocal Commerce',
      question: "What makes the Dozo platform different from conventional gig economy apps?",
      answer:
        "Unlike platforms that penalize gig workers with opaque algorithmic scoring and steep 25–40% commissions, Dozo guarantees local electricians, plumbers, and neighborhood merchants retain over 92% of their service earnings. All transactions settle via automated digital escrow with rapid 5-kilometer localized dispatch."
    },
    {
      category: 'Clean Mobility',
      question: "What is the engineering focus of B+ Energies' hybrid motorcycle initiative?",
      answer:
        "B+ Energies is developing an indigenous parallel hybrid powertrain for two-wheelers. By utilizing intelligent electric torque in stop-and-go urban traffic and high-efficiency combustion for highway cruising, our prototypes target a 45–60% reduction in daily commuting fuel expenses for middle-class families without range anxiety."
    },
    {
      category: 'Headquarters & Partnerships',
      question: "Where is the corporate headquarters located, and can we schedule an executive meeting?",
      answer:
        "Our registered corporate headquarters is located at Vattoli Bazar, Balussery, Kozhikode, Kerala — PIN 673612. We welcome strategic dialogues with prospective technology partners, institutional investors, and community organizations. Meetings can be scheduled through our corporate inquiries page."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#07192f]/30 backdrop-blur-sm border-b border-white/10 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-400/20 text-xs text-blue-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Everything You Need to Know
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Clear answers regarding our operating structure, technology platforms, artisan initiatives,
            and corporate governance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#092548] border-white/20 shadow-xl'
                    : 'bg-[#081d36] border-white/10 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 font-mono-numbers">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg border border-white/10 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-400 bg-white/5' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Corporate Support Prompt */}
        <div className="p-6 rounded-2xl bg-[#081d36] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-400/20 text-blue-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Have a specialized institutional inquiry?
              </h4>
              <p className="text-xs text-slate-400">
                Our executive desk directly answers questions from prospective partners and clients.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Contact Corporate Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
