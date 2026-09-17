import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingTier, SiteConfig } from '../types';

interface PricingSectionProps {
  config: SiteConfig;
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ config, onSelectTier }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Engagements & Packages
          </span>
          <h2
            id="pricing-section-title"
            className="mt-2 text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-900"
          >
            Transparent, predictable scope.
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Straightforward pricing tiers crafted to match your development phase and growth velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {config.pricing.map((tier) => (
            <div
              key={tier.id}
              id={`pricing-card-${tier.id}`}
              className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                tier.popular
                  ? 'bg-stone-900 text-stone-50 shadow-md border border-stone-800'
                  : 'bg-white text-stone-900 border border-stone-200'
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-stone-100 text-stone-900 text-[11px] font-semibold tracking-wide uppercase rounded-full border border-stone-300 shadow-xs">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <h3
                    className={`text-lg font-medium font-serif ${
                      tier.popular ? 'text-stone-100' : 'text-stone-900'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-semibold font-serif tracking-tight">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`ml-2 text-xs ${
                        tier.popular ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      / {tier.period}
                    </span>
                  )}
                </div>

                <p
                  className={`text-xs leading-relaxed mb-6 ${
                    tier.popular ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {tier.description}
                </p>

                <div
                  className={`pt-6 border-t ${
                    tier.popular ? 'border-stone-800' : 'border-stone-100'
                  } space-y-3 mb-8`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      tier.popular ? 'text-stone-400' : 'text-stone-800'
                    }`}
                  >
                    Included in scope
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2.5 text-xs ${
                          tier.popular ? 'text-stone-300' : 'text-stone-600'
                        }`}
                      >
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            tier.popular ? 'text-stone-100' : 'text-stone-900'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                id={`tier-cta-btn-${tier.id}`}
                onClick={() => onSelectTier(tier.name)}
                className={`w-full py-3 px-4 rounded-full text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  tier.popular
                    ? 'bg-stone-50 text-stone-900 hover:bg-stone-200'
                    : 'bg-stone-900 text-stone-50 hover:bg-stone-800'
                }`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
