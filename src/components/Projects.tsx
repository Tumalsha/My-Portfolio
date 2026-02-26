"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Terminal, Cpu, Microscope } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  type: string;
  icon: React.ReactNode;
  image?: string;
  description: string;
  techStack: string[];
  color: string;
  links: {
    github?: string;
    demo?: string;
  };
  placeholder?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Prison Management System",
      type: "University Project",
      icon: <Terminal className="w-4 h-4" />,
      description: "A comprehensive prison management and tracking software built with modern web technologies.",
      techStack: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
      color: "cyan",
      image: "/project-prison.jpg",
      links: {}, 
      placeholder: false
    },
    {
      title: "Belihuloya National Park",
      type: "Web Development",
      icon: <Cpu className="w-4 h-4" />,
      description: "Responsive tourism and information website promoting eco-tourism with interactive elements.",
      techStack: ["HTML", "CSS", "JavaScript", "UI/UX"],
      color: "blue",
      image: "/project-belihuloya.jpg",
      links: {}, 
      placeholder: false
    },

  ];

  return (
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Projects & Academic Work
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A showcase of university projects, structural mini-projects, and analytical research in Computer Science and Telecommunications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => {
            let colorBarClass = 'bg-cyan-500';
            let badgeClass = 'bg-cyan-900/50 text-cyan-300';
            
            if (proj.color === 'blue') {
              colorBarClass = 'bg-blue-500';
              badgeClass = 'bg-blue-900/50 text-blue-300';
            } else if (proj.color === 'indigo') {
              colorBarClass = 'bg-indigo-500';
              badgeClass = 'bg-indigo-900/50 text-indigo-300';
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col glass-panel rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-2 w-full ${colorBarClass}`} />
                
                {proj.image && (
                  <div className="w-full h-48 relative overflow-hidden border-b border-slate-800">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                )}
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${badgeClass}`}>
                      {proj.icon}
                      {proj.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {proj.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button className="flex items-center justify-center p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors" title="View Source on GitHub">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </button>
                    <button className="flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto">
                      Live Demo
                      <ExternalLink className="w-4 h-4 ml-1.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}