import React from 'react';
import { Code, Briefcase, Award, Zap, ChevronRight, Book, Glasses, Terminal } from 'lucide-react';

export default function AboutSection() {
  const experiences = [
    {
      company: "Microsoft",
      missions: [
        {
          title: "SOFTWARE_ENGINEER_INTERN",
          period: "Summer 2025",
          description: "Developed ML-powered search features for Google Cloud Console. Created automated testing frameworks and collaborated with cross-functional teams to ship features to production.",
          tech: ["Go", "TensorFlow", "GCP", "JavaScript", "Kubernetes"],
          impact: "3 features shipped to production",
          status: "CURRENT",
          missionNumber: 3
        },
        {
          title: "SOFTWARE_ENGINEER_INTERN",
          period: "Summer 2024",
          description: "Implemented the Live Captions feature in Teams calls within HoloLens Guides, allowing for real-time transcription to improve accessibility and communication.",
          tech: ["C#", "Unity", "Git"],
          impact: "2 features shipped to production",
          status: "COMPLETED",
          missionNumber: 2
        }
      ]
    },
    {
      title: "RESEARCH_ASSISTANT", 
      company: "University of Washington",
      period: "Fall 2023 - Spring 2024",
      description: "Working on distributed systems research focusing on consensus algorithms and fault tolerance. Published paper on Byzantine fault tolerance in blockchain networks.",
      tech: ["Python", "C++", "ROS", "Distributed Systems"],
      impact: "1 paper published, 2 in review",
      missionNumber: 1
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "C/C++", level: 88 },
    { name: "React", level: 90 },
    { name: "AWS", level: 85 },
    { name: "Java", level: 87 }
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-1">{"// EXPERIENCE_LOG"}</h2>
          <div className="text-gray-400 text-sm md:text-base">Professional experience and technical capabilities</div>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          {experiences.map((exp, index) => (
            <div key={`${exp.company}_${exp.period}`} className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6 hover:border-cyan-400 transition-all duration-300">
              {exp.missions ? (
                // Microsoft Card with nested missions
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-cyan-800">
                    <div>
                      <h3 className="text-yellow-400 font-semibold text-lg md:text-xl">{exp.company}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {exp.missions.map((mission, missionIndex) => (
                      <div key={`${mission.title}_${mission.period}`} className="border border-gray-700 bg-gray-800/30 p-4">
                        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                          <div className="md:col-span-3">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                              <div className="mb-3 md:mb-0">
                                <div className="flex items-center space-x-2">
                                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                                  <h4 className="text-cyan-300 font-semibold text-base">{mission.title}</h4>
                                </div>
                                <div className="text-gray-400 text-sm">{mission.period}</div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full animate-pulse ${
                                  mission.status === 'CURRENT' ? 'bg-blue-400' : 'bg-green-400'
                                }`}></div>
                                <span className={`text-xs ${
                                  mission.status === 'CURRENT' ? 'text-blue-400' : 'text-green-400'
                                }`}>{mission.status}</span>
                              </div>
                            </div>
                            
                            <p className="text-gray-300 text-sm mb-3">{mission.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                              {mission.tech.map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-gray-700 text-cyan-300 text-xs border border-gray-600">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="text-xs text-green-400">
                              <Zap className="w-3 h-3 inline mr-1" />
                              IMPACT: {mission.impact}
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-center justify-center mt-3 md:mt-0">
                            <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                              {missionIndex === 0 ? <Terminal className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" /> :
                               <Glasses className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />}
                            </div>
                            <div className="text-xs text-cyan-400 text-center">
                              MISSION_{String(mission.missionNumber).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Regular Experience Card
                <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                  <div className="md:col-span-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 md:mb-4">
                      <div className="mb-3 md:mb-0">
                        <h3 className="text-cyan-300 font-semibold text-base md:text-lg">{exp.title}</h3>
                        <div className="text-yellow-400 font-medium text-sm md:text-base">{exp.company}</div>
                        <div className="text-gray-400 text-xs md:text-sm">{exp.period}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">COMPLETED</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-3">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 md:px-2.5 md:py-1 bg-gray-700 text-cyan-300 text-xs border border-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs text-green-400">
                      <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 inline mr-1" />
                      IMPACT: {exp.impact}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center mt-3 md:mt-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                      <Book className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
                    </div>
                    <div className="text-xs text-cyan-400 text-center">
                      MISSION_{String(exp.missionNumber).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compact Skills Section */}
        <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4 pb-2 border-b border-cyan-800">
            <span className="text-cyan-400 text-sm md:text-base">TECHNICAL_STACK</span>
            <Zap className="w-4 h-4 md:w-4.5 md:h-4.5 text-yellow-400" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm text-cyan-300">{skill.name}</span>
                  <span className="text-xs text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1 md:h-1.5">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}