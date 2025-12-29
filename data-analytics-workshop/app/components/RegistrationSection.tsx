"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function RegistrationSection() {
  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden isolate" id="registration">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl -z-10 opacity-50" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-indigo-300 text-xs font-bold uppercase tracking-widest">
            Registration Closing Soon
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Ready to Master <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            Data Analytics?
          </span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Secure your spot for this 3-day intensive workshop. Certificates will be provided upon completion.
        </p>

        {/* THE BUTTON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <a
            href="https://google.com" // REPLACE THIS with your Google Form Link
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 px-10 py-5 bg-white rounded-lg leading-none"
          >
            <span className="text-slate-900 font-bold text-xl">
              Register Now
            </span>
            <ArrowRight className="w-6 h-6 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Reassurance text */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Verified Certificate
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            Hands-on Material
          </span>
        </div>
        
        {/* Contact Note (Subtle, not distracting) */}
        <div className="mt-16 pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Having trouble registering? Call Dr. Arya Krishnan (+91 94477 07941) , Dr. Christy Jacqueline: +91 96459 90652
            </p>
        </div>
      </div>
    </section>
  );
}