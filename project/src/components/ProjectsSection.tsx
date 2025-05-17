import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

// Example projects (these would be replaced with actual projects)
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with shopping cart functionality, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "MongoDB", "HTML/CSS", "JavaScript"],
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "MySQL", "HTML/CSS", "JavaScript"],
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard displaying complex data with filtering capabilities and exportable reports.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "MongoDB", "JavaScript"],
    github: "#",
    live: "#",
    featured: false
  },
  {
    id: 4,
    title: "Social Media API",
    description: "A RESTful API for social media platforms with features like user profiles, posts, and interactions.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "MySQL", "Git"],
    github: "#",
    featured: false
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
          My Projects
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10 text-neutral-700 dark:text-neutral-300">
          Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-neutral-200 dark:bg-neutral-700 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === 'all'
                ? 'bg-white dark:bg-neutral-800 shadow-sm text-cherry-600 dark:text-cherry-500'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === 'featured'
                ? 'bg-white dark:bg-neutral-800 shadow-sm text-cherry-600 dark:text-cherry-500'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300">
            I'm always working on new projects! Check out my GitHub for more.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-900 dark:hover:bg-neutral-600 text-white rounded-lg transition-all transform hover:-translate-y-1"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;