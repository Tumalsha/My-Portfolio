"use client";
import { motion } from "framer-motion";
import { GraduationCap, Target, Award } from "lucide-react";

export default function EducationInterests() {
  const interests = [
    { title: "Software Development", icon: <Target className="w-5 h-5" /> },
    { title: "Networking", icon: <Target className="w-5 h-5" /> },
    { title: "Telecommunication Systems", icon: <Target className="w-5 h-5" /> },
    { title: "Emerging Technologies", icon: <Target className="w-5 h-5" /> },
    { title: "Sports Leadership", icon: <Target className="w-5 h-5" /> }
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-cyan-900/50 text-cyan-400 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Academic Journey</h2>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
              
              {/* SUSL Education */}
              <div className="relative">
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[41px] top-1 border-4 border-slate-950" />
                <div className="glass-panel p-6 rounded-2xl">
                  <span className="inline-block px-3 py-1 bg-cyan-900/30 text-cyan-400 text-sm font-medium rounded-full mb-3">
                    Aug 2022 – Aug 2026
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Bachelor of Science Honours
                  </h3>
                  <h4 className="text-lg text-slate-300 font-medium mb-3">
                    Computer Science and Technology
                  </h4>
                  <p className="text-slate-400 mb-4">
                    Sabaragamuwa University of Sri Lanka
                  </p>
                  
                  <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 font-medium mb-2">
                      <Award className="w-4 h-4" /> Activities & Societies
                    </div>
                    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                      <li>Captain of the Sabaragamuwa University Badminton Team</li>
                      <li>University Badminton Player</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SLTC Education */}
              <div className="relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] top-1 border-4 border-slate-950" />
                <div className="glass-panel p-6 rounded-2xl">
                  <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-sm font-medium rounded-full mb-3">
                    Undergraduate
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    BSc (Hons)
                  </h3>
                  <h4 className="text-lg text-slate-300 font-medium mb-3">
                    Electronic and Telecommunication Engineering
                  </h4>
                  <p className="text-slate-400">
                    SLTC Research University
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white">Interests</h2>
            </div>

            <p className="text-slate-400 mb-8 max-w-md">
              Passionate about advancing my skill set within core technical disciplines and leading teams to success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors shadow-sm"
                >
                  <div className="text-cyan-400">
                    {interest.icon}
                  </div>
                  <span className="font-medium text-slate-300">
                    {interest.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
