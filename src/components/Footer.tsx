import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 bg-[#080808] border-t border-[#1C1C1C] text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <a
            href="#hero"
            className="font-display font-bold text-lg text-[#F5F5F0] hover:text-[#C7FF32] transition-colors"
          >
            Rajat
          </a>
          <span className="hidden sm:inline text-[#2A2A2A]">|</span>
          <p className="text-xs font-mono text-[#777777]">
            © 2026 Rajat. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#929292]">
          <a href="#about" className="hover:text-[#F5F5F0] transition-colors">About</a>
          <a href="#capabilities" className="hover:text-[#F5F5F0] transition-colors">Capabilities</a>
          <a href="#process" className="hover:text-[#F5F5F0] transition-colors">Process</a>
          <a href="#work" className="hover:text-[#F5F5F0] transition-colors">Client Work</a>
          <a href="#templates" className="hover:text-[#F5F5F0] transition-colors">Templates</a>
          <a href="#contact" className="hover:text-[#F5F5F0] transition-colors">Contact</a>
        </nav>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] hover:bg-[#1A1A1A] border border-[#242424] text-xs font-mono text-[#929292] hover:text-[#F5F5F0] transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#C7FF32]" />
        </button>

      </div>
    </footer>
  );
};
