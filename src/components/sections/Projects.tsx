import React, { useState } from 'react';
import ProjectCard from '../common/ProjectCard';
import { projects } from '../../data/projects';
import Button from '../common/Button';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {!showAll && projects.length > displayedProjects.length && (
          <div className="text-center mt-12">
            <Button 
              variant="secondary" 
              onClick={() => setShowAll(true)}
            >
              View All Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;