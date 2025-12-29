"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Clock, CheckCircle2, Coffee } from "lucide-react";

// --- 1. TYPE DEFINITIONS ---
interface Session {
  time: string;
  topic: string;
  type: string;
}

interface ScheduleDay {
  day: string;
  date: string;
  title: string;
  sessions: Session[];
}

// --- THE SCHEDULE DATA ---
// Added the type ': ScheduleDay[]' here for safety
const schedule: ScheduleDay[] = [
  {
    day: "Day 1",
    date: "Jan 22",
    title: "Foundations & Data Handling",
    sessions: [
      { time: "9:30 - 11:00", topic: "Data Analytics for Interdisciplinary Research", type: "Lecture" },
      { time: "11:00 - 12:45", topic: "Data Collection and Cleaning", type: "Technical" },
      { time: "1:45 - 3:15", topic: "Basic Data Exploration", type: "Technical" },
      { time: "3:30 - 4:30", topic: "Hands on Power BI for Beginners", type: "Workshop" },
    ],
  },
  {
    day: "Day 2",
    date: "Jan 23",
    title: "Analytics, Visualization & Insights",
    sessions: [
      { time: "9:30 - 11:00", topic: "Data Visualization Principles", type: "Lecture" },
      { time: "11:00 - 12:45", topic: "Predictive Analytics with low-code tools", type: "Technical" },
      { time: "1:45 - 3:15", topic: "Integrating Multiple Datasources", type: "Technical" },
      { time: "3:30 - 4:30", topic: "Dashboards and Reports for Research", type: "Workshop" },
    ],
  },
  {
    day: "Day 3",
    date: "Jan 24",
    title: "AI Tools, Ethics & Research Outputs",
    sessions: [
      { time: "9:30 - 11:00", topic: "AI Tools for Research Productivity", type: "Technical" },
      { time: "11:00 - 12:45", topic: "Text and Sentiment Analytics", type: "Technical" },
      { time: "1:45 - 3:15", topic: "Ethical and Responsible Data Analytics", type: "Lecture" },
      { time: "3:30 - 4:30", topic: "Capstone - Miniproject Presentation", type: "Presentation" },
    ],
  },
];

// --- SUB-COMPONENT ---
// FIXED: Explicitly typed the props here
function DaySchedule({ sessions }: { sessions: Session[] }) {
  const containerRef = useRef<HTMLDivElement>(null); // Added HTMLDivElement type for ref safety

  // 1. Line Animation Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pb-12">
      {/* Static Gray Line (Track) */}
      <div className="absolute left-[19px] top-4 bottom-0 w-0.5 bg-slate-100 md:left-1/2 md:-ml-px"></div>

      {/* Animated Purple Line (Progress) */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[19px] top-4 w-0.5 bg-indigo-600 md:left-1/2 md:-ml-px origin-top z-10"
      />

      <div className="space-y-12">
        {sessions.map((session, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }} 
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center"
            >
              {/* --- LEFT COLUMN --- */}
              <div
                className={`md:w-1/2 md:pr-12 pl-12 md:pl-0 order-2 md:order-1 flex flex-col justify-center ${
                  isEven ? "md:items-end md:text-right" : "md:items-end md:text-right"
                }`}
              >
                {/* Desktop Logic */}
                <div className="hidden md:block">
                  {isEven ? (
                    <>
                      <h5 className="text-lg font-bold text-slate-900 mb-1">{session.topic}</h5>
                      <p className="text-sm text-slate-500 flex items-center gap-2 justify-end">
                        {session.type}
                        {session.type === "Workshop" || session.type === "Presentation" ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ) : (
                          <span className="w-4 h-4 rounded-full border-2 border-slate-300 inline-block" />
                        )}
                      </p>
                    </>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-lg text-sm">
                      <Clock className="w-4 h-4" /> {session.time}
                    </span>
                  )}
                </div>

                {/* Mobile Logic */}
                <div className="md:hidden text-left w-full">
                  <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-lg text-sm mb-2">
                    <Clock className="w-4 h-4" /> {session.time}
                  </span>
                  <h5 className="text-lg font-bold text-slate-900">{session.topic}</h5>
                  <span className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                    {session.type === "Workshop" || session.type === "Presentation" ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border-2 border-slate-300 inline-block" />
                    )}
                    {session.type}
                  </span>
                </div>
              </div>

              {/* --- CENTER DOT --- */}
              <motion.div
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 viewport={{ once: true, margin: "-20%" }}
                 transition={{ duration: 0.4, delay: 0.2 }}
                 className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-indigo-100 shadow-sm z-20 order-1"
              >
                <div className="w-3 h-3 bg-indigo-600 rounded-full" />
              </motion.div>

              {/* --- RIGHT COLUMN --- */}
              <div
                className={`md:w-1/2 md:pl-12 order-3 hidden md:flex flex-col justify-center ${
                  isEven ? "items-start" : "items-start"
                }`}
              >
                {isEven ? (
                  <span className="inline-flex items-center gap-1.5 text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-lg text-sm">
                    <Clock className="w-4 h-4" /> {session.time}
                  </span>
                ) : (
                  <>
                    <h5 className="text-lg font-bold text-slate-900 mb-1">{session.topic}</h5>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      {session.type === "Workshop" || session.type === "Presentation" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border-2 border-slate-300 inline-block" />
                      )}
                      {session.type}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function ScheduleTimeline() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-slate-50 py-24 px-6 relative" id="schedule">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase mb-3">
            The Roadmap
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Workshop Schedule
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive 3-day journey from data fundamentals to advanced AI integration.
          </p>
        </div>

        {/* 1. THE TABS (Day Switcher) */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {schedule.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`relative flex-1 group p-6 rounded-2xl border transition-all duration-300 text-left md:text-center ${
                activeTab === idx
                  ? "bg-white border-indigo-600 shadow-xl scale-105 z-10"
                  : "bg-white/50 border-slate-200 hover:border-indigo-300 hover:bg-white"
              }`}
            >
              <div className="flex items-center md:justify-center gap-3 mb-2">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                    activeTab === idx ? "bg-indigo-100 text-indigo-700" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {day.day}
                </span>
                <span className="text-slate-400 text-sm font-medium">{day.date}</span>
              </div>
              <h4
                className={`font-bold text-lg leading-tight ${
                  activeTab === idx ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {day.title}
              </h4>
            </button>
          ))}
        </div>

        {/* 2. THE TIMELINE CONTAINER */}
        <div className="relative min-h-[400px] bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {/* KEY FIX: We pass 'activeTab' as a key to the child component.
                  This forces React to destroy and recreate 'DaySchedule' when the tab changes,
                  resetting the scroll hook and animation state perfectly.
              */}
              <DaySchedule key={activeTab} sessions={schedule[activeTab].sessions} />

              {/* Lunch Break (Outside the line animation logic) */}
              <div className="relative flex flex-col md:flex-row items-center opacity-50 pt-12">
                <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                  <span className="text-slate-400 text-sm">12:45 PM - 1:45 PM</span>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50">
                  <Coffee className="w-4 h-4 text-slate-400" />
                </div>
                <div className="pl-12 md:pl-12 md:w-1/2 w-full text-left">
                  <span className="text-slate-400 text-sm font-medium italic">Lunch Break</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}