import React from 'react';
import { X, ExternalLink, Check, ArrowRight, ShieldCheck, Cpu, Sparkles, MapPin, Zap } from 'lucide-react';
import { VerticalData } from '../data/verticals';

interface VerticalModalProps {
  vertical: VerticalData | null;
  onClose: () => void;
  onInquire: (verticalName: string) => void;
}

export const VerticalModal: React.FC<VerticalModalProps> = ({ vertical, onClose, onInquire }) => {
  if (!vertical) return null;

  const renderIcon = () => {
    switch (vertical.id) {
      case 'njure-tech':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'vastrathalam':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'dozo':
        return <MapPin className="w-6 h-6 text-emerald-400" />;
      case 'b-plus-energies':
        return <Zap className="w-6 h-6 text-blue-400" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#081d36] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
            {renderIcon()}
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
              {vertical.division}
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-white mt-1">
              {vertical.name}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
              <span>Status: {vertical.status}</span>
              <span aria-hidden="true">·</span>
              <span>Njure Group Subsidiary</span>
            </div>
          </div>
        </div>

        {/* Tagline & Core Summary */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-200">
          <strong className="text-white block font-medium mb-1">
            {vertical.tagline}
          </strong>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {vertical.description}
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-[#092548] border border-white/10 text-center">
          {vertical.metrics.map((m, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-base sm:text-lg font-bold text-white font-mono-numbers">
                {m.value}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Domain Innovations */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Core Architectural Capabilities
          </h4>
          <div className="space-y-2.5">
            {vertical.domainFeatures.map((feat, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <div className="text-sm font-semibold text-white">
                  {feat.title}
                </div>
                <div className="text-xs text-slate-300 mt-1 leading-normal">
                  {feat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div>
            {vertical.externalLink ? (
              <a
                href={vertical.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Visit portal: {vertical.externalLink.replace('https://', '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-slate-400">
                Inquiries routed via Njure Group Corporate Desk
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(vertical.name);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <span>Direct Inquiry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VerticalModal;
