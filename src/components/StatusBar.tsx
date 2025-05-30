'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

export default function StatusBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b-2 border-cyan-800">
      <div className="max-w-[95vw] mx-auto px-3 h-12 md:h-14">
        <div className="flex items-center justify-between h-full">
          {/* Left side - Logo and Status */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <span className="text-cyan-400 font-semibold text-sm md:text-base">HELLO_</span>
            <div className="flex items-center space-x-1.5">
              <Activity className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-400" />
              <span className="font-semibold text-xs md:text-sm">SYSTEM_ONLINE</span>
            </div>
          </div>
          
          {/* Right side - Time and Navigation */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <span className="hidden md:block font-semibold text-xs">
              TIME: {mounted && currentTime ? currentTime.toLocaleTimeString() : '--:--:--'}
            </span>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-3">
              {['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase())}
                  className={`px-2.5 py-1 border-2 border-cyan-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 font-semibold text-xs ${
                    activeSection === (section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase()) 
                      ? 'border-cyan-400 bg-cyan-400/20' 
                      : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b-2 border-cyan-800">
            <div className="flex flex-col space-y-1.5 p-3">
              {['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase())}
                  className={`px-3 py-1.5 border-2 border-cyan-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 font-semibold text-xs text-left ${
                    activeSection === (section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase()) 
                      ? 'border-cyan-400 bg-cyan-400/20' 
                      : ''
                  }`}
                >
                  {section}
                </button>
              ))}
              <div className="flex items-center space-x-2 pt-1.5 border-t border-cyan-800">
                <span className="font-semibold text-xs text-cyan-400">
                  TIME: {mounted && currentTime ? currentTime.toLocaleTimeString() : '--:--:--'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}