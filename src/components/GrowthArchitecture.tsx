import React, { useState } from 'react';
import { RotateCw, CheckCircle2 } from 'lucide-react';

export const GrowthArchitecture: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      num: '01',
      title: 'Research',
      subtitle: 'Understand the market',
      detail: 'Competitor tear-downs, audience sentiment extraction, unit economic ceilings, and angle discovery.',
    },
    {
      num: '02',
      title: 'Track',
      subtitle: 'Measure what matters',
      detail: 'GA4 custom events, Google Tag Manager dataLayer, Meta CAPI server-side routing, and UTM taxonomy.',
    },
    {
      num: '03',
      title: 'Acquire',
      subtitle: 'Create demand',
      detail: 'High-intent Google Search, Advantage+ Meta Shopping campaigns, and creative testing sprints.',
    },
    {
      num: '04',
      title: 'Convert',
      subtitle: 'Remove friction',
      detail: 'Landing page speed tuning, 1-click checkout optimization, clear offer hierarchy, and heuristic CRO.',
    },
    {
      num: '05',
      title: 'Retarget',
      subtitle: 'Recover intent',
      detail: 'Dynamic catalog remarketing, browse abandonment hooks, and objection-clearing social proof reels.',
    },
    {
      num: '06',
      title: 'Retain',
      subtitle: 'Increase LTV',
      detail: 'Automated WhatsApp replenishment alerts, email post-purchase flows, and cross-sell bundles.',
    },
    {
      num: '07',
      title: 'Scale',
      subtitle: 'Double down on proof',
      detail: 'Budget compounding across proven winning creative clusters and expanding to secondary channels.',
    },
  ];

  return (
    <section id="approach" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* 01 Approach Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">01 / Approach</span>
          <h2 className="font-serif text-[clamp(42px,6vw,84px)] font-normal leading-[0.92] tracking-[-0.05em] text-[#151515] mt-4">
            Not just ads.<br />
            <em className="text-[#254d3b] not-italic">A system.</em>
          </h2>
        </div>

        <div className="lg:col-span-8 flex flex-col justify-end">
          <p className="font-serif text-2xl lg:text-[28px] leading-snug text-[#151515] max-w-3xl mb-6">
            Research the market. Build the measurement layer. Acquire demand. Remove friction. Retarget with intent. Retain customers. Then scale what the numbers prove.
          </p>
          <p className="text-sm text-[#6c6a63] leading-relaxed max-w-2xl">
            Most digital marketers view growth as media buying tactics inside ad managers. I architect closed-loop growth engines where every ad dollar spent feeds creative intelligence and customer lifetime value.
          </p>
        </div>
      </div>

      {/* 02 Funnel As A Loop */}
      <div className="mt-16 pt-12 border-t border-[#cfcac0]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">02 / Growth Architecture</span>
            <h3 className="font-serif text-3xl lg:text-5xl font-normal tracking-[-0.04em] text-[#151515] mt-2">
              The funnel as a loop.
            </h3>
          </div>
          <p className="text-xs uppercase tracking-[0.14em] text-[#6c6a63] mt-2 md:mt-0 flex items-center gap-1.5">
            <span>Hover or tap any stage to inspect execution</span>
          </p>
        </div>

        {/* Loop Container */}
        <div className="relative max-w-6xl mx-auto py-6">
          {/* Loop horizontal connecting rail on desktop */}
          <div className="hidden lg:block absolute left-[5%] right-[5%] top-[82px] h-[1px] bg-[#cfcac0] z-0" />

          {/* Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {stages.map((stg, idx) => {
              const isOffset = idx % 2 === 1;
              const isActive = activeStage === idx;

              return (
                <div
                  key={stg.num}
                  onMouseEnter={() => setActiveStage(idx)}
                  onMouseLeave={() => setActiveStage(null)}
                  onClick={() => setActiveStage(isActive ? null : idx)}
                  className={`bg-[#254d3b] text-[#fffdfa] rounded-md p-5 flex flex-col justify-between min-h-[220px] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                    isOffset ? 'lg:translate-y-6' : ''
                  } ${isActive ? 'bg-[#1a382a] ring-2 ring-[#9b5c39] scale-[1.03]' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <small className="text-[10px] tracking-[0.2em] opacity-60 font-mono">{stg.num}</small>
                    {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#9b5c39]" />}
                  </div>

                  <div>
                    <strong className="block font-serif text-2xl font-normal tracking-[-0.03em] leading-tight mb-1">
                      {stg.title}
                    </strong>
                    <span className="text-[11px] leading-snug text-white/70 block">
                      {stg.subtitle}
                    </span>
                  </div>

                  <p className="text-[10px] text-white/60 leading-relaxed border-t border-white/10 pt-2 mt-2">
                    {stg.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Loop Return indicator */}
          <div className="mt-12 flex items-center justify-end text-xs uppercase tracking-[0.14em] text-[#9b5c39] font-medium gap-2">
            <RotateCw className="w-4 h-4 animate-spin-slow" />
            <span>Learning feeds the next cycle · Continuous Incrementality</span>
          </div>
        </div>
      </div>
    </section>
  );
};
