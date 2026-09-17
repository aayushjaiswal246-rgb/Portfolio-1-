import React, { useEffect, useRef } from 'react';
import { X, Award, CheckCircle, ShieldCheck, ExternalLink, Calendar, Hash } from 'lucide-react';
import { Certificate } from '../data/certificates';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="bg-[#fffdfa] border border-[#cfcac0] max-w-2xl w-full rounded-none shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Top Bar */}
        <div className="bg-[#254d3b] text-[#fffdfa] px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#9b5c39]" />
            <span className="text-xs uppercase tracking-[0.16em] font-mono">
              Verified Credential #{certificate.number} of 51
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close certificate lightbox"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Certificate Visual Badge Frame */}
          <div className="bg-[#f4f1ea] border-2 border-dashed border-[#cfcac0] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#254d3b] text-[#fffdfa] flex items-center justify-center mb-4 shadow-md">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.2em] text-[#9b5c39] font-medium mb-1">
              {certificate.issuer}
            </span>

            <h3 id="cert-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] leading-snug max-w-lg mb-3">
              {certificate.title}
            </h3>

            <p className="text-xs text-[#6c6a63] font-mono">
              Awarded to <strong className="text-[#151515]">Aayush Jaiswal</strong>
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#6c6a63]">
              <span className="flex items-center gap-1 font-mono">
                <Calendar className="w-3.5 h-3.5 text-[#254d3b]" />
                Issued: {certificate.issueYear}
              </span>
              <span className="flex items-center gap-1 font-mono">
                <Hash className="w-3.5 h-3.5 text-[#9b5c39]" />
                ID: {certificate.credentialId}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#9b5c39] font-mono mb-2">
              Credential Competency &amp; Scope
            </h4>
            <p className="text-sm text-[#151515] leading-relaxed">
              {certificate.summary}
            </p>
          </div>

          {/* Skills Covered */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#6c6a63] font-mono mb-3">
              Key Skills Demonstrated
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f4f1ea] border border-[#cfcac0] text-xs text-[#151515]"
                >
                  <CheckCircle className="w-3 h-3 text-[#254d3b]" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verification Status */}
          <div className="border-t border-[#cfcac0] pt-4 flex items-center justify-between text-xs text-[#6c6a63]">
            <span className="flex items-center gap-1.5 text-[#254d3b] font-medium">
              <CheckCircle className="w-4 h-4" />
              Verified Authenticity from Official 61-page Portfolio Record
            </span>
            <span className="font-mono text-[10px]">
              Item #{certificate.number}/51
            </span>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#f4f1ea] px-6 py-3 border-t border-[#cfcac0] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#151515] hover:bg-[#254d3b] text-[#fffdfa] text-xs uppercase tracking-wider transition-colors"
          >
            Close Lightbox
          </button>
        </div>
      </div>
    </div>
  );
};
