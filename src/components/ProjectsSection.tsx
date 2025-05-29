import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  status: 'OPERATIONAL' | 'ACTIVE' | 'RETIRED';
  description: string;
  tech: string[];
  github: string;
  live: string;
  metrics: { [key: string]: string };
}

const StatusIndicator = ({ status }: { status: Project['status'] }) => {
  const colors = {
    OPERATIONAL: "bg-green-400",
    ACTIVE: "bg-blue-400", 
    RETIRED: "bg-red-400"
  };
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${colors[status]} animate-pulse`}></div>
      <span className="text-xs text-cyan-400 font-mono">{status}</span>
    </div>
  );
};

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "ALGOPREP_AI: AI POWERED CODING PREP",
      status: "OPERATIONAL",
      description: "Real-time messaging platform with end-to-end encryption, supporting 10K+ concurrent users across multiple servers",
      tech: ["Next.js", "PostgreSQL", "React"],
      github: "https://github.com/PenguinTamer101/AlgoPrep-AI",
      live: "https://www.algoprepai.com",
      metrics: { users: "10+", latency: "12ms", uptime: "99.9%" }
    },
    {
      title: "AI_POWERED_TRADING_BOT",
      status: "ACTIVE",
      description: "Machine learning trading algorithm with portfolio optimization and risk management features",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/salmahajian/trading-bot",
      live: "https://your-trading-demo.com",
      metrics: { accuracy: "87.3%", return: "+23.4%", trades: "1.2K" }
    },
    {
      title: "SYNTEXT: TYPING PRACTICE",
      status: "RETIRED",
      description: "Implementation of novel consensus algorithm for Byzantine fault tolerance in distributed networks",
      tech: ["TypeScript", "Firebase", "Docker", "React"],
      github: "https://github.com/hcp-uw/syntext",
      live: "https://syntext.herokuapp.com/",
      metrics: { nodes: "50+", tps: "2.1K", faults: "33%" }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-2">{"// ACTIVE_DEPLOYMENTS"}</h2>
          <div className="text-gray-400 text-lg">Past and current systems and projects</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="border border-cyan-800 bg-gray-800/50 hover:border-cyan-400 transition-all duration-300 group">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-cyan-800">
                  <StatusIndicator status={project.status} />
                  <div className="text-sm text-gray-400">#{String(index + 1).padStart(3, '0')}</div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-cyan-300 font-semibold text-lg mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-cyan-400 text-base mb-2">TECH_STACK:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1.5 bg-gray-700 text-cyan-300 text-sm border border-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-cyan-400 text-base mb-3">METRICS:</div>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-green-400 font-mono text-base">{value}</div>
                            <div className="text-gray-500 uppercase">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-6 pt-3">
                    <a
                      href={project.github}
                      className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      SOURCE
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DEPLOY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}