'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Download, User } from 'lucide-react';

export default function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const fullText = "SALMA_HAJIAN";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-12">
      <div className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] mx-auto px-4">
        {/* Main Content - Full Width */}
        <div className="text-center mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <div className="text-cyan-400 text-sm md:text-base">{"// INITIALIZING SYSTEM..."}</div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-cyan-400">{typingText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-cyan-300 font-semibold">SOFTWARE_ENGINEER</div>
            <div className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
              Computer Science @ University of Washington • Building next-generation software solutions with modern technologies
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-colors duration-200 font-semibold text-sm md:text-base"
            >
              <Terminal className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              VIEW_PORTFOLIO
            </button>
            <button
              className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-200 text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              DOWNLOAD_RESUME
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 md:space-x-8 mt-8 md:mt-12">
            <a href="https://github.com/PenguinTamer101" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://linkedin.com/in/salma-hajian" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:salmahajian@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        {/* Terminal Profile Cards - Side by Side */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Profile Card */}
          <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-sm md:text-base">OPERATOR_PROFILE</span>
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-300 font-semibold text-base md:text-lg">LT. HAJIAN, SALMA</div>
                  <div className="text-xs md:text-sm text-gray-400">SOFTWARE ENGINEER</div>
                  <div className="text-xs md:text-sm text-gray-400">ID: CS_2025</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                <div>
                  <div className="text-cyan-400 text-sm md:text-base">LOCATION:</div>
                  <div className="text-gray-300">Seattle, WA</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm md:text-base">STATUS:</div>
                  <div className="text-green-400">SEEKING_OPPORTUNITIES</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm md:text-base">GRADUATION:</div>
                  <div className="text-gray-300">JUNE 2025</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-sm md:text-base">CLEARANCE:</div>
                  <div className="text-yellow-400">STUDENT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-sm md:text-base">SYSTEM_METRICS</span>
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="text-center p-3 md:p-4 border border-gray-700">
                  <div className="text-xl md:text-2xl font-bold text-cyan-400">3.8</div>
                  <div className="text-xs md:text-sm text-gray-400">GPA</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-gray-700">
                  <div className="text-xl md:text-2xl font-bold text-green-400">10+</div>
                  <div className="text-xs md:text-sm text-gray-400">PROJECTS</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-gray-700">
                  <div className="text-xl md:text-2xl font-bold text-yellow-400">2</div>
                  <div className="text-xs md:text-sm text-gray-400">INTERNSHIPS</div>
                </div>
                <div className="text-center p-3 md:p-4 border border-gray-700">
                  <div className="text-xl md:text-2xl font-bold text-purple-400">10K+</div>
                  <div className="text-xs md:text-sm text-gray-400">LINES_CODE</div>
                </div>
              </div>
              
              <div className="pt-3 border-t border-gray-700">
                <div className="text-cyan-400 text-sm md:text-base mb-2">CURRENT_FOCUS:</div>
                <div className="text-gray-300 text-xs md:text-sm">
                  Machine Learning • Distributed Systems • Full-Stack Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}