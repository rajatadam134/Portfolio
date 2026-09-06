import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column with Offset Card & Half-body Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-[380px] sm:max-w-[420px]">
              
              {/* Backing geometry box with slight accent border */}
              <div className="w-full h-[460px] sm:h-[500px] bg-[#111111] rounded-3xl border border-[#222222] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#C7FF32]/[0.04] blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#161616]/90 backdrop-blur-md border border-[#262626] z-20">
                  <p className="text-xs font-mono text-[#929292] uppercase tracking-wider">Engineering Principle</p>
                  <p className="text-sm font-semibold text-[#F5F5F0] mt-0.5">High-speed code + intentional visual taste</p>
                </div>
              </div>

              {/* Half-body cutout overlapping top & side bounds */}
              <div className="absolute -top-12 -right-4 sm:-right-6 w-[105%] z-10 pointer-events-none">
                <img
                  src="/images/Rajat_Half_image.png"
                  alt="Rajat working and designing"
                  className="w-full h-auto object-contain max-h-[520px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] filter contrast-105"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] leading-tight mb-6">
              I believe great websites are built on honest collaboration, not agency layers.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#929292] leading-relaxed max-w-2xl mb-8">
              <p>
                Most websites fail because they trade substance for bloated templates or generic animations that look cool in a pitch deck but crumble on a real user’s phone.
              </p>
              <p>
                When you work with me, you work directly with the person writing the code, setting the typography, and profiling the network waterfall. I obsess over the small details that make a site feel swift, durable, and genuinely aligned with your commercial reality.
              </p>
            </div>

            {/* Direct working values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pt-6 border-t border-[#1C1C1C]">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                <CheckCircle2 className="w-5 h-5 text-[#C7FF32] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F0]">Direct Partnership</h3>
                  <p className="text-xs text-[#929292] mt-0.5">Zero middlemen or account reps. You talk directly with the engineer.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-[#1E1E1E]">
                <CheckCircle2 className="w-5 h-5 text-[#C7FF32] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F0]">Production Craft</h3>
                  <p className="text-xs text-[#929292] mt-0.5">Clean architecture designed to stay fast and maintainable for years.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
