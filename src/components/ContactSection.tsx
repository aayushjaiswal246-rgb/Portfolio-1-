import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Performance Marketing (Meta & Google)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#254d3b] text-[#fffdfa] min-h-[75vh] py-24 px-[5vw] flex flex-col justify-between">
      {/* Top Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#fffdfa]/70 font-mono block mb-4">
            08 / Let's talk
          </span>
          <h2 className="font-serif text-[clamp(52px,9vw,130px)] font-normal leading-[0.85] tracking-[-0.07em] text-[#fffdfa] m-0">
            Make growth<br />
            <em className="text-[#9b5c39] not-italic">measurable.</em>
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-white/85 leading-snug mt-6 max-w-lg">
            Available for select full-funnel performance marketing mandates, CRO diagnostics, and growth leadership.
          </p>

          {/* Contact Directs */}
          <div className="mt-8 space-y-3 text-sm font-mono text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9b5c39]" />
              <span>Performance &amp; Growth · Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#9b5c39]" />
              <a
                href="mailto:aayushjaiswal246@gmail.com"
                className="hover:underline text-white font-medium"
              >
                aayushjaiswal246@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-[#9b5c39]" />
              <a
                href="https://www.linkedin.com/in/aayush-jaiswal-89923435a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white font-medium"
              >
                linkedin.com/in/aayush-jaiswal-89923435a
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-6 bg-[#fffdfa] text-[#151515] p-6 sm:p-10 border border-[#cfcac0]">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#254d3b]/10 text-[#254d3b] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-normal text-[#151515]">
                Inquiry Received
              </h3>
              <p className="text-xs text-[#6c6a63] max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, {formData.name || 'there'}. Aayush will review your mandate and respond directly to {formData.email || 'your email'} shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-wider text-[#9b5c39] font-mono hover:underline pt-2 block mx-auto"
              >
                Send another note →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-normal text-[#151515] mb-2">
                Initiate a Conversation
              </h3>
              <p className="text-xs text-[#6c6a63] mb-4">
                Share a few details about your growth goals or performance bottleneck.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#6c6a63] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 bg-[#f4f1ea] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#6c6a63] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-3 py-2 bg-[#f4f1ea] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#6c6a63] mb-1">
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. D2C Brand or SaaS Platform"
                    className="w-full px-3 py-2 bg-[#f4f1ea] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-wider text-[#6c6a63] mb-1">
                    Growth Mandate
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 bg-[#f4f1ea] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b]"
                  >
                    <option>Performance Marketing (Meta &amp; Google)</option>
                    <option>Full-Funnel Growth Architecture</option>
                    <option>Telemetry Audit (GA4, GTM, CAPI)</option>
                    <option>CRO &amp; Funnel Friction Diagnostics</option>
                    <option>AI-Augmented Creative Operations</option>
                    <option>Contractual Growth Leadership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-mono tracking-wider text-[#6c6a63] mb-1">
                  Context / Growth Constraint
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your current spend, channel mix, or primary bottleneck..."
                  className="w-full px-3 py-2 bg-[#f4f1ea] border border-[#cfcac0] text-xs focus:outline-none focus:border-[#254d3b]"
                />
              </div>

              <button
                type="submit"
                id="btn-submit-contact-form"
                className="w-full py-3 bg-[#254d3b] hover:bg-[#1a382a] text-[#fffdfa] text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-colors"
              >
                <span>Send Growth Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
        <div className="flex gap-4">
          <a
            href="mailto:aayushjaiswal246@gmail.com"
            className="border border-white/40 hover:border-white px-4 py-2 uppercase text-white transition-colors"
          >
            Direct Email
          </a>
          <a
            href="https://www.linkedin.com/in/aayush-jaiswal-89923435a"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 hover:border-white px-4 py-2 uppercase text-white transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
        <span>Available for the right growth problem.</span>
      </div>
    </section>
  );
};
