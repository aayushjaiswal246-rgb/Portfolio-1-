import React from 'react';
import { Quote } from 'lucide-react';
import { SiteConfig } from '../types';

interface TestimonialsSectionProps {
  config: SiteConfig;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ config }) => {
  if (!config.testimonials || config.testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
            Endorsements
          </span>
          <h2
            id="testimonials-section-title"
            className="mt-2 text-3xl sm:text-4xl font-serif font-medium tracking-tight text-stone-900"
          >
            Trusted by founders and design leaders worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="p-7 sm:p-8 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-stone-300 mb-5" />
                <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-normal mb-8">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-stone-300"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-stone-900">{item.author}</h4>
                    <p className="text-[11px] text-stone-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {item.metric && (
                  <span className="px-2.5 py-1 text-[11px] font-semibold text-stone-800 bg-stone-200/70 rounded-md">
                    {item.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
