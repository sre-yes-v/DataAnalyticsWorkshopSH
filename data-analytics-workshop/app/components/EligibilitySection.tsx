"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, School } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    label: "UG Students",
    sub: "BCA, B.Sc CS, B.Tech",
  },
  {
    icon: BookOpen,
    label: "PG Students",
    sub: "MCA, M.Sc, M.Tech",
  },
  {
    icon: School,
    label: "Research Scholars",
    sub: "Research Fellows",
  },
  {
    icon: Users,
    label: "Faculty Members",
    sub: "Professors & Lecturers",
  },
];

export default function EligibilitySection() {
  return (
    <section className="bg-white py-20 px-6 border-b border-slate-100" id="eligibility">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">
            Who Should Attend?
          </h2>
          <p className="text-slate-500 mt-2">
            Open to all academic levels interested in Data Science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 hover:-translate-y-1 transition-all duration-300 cursor-default group"
            >
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-indigo-600" />
              </div>
              
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                {item.label}
              </h3>
              
              {/* Added subtext to make the cards look fuller - feel free to edit */}
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Optional: Add a 'Prerequisites' note at the bottom to fill space */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            No prior coding experience required
          </p>
        </motion.div>
      </div>
    </section>
  );
}