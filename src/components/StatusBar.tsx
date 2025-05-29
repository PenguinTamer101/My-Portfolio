'use client';

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function StatusBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

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
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b-2 border-cyan-800">
      <div className="max-w-[95vw] mx-auto px-6 h-16 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-8">
          <span className="text-cyan-400 font-semibold text-lg">HELLO_</span>
          <div className="flex items-center space-x-3">
            <Activity className="w-4 h-4 text-green-400" />
            <span className="font-semibold">SYSTEM_ONLINE</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <span className="font-semibold">TIME: {mounted && currentTime ? currentTime.toLocaleTimeString() : '--:--:--'}</span>
          <div className="flex space-x-6">
            {['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase() === 'portfolio' ? 'projects' : section.toLowerCase())}
                className={`px-4 py-2 border-2 border-cyan-800 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 font-semibold ${
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
    </div>
  );
}