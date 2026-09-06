import React from 'react';
import { CLIENT_WORK, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { SketchStroke } from './SketchMotif';

interface ClientWorkProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const ClientWork: React.FC<ClientWorkProps> = ({ onOpenModal }) => {
  return (
    <section id="work" className="py-20 sm:py-32 bg-[#080808] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tight header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-3">
            Client work.
          </h2>
          <SketchStroke color="#C7FF32" className="max-w-[120px] mb-3" />
          <p className="text-base sm:text-lg text-[#929292]">
            Production websites engineered for real business growth.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CLIENT_WORK.map((project) => (
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
