"use client";

import { motion } from "framer-motion";
import { 
  Database, 
  Filter, 
  BarChart3, 
  BrainCircuit, 
  Bot, 
  ShieldCheck 
} from "lucide-react";

const objectives = [
  {
    icon: Database,
    title: "Foundations",
    desc: "Core concepts of data analytics for research methodologies.",
  },
  {
    icon: Filter,
    title: "Data Hygiene",
    desc: "Techniques for professional data collection and cleaning.",
  },
  {
    icon: BarChart3,
    title: "Visualization",
    desc: "Transforming raw numbers into scientific insights.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive Analytics",
    desc: "Forecasting trends using low-code modern tools.",
  },
  {
    icon: Bot,
    title: "AI Tools",
    desc: "Leveraging AI for enhanced research productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Ethics",
    desc: "Responsible analytics and data privacy standards.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutWorkshopSection() {
  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden" id="about">
      {/* Subtle decorative background element (Not a grid, just a soft gradient wash) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
              Event Overview
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Bridging the gap between <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Raw Data & Research Insights
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              This three-day hands-on workshop is designed to empower researchers and students with the computational tools needed for modern scientific inquiry.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Organized by the <strong>Department of Computer Science at Sacred Heart College</strong>, sessions are crafted to move beyond theory, offering practical experience with industry-standard tools guided by experts from academia and the corporate sector.
            </p>

            {/* Simple stats or extra detail could go here if needed */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="italic text-slate-500 text-sm">
                &apos;Data is the new oil, but only if you know how to refine it.&apos;
              </p>
            </div>
          </motion.div>

          {/* Right Column: Objectives Grid */}
          <div>
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Key Learning Outcomes</h4>
              <p className="text-slate-500">What you will master by the end of Day 3.</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                    <obj.icon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h5 className="font-bold text-slate-900 mb-2">{obj.title}</h5>
                  <p className="text-sm text-slate-500 leading-snug">
                    {obj.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}