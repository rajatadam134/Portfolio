import React, { useState } from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { SketchStroke } from './SketchMotif';

export const Capabilities: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(CAPABILITIES[0].id);

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Tight section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-3">
            Core capabilities.
          </h2>
          <SketchStroke color="#C7FF32" className="max-w-[120px] mb-3" />
          <p className="text-base sm:text-lg text-[#929292]">
            Four focused disciplines engineered for commercial performance.
          </p>
        </div>

        {/* Numbered stacked list with interactive disclosure */}
        <div className="border-t border-[#1C1C1C] divide-y divide-[#1C1C1C]" role="list">
          {CAPABILITIES.map((cap, index) => {
            const num = String(index + 1).padStart(2, '0');
            const isActive = activeId === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveId(cap.id)}
                onClick={() => setActiveId(isActive ? null : cap.id)}
                className={`group py-8 sm:py-10 px-4 sm:px-6 transition-all duration-300 cursor-pointer rounded-2xl ${
                  isActive ? 'bg-[#111111]/80 shadow-lg' : 'hover:bg-[#0D0D0D]'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  {/* Left: Number + Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-sm sm:text-base text-[#C7FF32] shrink-0">
                      {num}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#F5F5F0] tracking-tight group-hover:text-[#C7FF32] transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Right: Pill tags + Action arrow */}
                  <div className="flex items-center gap-4 self-start lg:self-auto pl-12 sm:pl-16 lg:pl-0">
                    <div className="hidden sm:flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#242424] text-xs font-mono text-[#888888]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className={`p-2 rounded-full border transition-all ${
                      isActive
                        ? 'bg-[#C7FF32] text-[#080808] border-[#C7FF32] rotate-45'
                        : 'bg-[#161616] text-[#929292] border-[#262626] group-hover:text-[#F5F5F0]'
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </div>

                </div>

                {/* Expanded Detail Tray */}
                <div
                  className={`grid transition-all duration-300 ease-out pl-12 sm:pl-16 overflow-hidden ${
                    isActive ? 'grid-rows-[1fr] opacity-100 pt-6' : 'grid-rows-[0fr] opacity-0 pt-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#929292] leading-relaxed max-w-3xl mb-4">
                      {cap.description}
                    </p>
                    <div className="flex sm:hidden flex-wrap gap-2 pt-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-[#181818] border border-[#242424] text-xs font-mono text-[#888888]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
