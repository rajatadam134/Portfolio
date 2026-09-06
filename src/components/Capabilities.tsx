import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Code2, Zap, Layout, Sparkles } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const icons = [
    <Code2 className="w-6 h-6 text-[#C7FF32]" />,
    <Sparkles className="w-6 h-6 text-[#C7FF32]" />,
    <Zap className="w-6 h-6 text-[#C7FF32]" />,
    <Layout className="w-6 h-6 text-[#C7FF32]" />,
  ];

  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1C1C1C] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-5">
            What I build for modern businesses
          </h2>
          <p className="text-base sm:text-lg text-[#929292] leading-relaxed">
            Every project is engineered around clean code, sub-second performance, and deliberate visual design tailored to your specific commercial goals.
          </p>
        </div>

        {/* 4 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, index) => (
            <div
              key={cap.id}
              className="group p-8 sm:p-10 rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#383838] transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#C7FF32]/[0.02]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#181818] border border-[#282828] flex items-center justify-center mb-7 group-hover:border-[#C7FF32]/50 transition-colors">
                  {icons[index]}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] mb-3 group-hover:text-[#C7FF32] transition-colors">
                  {cap.title}
                </h3>
                
                <p className="text-sm sm:text-base text-[#929292] leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1C1C1C]">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs font-mono text-[#D4D4D4] group-hover:border-[#333333] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
