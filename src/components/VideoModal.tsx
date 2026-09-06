import React, { useEffect, useRef } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ArrowUpRight, Lock } from 'lucide-react';

interface VideoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080808]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-[#111111] border border-[#262626] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Modal Window Header */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#141414] border-b border-[#202020] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* Window dots */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            </div>

            <h2 id="modal-project-title" className="text-base sm:text-lg font-bold text-[#F5F5F0] truncate">
              {project.title}
            </h2>

            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0A0A0A] border border-[#242424] text-[11px] font-mono text-[#888888]">
              <Lock className="w-2.5 h-2.5 text-[#666666]" />
              {project.displayUrl}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#C7FF32] text-[#080808] hover:bg-[#8FBF00] text-xs font-bold transition-colors"
            >
              <span>Visit Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#1A1A1A] hover:bg-[#262626] text-[#929292] hover:text-[#F5F5F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Video Player */}
        <div className="relative aspect-video w-full bg-[#080808]">
          <video
            ref={videoRef}
            src={project.videoSrc}
            poster={project.posterSrc}
            autoPlay
            controls
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Modal Description Footer */}
        <div className="p-5 sm:p-6 bg-[#111111] border-t border-[#1F1F1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#C7FF32] uppercase tracking-wider">{project.category}</p>
            <p className="text-sm text-[#929292] mt-1 max-w-2xl">{project.description}</p>
          </div>
          <div className="text-xs font-mono text-[#666666] shrink-0">
            ESC or click outside to dismiss
          </div>
        </div>
      </div>
    </div>
  );
};
