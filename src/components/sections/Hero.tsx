import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingRef.current) return;
    
    const phrases = ["Full Stack Developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Stop at the end of typing
        return;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900/30 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary-200 dark:bg-secondary-900/30 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-400 shadow-lg">
            <img 
              src="/profile.png" 
              alt="Amajala Uma Sai Sree Lakshmi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400 font-extrabold">Amajala Uma Sai Sree Lakshmi</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-8 text-gray-700 dark:text-gray-300">
              I'm a <span ref={typingRef} className="text-secondary-600 dark:text-secondary-400"></span>
              <span className="animate-blink">|</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              I build seamless, scalable, and user-friendly web applications using modern full-stack technologies and industry best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                icon={<Download size={18} />}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Amajala_Uma_Sai_Sree_Lakshmi_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;