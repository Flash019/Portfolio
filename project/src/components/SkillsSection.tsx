import React from 'react';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 85, color: '#3776AB' },
  { name: 'C', level: 80, color: '#A8B9CC' },
  { name: 'HTML', level: 90, color: '#E34F26' },
  { name: 'CSS', level: 85, color: '#1572B6' },
  { name: 'JavaScript', level: 80, color: '#F7DF1E' },
  { name: 'MySQL', level: 75, color: '#4479A1' },
  { name: 'MongoDB', level: 70, color: '#47A248' },
  { name: 'Git', level: 80, color: '#F05032' },
];

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
          My Skills
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-neutral-700 dark:text-neutral-300">
          I've developed expertise in various technologies throughout my journey. 
          Here's a glimpse of my technical proficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((skill) => (
            <SkillItem 
              key={skill.name} 
              name={skill.name} 
              level={skill.level} 
              color={skill.color} 
            />
          ))}
        </div>

        <div className="mt-16 bg-neutral-100 dark:bg-neutral-700 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">
            Other Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-4">
            {['VS Code', 'PyCharm', 'Jupyter', 'Flask', 'REST API', 'Postman', 'Figma', 'GitHub'].map((item) => (
              <span 
                key={item}
                className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm text-neutral-700 dark:text-neutral-300 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;