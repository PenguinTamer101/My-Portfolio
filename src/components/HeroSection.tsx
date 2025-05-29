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
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Main Content - Full Width */}
        <div className="text-center mb-16">
          <div className="space-y-6">
            <div className="text-cyan-400 text-md">{"// INITIALIZING SYSTEM..."}</div>
            <h1 className="text-5xl md:text-7xl lg:text-7.5xl font-bold">
              <span className="text-cyan-400">{typingText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <div className="text-2xl md:text-3xl text-cyan-300 font-semibold">SOFTWARE_ENGINEER</div>
            <div className="text-xl text-gray-400 max-w-3xl mx-auto">
              Computer Science @ University of Washington • Building next-generation software solutions with modern technologies
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center px-8 py-4 bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-colors duration-200 font-semibold text-lg"
            >
              <Terminal className="w-5 h-5 mr-2" />
              VIEW_PORTFOLIO
            </button>
            <button
              className="flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-200 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              DOWNLOAD_RESUME
            </button>
          </div>
          
          <div className="flex justify-center space-x-8 mt-12">
            <a href="https://github.com/PenguinTamer101" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://linkedin.com/in/salma-hajian" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="mailto:salmahajian@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Terminal Profile Cards - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="border border-cyan-800 bg-gray-800/50 p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-base">OPERATOR_PROFILE</span>
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <div className="text-cyan-300 font-semibold text-lg">LT. HAJIAN, SALMA</div>
                  <div className="text-sm text-gray-400">SOFTWARE ENGINEER</div>
                  <div className="text-sm text-gray-400">ID: CS_2025</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-cyan-400 text-base">LOCATION:</div>
                  <div className="text-gray-300">Seattle, WA</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-base">STATUS:</div>
                  <div className="text-green-400">SEEKING_OPPORTUNITIES</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-base">GRADUATION:</div>
                  <div className="text-gray-300">JUNE 2025</div>
                </div>
                <div>
                  <div className="text-cyan-400 text-base">CLEARANCE:</div>
                  <div className="text-yellow-400">STUDENT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="border border-cyan-800 bg-gray-800/50 p-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-base">SYSTEM_METRICS</span>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-cyan-400">3.8</div>
                  <div className="text-sm text-gray-400">GPA</div>
                </div>
                <div className="text-center p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">PROJECTS</div>
                </div>
                <div className="text-center p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-yellow-400">2</div>
                  <div className="text-sm text-gray-400">INTERNSHIPS</div>
                </div>
                <div className="text-center p-4 border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400">10K+</div>
                  <div className="text-sm text-gray-400">LINES_CODE</div>
                </div>
              </div>
              
              <div className="pt-3 border-t border-gray-700">
                <div className="text-cyan-400 text-base mb-2">CURRENT_FOCUS:</div>
                <div className="text-gray-300 text-sm">
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