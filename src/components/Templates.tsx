import React from 'react';
import { TEMPLATES, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface TemplatesProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const Templates: React.FC<TemplatesProps> = ({ onOpenModal }) => {
  return (
    <section id="templates" className="py-24 sm:py-32 bg-[#0C0C0C] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-5">
            Pre-built templates
          </h2>
          <p className="text-base sm:text-lg text-[#929292] leading-relaxed">
            Ready-to-deploy digital storefronts and interactive brand experiences. Click any preview to inspect and open.
          </p>
        </div>

        {/* 2-Column Grid for Templates */}
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
