import React from 'react';
import { Github, Linkedin, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/uma-amajala-408322289/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:amajalauma@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md">
              Building beautiful, functional, and accessible web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} Amajala Uma Sai Sree Lakshmi.<br />             All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;