import React from 'react';
import { CAREER_TIMELINE } from '../data/portfolioData';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* Section Head */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">04 / Career</span>
          <h2 className="font-serif text-[clamp(44px,6vw,90px)] font-normal leading-[0.9] tracking-[-0.06em] text-[#151515] mt-4">
            Different roles.<br />
            <em className="text-[#254d3b] not-italic">Same direction.</em>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-end">
          <p className="font-serif text-2xl lg:text-[26px] leading-snug text-[#151515] max-w-2xl">
            A progression marked by compounding technical depth—from agency media buying across 20+ accounts to full-stack growth management.
          </p>
        </div>
      </div>

      {/* Main Career Wrap */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        {/* Left Sticky Aside */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start pt-2">
          <div className="text-[10px] tracking-[0.22em] uppercase text-[#6c6a63] font-mono mb-3">
            Aayush Jaiswal
          </div>
          <h3 className="font-serif text-5xl sm:text-6xl font-normal leading-[0.85] tracking-[-0.07em] text-[#151515] mb-6">
            Career<br />Timeline.
          </h3>
          <div className="w-9 h-[1px] bg-[#151515] my-6" />
          <em className="font-serif text-xl sm:text-2xl leading-snug text-[#151515] block mb-8 not-italic">
            From ideas to impact, across brands, industries &amp; opportunities.
          </em>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 pt-4 border-t border-[#cfcac0]">
            <div>
              <b className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#151515]">
                ~5
              </b>
              <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">
                Years of Experience
              </span>
            </div>

            <div>
              <b className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#254d3b]">
                34+
              </b>
              <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">
                Brands Worked With
              </span>
            </div>

            <div>
              <b className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#9b5c39]">
                6
              </b>
              <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">
                Professional Roles
              </span>
            </div>

            <div>
              <b className="block font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#151515]">
                ∞
              </b>
              <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">
                Growth Mindset
              </span>
            </div>
          </div>
        </aside>

        {/* Right Vertical String Timeline */}
        <div className="lg:col-span-9 relative pl-6 sm:pl-16">
          {/* Vertical central string rail */}
          <div className="absolute left-[15px] sm:left-[22px] top-4 bottom-8 w-[3px] bg-[#151515] rounded-full" />
          
          {/* Top start dot */}
          <div className="absolute left-[5px] sm:left-[12px] top-0 w-[23px] h-[23px] rounded-full bg-[#254d3b] border-4 border-[#f4f1ea] ring-2 ring-[#151515] z-10" />

          {/* Timeline Nodes */}
          <div className="space-y-6">
            {CAREER_TIMELINE.map((node) => {
              const isContract = node.isContract;
              const isMain = node.isMain;

              return (
                <article
                  key={node.id}
                  className="relative grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group"
                >
                  {/* Left connector dot and line */}
                  <div className="hidden sm:block sm:col-span-2 text-right pr-4">
                    <span className="font-serif text-lg text-[#151515] block font-normal leading-tight">
                      {node.yearLabel}
                    </span>
                    <small className="text-[9px] uppercase tracking-wider text-[#6c6a63] block font-mono">
                      {node.periodLabel.split('—')[0]}
                    </small>
                  </div>

                  {/* Horizontal Connector Line & Node Dot */}
                  <div className="hidden sm:block absolute left-[-42px] top-1/2 -translate-y-1/2 w-[34px] h-[1px] bg-[#151515] z-0" />
                  <div
                    className={`hidden sm:block absolute left-[-52px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full bg-[#f4f1ea] border-4 ${
                      isContract ? 'border-[#9b5c39]' : 'border-[#254d3b]'
                    } ring-1 ring-[#151515] z-10`}
                  />

                  {/* Node Card */}
                  <div
                    className={`sm:col-span-10 grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 bg-[#fffdfa]/80 hover:bg-[#fffdfa] border rounded-lg transition-all shadow-sm hover:shadow-md ${
                      isMain
                        ? 'border-[#254d3b] ring-1 ring-[#254d3b]/20 shadow-[7px_7px_0_rgba(37,77,59,0.06)]'
                        : isContract
                        ? 'border-[#c5a183]'
                        : 'border-[#cfcac0]'
                    }`}
                  >
                    {/* Role Box */}
                    <div
                      className={`md:col-span-4 rounded-md p-4 flex flex-col justify-between text-white ${
                        isContract ? 'bg-[#9b5c39]' : 'bg-[#254d3b]'
                      }`}
                    >
                      <span className="text-[9px] tracking-[0.16em] uppercase opacity-75 font-mono">
                        {node.stepNo}
                      </span>
                      <h4 className="font-serif text-2xl font-normal leading-tight my-2">
                        {node.stepName}
                      </h4>
                      <span className="text-[10px] opacity-80 font-mono">
                        {node.dates}
                      </span>
                    </div>

                    {/* Role Details */}
                    <div className="md:col-span-5 flex flex-col justify-center">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#151515] leading-tight mb-1">
                        {node.companyFull}
                      </h3>
                      <strong className="text-xs text-[#254d3b] block mb-2">
                        {node.roleTitle}
                      </strong>
                      <p className="text-xs text-[#6c6a63] leading-relaxed m-0">
                        {node.summary}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block border border-[#151515]/20 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#6c6a63]">
                          {node.badge}
                        </span>
                      </div>
                    </div>

                    {/* Result Stats */}
                    <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#cfcac0] pt-3 md:pt-0 md:pl-4 flex flex-col justify-center">
                      {node.metrics.map((m, idx) => (
                        <div key={idx} className="mb-2 last:mb-0">
                          <b className="font-serif text-lg font-normal text-[#151515] leading-tight block">
                            {m.value}
                          </b>
                          <span className="text-[9px] uppercase tracking-wider text-[#6c6a63]">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom terminal dot */}
          <div className="absolute left-[5px] sm:left-[12px] -bottom-4 w-[23px] h-[23px] rounded-full bg-[#254d3b] border-4 border-[#f4f1ea] ring-2 ring-[#151515] z-10 flex items-center justify-center">
            <span className="text-[10px] text-white">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};
