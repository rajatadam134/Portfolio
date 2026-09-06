import React from 'react';
import { TEMPLATES, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { SketchStroke } from './SketchMotif';

interface TemplatesProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const Templates: React.FC<TemplatesProps> = ({ onOpenModal }) => {
  return (
    <section id="templates" className="py-24 sm:py-32 bg-[#0C0C0C] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Tight header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-3">
            Pre-built templates.
          </h2>
          <SketchStroke color="#C7FF32" className="max-w-[120px] mb-3" />
          <p className="text-base sm:text-lg text-[#929292]">
            Deployable commerce systems and interactive brand experiences.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEMPLATES.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
