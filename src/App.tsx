import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Process } from './components/Process';
import { ClientWork } from './components/ClientWork';
import { Templates } from './components/Templates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { ProjectItem } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F0] relative selection:bg-[#C7FF32] selection:text-[#080808]">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Capabilities />
        <Process />
        <ClientWork onOpenModal={handleOpenModal} />
        <Templates onOpenModal={handleOpenModal} />
        <Contact />
      </main>
      <Footer />

      {/* Lightbox Video Modal */}
      <VideoModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
