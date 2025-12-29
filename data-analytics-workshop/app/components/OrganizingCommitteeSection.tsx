"use client";

import { motion } from "framer-motion";
import { User, Phone, Mail, Award, Users } from "lucide-react";
import Link from "next/link";

// --- Data Structure ---
const hod = {
  name: "Achamma Cherian",
  role: "Head of Department",
  title: "Assistant Professor",
};

const committee = [
  { name: "Dr. Christy Jacqueline", title: "Assistant Professor" },
  { name: "Dr. Arya Krishnan", title: "Assistant Professor" },
  { name: "Jisha Soman", title: "Assistant Professor" },
  { name: "Vishnu Mohan C", title: "Assistant Professor (Guest)" },
];

const coordinators = [
  {
    name: "Dr. Christy Jacqueline",
    phone: "+91 96459 90652",
    cleanPhone: "919645990652",
  },
   {
    name: "Dr. Arya Krishnan",
    phone: "+91 94477 07941",
    cleanPhone: "919447707941",
  },
];

export default function OrganizingCommitteeSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden" id="committee">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
            The Team
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">
            Organizing Committee
          </h3>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* 1. LEFT COLUMN: Leadership (HOD + Committee) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* HOD Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center shrink-0 text-indigo-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Head of Department
                </span>
                <h4 className="text-xl font-bold text-slate-900 mt-1">
                  {hod.name}
                </h4>
                <p className="text-slate-600">{hod.title}</p>
              </div>
            </motion.div>

            {/* Committee Grid */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                Committee Members
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {committee.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors"
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: Contact (Coordinators) */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />
            
            <h4 className="text-xl font-bold mb-2 relative z-10">Need Help?</h4>
            <p className="text-slate-400 text-sm mb-8 relative z-10">
              Contact our coordinators for queries regarding registration or the schedule.
            </p>

            <div className="space-y-6 relative z-10">
              {coordinators.map((coord, idx) => (
                <div key={idx} className="group">
                  <p className="text-indigo-300 text-xs font-bold uppercase tracking-wider mb-1">
                    Coordinator
                  </p>
                  <p className="font-semibold text-lg mb-2">{coord.name}</p>
                  <a 
                    href={`tel:${coord.cleanPhone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm w-full"
                  >
                    <Phone className="w-4 h-4" />
                    {coord.phone}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Resource Person Note */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-xs text-slate-500 text-center">
                * Sessions handled by experts from academia & industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}