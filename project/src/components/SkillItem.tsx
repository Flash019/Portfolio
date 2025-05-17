import React, { useEffect, useRef, useState } from 'react';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color }) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div
            className="w-3 h-3 rounded-full mr-3 transition-transform duration-300 group-hover:scale-125"
            style={{ backgroundColor: color }}
          ></div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            {name}
          </h3>
        </div>
        <span className="text-neutral-600 dark:text-neutral-400">{level}%</span>
      </div>
      <div
        ref={progressRef}
        className="w-full h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden"
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${level}%` : '0%',
            backgroundColor: color,
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;