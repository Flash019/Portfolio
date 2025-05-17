import React from 'react';
import { Code, Database, Globe, Github } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cherry-500/20 to-cherry-700/20 z-10"></div>
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Professional portrait placeholder" 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-cherry-600 rounded-lg z-0 dark:bg-cherry-700"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 border-4 border-cherry-500 rounded-lg z-0 dark:border-cherry-600"></div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-neutral-900 dark:text-white">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cherry-500"></span>
            </h2>
            <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Hello! I'm Soumyabrata Mahapatra, a passionate developer with a strong foundation in 
              both frontend and backend technologies. I love crafting elegant solutions to complex problems 
              and continuously expanding my technical expertise.
            </p>
            <p className="text-lg mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              With a background in computer science and a keen eye for detail, 
              I strive to create applications that are not only functional but also 
              intuitive and user-friendly. I'm always excited to collaborate on innovative projects
              and explore new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry-100 dark:bg-cherry-900/30 flex items-center justify-center">
                  <Code className="text-cherry-600 dark:text-cherry-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Frontend</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">HTML, CSS, JS</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry-100 dark:bg-cherry-900/30 flex items-center justify-center">
                  <Database className="text-cherry-600 dark:text-cherry-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Backend</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Python, MySQL, MongoDB</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry-100 dark:bg-cherry-900/30 flex items-center justify-center">
                  <Globe className="text-cherry-600 dark:text-cherry-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Languages</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Python, C</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cherry-100 dark:bg-cherry-900/30 flex items-center justify-center">
                  <Github className="text-cherry-600 dark:text-cherry-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-neutral-900 dark:text-white">Version Control</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;