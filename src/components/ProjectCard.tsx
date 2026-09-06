import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { Lock, ArrowUpRight, Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <article className="group rounded-3xl bg-[#111111] border border-[#222222] hover:border-[#383838] transition-all duration-300 overflow-hidden flex flex-col shadow-xl">
      {/* Browser Window Header */}
      <div className="px-5 py-3.5 bg-[#141414] border-b border-[#1E1E1E] flex items-center justify-between gap-4 select-none">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A] border border-[#222222] text-[11px] font-mono text-[#888888] truncate max-w-[200px] sm:max-w-[260px]">
          <Lock className="w-2.5 h-2.5 text-[#666666] shrink-0" />
          <span className="truncate">{project.displayUrl}</span>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] font-mono font-medium">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.badge === 'Live' ? 'bg-[#27C93F] animate-pulse' : 'bg-[#C7FF32]'
            }`}
          />
          <span className={project.badge === 'Live' ? 'text-[#E0E0E0]' : 'text-[#C7FF32]'}>
            {project.badge}
          </span>
        </div>
      </div>

      {/* Video Window Body */}
      <div
        onClick={() => onOpenModal(project)}
        className="relative aspect-video w-full bg-[#0A0A0A] overflow-hidden cursor-pointer"
      >
        <video
          src={project.videoSrc}
          poster={project.posterSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] transform-gpu will-change-transform"
        />
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 bg-[#080808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#333333] text-xs font-mono text-[#F5F5F0]">
            <Maximize2 className="w-3.5 h-3.5 text-[#C7FF32]" />
            <span>Click to Enlarge Preview</span>
          </div>
        </div>
      </div>

      {/* Card Footer Bar */}
      <div className="p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#111111]">
        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] group-hover:text-[#C7FF32] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-[#929292] mt-1">
            {project.category}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          <button
            onClick={() => onOpenModal(project)}
            className="p-2.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#282828] text-[#929292] hover:text-[#F5F5F0] transition-colors"
            title="Inspect Video"
            aria-label={`Inspect video for ${project.title}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-[#181818] hover:bg-[#C7FF32] text-[#F5F5F0] hover:text-[#080808] border border-[#282828] hover:border-[#C7FF32] text-xs font-semibold tracking-wide transition-all"
          >
            <span>{project.badge === 'Live' ? 'Live Site' : 'View Template'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
