import React from 'react';
import { Mail, Linkedin, Github, Terminal, Activity, ChevronRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-8 md:py-12 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">{"// ESTABLISH_CONTACT"}</h2>
          <div className="text-gray-400 text-sm md:text-base">Open communication channels</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-4">
            <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-800">
                <span className="text-cyan-400 text-sm md:text-base">CONTACT_PROTOCOLS</span>
                <Activity className="w-4 h-4 text-green-400" />
              </div>
              
              <div className="space-y-3">
                <a
                  href="mailto:salmahajian@gmail.com"
                  className="flex items-center justify-between p-3 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-sm">EMAIL_DIRECT</div>
                      <div className="text-xs text-gray-400">salmahajian@gmail.com</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href="https://linkedin.com/in/salma-hajian"
                  className="flex items-center justify-between p-3 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-sm">LINKEDIN_NET</div>
                      <div className="text-xs text-gray-400">Professional network</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href="https://github.com/PenguinTamer101"
                  className="flex items-center justify-between p-3 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-sm">CODE_REPOSITORY</div>
                      <div className="text-xs text-gray-400">Open source projects</div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-sm md:text-base">MESSAGE_TERMINAL</span>
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-cyan-400 text-sm mb-1.5">SENDER_ID:</div>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-3 py-2 text-sm transition-all duration-200"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <div className="text-cyan-400 text-sm mb-1.5">EMAIL_ADDRESS:</div>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-3 py-2 text-sm transition-all duration-200"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <div className="text-cyan-400 text-sm mb-1.5">MESSAGE_CONTENT:</div>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-3 py-2 text-sm transition-all duration-200 resize-none"
                  placeholder="What's going on, friend..."
                ></textarea>
              </div>
              
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 py-2.5 px-4 font-semibold text-sm transition-colors duration-200">
                TRANSMIT_MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}