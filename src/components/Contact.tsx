"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 overflow-hidden relative border-t border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.05),transparent_40%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to bring my technical skills and enthusiasm to your next software engineering or telecommunications internship program.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <a
              href="mailto:tumalsha.dilhara@example.com"
              className="flex items-center gap-6 p-6 glass-panel rounded-2xl hover:border-cyan-700 hover:bg-slate-900/80 transition-all group"
            >
              <div className="w-14 h-14 bg-cyan-900/50 text-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">Email</h3>
                <p className="text-slate-400 text-sm">Drop me a message</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/tumalshadihara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass-panel rounded-2xl hover:border-blue-700 hover:bg-slate-900/80 transition-all group"
            >
              <div className="w-14 h-14 bg-blue-900/50 text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">LinkedIn</h3>
                <p className="text-slate-400 text-sm">Let's connect</p>
              </div>
            </a>

            <a
              href="https://github.com/tumalshadihara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass-panel rounded-2xl hover:border-slate-500 hover:bg-slate-900/80 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-800 text-slate-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-medium text-lg mb-1">GitHub</h3>
                <p className="text-slate-400 text-sm">View my code</p>
              </div>
            </a>
          </motion.div>

          {/* Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 glass-panel p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input type="text" id="name" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-lg shadow-cyan-900/20 transition-all hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="border-t border-slate-900 bg-[#00040f] pt-12 pb-8 mt-24 w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              TD.
            </span>
            <p className="text-slate-500 text-sm mt-2">
              Tech Enthusiast | CST & ETE Undergraduate
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com/in/tumalshadihara" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/tumalshadihara" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 mt-8 text-center border-t border-slate-900 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Tumalsha Dilhara. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
