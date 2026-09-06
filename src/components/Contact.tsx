import React, { useState } from 'react';
import { Mail, Clock, Send, Check } from 'lucide-react';
import { SketchStroke } from './SketchMotif';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Side-profile silhouette watermark behind contact */}
      <div className="absolute left-0 bottom-0 top-0 w-80 lg:w-[420px] pointer-events-none select-none opacity-[0.05] overflow-hidden">
        <img
          src="/images/Rajat_Left_facing.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right filter grayscale contrast-150"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-3 leading-tight">
                Let’s build something deliberate.
              </h2>
              <SketchStroke color="#C7FF32" className="max-w-[140px] mb-5" />
              
              <p className="text-base sm:text-lg text-[#929292] leading-relaxed mb-10">
                Direct scoping within 24 hours. No agency layers, no sales pitch.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-[#202020]">
                  <div className="p-2 rounded-xl bg-[#161616] text-[#C7FF32] border border-[#242424]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#929292] uppercase tracking-wider">Direct Inbox</p>
                    <a
                      href="mailto:rajatadam134@gmail.com"
                      className="text-sm font-semibold text-[#F5F5F0] hover:text-[#C7FF32] transition-colors mt-0.5 block"
                    >
                      rajatadam134@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-[#202020]">
                  <div className="p-2 rounded-xl bg-[#161616] text-[#C7FF32] border border-[#242424]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-[#929292] uppercase tracking-wider">Turnaround</p>
                    <p className="text-sm font-semibold text-[#F5F5F0] mt-0.5">
                      Replies within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#1C1C1C] text-xs font-mono text-[#666666]">
              Based in India · Working globally
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#222222] shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#C7FF32]/10 border border-[#C7FF32]/30 flex items-center justify-center text-[#C7FF32] mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F0] mb-2">Message received</h3>
                  <p className="text-sm text-[#929292] max-w-sm">
                    Thanks, {name}. I’ll review your inquiry and reply shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setDetails('');
                    }}
                    className="mt-6 text-xs font-mono text-[#C7FF32] underline hover:text-[#8FBF00]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-[#929292] uppercase tracking-wider mb-2">
                      Your Name <span className="text-[#C7FF32]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Miller"
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-[#F5F5F0] placeholder-[#555555] text-sm focus:border-[#C7FF32] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-[#929292] uppercase tracking-wider mb-2">
                      Business Email <span className="text-[#C7FF32]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-[#F5F5F0] placeholder-[#555555] text-sm focus:border-[#C7FF32] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-xs font-mono text-[#929292] uppercase tracking-wider mb-2">
                      Project Brief
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Objective, timeline, or current site URL..."
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-[#F5F5F0] placeholder-[#555555] text-sm focus:border-[#C7FF32] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C7FF32] text-[#080808] hover:bg-[#8FBF00] font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-[#666666] text-center">
                    Direct to personal inbox. Zero marketing spam.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
