import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, MessageSquare } from 'lucide-react';
import { SketchStroke } from './SketchMotif';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.2,
  });

  const rawImageY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const rawTextY = useTransform(smoothProgress, [0, 1], [0, 25]);

  // Disable scroll parallax on mobile to guarantee 60fps touch scrolling
  const imageY = isDesktop ? rawImageY : 0;
  const textY = isDesktop ? rawTextY : 0;

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-[#080808]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] bg-[#C7FF32]/[0.035] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Main hero grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full py-4">
          
          {/* Typography column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: textY }}
            className="lg:col-span-7 z-20 flex flex-col items-start text-left will-change-transform transform-gpu"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono text-[#929292] mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C7FF32] animate-pulse" />
              <span>Available for select projects · 2026</span>
            </div>

            {/* Headline */}
            <div className="relative mb-4 sm:mb-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#F5F5F0] leading-[1.08]">
                Websites Crafted for Real Impact.
              </h1>
              <div className="mt-2 sm:mt-3">
                <SketchStroke color="#C7FF32" className="max-w-[160px] sm:max-w-[220px]" />
              </div>
            </div>

            {/* Supporting line */}
            <p className="text-base sm:text-lg lg:text-xl text-[#929292] font-normal leading-relaxed max-w-xl mb-7 sm:mb-8">
              Bespoke digital design and high-performance development by Rajat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C7FF32] text-[#080808] font-bold text-sm tracking-wide hover:bg-[#8FBF00] transition-colors shadow-lg shadow-[#C7FF32]/10"
              >
                <span>View Selected Work</span>
                <span className="text-xs">✦</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#121212] text-[#F5F5F0] hover:bg-[#1A1A1A] border border-[#262626] font-medium text-sm tracking-wide transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#929292]" />
                <span>Start Conversation</span>
              </a>
            </div>

            {/* Trust markers */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#929292] pt-4 border-t border-[#1C1C1C] w-full">
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

          {/* Portrait Column: perfectly proportioned, structured, natural color */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: imageY }}
            className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end w-full will-change-transform transform-gpu"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
              
              {/* Backing structural card: grounds image in layout */}
              <div className="absolute inset-x-4 inset-y-6 bg-[#111111] rounded-3xl border border-[#222222] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] -rotate-1 pointer-events-none transform-gpu" />
              
              {/* Ambient circular sketch halo */}
              <svg
                viewBox="0 0 400 400"
                className="absolute -top-6 -right-6 w-72 h-72 text-[#C7FF32]/15 -z-10 select-none pointer-events-none hidden sm:block"
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

              {/* Natural vibrant portrait image */}
              <div className="relative z-10 flex justify-center pt-2 select-none pointer-events-none">
                <img
                  src="/images/Rajat_Front_facing_4.png"
                  alt="Rajat - Web Designer and Developer"
                  className="w-full h-auto object-contain max-h-[440px] sm:max-h-[540px] lg:max-h-[640px] transform-gpu"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Floating discipline badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 -left-2 sm:-left-4 z-20 px-3.5 py-2 rounded-xl bg-[#111111]/95 backdrop-blur-md border border-[#282828] text-xs shadow-xl pointer-events-auto select-none"
              >
                <p className="text-[10px] font-mono text-[#929292] uppercase tracking-wider">Discipline</p>
                <p className="text-xs font-semibold text-[#F5F5F0] mt-0.5">Design · Development · Systems</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom hint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-mono text-[#929292] pt-4">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#C7FF32]" />
      </div>
    </section>
  );
};
