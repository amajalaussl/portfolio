import React from 'react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <Button 
              variant="primary" 
              size="sm"
              icon={<ExternalLink size={16} />}
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              View Live
            </Button>
          )}
          
          {project.githubUrl && (
            <Button 
              variant="outline" 
              size="sm"
              icon={<Github size={16} />}
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;