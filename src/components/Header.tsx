import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, MessageSquareCode, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onOpenAssistant }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Career', href: '#experience' },
    { label: 'Clients', href: '#clients' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Credentials (51)', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-[5vw] py-4 flex items-center justify-between ${
        scrolled
          ? 'bg-[#f4f1ea]/95 backdrop-blur-md border-b border-[#cfcac0] shadow-sm'
          : 'bg-gradient-to-b from-[#f4f1ea] via-[#f4f1ea]/80 to-transparent'
      }`}
    >
      <a
        href="#"
        id="logo-brand-mark"
        className="font-extrabold tracking-tight text-lg text-[#151515] flex items-center gap-2 group"
      >
        <span className="font-serif italic text-[#9b5c39] font-normal group-hover:underline">AJ</span>
        <span className="text-xs uppercase tracking-widest text-[#6c6a63]">/ 26</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.14em] text-[#151515]">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-[#9b5c39] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#9b5c39] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Header Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenAssistant}
          id="btn-open-assistant-header"
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#cfcac0] hover:border-[#254d3b] hover:bg-[#254d3b] hover:text-[#fffdfa] text-[11px] uppercase tracking-wider text-[#151515] transition-all"
          title="Ask portfolio assistant questions about Aayush's work"
        >
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>Ask Assistant</span>
        </button>

        <button
          onClick={onOpenResume}
          id="btn-download-resume-header"
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#254d3b] hover:bg-[#1a382a] text-[#fffdfa] text-[11px] uppercase tracking-wider transition-all shadow-sm"
        >
          <ArrowDownToLine className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>

        <a
          href="/standalone_portfolio.html"
          download="index.html"
          id="btn-download-html-header"
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#9b5c39] hover:bg-[#834c2d] text-[#fffdfa] text-[11px] uppercase tracking-wider transition-all shadow-sm"
          title="Download the entire standalone website as a single index.html file"
        >
          <ArrowDownToLine className="w-3.5 h-3.5" />
          <span>Download HTML</span>
        </a>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="btn-mobile-menu-toggle"
          aria-label="Toggle mobile navigation menu"
          className="md:hidden p-2 text-[#151515]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-[#f4f1ea] border-b border-[#cfcac0] shadow-xl p-6 flex flex-col gap-4 z-50">
          <nav className="flex flex-col gap-3 text-sm tracking-wider uppercase">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#cfcac0]/40 text-[#151515] hover:text-[#9b5c39]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full py-2.5 px-4 rounded border border-[#cfcac0] text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4 text-[#9b5c39]" />
              <span>Ask Portfolio Assistant</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 bg-[#254d3b] text-[#fffdfa] text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
