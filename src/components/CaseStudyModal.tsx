import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onInquire }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-[#fffdfa] text-[#151515] border border-[#cfcac0] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative flex flex-col"
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#fffdfa]/95 backdrop-blur-md px-6 py-5 border-b border-[#cfcac0] flex items-center justify-between z-20">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b5c39] font-medium">
              Case Study Deep Dive · {caseStudy.tag}
            </span>
            <h2 id="modal-case-title" className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#151515]">
              {caseStudy.brand}
            </h2>
          </div>

          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 text-[#6c6a63] hover:text-[#151515] hover:bg-[#eae6de] transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Headline & Overview */}
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-[-0.03em] leading-tight text-[#151515] mb-4">
              {caseStudy.headline}
            </h3>
            <p className="text-base sm:text-lg text-[#6c6a63] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#f4f1ea] border border-[#cfcac0] p-6">
            {caseStudy.metrics.map((m, idx) => (
              <div key={idx} className="border-l-2 border-[#254d3b] pl-4">
                <span className="block font-serif text-3xl sm:text-4xl font-normal text-[#254d3b] tracking-tight">
                  {m.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#6c6a63]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Section: Context & Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#cfcac0] pt-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b5c39] block mb-2 font-mono">
                [01] · CONTEXT
              </span>
              <p className="text-sm text-[#151515] leading-relaxed">
                {caseStudy.context}
              </p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b5c39] block mb-2 font-mono">
                [02] · THE PROBLEM
              </span>
              <p className="text-sm text-[#151515] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
          </div>

          {/* Section: Strategy */}
          <div className="border-t border-[#cfcac0] pt-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b5c39] block mb-2 font-mono">
              [03] · STRATEGY
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#151515] leading-snug">
              {caseStudy.strategy}
            </p>
          </div>

          {/* Section: Execution Breakdown */}
          <div className="border-t border-[#cfcac0] pt-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#9b5c39] block mb-4 font-mono">
              [04] · EXECUTION BREAKDOWN
            </span>
            <div className="space-y-3">
              {caseStudy.execution.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#f4f1ea]/60 p-4 border border-[#cfcac0]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#254d3b] mt-0.5 shrink-0" />
                  <p className="text-sm text-[#151515] leading-relaxed m-0">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Result */}
          <div className="border-t border-[#cfcac0] pt-8 bg-[#254d3b] text-[#fffdfa] p-6 sm:p-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#fffdfa]/70 block mb-2 font-mono">
              [05] · VERIFIED RESULT
            </span>
            <p className="font-serif text-2xl sm:text-3xl font-normal leading-snug mb-4">
              {caseStudy.result}
            </p>
            <div className="border-t border-white/20 pt-4 flex items-center justify-between text-xs text-white/80">
              <span className="italic">Key Growth Principle:</span>
              <span className="font-medium text-right max-w-md">{caseStudy.keyTakeaway}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#fffdfa] px-6 py-4 border-t border-[#cfcac0] flex items-center justify-between z-20">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#cfcac0] hover:bg-[#f4f1ea] text-xs uppercase tracking-wider text-[#6c6a63]"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-5 py-2.5 bg-[#254d3b] hover:bg-[#1a382a] text-[#fffdfa] text-xs uppercase tracking-wider font-medium"
          >
            Discuss a Similar Growth Mandate →
          </button>
        </div>
      </div>
    </div>
  );
};
