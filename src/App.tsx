/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GrowthArchitecture } from './components/GrowthArchitecture';
import { CaseStudies } from './components/CaseStudies';
import { CareerTimeline } from './components/CareerTimeline';
import { ClientsSection } from './components/ClientsSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { CertificatesGallery } from './components/CertificatesGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PortfolioAssistant } from './components/PortfolioAssistant';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  useEffect(() => {
    // Reveal animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="website-root" className="min-h-screen bg-[#f4f1ea] text-[#151515] flex flex-col selection:bg-[#9b5c39] selection:text-[#fffdfa]">
      {/* Fixed Sticky Header */}
      <Header
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Main Cinematic Sections */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01 Approach & 02 Growth Architecture (The Funnel as a Loop) */}
        <GrowthArchitecture />

        {/* 03 Case Studies with Teardown Modals */}
        <CaseStudies onInquire={handleScrollToContact} />

        {/* 04 Career Timeline */}
        <CareerTimeline />

        {/* 05 Clients & Industries (Freelance Bridge & 34+ Brands) */}
        <ClientsSection />

        {/* 06 Capabilities */}
        <CapabilitiesSection />

        {/* 07 Credentials (51 Unique Verified Certificates) */}
        <CertificatesGallery />

        {/* 08 Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
      />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsAssistantOpen(true)}
          id="btn-floating-assistant"
          aria-label="Open portfolio assistant"
          className="px-4 py-2.5 bg-[#254d3b] hover:bg-[#1a382a] text-[#fffdfa] text-xs font-mono uppercase tracking-wider rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105 border border-white/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#9b5c39] animate-pulse"></span>
          <span>Ask Assistant</span>
        </button>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Portfolio Assistant Modal */}
      <PortfolioAssistant
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        onOpenResume={() => {
          setIsAssistantOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}
