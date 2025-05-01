import React from 'react';
import { BookOpen, Code, Monitor, Palette } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: <Code size={24} />,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with React, Node.js, Express, and MongoDB—combining dynamic UIs with scalable backend systems.',
    },
    {
      icon: <Palette size={24} />,
      title: 'Responsive & Accessible Design',
      description: 'Crafting cross-device compatible interfaces using Bootstrap, CSS3, and HTML5, ensuring seamless user experiences.',
    },
    {
      icon: <Monitor size={24} />,
      title: 'Problem-First Approach',
      description: 'Developing solutions tailored to real-world needs, like automating payroll workflows with web app.',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Database & API Integration',
      description: 'Designing efficient data architectures with SQL and MongoDB, and integrating RESTful APIs for seamless functionality.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer dedicated to building seamless, high-performance web applications with elegant frontends, robust backends, and exceptional user experiences.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Passionate Full Stack Developer with hands-on experience in building responsive web applications, from frontend design to backend logic. Skilled in React, Node.js, Express, MongoDB, and modern CSS frameworks like Bootstrap, I specialize in creating intuitive user interfaces and scalable solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I started my journey as a front-end developer and gradually expanded my skills to include back-end development, and project management.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My passion lies in creating clean, efficient, and user-friendly web applications that solve real-world problems. I'm constantly learning and adapting to new technologies and methodologies to improve my craft.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech <br />
                  Electronics & Communication<br />
                  Vignans Institute of Information Technology, 2025
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Visakhapatnam, Andhra Pradesh<br />
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-primary-500 dark:text-primary-400 mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;