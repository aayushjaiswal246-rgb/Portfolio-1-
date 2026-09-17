export type SitePresetKey = 'agency' | 'saas' | 'portfolio' | 'venue';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  fullDescription: string;
  impact: string;
  imageUrl: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingRate: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  metric?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  badge?: string;
  features: string[];
  ctaLabel: string;
  popular?: boolean;
}

export interface SiteConfig {
  id: SitePresetKey;
  brandName: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  accentColor: string; // e.g. warm stone, deep charcoal, olive, or terracotta
  categoryBadge: string;
  stats: Array<{ label: string; value: string }>;
  aboutHeading: string;
  aboutText: string[];
  servicesHeading: string;
  servicesSubheading: string;
  services: ServiceItem[];
  projectsHeading: string;
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  pricing: PricingTier[];
  contactEmail: string;
  contactPhone: string;
  location: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  date: string;
}
