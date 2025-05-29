import React from 'react';
import { Mail, Linkedin, Github, Terminal, Activity, ChevronRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">{"// ESTABLISH_CONTACT"}</h2>
          <div className="text-gray-400 text-lg">Open communication channels</div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-cyan-800 bg-gray-800/50 p-8">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-cyan-800">
                <span className="text-cyan-400 text-lg">CONTACT_PROTOCOLS</span>
                <Activity className="w-5 h-5 text-green-400" />
              </div>
              
              <div className="space-y-6">
                <a
                  href="mailto:salmahajian@gmail.com"
                  className="flex items-center justify-between p-4 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-base">EMAIL_DIRECT</div>
                      <div className="text-sm text-gray-400">salmahajian@gmail.com</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href="https://linkedin.com/in/salma-hajian"
                  className="flex items-center justify-between p-4 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-base">LINKEDIN_NET</div>
                      <div className="text-sm text-gray-400">Professional network</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
                
                <a
                  href="https://github.com/PenguinTamer101"
                  className="flex items-center justify-between p-4 border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-4">
                    <Github className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-cyan-300 text-base">CODE_REPOSITORY</div>
                      <div className="text-sm text-gray-400">Open source projects</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border border-cyan-800 bg-gray-800/50 p-8">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-cyan-800">
              <span className="text-cyan-400 text-lg">MESSAGE_TERMINAL</span>
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-cyan-400 text-base mb-2">SENDER_ID:</div>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-4 py-3 text-base transition-all duration-200"
                  placeholder="Enter your name..."
                />
              </div>
              
              <div>
                <div className="text-cyan-400 text-base mb-2">EMAIL_ADDRESS:</div>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-4 py-3 text-base transition-all duration-200"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <div className="text-cyan-400 text-base mb-2">MESSAGE_CONTENT:</div>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 focus:border-cyan-400 focus:bg-gray-600 text-cyan-100 px-4 py-3 text-base transition-all duration-200 resize-none"
                  placeholder="What's going on, friend..."
                ></textarea>
              </div>
              
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 py-4 px-6 font-semibold text-base transition-colors duration-200">
                TRANSMIT_MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}