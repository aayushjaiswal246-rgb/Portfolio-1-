export interface CaseStudy {
  id: string;
  tag: string;
  brand: string;
  category: string;
  headline: string;
  overview: string;
  context: string;
  problem: string;
  strategy: string;
  execution: string[];
  result: string;
  metrics: Array<{ value: string; label: string }>;
  keyTakeaway: string;
}

export interface CareerNode {
  id: string;
  yearLabel: string;
  periodLabel: string;
  stepNo: string;
  stepName: string;
  companyShort: string;
  companyFull: string;
  roleTitle: string;
  dates: string;
  badge: string;
  summary: string;
  metrics: Array<{ value: string; label: string }>;
  isMain?: boolean;
  isContract?: boolean;
}

export interface ClientIndustry {
  icon: string;
  title: string;
  brands: string[];
  subtext: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-yuri-woori',
    tag: '01 · D2C Korean Skincare',
    brand: 'Yuri Woori',
    category: 'E-Commerce & Performance Scaling',
    headline: '20× spend scale without losing blended ROAS.',
    overview:
      'Scaled a niche D2C Korean skincare label from a ₹50K/month experimental baseline to over ₹10L+/month in profitable ad spend across Meta, Google, and marketplace channels while upholding a 4.2× blended ROAS.',
    context:
      'Yuri Woori operates in the intensely contested Indian D2C beauty and skincare landscape. With premium imported formulations, the brand had strong product satisfaction but lacked an acquisition engine that could absorb significant capital without immediate diminishing returns.',
    problem:
      'Initial ad sets suffered from rapid creative fatigue within 7 days, rising customer acquisition costs (CAC), fragmented Google Ads search cannibalization, and a low customer repeat purchase rate that suppressed customer lifetime value (LTV).',
    strategy:
      'Constructed a disciplined full-funnel loop connecting TOFU (Top of Funnel) aesthetic UGC video education, MOFU (Middle of Funnel) ingredient comparison landing pages, and BOFU (Bottom of Funnel) dynamic catalog retargeting, bolstered by automated WhatsApp post-purchase retention.',
    execution: [
      'Transitioned Meta Ads account from manual audience fragmentation to Advantage+ Shopping Campaigns (ASC) backed by rigorous weekly creative testing (50+ variations tested).',
      'Restructured Google Ads around high-intent non-brand Korean skincare ingredient keywords and Performance Max asset groups targeting high-margin SKUs.',
      'Optimized on-site product page speed and implemented 1-click checkout, lifting overall site conversion from 2.4% to 3.1%.',
      'Configured Interakt WhatsApp automated abandoned cart sequences and replenishment alerts based on SKU depletion timelines (30/60 days).',
    ],
    result:
      'Scaled monthly ad spend from ₹50K to ₹10L+ while generating ₹42L+ in monthly attributed revenue. Delivered 4.4× ROAS on Meta, 3.8× on Google, and 5.1× on Myntra marketplace.',
    metrics: [
      { value: '20×', label: 'Spend Scale' },
      { value: '4.2×', label: 'Blended ROAS' },
      { value: '₹42L+', label: 'Attributed Rev / Mo' },
    ],
    keyTakeaway:
      'Scaling is not about spending more on the same winning creative; it is about building a continuous creative testing pipeline and retaining the customer after the click.',
  },
  {
    id: 'case-svariya',
    tag: '02 · Demi-fine Jewellery',
    brand: 'Svariya / MERITTYPE',
    category: 'Contractual Growth Build & Measurement Layer',
    headline: 'Build the measurement layer first, then scale.',
    overview:
      'A 3-month contractual growth build for a direct-to-consumer demi-fine jewellery brand. Prioritized data telemetry infrastructure before deploying paid acquisition, achieving a 3.5–4× ROAS.',
    context:
      'Svariya had an elegant aesthetic catalog and an average order value (AOV) of ₹1,500, but suffered from blind attribution, untracked checkout abandonments, and zero visibility into customer acquisition sources.',
    problem:
      'Prior marketing attempts operated on unverified pixel data. Paid ad budgets were burning without verifiable incremental revenue, Google Merchant Center accounts were misconfigured with feed rejections, and UTM tracking was nonexistent.',
    strategy:
      'Enforced a "Measure First" doctrine: designed and verified GA4 custom event tracking, Google Tag Manager data layer containers, Meta CAPI server-side tracking, Google Search Console, and Google Merchant Center feeds before scaling ad spend.',
    execution: [
      'Deployed server-side Conversions API (CAPI) and GA4 enhanced e-commerce events (view_item, add_to_cart, begin_checkout, purchase).',
      'Resolved 100% of Google Merchant Center feed discrepancies to unlock Google Shopping and PMax inventory.',
      'Designed high-aesthetic Meta carousel and reel ads emphasizing craftsmanship, tarnish resistance, and gifting bundles to defend the ₹1,500 AOV.',
      'Introduced post-checkout cross-sell workflows lifting multi-item basket rates by 19%.',
    ],
    result:
      'Established stable monthly spend of ₹3–4L delivering ₹12–15L in monthly revenue at a consistent 3.5–4× ROAS with 100% verified first-party attribution.',
    metrics: [
      { value: '3.5–4×', label: 'Consistent ROAS' },
      { value: '₹12–15L', label: 'Monthly Revenue' },
      { value: '100%', label: 'Telemetry Verified' },
    ],
    keyTakeaway:
      'Clean analytics telemetry is the highest-leverage growth investment a brand can make. Without accurate measurement, scale is simply accelerated waste.',
  },
  {
    id: 'case-guardian',
    tag: '03 · B2B SaaS & Certification',
    brand: 'Guardian Assessment',
    category: 'B2B Lead Engine & Organic Growth',
    headline: 'From zero to an institutional lead engine.',
    overview:
      'Constructed the end-to-end digital acquisition architecture for a B2B SaaS and compliance assessment firm within the TNV ecosystem, driving 120+ qualified MQLs/month at an 18% lead conversion rate.',
    context:
      'Guardian Assessment required qualified enterprise leads—specifically operations directors, compliance heads, and founders seeking ISO certification and assessment tooling.',
    problem:
      'The company had zero organic search presence, relied entirely on manual outbound calling, and had no automated inbound lead capture or qualification mechanics.',
    strategy:
      'Built a dual-engine acquisition funnel: tightly targeted Google Search campaigns capturing immediate compliance intent, paired with an SEO overhaul and multi-step interactive qualification forms that filtered tire-kickers.',
    execution: [
      'Researched and targeted high-intent commercial keywords (e.g. ISO assessment audits, certification readiness checklists) using exact and phrase match types with aggressive negative keyword lists.',
      'Restructured technical website architecture, adding Schema.org corporate markup and improving Core Web Vitals to elevate organic rankings.',
      'Created downloadable B2B compliance toolkits and assessment calculators that captured corporate work emails directly into HubSpot CRM.',
      'Automated email nurture sequences triggering based on assessment score and company size.',
    ],
    result:
      'Generated 120+ qualified MQLs every month with an 18% conversion rate. Organic search traffic surged from 8K to 11.2K monthly sessions (+40% organic expansion).',
    metrics: [
      { value: '120+', label: 'Qualified MQLs / Mo' },
      { value: '18%', label: 'Lead Conversion Rate' },
      { value: '+40%', label: 'Organic Traffic Lift' },
    ],
    keyTakeaway:
      'In B2B lead generation, volume without qualification is a liability. Precision form friction and intent capture produce leads sales teams can actually close.',
  },
  {
    id: 'case-cro-ai',
    tag: '04 · Creative Operations & CRO',
    brand: 'Full-Funnel Portfolio Benchmark',
    category: 'Retention + CRO + AI Creative Ops',
    headline: 'Growth after the click: retention and velocity.',
    overview:
      'An integrated operational framework combining automated WhatsApp lifecycle CRM, systematic conversion rate optimization (CRO), and AI-augmented creative testing sprints.',
    context:
      'As customer acquisition costs climbed across major platforms, relying purely on ad-account hacks was mathematically unsustainable. Profitability required compounding improvements after the ad click.',
    problem:
      'Creative fatigue demanded high-tempo weekly asset refreshes that overwhelmed small design teams. Meanwhile, 97% of paid traffic bounced without converting, and first-time buyers rarely returned.',
    strategy:
      'Instituted a systematic CRO testing protocol on product pages and leveraged Claude and custom AI workflows to draft, format, and evaluate 50+ creative angles weekly, paired with Interakt WhatsApp retention sequences.',
    execution: [
      'Executed A/B headline, social proof badge, and mobile CTA sticky tests, reducing checkout drop-offs and lifting site CVR from 2.4% to 3.1%.',
      'Developed Claude-assisted research prompts to analyze customer negative reviews of competitors, turning objections into high-converting video ad hooks.',
      'Built rapid creative variant generation pipelines, cutting creative production turnaround time by 40% while lifting ad-level conversion by 15%.',
      'Segmented WhatsApp broadcasts by SKU category and purchase recency, improving repeat purchase rates from 18% to 22.5%.',
    ],
    result:
      'Achieved a +30% lift in site-wide conversion rate, a 4.5% boost in repeat customer retention, and sustained an average of 50+ tested ad variants every week with 40% less production overhead.',
    metrics: [
      { value: '+30%', label: 'Site CVR Lift' },
      { value: '22.5%', label: 'Repeat Purchase Rate' },
      { value: '−40%', label: 'Production Time' },
    ],
    keyTakeaway:
      'The modern growth manager is an operator across the full loop: media buyer, CRO analyst, retention architect, and AI workflow engineer.',
  },
];

export const CAREER_TIMELINE: CareerNode[] = [
  {
    id: 'career-merittype',
    yearLabel: '2026',
    periodLabel: 'Jul 2026 — Present',
    stepNo: '07 / SCALE',
    stepName: 'MERITTYPE',
    companyShort: 'MERITTYPE',
    companyFull: 'MERITTYPE Pvt. Ltd. / Svariya',
    roleTitle: 'Performance & Growth Manager',
    dates: 'Jul 2026 — Present',
    badge: 'Contractual · 3-month build',
    summary:
      'Leading a contractual growth build across paid acquisition, full-funnel analytics, conversion rate optimization (CRO), and AI-enabled marketing operations.',
    metrics: [
      { value: '₹3–4L', label: 'Spend / month' },
      { value: '₹12–15L', label: 'Revenue / month' },
      { value: '3.5–4×', label: 'Blended ROAS' },
    ],
    isMain: true,
  },
  {
    id: 'career-tnv',
    yearLabel: '2025–26',
    periodLabel: 'Jul 2025 — Jan 2026',
    stepNo: '06 / RETAIN',
    stepName: 'TNV Group',
    companyShort: 'TNV Group',
    companyFull: 'TNV Group (Global, Certification, Consultants, Media)',
    roleTitle: 'Digital Marketing Lead',
    dates: 'Jul 2025 — Jan 2026',
    badge: 'Contract · 4 entities',
    summary:
      'Limited-hours contract leading digital initiatives across 4 group entities: TNV Global, TNV Certification, TNV Consultants, and TNV Media spanning performance ads, SEO, social, CRM, and automated lead routing.',
    metrics: [
      { value: '4', label: 'Entities handled' },
      { value: 'SEO + CRM', label: 'Automation built' },
      { value: 'B2B & B2C', label: 'Multi-vertical' },
    ],
    isContract: true,
  },
  {
    id: 'career-yuri',
    yearLabel: '2025–26',
    periodLabel: 'Nov 2025 — Jul 2026',
    stepNo: '05 / RETARGET',
    stepName: 'YURI WOORI',
    companyShort: 'Accomplish Trades',
    companyFull: 'Accomplish Trades / Yuri Woori',
    roleTitle: 'Performance Marketing Lead',
    dates: 'Nov 2025 — Jul 2026',
    badge: 'Contract / Part-time',
    summary:
      'Direct D2C performance mandate across paid media, attribution modeling, creative testing sprints, CRO, and WhatsApp retention workflows.',
    metrics: [
      { value: '20×', label: 'Spend scale' },
      { value: '4.2×', label: 'Blended ROAS' },
      { value: '₹42L+', label: 'Revenue / month' },
    ],
    isContract: true,
  },
  {
    id: 'career-guardian',
    yearLabel: '2025',
    periodLabel: 'Aug — Nov 2025',
    stepNo: '04 / CONVERT',
    stepName: 'GUARDIAN',
    companyShort: 'Guardian Assessment',
    companyFull: 'Guardian Assessment Pvt. Ltd.',
    roleTitle: 'Digital Marketing Executive',
    dates: 'Aug — Nov 2025',
    badge: 'Contract · TNV sister firm',
    summary:
      'B2B SaaS / assessment & certification. Built the digital lead-generation infrastructure from zero within the TNV ecosystem.',
    metrics: [
      { value: '120+', label: 'MQL / month' },
      { value: '18%', label: 'Lead CVR' },
      { value: '+40%', label: 'Organic traffic' },
    ],
    isContract: true,
  },
  {
    id: 'career-finx',
    yearLabel: '2024',
    periodLabel: 'Aug — Dec 2024',
    stepNo: '03 / ACQUIRE',
    stepName: 'FINX',
    companyShort: 'Finx',
    companyFull: 'Finx',
    roleTitle: 'Digital Marketing Intern',
    dates: 'Aug — Dec 2024',
    badge: 'Internship · FinTech',
    summary:
      'FinTech startup environment. Managed Meta Ads campaigns, creative testing protocols, audience refinement, and content/social execution.',
    metrics: [
      { value: '₹50K', label: 'Budget / month' },
      { value: '+35%', label: 'Engagement' },
      { value: 'Hands-on', label: 'Execution' },
    ],
  },
  {
    id: 'career-ursa',
    yearLabel: '2023–24',
    periodLabel: 'Jan 2023 — Aug 2024',
    stepNo: '02 / TRACK',
    stepName: 'URSA MINOR',
    companyShort: 'Ursa Minor',
    companyFull: 'Ursa Minor Consulting',
    roleTitle: 'Digital Marketing Trainee → Associate',
    dates: 'Jan 2023 — Aug 2024',
    badge: 'Full-time · Trainee → Associate',
    summary:
      'High-velocity agency environment. Executed paid campaigns and multi-channel strategies for 20+ diverse brands across D2C, B2B, SaaS, FinTech, and FMCG.',
    metrics: [
      { value: '20+', label: 'Brands managed' },
      { value: 'Multi-industry', label: 'Operating range' },
      { value: 'Promotion', label: 'Trainee → Assoc.' },
    ],
  },
  {
    id: 'career-freelance',
    yearLabel: '2022–Pres',
    periodLabel: '2022 — Present',
    stepNo: '01 / RESEARCH',
    stepName: 'FREELANCE',
    companyShort: 'Independent',
    companyFull: 'Independent / Freelance Growth Consultant',
    roleTitle: 'Performance & Growth Marketing',
    dates: '2022 — Present',
    badge: 'Parallel · Ongoing',
    summary:
      'Parallel client work across paid acquisition, technical SEO, social, CRO, analytics pipelines, funnels, and business growth strategy for 34+ named brands.',
    metrics: [
      { value: '34+', label: 'Named brands' },
      { value: '5 Years', label: 'Deep experience' },
      { value: 'Full-Funnel', label: 'Architecture' },
    ],
    isContract: true,
  },
];

export const CLIENT_INDUSTRIES: ClientIndustry[] = [
  {
    icon: '◉',
    title: 'D2C / Consumer',
    brands: ['Yuri Woori', 'PLIX', 'EcoBoom', 'Herbal Hills', 'Brownwall Food', 'Enthrive', 'Verifeye', 'TNV Media'],
    subtext: 'Beauty · Wellness · Food · Personal Care · Lifestyle',
  },
  {
    icon: '▣',
    title: 'Manufacturing / Industrial',
    brands: ['Unitile', 'Lakshmi Industries', 'Madhura Industry', 'TNV Global', 'TNV Certification', 'TNV Consultants', 'DYTEL Software'],
    subtext: 'Tiles · Packaging · Industrial Goods · Certification',
  },
  {
    icon: '◆',
    title: 'B2B / Professional',
    brands: ['Guardian Assessment', 'eBrandz', 'TechFlow', 'Dess Digital', 'My WorkingAntz', 'Accomplish Trades'],
    subtext: 'Consulting · IT Services · Recruitment · Compliance',
  },
  {
    icon: '▱',
    title: 'Tech / SaaS',
    brands: ['Finx', 'Verifeye', 'Dess Digital', 'TechFlow', 'DYTEL Software'],
    subtext: 'SaaS · Software · AI Tools · MarTech · AdTech',
  },
  {
    icon: '▤',
    title: 'EdTech',
    brands: ['Enthrive', 'My WorkingAntz', '+ more'],
    subtext: 'Online Learning · Skill Development · Assessment Platforms',
  },
  {
    icon: '◫',
    title: 'Other Industries',
    brands: ['Real Estate', 'Healthcare / Wellness', 'FMCG', 'Retail', 'Finance / FinTech', 'Media & Publishing', 'Non-profit'],
    subtext: 'A wide operating range across diverse commercial sectors.',
  },
];

export const NAMED_CLIENTS_LIST = [
  'Yuri Woori',
  'PLIX',
  'EcoBoom',
  'Herbal Hills',
  'Brownwall Food',
  'Unitile',
  'Lakshmi Industries',
  'Madhura Industry',
  'TNV Global',
  'TNV Certification',
  'TNV Consultants',
  'Guardian Assessment',
  'Finx',
  'eBrandz',
  'TechFlow',
  'Dess Digital',
  'DYTEL Software',
  'My WorkingAntz',
  'Verifeye',
  'Enthrive',
  'TNV Media',
  'The Human Thread',
  'Lakshmi Media',
  'Excelsior Organisation',
  'Millennium Organization',
  'V Chain Jewellers',
  'Ritvaa Jewellers',
  'Zelle Biotechnology',
  'Vinayak Realty',
  'HR Shop International',
  'Wealthy',
  'Zer Consultant',
  'MD Law Firm',
  'Tissou Consulting',
];
