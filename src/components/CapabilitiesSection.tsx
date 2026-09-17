import React from 'react';
import { Target, Search, BarChart3, Shuffle, RefreshCcw, Cpu } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: Target,
      title: 'Acquisition',
      description: 'Meta Ads · Google Ads · Paid Social · Search · Prospecting · Audience strategy · Creative testing · Budget allocation · Marketplace acquisition.',
      highlight: 'Advantage+ Shopping, PMax & Non-Brand Search',
    },
    {
      icon: Search,
      title: 'Organic discovery',
      description: 'SEO · SEM · SMM · AEO (Answer Engine Optimization) · GEO · SXO · AI-enabled search and content workflows.',
      highlight: 'Technical Crawlability & Intent-Driven Content',
    },
    {
      icon: BarChart3,
      title: 'Measurement',
      description: 'GA4 · GTM · Meta Pixel & CAPI · Server-Side Conversion tracking · UTM frameworks · Google Merchant Center · dashboards · attribution.',
      highlight: 'First-Party Server-Side Telemetry',
    },
    {
      icon: Shuffle,
      title: 'Conversion',
      description: 'CRO · landing pages · product journeys · offer/messaging tests · funnel diagnosis · checkout friction · TOFU/MOFU/BOFU architecture.',
      highlight: 'Friction Removal & 1-Click Checkout',
    },
    {
      icon: RefreshCcw,
      title: 'Retention',
      description: 'Retargeting · WhatsApp CRM (Interakt) · Email · abandoned cart · cross-sell · upsell · win-back · repeat purchase loops.',
      highlight: 'SKU Depletion & Automated Replenishment',
    },
    {
      icon: Cpu,
      title: 'AI operations',
      description: 'Claude + ChatGPT workflows · AI-assisted research · creative production · content operations · automation · agentic productivity.',
      highlight: '50+ Ad Variants Weekly & Fast Turnaround',
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* Section Head */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">06 / Capabilities</span>
          <h2 className="font-serif text-[clamp(44px,6vw,90px)] font-normal leading-[0.9] tracking-[-0.06em] text-[#151515] mt-4">
            What I<br />
            <em className="text-[#254d3b] not-italic">actually do.</em>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-end">
          <p className="font-serif text-2xl lg:text-[26px] leading-snug text-[#151515] max-w-2xl">
            A cohesive stack designed to eliminate the handoff loss between creative ideas, traffic generation, landing page conversion, and customer retention.
          </p>
        </div>
      </div>

      {/* 6 Grid Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#fffdfa] border border-[#cfcac0] p-8 flex flex-col justify-between hover:border-[#254d3b] transition-all hover:shadow-sm group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#f4f1ea] border border-[#cfcac0] flex items-center justify-center text-[#254d3b] mb-6 group-hover:bg-[#254d3b] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6c6a63] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfcac0]/60 text-[11px] font-mono uppercase tracking-wider text-[#9b5c39]">
                {item.highlight}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
