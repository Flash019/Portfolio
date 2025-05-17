import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }> = [];

  // Background animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(
        Math.floor(window.innerWidth * window.innerHeight / 8000),
        100
      );
      
      const cherryColors = [
        'rgba(210, 4, 45, 0.1)',
        'rgba(210, 4, 45, 0.2)',
        'rgba(210, 4, 45, 0.3)',
        'rgba(153, 0, 17, 0.2)',
        'rgba(153, 0, 17, 0.1)',
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: cherryColors[Math.floor(Math.random() * cherryColors.length)],
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Loop around canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="text-neutral-900 dark:text-white">Hi, I'm </span>
          <span className="text-cherry-600 dark:text-cherry-500">Soumyabrata</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8">
          Full-stack Developer & Tech Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-cherry-600 hover:bg-cherry-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 bg-white dark:bg-neutral-800 text-cherry-600 dark:text-cherry-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 font-medium"
          >
            View My Work
          </a>
        </div>
      </div>
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 rounded-full bg-white/30 dark:bg-neutral-800/30 backdrop-blur-sm"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-cherry-600 dark:text-cherry-400" size={24} />
      </button>
    </section>
  );
};

export default HeroSection;