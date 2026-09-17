import React, { useState } from 'react';
import { X, Check, RefreshCw, Sparkles } from 'lucide-react';
import { SiteConfig, SitePresetKey } from '../types';
import { SITE_PRESETS } from '../data/presets';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: SiteConfig;
  onUpdateConfig: (newConfig: SiteConfig) => void;
  onSelectPreset: (presetKey: SitePresetKey) => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  onUpdateConfig,
  onSelectPreset,
}) => {
  const [formData, setFormData] = useState({
    brandName: currentConfig.brandName,
    tagline: currentConfig.tagline,
    heroHeading: currentConfig.heroHeading,
    heroSubheading: currentConfig.heroSubheading,
    contactEmail: currentConfig.contactEmail,
    location: currentConfig.location,
  });

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig({
      ...currentConfig,
      ...formData,
    });
    onClose();
  };

  const presetOptions: Array<{ key: SitePresetKey; label: string; desc: string }> = [
    { key: 'agency', label: 'Design & Creative Studio', desc: 'Minimalist editorial layout for design studios and agencies' },
    { key: 'saas', label: 'Tech & SaaS Platform', desc: 'High-clarity layout for software products & dev tools' },
    { key: 'portfolio', label: 'Personal / Advisory Portfolio', desc: 'Refined presentation for executives, architects & consultants' },
    { key: 'venue', label: 'Hospitality / Artisan Brand', desc: 'Warm artisanal presentation for roasteries, bistros & makers' },
  ];

  return (
    <div
      id="customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="customizer-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-xl p-6 sm:p-8"
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
          <div>
            <h3 className="text-xl font-serif font-medium text-stone-900">
              Customize Website Live
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Select a website theme archetype or edit text content instantly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Website Archetype Presets */}
        <div className="mb-8">
          <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wide mb-3">
            Switch Website Theme Archetype
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {presetOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  onSelectPreset(opt.key);
                  const newPreset = SITE_PRESETS[opt.key];
                  setFormData({
                    brandName: newPreset.brandName,
                    tagline: newPreset.tagline,
                    heroHeading: newPreset.heroHeading,
                    heroSubheading: newPreset.heroSubheading,
                    contactEmail: newPreset.contactEmail,
                    location: newPreset.location,
                  });
                }}
                className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                  currentConfig.id === opt.key
                    ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                    : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className="font-semibold text-stone-900 mb-0.5">{opt.label}</div>
                <div className="text-[11px] text-stone-500 leading-snug">{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Form to tweak current text */}
        <form onSubmit={handleSave} className="space-y-4">
          <label className="block text-xs font-semibold text-stone-800 uppercase tracking-wide">
            Edit Headline & Brand Details
          </label>

          <div>
            <span className="block text-[11px] text-stone-500 mb-1">Brand / Business Name</span>
            <input
              type="text"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
            />
          </div>

          <div>
            <span className="block text-[11px] text-stone-500 mb-1">Brand Tagline</span>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
            />
          </div>

          <div>
            <span className="block text-[11px] text-stone-500 mb-1">Hero Main Heading</span>
            <textarea
              rows={2}
              value={formData.heroHeading}
              onChange={(e) => setFormData({ ...formData, heroHeading: e.target.value })}
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
            />
          </div>

          <div>
            <span className="block text-[11px] text-stone-500 mb-1">Hero Subheading</span>
            <textarea
              rows={2}
              value={formData.heroSubheading}
              onChange={(e) => setFormData({ ...formData, heroSubheading: e.target.value })}
              className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <span className="block text-[11px] text-stone-500 mb-1">Contact Email</span>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
              />
            </div>

            <div>
              <span className="block text-[11px] text-stone-500 mb-1">Location / Office</span>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:bg-white"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-stone-50 bg-stone-900 hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
            >
              Apply Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
