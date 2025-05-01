import React from 'react';
import { Skill } from '../../types';
import * as LucideIcons from 'lucide-react';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  // This dynamically gets the icon from lucide-react
  const IconComponent = (LucideIcons as any)[
    skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
  ] || LucideIcons.Code;

  const categoryColors = {
    frontend: 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100',
    backend: 'bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-100',
    tools: 'bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-100',
    design: 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-100',
  };

  return (
    <div className={`flex items-center gap-2 p-3 rounded-lg ${categoryColors[skill.category]} transition-all duration-200 hover:scale-105`}>
      <IconComponent size={20} />
      <span className="font-medium">{skill.name}</span>
      <div className="ml-auto flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${
              i < skill.level 
                ? 'bg-current' 
                : 'bg-current opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillBadge;