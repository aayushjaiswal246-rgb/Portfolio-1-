import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';

interface CaseStudiesProps {
  onInquire: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onInquire }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">03 / Case Studies</span>
          <h2 className="font-serif text-[clamp(44px,6vw,90px)] font-normal leading-[0.9] tracking-[-0.06em] text-[#151515] mt-4">
            The work,<br />
            <em className="text-[#9b5c39] not-italic">under the numbers.</em>
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-end">
          <p className="font-serif text-2xl lg:text-[26px] leading-snug text-[#151515] max-w-2xl mb-4">
            Every case study below represents real capital deployed, real telemetry verified, and real commercial revenue generated.
          </p>
          <p className="text-sm text-[#6c6a63]">
            Click any case study to review the complete technical teardown: Context, Problem, Strategy, Execution, and Result.
          </p>
        </div>
      </div>

      {/* Nolan-Style Cases Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#cfcac0] border border-[#cfcac0]">
        {/* Case 01: Yuri Woori */}
        <article
          onClick={() => setSelectedCase(CASE_STUDIES[0])}
          className="bg-[#f4f1ea] p-8 sm:p-12 flex flex-col justify-between min-h-[440px] hover:bg-[#fffdfa] transition-all cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b5c39] font-medium">
                01 · Yuri Woori · D2C Korean Skincare
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#6c6a63] group-hover:text-[#254d3b] transition-colors">
                <span>Deep Teardown</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-[44px] leading-[1.0] tracking-[-0.04em] font-normal text-[#151515] my-6">
              20× scale without losing ROAS.
            </h3>

            <p className="text-sm text-[#6c6a63] leading-relaxed max-w-xl">
              Started with a ₹50K/month paid-media base and scaled to ₹10L+/month across Meta + Google. The mandate was not simply to spend more — it was to build a full-funnel system where acquisition, conversion, creative learning and retention worked together.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#cfcac0]">
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#254d3b] block">4.2×</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Blended ROAS</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] block">₹42L+</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Attributed Rev / mo</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#9b5c39] block">20×</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Spend Scale</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#151515] pt-6 mt-6 border-t border-[#cfcac0] flex items-center justify-between">
            <span><b>₹50K → ₹10L+/month</b> · Meta 4.4× · Google 3.8× · Myntra 5.1×</span>
            <span className="text-[#9b5c39] font-medium hidden sm:inline">Inspect →</span>
          </div>
        </article>

        {/* Case 02: Svariya */}
        <article
          onClick={() => setSelectedCase(CASE_STUDIES[1])}
          className="bg-[#f4f1ea] p-8 sm:p-12 flex flex-col justify-between min-h-[440px] hover:bg-[#fffdfa] transition-all cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b5c39] font-medium">
                02 · Svariya · Demi-fine Jewellery
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#6c6a63] group-hover:text-[#254d3b] transition-colors">
                <span>Deep Teardown</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-[44px] leading-[1.0] tracking-[-0.04em] font-normal text-[#151515] my-6">
              Build the measurement layer first.
            </h3>

            <p className="text-sm text-[#6c6a63] leading-relaxed max-w-xl">
              A 3-month contractual build. The focus was creating the infrastructure needed to make growth measurable — then using that foundation across paid acquisition, SEO, social and funnel optimisation.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#cfcac0]">
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] block">₹3–4L</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Spend / mo</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#254d3b] block">₹12–15L</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Revenue / mo</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#9b5c39] block">3.5–4×</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">ROAS</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#151515] pt-6 mt-6 border-t border-[#cfcac0] flex items-center justify-between">
            <span><b>GA4 + GTM + GSC + GMC</b> · Built from zero · AOV ₹1,500</span>
            <span className="text-[#9b5c39] font-medium hidden sm:inline">Inspect →</span>
          </div>
        </article>

        {/* Case 03: Guardian Assessment */}
        <article
          onClick={() => setSelectedCase(CASE_STUDIES[2])}
          className="bg-[#f4f1ea] p-8 sm:p-12 flex flex-col justify-between min-h-[440px] hover:bg-[#fffdfa] transition-all cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b5c39] font-medium">
                03 · Guardian Assessment · B2B SaaS / Assessment
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#6c6a63] group-hover:text-[#254d3b] transition-colors">
                <span>Deep Teardown</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-[44px] leading-[1.0] tracking-[-0.04em] font-normal text-[#151515] my-6">
              From zero to a qualified lead engine.
            </h3>

            <p className="text-sm text-[#6c6a63] leading-relaxed max-w-xl">
              Built the digital acquisition infrastructure for a B2B SaaS / assessment business inside the TNV ecosystem. Meta + Google lead generation was paired with an SEO overhaul, email nurturing, LinkedIn outreach and CRM/automation.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#cfcac0]">
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#254d3b] block">120+</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Qualified MQL / mo</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#9b5c39] block">18%</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">CVR</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] block">+40%</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Organic Traffic</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#151515] pt-6 mt-6 border-t border-[#cfcac0] flex items-center justify-between">
            <span><b>8K → 11.2K</b> organic sessions / month · Meta + Google engine built from zero</span>
            <span className="text-[#9b5c39] font-medium hidden sm:inline">Inspect →</span>
          </div>
        </article>

        {/* Case 04: Retention + CRO + AI Creative */}
        <article
          onClick={() => setSelectedCase(CASE_STUDIES[3])}
          className="bg-[#f4f1ea] p-8 sm:p-12 flex flex-col justify-between min-h-[440px] hover:bg-[#fffdfa] transition-all cursor-pointer group"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b5c39] font-medium">
                04 · Retention + CRO + AI Creative
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#6c6a63] group-hover:text-[#254d3b] transition-colors">
                <span>Deep Teardown</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-[44px] leading-[1.0] tracking-[-0.04em] font-normal text-[#151515] my-6">
              Growth after the click.
            </h3>

            <p className="text-sm text-[#6c6a63] leading-relaxed max-w-xl">
              The media account was treated as only one part of the problem. Full-funnel architecture improved site-wide conversion; WhatsApp CRM introduced SKU + recency segmentation; AI-assisted creative operations increased testing velocity while reducing production time.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#cfcac0]">
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#254d3b] block">2.4% → 3.1%</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">CVR · +30%</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#9b5c39] block">18% → 22.5%</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Repeat Purchase</span>
              </div>
              <div>
                <b className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] block">50+</b>
                <span className="text-[10px] uppercase tracking-wider text-[#6c6a63]">Ad Variants / Week</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-[#151515] pt-6 mt-6 border-t border-[#cfcac0] flex items-center justify-between">
            <span><b>−40% production time</b> · +15% ad-level CVR · Interakt WhatsApp CRM</span>
            <span className="text-[#9b5c39] font-medium hidden sm:inline">Inspect →</span>
          </div>
        </article>
      </div>

      {/* Case Detail: How I Approach A Growth Problem */}
      <div className="bg-[#fffdfa] border-x border-b border-[#151515] p-8 sm:p-12 mt-0">
        <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#151515] mb-8">
          How I approach a growth problem
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#cfcac0]">
          <div className="bg-[#fffdfa] p-6">
            <small className="text-[10px] tracking-[0.2em] uppercase text-[#9b5c39] font-mono block mb-2">
              01 / DIAGNOSE
            </small>
            <strong className="block font-serif text-xl sm:text-2xl font-normal text-[#151515] mb-2">
              Find the constraint.
            </strong>
            <p className="text-xs text-[#6c6a63] leading-relaxed m-0">
              Market, audience, unit economics, tracking, funnel friction, and current channel performance.
            </p>
          </div>

          <div className="bg-[#fffdfa] p-6">
            <small className="text-[10px] tracking-[0.2em] uppercase text-[#9b5c39] font-mono block mb-2">
              02 / BUILD
            </small>
            <strong className="block font-serif text-xl sm:text-2xl font-normal text-[#151515] mb-2">
              Make it measurable.
            </strong>
            <p className="text-xs text-[#6c6a63] leading-relaxed m-0">
              GA4, GTM, pixels/CAPI, UTM structure, CRM, and executive dashboards before scaling spend.
            </p>
          </div>

          <div className="bg-[#fffdfa] p-6">
            <small className="text-[10px] tracking-[0.2em] uppercase text-[#9b5c39] font-mono block mb-2">
              03 / TEST
            </small>
            <strong className="block font-serif text-xl sm:text-2xl font-normal text-[#151515] mb-2">
              Create learning loops.
            </strong>
            <p className="text-xs text-[#6c6a63] leading-relaxed m-0">
              Creative, audience, offer, landing-page, and funnel-stage experiments with clear success metrics.
            </p>
          </div>

          <div className="bg-[#fffdfa] p-6">
            <small className="text-[10px] tracking-[0.2em] uppercase text-[#9b5c39] font-mono block mb-2">
              04 / SCALE
            </small>
            <strong className="block font-serif text-xl sm:text-2xl font-normal text-[#151515] mb-2">
              Scale what proves out.
            </strong>
            <p className="text-xs text-[#6c6a63] leading-relaxed m-0">
              Budget allocation based on ROAS, CAC, CVR, LTV:CAC, retention, and business economics.
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
