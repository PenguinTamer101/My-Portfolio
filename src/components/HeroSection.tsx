'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Terminal, Download, User, Activity, Brain, Cpu } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400 text-sm">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>{"// INITIALIZING SYSTEM..."}</span>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-cyan-400">{typingText}</span>
                  <span className="animate-pulse">|</span>
                </h1>
                <div className="text-xl md:text-2xl text-cyan-300 font-semibold">SOFTWARE_ENGINEER</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold">
                  <span className="text-base md:text-lg">COMPUTER_SCIENCE @ UNIVERSITY_OF_WASHINGTON</span>
                </div>
                <div className="text-base text-gray-400 max-w-lg">
                  Building next-generation software solutions with modern technologies
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center px-6 py-3 bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-colors duration-200 font-semibold text-sm"
              >
                <Terminal className="w-4 h-4 mr-2" />
                VIEW_PORTFOLIO
              </button>
              <button
                className="flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 transition-all duration-200 text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD_RESUME
              </button>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/PenguinTamer101" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/salma-hajian" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:salmahajian@gmail.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Cards */}
          <div className="space-y-4">
            {/* Profile Card */}
            <div className="border border-cyan-800 bg-gray-800/50 p-4">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
                <span className="text-cyan-400 text-sm">OPERATOR_PROFILE</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-cyan-300 font-semibold text-base">HAJIAN, SALMA</div>
                    <div className="text-xs text-gray-400">SOFTWARE ENGINEER</div>
                    <div className="text-xs text-gray-400">ID: CS_2025</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-cyan-400 text-sm">LOCATION:</div>
                    <div className="text-gray-300">Seattle, WA</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-sm">STATUS:</div>
                    <div className="text-green-400">SEEKING_OPPORTUNITIES</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-sm">GRADUATION:</div>
                    <div className="text-gray-300">JUNE 2025</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 text-sm">CLEARANCE:</div>
                    <div className="text-yellow-400">STUDENT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-cyan-800 bg-gray-800/50 p-4">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-800">
                  <span className="text-cyan-400 text-sm">PRIMARY_FOCUS</span>
                  <Brain className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Distributed Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Full-Stack Development</span>
                  </div>
                </div>
              </div>

              <div className="border border-cyan-800 bg-gray-800/50 p-4">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-800">
                  <span className="text-cyan-400 text-sm">CURRENT_MISSION</span>
                  <Cpu className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Microsoft Internship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Research Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Open Source</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}