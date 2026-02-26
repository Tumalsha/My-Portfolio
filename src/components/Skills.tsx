"use client";
import { motion } from "framer-motion";
import { Code, Users } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      color: "cyan",
      skills: [
        "Programming Basics",
        "Networking Fundamentals",
        "Telecommunication Concepts",
        "Problem Solving",
        "Basic Software Development",
        "Microsoft Office"
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "blue",
      skills: [
        "Leadership",
        "Teamwork",
        "Communication",
        "Time Management"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Core Competencies
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A diverse foundational skill set tailored for the IT, Software, and Telecommunications sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 lg:p-10 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 
                ${category.color === 'cyan' ? 'bg-cyan-900/50 text-cyan-400' : 'bg-blue-900/50 text-blue-400'}
              `}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8">
                {category.title}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-lg">
                    <span className={`w-2 h-2 rounded-full mr-4
                      ${category.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'}
                    `} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
