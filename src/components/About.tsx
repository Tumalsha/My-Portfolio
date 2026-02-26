"use client";
import { motion } from "framer-motion";
import { BookOpen, Code, Briefcase, Figma, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-6"
          >

            {/* CS Knowledge */}
            <div className="glass-panel rounded-3xl p-6">
              <div className="w-14 h-14 bg-cyan-900/40 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Science</h3>
              <p className="text-slate-300 text-sm">
                Strong foundation in software development, networking fundamentals, and system-level problem solving.
              </p>
            </div>

            {/* BA Concepts */}
            <div className="glass-panel rounded-3xl p-6">
              <div className="w-14 h-14 bg-blue-900/40 text-blue-400 rounded-xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Concepts</h3>
              <p className="text-slate-300 text-sm">
                Understanding of basic business administration concepts including management, planning and decision making.
              </p>
            </div>

            {/* Figma Knowledge */}
            <div className="glass-panel rounded-3xl p-6">
              <div className="w-14 h-14 bg-purple-900/40 text-purple-400 rounded-xl flex items-center justify-center mb-4">
                <Figma className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-slate-300 text-sm">
                Familiar with Figma for wireframing and designing responsive and user-friendly interfaces.
              </p>
            </div>

            {/* Sports Leadership */}
            <div className="glass-panel rounded-3xl p-6">
              <div className="w-14 h-14 bg-amber-900/40 text-amber-400 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sports Leadership</h3>
              <p className="text-slate-300 text-sm">
                Captain of the University Badminton Team demonstrating leadership, teamwork and discipline.
              </p>
            </div>

          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              About Me
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Tech Enthusiast with Business Insight
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              I am an undergraduate at Sabaragamuwa University of Sri Lanka following a Bachelor of Science Honours in Computer Science and Technology. I am passionate about networking, software systems, and modern technologies.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Along with my technical background, I have a strong interest in business-related concepts and UI/UX design using Figma. I actively engage in sports and currently serve as the Captain of the University Badminton Team, developing leadership and teamwork skills.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}