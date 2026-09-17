import React from 'react';
import { CLIENT_INDUSTRIES, NAMED_CLIENTS_LIST } from '../data/portfolioData';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* Freelance Bridge Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium block mb-2">
          Parallel Branch · 2022 → Present
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.05em] text-[#151515] mb-4">
          Freelance Clients &amp; Industries
        </h2>
        <p className="text-sm sm:text-base text-[#6c6a63] leading-relaxed">
          A diverse portfolio connected to the exact same growth system.
        </p>
      </div>

      {/* 6 Client Columns with Architectural Tree Lines */}
      <div className="relative border-t border-[#9b5c39] pt-8">
        {/* End bracket dots */}
        <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-[#f4f1ea] border-2 border-[#9b5c39]" />
        <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-[#f4f1ea] border-2 border-[#9b5c39]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-[#cfcac0] border-l border-r border-[#cfcac0]">
          {CLIENT_INDUSTRIES.map((col, idx) => (
            <div key={idx} className="p-6 relative flex flex-col justify-between min-h-[300px] hover:bg-[#fffdfa] transition-colors">
              {/* Vertical connector stem to top line on desktop */}
              <div className="hidden lg:block absolute -top-8 left-1/2 w-[1px] h-8 bg-[#9b5c39]" />

              <div>
                <span className="text-2xl text-[#9b5c39] block mb-4">{col.icon}</span>
                <h3 className="font-serif text-xl font-normal text-[#151515] leading-tight mb-4">
                  {col.title}
                </h3>
                <div className="space-y-1.5 text-xs text-[#151515] font-serif leading-relaxed">
                  {col.brands.map((b, bIdx) => (
                    <div key={bIdx} className="hover:text-[#9b5c39] transition-colors">
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <small className="block mt-6 pt-4 border-t border-[#cfcac0] text-[10px] text-[#6c6a63] leading-relaxed font-sans">
                {col.subtext}
              </small>
            </div>
          ))}
        </div>

        {/* 34+ Named Brands Horizontal Strip */}
        <div className="mt-8 p-5 bg-[#151515]/[0.035] border border-[#cfcac0] text-[11px] leading-relaxed text-[#6c6a63]">
          <b className="text-[#9b5c39] tracking-[0.14em] text-[10px] uppercase mr-3 font-mono">
            34+ NAMED CLIENTS &amp; BRANDS:
          </b>
          {NAMED_CLIENTS_LIST.join(' · ')}
        </div>

        {/* The Common Thread Banner */}
        <div className="mt-6 bg-[#254d3b] text-[#fffdfa] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-75 block font-mono mb-1">
              THE COMMON THREAD
            </span>
            <strong className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
              Research → Track → Acquire → Convert → Retarget → Retain → Scale
            </strong>
          </div>
          <span className="text-xs uppercase tracking-[0.14em] text-white/70 font-mono shrink-0">
            Same string. Multiple possibilities.
          </span>
        </div>
      </div>
    </section>
  );
};
