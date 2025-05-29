import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  status: 'OPERATIONAL' | 'ACTIVE' | 'DEPLOYED';
  description: string;
  tech: string[];
  github: string;
  live: string;
  metrics: { [key: string]: string };
}

const StatusIndicator = ({ status }: { status: Project['status'] }) => {
  const colors = {
    OPERATIONAL: "bg-green-400",
    ACTIVE: "bg-cyan-400", 
    DEPLOYED: "bg-blue-400"
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
      title: "DISTRIBUTED_CHAT_SYSTEM",
      status: "OPERATIONAL",
      description: "Real-time messaging platform with end-to-end encryption, supporting 10K+ concurrent users across multiple servers",
      tech: ["Node.js", "Socket.io", "Redis", "PostgreSQL", "React"],
      github: "https://github.com/salmahajian/distributed-chat",
      live: "https://your-chat-demo.com",
      metrics: { users: "10K+", latency: "12ms", uptime: "99.9%" }
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
      title: "BLOCKCHAIN_CONSENSUS",
      status: "DEPLOYED",
      description: "Implementation of novel consensus algorithm for Byzantine fault tolerance in distributed networks",
      tech: ["Rust", "gRPC", "Docker", "Kubernetes", "Prometheus"],
      github: "https://github.com/salmahajian/consensus-algo",
      live: "https://your-blockchain-demo.com",
      metrics: { nodes: "50+", tps: "2.1K", faults: "33%" }
    },
    {
      title: "COMPILER_OPTIMIZATION",
      status: "DEPLOYED",
      description: "LLVM-based compiler optimizations achieving 25% performance improvement for numerical computations",
      tech: ["C++", "LLVM", "CMake", "Assembly", "Python"],
      github: "https://github.com/salmahajian/compiler-opt",
      live: "https://your-compiler-demo.com",
      metrics: { speedup: "25%", tests: "500+", coverage: "95%" }
    },
    {
      title: "KUBERNETES_AUTOSCALER",
      status: "OPERATIONAL",
      description: "Custom Kubernetes operator for intelligent workload autoscaling based on application-specific metrics",
      tech: ["Go", "Kubernetes", "Prometheus", "Grafana", "Helm"],
      github: "https://github.com/salmahajian/k8s-autoscaler",
      live: "https://your-k8s-demo.com",
      metrics: { clusters: "12", cost: "-40%", sla: "99.9%" }
    },
    {
      title: "NEURAL_SEARCH_ENGINE",
      status: "ACTIVE",
      description: "Vector-based semantic search engine with transformer models for document retrieval and ranking",
      tech: ["Python", "PyTorch", "Elasticsearch", "FastAPI", "React"],
      github: "https://github.com/salmahajian/neural-search",
      live: "https://your-search-demo.com",
      metrics: { accuracy: "94.2%", docs: "1M+", queries: "100K" }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2">ACTIVE_DEPLOYMENTS</h2>
          <div className="text-gray-400">Current operational systems and projects</div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="border border-cyan-800 bg-gray-800/50 hover:border-cyan-400 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-800">
                  <StatusIndicator status={project.status} />
                  <div className="text-xs text-gray-400">#{String(index + 1).padStart(3, '0')}</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-cyan-300 font-semibold text-sm mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-cyan-400 text-xs mb-1">TECH_STACK:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-700 text-cyan-300 text-xs border border-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-cyan-400 text-xs mb-2">METRICS:</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-green-400 font-mono">{value}</div>
                            <div className="text-gray-500 uppercase">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-2">
                    <a
                      href={project.github}
                      className="flex items-center text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      SOURCE
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
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