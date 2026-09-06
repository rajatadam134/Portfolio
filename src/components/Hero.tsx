import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { SketchStroke } from './SketchMotif';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#080808]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C7FF32]/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full min-h-[600px] py-4">
          
          {/* Typography column - overlaps image */}
          <motion.div
            style={{ y: textY }}
            className="lg:col-span-7 z-20 flex flex-col items-start text-left"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono text-[#929292] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C7FF32] animate-pulse" />
              <span>Available for select projects · 2026</span>
            </div>

            {/* Headline - max 6 words */}
            <div className="relative mb-5">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F5F0] leading-[1.05]">
                Websites Crafted for Real Impact.
              </h1>
              <div className="mt-2">
                <SketchStroke color="#C7FF32" className="max-w-[180px] sm:max-w-[240px]" />
              </div>
            </div>

            {/* Supporting line - max 10 words */}
            <p className="text-lg sm:text-xl text-[#929292] font-normal leading-snug max-w-xl mb-8">
              Bespoke digital design and high-performance development by Rajat.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C7FF32] text-[#080808] font-bold text-sm tracking-wide hover:bg-[#8FBF00] transition-colors shadow-lg shadow-[#C7FF32]/10"
              >
                <span>View Work</span>
                <span className="text-xs">✦</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-[#F5F5F0] hover:bg-[#1A1A1A] border border-[#262626] font-medium text-sm tracking-wide transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#929292]" />
                <span>Start Conversation</span>
              </a>
            </div>

            {/* Concise trust markers */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#929292] pt-4 border-t border-[#1C1C1C]">
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> Bespoke Code
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> Sub-Second Load
              </span>
              <span className="flex items-center gap-1.5 text-[#F5F5F0]">
                <span className="text-[#C7FF32]">✦</span> High Conversion
              </span>
            </div>
          </motion.div>

          {/* Integrated Bleeding Portrait with Parallax and Duotone Fade */}
          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end lg:-mr-16 xl:-mr-32 pointer-events-none"
          >
            <div className="relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-none lg:w-[155%] xl:w-[170%]">
              
              {/* Duotone backdrop fade into canvas */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent z-10 pointer-events-none h-full" />
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none hidden lg:block" />

              {/* Hand-drawn organic sketch halo behind shoulder */}
              <svg
                viewBox="0 0 400 400"
                className="absolute -top-10 -right-10 w-96 h-96 text-[#C7FF32]/20 -z-10 select-none pointer-events-none"
                fill="none"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="160"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
              </svg>

              {/* Portrait image: scaled large, desaturated/duotoned to blend into dark background */}
              <img
                src="/images/Rajat_Front_facing_4.png"
                alt="Rajat"
                className="w-full h-auto object-contain max-h-[660px] sm:max-h-[740px] lg:max-h-[880px] xl:max-h-[960px] scale-105 lg:scale-115 xl:scale-125 origin-bottom filter grayscale contrast-125 brightness-90 drop-shadow-[0_30px_50px_rgba(0,0,0,0.95)] opacity-95 transition-all duration-700"
                loading="eager"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom hint */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex items-center justify-between text-xs font-mono text-[#929292] pt-4">
        <span>SCROLL TO PROGRESS</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C7FF32]" />
      </div>
    </section>
  );
};
