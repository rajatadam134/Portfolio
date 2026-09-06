import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SketchStroke } from './SketchMotif';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Integrated Half-Body Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 relative will-change-transform transform-gpu"
          >
            <div className="relative mx-auto max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
              
              {/* Backing geometry with sketch border accent */}
              <div className="w-full h-[400px] sm:h-[460px] bg-[#111111] rounded-3xl border border-[#202020] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.85)] relative overflow-hidden transform-gpu">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C7FF32]/[0.03] blur-2xl rounded-full pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111111] to-transparent z-20 pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 p-3.5 sm:p-4 rounded-2xl bg-[#161616]/90 backdrop-blur-md border border-[#242424] z-30">
                  <p className="text-[11px] font-mono text-[#C7FF32] uppercase tracking-wider">Working Model</p>
                  <p className="text-sm font-semibold text-[#F5F5F0] mt-0.5">Direct partnership, zero middlemen</p>
                </div>
              </div>

              {/* Half-body cutout with natural colors */}
              <div className="relative z-10 -mt-[380px] sm:-mt-[440px] flex justify-center pointer-events-none select-none">
                <img
                  src="/images/Rajat_Half_image.png"
                  alt="Rajat"
                  className="w-full h-auto object-contain max-h-[440px] sm:max-h-[500px] transform-gpu"
                  loading="lazy"
                  decoding="async"
                />
              </div>

            </div>
          </motion.div>

          {/* Text Column - Tightened Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            
            <div className="mb-6">
              <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] leading-tight">
                Craft over templates. Substance over noise.
              </h2>
              <div className="mt-2">
                <SketchStroke color="#C7FF32" className="max-w-[140px]" />
              </div>
            </div>

            {/* 3 Short sentences max */}
            <div className="space-y-4 text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl mb-8">
              <p>
                I build websites for businesses that value speed, clarity, and enduring craft.
              </p>
              <p>
                You work directly with me from initial architecture to final production code.
              </p>
              <p>
                No account managers, no bloated handoffs, and zero template shortcuts.
              </p>
            </div>

            {/* Two clean proof rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pt-6 border-t border-[#1C1C1C]">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                <Check className="w-4 h-4 text-[#C7FF32] shrink-0" />
                <span className="text-sm text-[#F5F5F0] font-medium">100% Bespoke Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                <Check className="w-4 h-4 text-[#C7FF32] shrink-0" />
                <span className="text-sm text-[#F5F5F0] font-medium">Direct Senior Execution</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
