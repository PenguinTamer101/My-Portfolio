import React from 'react';
import { Code, Briefcase, Award, Zap } from 'lucide-react';

export default function AboutSection() {
  const experiences = [
    {
      title: "SOFTWARE_ENGINEER_INTERN",
      company: "Microsoft",
      period: "Summer 2024",
      description: "Built scalable backend services for Instagram's messaging platform, serving 2B+ users. Implemented real-time features using GraphQL and optimized database queries resulting in 40% performance improvement.",
      tech: ["Python", "GraphQL", "MySQL", "React", "Docker"],
      impact: "40% performance boost, 2B+ users impacted"
    },
    {
      title: "SWE_INTERN",
      company: "Google",
      period: "Summer 2023", 
      description: "Developed ML-powered search features for Google Cloud Console. Created automated testing frameworks and collaborated with cross-functional teams to ship features to production.",
      tech: ["Go", "TensorFlow", "GCP", "JavaScript", "Kubernetes"],
      impact: "3 features shipped to production"
    },
    {
      title: "RESEARCH_ASSISTANT", 
      company: "UC Berkeley EECS",
      period: "Fall 2023 - Present",
      description: "Working on distributed systems research focusing on consensus algorithms and fault tolerance. Published paper on Byzantine fault tolerance in blockchain networks.",
      tech: ["Rust", "C++", "Network Programming", "Consensus Algorithms"],
      impact: "1 paper published, 2 in review"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "Go", level: 88 },
    { name: "React", level: 90 },
    { name: "AWS", level: 85 },
    { name: "Docker", level: 87 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">EXPERIENCE_LOG</h2>
          <div className="text-gray-400">Professional experience and technical capabilities</div>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <div key={exp.title} className="border border-cyan-800 bg-gray-800/50 p-6 hover:border-cyan-400 transition-all duration-300">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-cyan-300 font-semibold text-lg">{exp.title}</h3>
                      <div className="text-yellow-400 font-medium">{exp.company}</div>
                      <div className="text-gray-400 text-sm">{exp.period}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">COMPLETED</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 text-cyan-300 text-xs border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-green-400">
                    <Zap className="w-3 h-3 inline mr-1" />
                    IMPACT: {exp.impact}
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mb-2">
                    {index === 0 ? <Briefcase className="w-8 h-8 text-cyan-400" /> :
                     index === 1 ? <Code className="w-8 h-8 text-cyan-400" /> :
                     <Award className="w-8 h-8 text-cyan-400" />}
                  </div>
                  <div className="text-xs text-cyan-400 text-center">
                    MISSION_{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Skills Section */}
        <div className="border border-cyan-800 bg-gray-800/50 p-6">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
            <span className="text-cyan-400">TECHNICAL_STACK</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-cyan-300">{skill.name}</span>
                  <span className="text-xs text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-1">
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