import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-cherry-500">
              Soumyabrata Mahapatra
            </h2>
            <p className="text-neutral-400 mt-2">
              Full-stack Developer & Tech Enthusiast
            </p>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="group p-2 border border-neutral-700 rounded-full hover:bg-cherry-600 hover:border-cherry-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} className="text-neutral-400 group-hover:text-white" />
          </button>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Soumyabrata Mahapatra. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-cherry-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-cherry-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;