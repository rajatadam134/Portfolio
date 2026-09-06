import React from 'react';
import { CLIENT_WORK, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ClientWorkProps {
  onOpenModal: (project: ProjectItem) => void;
}

export const ClientWork: React.FC<ClientWorkProps> = ({ onOpenModal }) => {
  return (
    <section id="work" className="py-24 sm:py-32 bg-[#080808] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F5F0] tracking-tight mb-5">
            Client work
          </h2>
          <p className="text-base sm:text-lg text-[#929292] leading-relaxed">
            Custom websites engineered for real business clients. Click on any preview window to enlarge and visit the live site.
          </p>
        </div>

        {/* 2-Column Grid for Client Work */}
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
