import React from 'react';
import { Check, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { ServiceItem, SiteConfig } from '../types';

interface ServicesSectionProps {
  config: SiteConfig;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  config,
  onSelectServiceForInquiry,
}) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Expertise
          </span>
          <h2
            id="services-section-title"
            className="mt-2 text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-900"
          >
            {config.servicesHeading}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            {config.servicesSubheading}
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {config.services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-xl p-6 sm:p-8 border border-stone-200 hover:border-stone-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-stone-400">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.timeline}
                    </span>
                    <span className="font-medium text-stone-700">
                      {service.startingRate}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-stone-800 uppercase tracking-wide">
                    Typical Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-stone-800 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Available for commission</span>
                <button
                  id={`inquire-btn-${service.id}`}
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 hover:text-stone-700 transition-colors group cursor-pointer"
                >
                  <span>Inquire about this</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
