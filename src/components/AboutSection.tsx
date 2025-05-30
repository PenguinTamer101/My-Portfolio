import React from 'react';
import { Code, Briefcase, Award, Zap } from 'lucide-react';

export default function AboutSection() {
  const experiences = [
    {
      title: "SOFTWARE_ENGINEER_INTERN",
      company: "Microsoft",
      period: "Summer 2025", 
      description: "Developed ML-powered search features for Google Cloud Console. Created automated testing frameworks and collaborated with cross-functional teams to ship features to production.",
      tech: ["Go", "TensorFlow", "GCP", "JavaScript", "Kubernetes"],
      impact: "3 features shipped to production"
    },
    {
      title: "SOFTWARE_ENGINEER_INTERN",
      company: "Microsoft",
      period: "Summer 2024",
      description: "Implemented the Live Captions feature in Teams calls within HoloLens Guides, allowing for real-time transcription to improve accessibility and communication.",
      tech: ["C#", "Unity", "Git"],
      impact: "2 features shipped to production"
    },
    {
      title: "RESEARCH_ASSISTANT", 
      company: "University of Washington",
      period: "Fall 2023 - Spring 2024",
      description: "Working on distributed systems research focusing on consensus algorithms and fault tolerance. Published paper on Byzantine fault tolerance in blockchain networks.",
      tech: ["Python", "C++", "ROS", "Distributed Systems"],
      impact: "1 paper published, 2 in review"
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
    <section id="about" className="py-12 md:py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-2">{"// EXPERIENCE_LOG"}</h2>
          <div className="text-gray-400 text-base md:text-lg">Professional experience and technical capabilities</div>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          {experiences.map((exp, index) => (
            <div key={`${exp.title}_${exp.company}_${exp.period}`} className="border border-cyan-800 bg-gray-800/50 p-4 md:p-8 hover:border-cyan-400 transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-cyan-300 font-semibold text-lg md:text-xl">{exp.title}</h3>
                      <div className="text-yellow-400 font-medium text-base md:text-lg">{exp.company}</div>
                      <div className="text-gray-400 text-sm md:text-base">{exp.period}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm text-green-400">COMPLETED</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 md:px-3 md:py-1.5 bg-gray-700 text-cyan-300 text-xs md:text-sm border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs md:text-sm text-green-400">
                    <Zap className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                    IMPACT: {exp.impact}
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center mt-4 md:mt-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2 md:mb-3">
                    {index === 0 ? <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" /> :
                     index === 1 ? <Code className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" /> :
                     <Award className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />}
                  </div>
                  <div className="text-xs md:text-sm text-cyan-400 text-center">
                    MISSION_{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Skills Section */}
        <div className="border border-cyan-800 bg-gray-800/50 p-4 md:p-8">
          <div className="flex items-center justify-between mb-4 md:mb-6 pb-2 border-b border-cyan-800">
            <span className="text-cyan-400 text-base md:text-lg">TECHNICAL_STACK</span>
            <Zap className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-base text-cyan-300">{skill.name}</span>
                  <span className="text-xs md:text-sm text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1.5 md:h-2">
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