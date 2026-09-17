import React from 'react';
import { Compass, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { SiteConfig } from '../types';

interface AboutSectionProps {
  config: SiteConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config }) => {
  const principles = [
    {
      icon: Compass,
      title: 'Intentional Restraint',
      description: 'We eliminate superficial ornament to let content, purpose, and typography command attention.',
    },
    {
      icon: Layers,
      title: 'Material Precision',
      description: 'Whether pixels, print, or architecture, every edge and proportion follows strict geometric logic.',
    },
    {
      icon: ShieldCheck,
      title: 'Direct Partner Stewardship',
      description: 'No accounts managers or junior hand-offs. You collaborate directly with practitioners who build the work.',
    },
    {
      icon: Sparkles,
      title: 'Enduring Longevity',
      description: 'We design against fleeting aesthetic gimmicks, prioritizing identities that stay relevant for decades.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              Philosophy & Heritage
            </span>
            <h2
              id="about-section-title"
              className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-900 leading-tight"
            >
              {config.aboutHeading}
            </h2>

            <div className="space-y-4 text-stone-600 text-base leading-relaxed">
              {config.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 text-xs text-stone-500">
              <span className="font-semibold text-stone-900">Headquarters:</span>
              <span>{config.location}</span>
            </div>
          </div>

          {/* Right Core Principles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  id={`principle-box-${idx}`}
                  className="p-6 bg-stone-50 rounded-xl border border-stone-200/90 flex flex-col justify-between"
                >
                  <div className="w-9 h-9 rounded-lg bg-stone-900 text-stone-50 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-medium text-stone-900 mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
