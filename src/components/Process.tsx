import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { SketchStroke } from './SketchMotif';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0C0C0C] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Side-profile silhouette watermark behind process */}
      <div className="absolute right-0 bottom-0 top-0 w-96 lg:w-[480px] pointer-events-none select-none opacity-[0.06] overflow-hidden">
        <img
          src="/images/Rajat_Right_facing.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left filter grayscale contrast-150"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Tight header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-3">
            Sprint methodology.
          </h2>
          <SketchStroke color="#C7FF32" className="max-w-[120px] mb-3" />
          <p className="text-base sm:text-lg text-[#929292]">
            Three steps from concept to production launch.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-colors relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-[#C7FF32]">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono text-[#929292] px-2.5 py-1 rounded-full bg-[#181818] border border-[#242424]">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#F5F5F0] mb-4">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[#929292] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#1C1C1C] text-xs font-mono text-[#666666]">
                Direct signoff per stage
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
