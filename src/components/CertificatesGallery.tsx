import React, { useState, useRef } from 'react';
import { Search, Award, ShieldCheck, Check, Filter } from 'lucide-react';
import { VERIFIED_CERTIFICATES, Certificate } from '../data/certificates';
import { CertificateModal } from './CertificateModal';

export const CertificatesGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const categories = [
    { label: 'All', count: 51 },
    { label: 'Google', count: 7 },
    { label: 'Semrush', count: 10 },
    { label: 'AI & LLM', count: 6 },
    { label: 'Meta', count: 5 },
    { label: 'HubSpot', count: 5 },
    { label: 'Professional & IT', count: 6 },
    { label: 'Strategy & CRO', count: 12 },
  ];

  const filteredCerts = VERIFIED_CERTIFICATES.filter((cert) => {
    const matchesCategory =
      activeCategory === 'All' || cert.category === activeCategory;

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      cert.title.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q) ||
      cert.skills.some((s) => s.toLowerCase().includes(q)) ||
      cert.credentialId.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const handleOpenCert = (cert: Certificate) => {
    setSelectedCert(cert);
  };

  const handleCloseCert = () => {
    const closedCertId = selectedCert?.id;
    setSelectedCert(null);
    if (closedCertId && cardRefs.current[closedCertId]) {
      setTimeout(() => {
        cardRefs.current[closedCertId]?.focus();
      }, 50);
    }
  };

  return (
    <section id="credentials" className="py-24 px-[5vw] border-b border-[#cfcac0]">
      {/* Section Head */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9b5c39] font-medium">
              07 / Credentials
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#254d3b] text-white text-[10px] uppercase font-mono tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              51 Verified Credentials
            </span>
          </div>
          <h2 className="font-serif text-[clamp(44px,6vw,90px)] font-normal leading-[0.9] tracking-[-0.06em] text-[#151515] mt-2">
            Always<br />
            <em className="text-[#9b5c39] not-italic">learning.</em>
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-end">
          <p className="font-serif text-2xl lg:text-[26px] leading-snug text-[#151515] max-w-2xl mb-4">
            A verified 51-certificate collection spanning Google AI-Powered Ads, Semrush Technical SEO, Anthropic Claude &amp; Agentic Workflows, Meta Blueprint, HubSpot, ICAI/WIRC, and MS-CIT.
          </p>
          <p className="text-xs text-[#6c6a63] leading-relaxed">
            All 51 unique credentials have been audited page-by-page from the official certification records. Click or press Enter on any card to view the lightbox verification details.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#cfcac0]">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-[#254d3b] text-white border-[#254d3b] shadow-sm'
                    : 'bg-[#fffdfa] text-[#6c6a63] border-[#cfcac0] hover:border-[#151515] hover:text-[#151515]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${isActive ? 'opacity-80' : 'text-[#9b5c39]'}`}>
                  ({cat.count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search className="w-4 h-4 text-[#6c6a63] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 51 credentials..."
            className="w-full pl-10 pr-4 py-2 bg-[#fffdfa] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b] text-[#151515] placeholder:text-[#6c6a63]/70 font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6c6a63] hover:text-[#151515]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Certificates Count summary */}
      <div className="flex items-center justify-between text-xs text-[#6c6a63] mb-6 font-mono">
        <span>
          Showing {filteredCerts.length} of {VERIFIED_CERTIFICATES.length} credentials
          {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
        </span>
        <span className="hidden sm:inline">Use Tab &amp; Enter to open lightbox</span>
      </div>

      {/* 51 Certificate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCerts.map((cert) => {
          return (
            <button
              key={cert.id}
              ref={(el) => {
                cardRefs.current[cert.id] = el;
              }}
              onClick={() => handleOpenCert(cert)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCert(cert);
                }
              }}
              aria-label={`Open certificate: ${cert.title} issued by ${cert.issuer}`}
              className="bg-[#fffdfa] text-left border border-[#cfcac0] p-5 flex flex-col justify-between hover:border-[#254d3b] hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-[#254d3b]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9b5c39]">
                    #{String(cert.number).padStart(2, '0')} · {cert.category}
                  </span>
                  <Award className="w-4 h-4 text-[#cfcac0] group-hover:text-[#254d3b] transition-colors" />
                </div>

                <h3 className="font-serif text-lg font-normal leading-snug text-[#151515] group-hover:text-[#254d3b] transition-colors mb-2 line-clamp-2">
                  {cert.title}
                </h3>

                <span className="text-xs font-medium text-[#6c6a63] block mb-3">
                  {cert.issuer}
                </span>

                <p className="text-[11px] text-[#6c6a63] line-clamp-2 leading-relaxed mb-4">
                  {cert.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#cfcac0]/60 flex items-center justify-between text-[10px] font-mono text-[#6c6a63]">
                <span>{cert.issueYear}</span>
                <span className="text-[#9b5c39] font-medium group-hover:underline">
                  View Credential →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {filteredCerts.length === 0 && (
        <div className="text-center py-16 bg-[#fffdfa] border border-[#cfcac0] p-8">
          <p className="font-serif text-2xl text-[#151515] mb-2">No credentials matched your search.</p>
          <p className="text-xs text-[#6c6a63] mb-4">Try clearing filters to browse all 51 credentials.</p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-[#254d3b] text-white text-xs uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        onClose={handleCloseCert}
      />
    </section>
  );
};
