import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const Ticker: React.FC = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-[#0C0C0C] border-y border-[#1C1C1C] py-4 overflow-hidden relative" aria-label="Skills & Technologies">
      {/* Edge gradient masks */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((skill, index) => (
          <div key={`${skill}-${index}`} className="flex items-center gap-8">
            <span className="text-sm sm:text-base font-mono tracking-wider text-[#929292] hover:text-[#F5F5F0] transition-colors uppercase">
              {skill}
            </span>
            <span className="text-[#C7FF32] text-xs select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
