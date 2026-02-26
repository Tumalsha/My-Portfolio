"use client";
import { motion } from "framer-motion";
import { Download, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 py-20 bg-slate-950">
      {/* Background accents */}
      <div className="absolute top-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[80px]" />
      </div>

      <div className="z-10 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto mt-16 w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 flex-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-900/20 backdrop-blur-sm text-sm font-medium text-cyan-400 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Tech Enthusiast | CS Undergraduate
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Tumalsha <span className="text-cyan-400 text-glow">Dilhara</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed italic border-l-4 border-cyan-500 pl-4 py-1"
          >
            "Passionate about technology, innovation, and problem solving"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-6"
          >
            <button className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-900/20 transition-all hover:-translate-y-0.5">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <a href="#projects" className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-800 text-white font-medium border border-slate-700 hover:border-cyan-500 shadow-sm transition-all hover:-translate-y-0.5">
              <ChevronRight className="w-5 h-5" />
              View Projects
            </a>
            <a href="#contact" className="group flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent text-slate-300 font-medium hover:text-cyan-400 transition-colors">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl rotate-6 opacity-50 blur-lg" />
          <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl z-10">
            <Image
              src="/profile.png"
              alt="Tumalsha Dilhara"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 384px"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
