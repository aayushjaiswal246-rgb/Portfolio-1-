import React, { useEffect, useRef } from 'react';
import { X, ArrowDownToLine, Printer, Mail, MapPin, Linkedin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CAREER_TIMELINE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `AAYUSH JAISWAL
Performance & Growth Manager
Mumbai, India | aayushjaiswal246@gmail.com | https://www.linkedin.com/in/aayush-jaiswal-89923435a
Portfolio: https://aayushjaiswal246-rgb.github.io/

PROFESSIONAL SUMMARY
Performance & Growth Marketing professional with ~5 years of digital marketing experience across D2C, B2C marketplaces, B2B SaaS, and FMCG. Specialized in full-funnel acquisition, paid media scaling (Meta & Google Ads), conversion rate optimization (CRO), analytics telemetry (GA4, GTM, CAPI), retention CRM, and AI-enabled creative production.

PROVEN METRICS & IMPACT
- 20× Spend Scale: Scaled D2C skincare brand Yuri Woori from ₹50K to ₹10L+/month while upholding 4.2× blended ROAS (₹42L+ monthly revenue).
- 4.2× Blended ROAS: Maintained across Meta (4.4×), Google (3.8×), and Myntra (5.1×).
- 120+ Qualified MQLs/Month: Built B2B lead acquisition engine for Guardian Assessment at 18% conversion rate and +40% organic traffic lift.
- 34+ Named Brands: Managed campaigns and growth pipelines across D2C, B2B, SaaS, Manufacturing, and FinTech.
- 51 Verified Certifications: Spanning Google AI-Powered Ads, Semrush Technical SEO, Anthropic Claude, Meta Blueprint, HubSpot, and ICAI/WIRC.

CORE COMPETENCIES
- Paid Acquisition: Meta Ads (Advantage+ Shopping, CAPI), Google Ads (Search, PMax, Display, YouTube), Amazon Ads, LinkedIn Ads.
- Measurement & Analytics: GA4, GTM (DataLayer), Meta Conversions API (CAPI), UTM Architecture, Merchant Center, Attribution Modeling.
- CRO & Retention: Landing Page Architecture, 1-Click Checkout, Interakt WhatsApp CRM, HubSpot Email Nurturing, Cohort Analysis.
- AI Operations: Claude & ChatGPT prompt workflows, automated creative iteration (50+ weekly variants), MCP tool integration.

PROFESSIONAL EXPERIENCE
1. MERITTYPE Pvt. Ltd. / Svariya | Performance & Growth Manager (Jul 2026 — Present)
- Contractual growth build across acquisition, analytics, CRO, and AI-enabled marketing operations.
- Built measurement telemetry from zero (GA4, GTM, CAPI, GSC, GMC).
- Managed ₹3–4L monthly spend generating ₹12–15L monthly revenue at 3.5–4× ROAS with AOV ₹1,500.

2. TNV Group | Digital Marketing Lead (Jul 2025 — Jan 2026)
- Directed digital initiatives across 4 group entities: TNV Global, TNV Certification, TNV Consultants, TNV Media.
- Orchestrated performance media, organic SEO, social channels, and automated lead routing CRM.

3. Accomplish Trades / Yuri Woori | Performance Marketing Lead (Nov 2025 — Jul 2026)
- Scaled paid media ad spend 20× (₹50K to ₹10L+/month) across Meta and Google Ads.
- Delivered 4.2× blended ROAS and ₹42L+ monthly attributed revenue.
- Decreased creative production time by 40% and lifted repeat purchase rates from 18% to 22.5% via WhatsApp CRM.

4. Guardian Assessment Pvt. Ltd. | Digital Marketing Executive (Aug 2025 — Nov 2025)
- Built B2B digital acquisition infrastructure from zero for ISO compliance and assessment software.
- Drove 120+ qualified MQLs/month at 18% conversion rate and achieved +40% organic traffic growth (8K to 11.2K sessions).

5. Finx | Digital Marketing Intern (Aug 2024 — Dec 2024)
- Managed ₹50K monthly Meta ad spend, creative testing frameworks, and lifted audience engagement by +35%.

6. Ursa Minor Consulting | Digital Marketing Trainee → Associate (Jan 2023 — Aug 2024)
- Executed multi-channel paid acquisition campaigns across 20+ diverse client accounts (D2C, B2B, SaaS, FinTech).

7. Independent / Freelance Consultant | Performance & Growth Marketing (2022 — Present)
- Consulted for 34+ named brands across full-funnel acquisition, SEO, CRO, and analytics infrastructure.

VERIFIED CREDENTIALS & LICENSES
- Google Skillshop: AI-Powered Performance Ads, Search, Display, Video, Measurement & Attribution, Apps, GA4.
- Semrush Academy: SEO Fundamentals, Keyword Research, Technical SEO, Competitor Analysis, PPC Fundamentals & Automation.
- Anthropic: Claude for Enterprise & Automation, Prompt Engineering, Model Context Protocol (MCP), Agentic Workflows.
- Meta Blueprint: Certified Digital Marketing Associate, Certified Media Buying Professional.
- HubSpot Academy: Inbound, Content Marketing, Email Marketing, Frictionless Sales & CRO.
- Professional: MS-CIT (MSBTE/MKCL), ICAI/WIRC (GMCS, Ethics Orientation, ITT).
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Aayush_Jaiswal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[#fffdfa] border border-[#cfcac0] max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-none shadow-2xl relative flex flex-col">
        {/* Sticky Action Toolbar */}
        <div className="sticky top-0 bg-[#254d3b] text-[#fffdfa] px-6 py-4 flex items-center justify-between z-20 print:hidden">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#9b5c39]" />
            <span className="text-xs uppercase tracking-[0.16em] font-mono">
              Official Verified Resume · Aayush Jaiswal
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="btn-print-resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider rounded transition-colors"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              id="btn-download-resume-file"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#9b5c39] hover:bg-[#7e4a2d] text-white text-xs font-mono uppercase tracking-wider rounded transition-colors"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-12 text-[#151515] bg-[#fffdfa] selection:bg-[#9b5c39] selection:text-white print:p-0">
          {/* Header */}
          <div className="border-b-2 border-[#151515] pb-6 mb-8">
            <h1 id="resume-modal-title" className="font-serif text-4xl sm:text-5xl font-normal tracking-[-0.04em] text-[#151515] mb-2">
              Aayush Jaiswal
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#254d3b] mb-4">
              Performance &amp; Growth Manager
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6c6a63] font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#9b5c39]" />
                Mumbai, India
              </span>
              <a
                href="mailto:aayushjaiswal246@gmail.com"
                className="flex items-center gap-1.5 hover:text-[#9b5c39] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#9b5c39]" />
                aayushjaiswal246@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/aayush-jaiswal-89923435a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#9b5c39] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#9b5c39]" />
                linkedin.com/in/aayush-jaiswal-89923435a
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-mono font-bold mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-[#151515]">
              Performance and Growth Marketing professional with approximately 5 years of digital marketing experience across D2C, B2C marketplaces, B2B SaaS, and FMCG. Specialized in full-funnel acquisition, paid media scaling (Meta &amp; Google Ads), conversion rate optimization (CRO), analytics telemetry (GA4, GTM, CAPI), retention CRM, and AI-enabled creative production operations. Proven record scaling ad spend from ₹50K to ₹10L+/month while sustaining 4.2× blended ROAS.
            </p>
          </div>

          {/* Verified Metrics Highlights */}
          <div className="mb-8 bg-[#f4f1ea] border border-[#cfcac0] p-5">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#254d3b] font-mono font-bold mb-3">
              Verified Track Record
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <b className="font-serif text-2xl text-[#254d3b] block">20×</b>
                <span className="text-[10px] uppercase text-[#6c6a63]">Yuri Woori Spend Scale</span>
              </div>
              <div>
                <b className="font-serif text-2xl text-[#9b5c39] block">4.2×</b>
                <span className="text-[10px] uppercase text-[#6c6a63]">Blended ROAS Documented</span>
              </div>
              <div>
                <b className="font-serif text-2xl text-[#151515] block">120+</b>
                <span className="text-[10px] uppercase text-[#6c6a63]">MQLs / Mo (18% CVR)</span>
              </div>
              <div>
                <b className="font-serif text-2xl text-[#254d3b] block">34+</b>
                <span className="text-[10px] uppercase text-[#6c6a63]">Named Brands Handled</span>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-mono font-bold mb-3">
              Core Competencies &amp; Growth Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="border-l-2 border-[#254d3b] pl-3">
                <strong className="block text-[#151515] mb-1">Paid Acquisition &amp; Media</strong>
                <p className="text-[#6c6a63] m-0">Meta Ads (Advantage+ Shopping, CAPI), Google Ads (Search, PMax, Video, Display), Amazon Sponsored Ads, LinkedIn Ads, Marketplace Media (Myntra).</p>
              </div>
              <div className="border-l-2 border-[#254d3b] pl-3">
                <strong className="block text-[#151515] mb-1">Telemetry &amp; Analytics</strong>
                <p className="text-[#6c6a63] m-0">GA4 custom events, Google Tag Manager dataLayer containers, Meta CAPI server-side routing, Google Merchant Center, Attribution modeling.</p>
              </div>
              <div className="border-l-2 border-[#9b5c39] pl-3">
                <strong className="block text-[#151515] mb-1">CRO, Funnel &amp; Retention</strong>
                <p className="text-[#6c6a63] m-0">Heuristic UX testing, 1-click checkout, Interakt WhatsApp CRM automation, HubSpot email workflows, SKU depletion replenishment cycles.</p>
              </div>
              <div className="border-l-2 border-[#9b5c39] pl-3">
                <strong className="block text-[#151515] mb-1">AI Marketing Operations</strong>
                <p className="text-[#6c6a63] m-0">Claude &amp; ChatGPT structured workflows, Model Context Protocol (MCP), prompt engineering, rapid creative iteration (50+ ad variants/week).</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-mono font-bold mb-6">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {CAREER_TIMELINE.map((exp) => (
                <div key={exp.id} className="border-b border-[#cfcac0]/60 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h3 className="font-serif text-lg font-normal text-[#151515]">
                      {exp.roleTitle} · <span className="text-[#254d3b]">{exp.companyFull}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#6c6a63] shrink-0">
                      {exp.dates}
                    </span>
                  </div>
                  <p className="text-xs text-[#6c6a63] leading-relaxed mb-3">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-[#151515]">
                    {exp.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="bg-[#f4f1ea] px-2 py-0.5 border border-[#cfcac0]">
                        <strong className="text-[#254d3b]">{m.value}</strong> {m.label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-mono font-bold mb-3">
              Verified Certifications (51 Total Credentials)
            </h2>
            <p className="text-xs text-[#6c6a63] leading-relaxed mb-3">
              Google AI-Powered Performance Ads, Google Ads Search, Display, Video, Measurement, Apps, GA4; Semrush SEO Fundamentals, Keyword Research, Technical SEO, Competitor Analysis, PPC Automation; Anthropic Claude Enterprise, Prompt Engineering, MCP, Agentic Workflows; Meta Blueprint Associate &amp; Buying; HubSpot Inbound &amp; CRO; ICAI/WIRC GMCS, Ethics &amp; ITT; MS-CIT.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#254d3b] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full interactive 51-certificate catalog available on the live portfolio site.</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="sticky bottom-0 bg-[#fffdfa] px-6 py-4 border-t border-[#cfcac0] flex items-center justify-between z-20 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#cfcac0] hover:bg-[#f4f1ea] text-xs uppercase tracking-wider text-[#6c6a63]"
          >
            Close Viewer
          </button>

          <a
            href="mailto:aayushjaiswal246@gmail.com?subject=Growth%20Opportunity%20Inquiry%20for%20Aayush%20Jaiswal"
            className="px-5 py-2.5 bg-[#254d3b] hover:bg-[#1a382a] text-[#fffdfa] text-xs uppercase tracking-wider font-medium"
          >
            Schedule Discussion →
          </a>
        </div>
      </div>
    </div>
  );
};
