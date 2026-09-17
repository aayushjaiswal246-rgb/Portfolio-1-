import React from 'react';
import { ArrowDownToLine, ArrowDownRight, Mail, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="min-h-screen pt-36 md:pt-44 pb-16 px-[5vw] flex flex-col justify-between border-b border-[#cfcac0]">
      {/* Upper Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[#6c6a63] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#254d3b] inline-block animate-pulse"></span>
            <span>Performance &amp; Growth Manager · Mumbai · ~5 Years Experience</span>
          </div>

          <h1 className="font-serif text-[clamp(64px,14vw,190px)] leading-[0.82] tracking-[-0.07em] font-normal text-[#151515] m-0">
            Aayush<br />
            <em className="text-[#9b5c39] not-italic font-serif">Jaiswal.</em>
          </h1>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end lg:pl-6 pb-2">
          <p className="font-serif text-2xl lg:text-[25px] leading-snug text-[#151515] mb-8">
            I build full-funnel growth systems that connect attention, acquisition, conversion, and retention.
          </p>

          <p className="text-sm text-[#6c6a63] leading-relaxed mb-8">
            Specializing in paid media (Meta &amp; Google Ads), technical SEO, conversion rate optimization (CRO), analytics telemetry, and AI-accelerated creative operations across D2C, B2B SaaS, and marketplaces.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#work"
              id="hero-cta-cases"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#151515] hover:bg-[#254d3b] text-[#fffdfa] text-xs uppercase tracking-wider transition-all"
            >
              <span>View Case Studies</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-cta-resume"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#151515] hover:border-[#254d3b] hover:bg-[#254d3b] hover:text-[#fffdfa] text-[#151515] text-xs uppercase tracking-wider transition-all"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 px-4 py-3 border border-[#cfcac0] hover:border-[#9b5c39] text-[#6c6a63] hover:text-[#9b5c39] text-xs uppercase tracking-wider transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Metrics Counter Row */}
      <div className="mt-16 pt-8 border-t border-[#151515]">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#cfcac0]">
          <div className="py-4 md:py-0 md:pr-6">
            <b className="block font-serif text-4xl lg:text-[58px] font-normal tracking-[-0.05em] text-[#151515] leading-none mb-2">
              34+
            </b>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#6c6a63]">
              Named Brands &amp; Clients
            </span>
          </div>

          <div className="py-4 md:py-0 md:px-6">
            <b className="block font-serif text-4xl lg:text-[58px] font-normal tracking-[-0.05em] text-[#254d3b] leading-none mb-2">
              20×
            </b>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#6c6a63]">
              Yuri Woori Spend Scale
            </span>
          </div>

          <div className="py-4 md:py-0 md:px-6">
            <b className="block font-serif text-4xl lg:text-[58px] font-normal tracking-[-0.05em] text-[#9b5c39] leading-none mb-2">
              4.2×
            </b>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#6c6a63]">
              Blended ROAS Documented
            </span>
          </div>

          <div className="py-4 md:py-0 md:pl-6">
            <b className="block font-serif text-4xl lg:text-[58px] font-normal tracking-[-0.05em] text-[#151515] leading-none mb-2">
              120+
            </b>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#6c6a63]">
              Qualified MQLs / Month
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
