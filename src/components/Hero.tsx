import React from 'react';
import { ArrowDown, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#080808]"
    >
      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-[#C7FF32]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full py-8">
          
          {/* Headline Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono text-[#929292] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C7FF32] animate-pulse" />
              <span>Available for select projects · 2026</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F5F0] leading-[1.08] mb-6">
              I build web experiences that feel bespoke and perform relentlessly.
            </h1>

            {/* Supporting Line */}
            <p className="text-lg sm:text-xl text-[#929292] font-normal leading-relaxed max-w-2xl mb-9">
              Hi, I’m <strong className="text-[#F5F5F0] font-semibold">Rajat</strong> — an independent web designer and developer crafting custom, high-speed digital products for modern brands that refuse to look generic.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C7FF32] text-[#080808] font-bold text-sm tracking-wide hover:bg-[#8FBF00] transition-colors shadow-lg shadow-[#C7FF32]/10"
              >
                <span>View Selected Work</span>
                <span className="text-xs">✦</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] text-[#F5F5F0] hover:bg-[#1A1A1A] border border-[#262626] font-medium text-sm tracking-wide transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#929292]" />
                <span>Start a Conversation</span>
              </a>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-[#929292] pt-4 border-t border-[#1C1C1C]">
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> 100% Bespoke Code
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> Sub-Second Load Times
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> Conversion Focused
              </span>
            </div>
          </div>

          {/* Art-Directed Portrait Cutout */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              
              {/* Backing structural card creating offset depth */}
              <div className="absolute inset-x-6 inset-y-8 bg-[#111111] rounded-3xl border border-[#202020] shadow-2xl -rotate-1 pointer-events-none" />

              {/* Portrait cutout image breaking the frame */}
              <div className="relative z-10 flex justify-center pt-2">
                <img
                  src="/images/Rajat_Front_facing_4.png"
                  alt="Rajat - Web Designer and Developer"
                  className="w-full h-auto object-contain max-h-[580px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-105"
                  loading="eager"
                />
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute bottom-6 -left-3 sm:-left-6 z-20 px-4 py-2.5 rounded-xl bg-[#111111]/95 backdrop-blur-md border border-[#282828] text-xs shadow-xl">
                <p className="text-[10px] font-mono text-[#929292] uppercase tracking-wider">Discipline</p>
                <p className="text-xs font-semibold text-[#F5F5F0] mt-0.5">Design · Development · Systems</p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom hint scroll */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between text-xs font-mono text-[#929292] pt-4">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-4 h-4 text-[#C7FF32] transition-transform hover:translate-y-0.5" />
      </div>
    </section>
  );
};
