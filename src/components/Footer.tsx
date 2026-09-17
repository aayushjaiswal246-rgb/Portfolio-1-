import React from 'react';
import { ArrowUp, ArrowDownToLine, MessageSquareCode } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAssistant }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-[5vw] bg-[#f4f1ea] border-t border-[#cfcac0] text-xs font-mono text-[#6c6a63] uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="font-serif italic text-sm text-[#151515] normal-case">
          Aayush Jaiswal
        </span>
        <span>·</span>
        <span>2026</span>
        <span>·</span>
        <span className="text-[#254d3b]">Performance / Growth / AI</span>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={onOpenAssistant}
          className="hover:text-[#254d3b] transition-colors flex items-center gap-1.5"
        >
          <MessageSquareCode className="w-3.5 h-3.5 text-[#9b5c39]" />
          <span>Ask Assistant</span>
        </button>

        <button
          onClick={onOpenResume}
          className="hover:text-[#254d3b] transition-colors flex items-center gap-1.5"
        >
          <ArrowDownToLine className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>

        <a
          href="/standalone_portfolio.html"
          download="index.html"
          className="hover:text-[#254d3b] transition-colors flex items-center gap-1.5"
          title="Download the entire website as a single index.html file"
        >
          <ArrowDownToLine className="w-3.5 h-3.5 text-[#9b5c39]" />
          <span>HTML File</span>
        </a>

        <button
          onClick={scrollToTop}
          className="hover:text-[#151515] transition-colors flex items-center gap-1.5"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
