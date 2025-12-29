"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Utility for grid background pattern
const GridPattern = () => (
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_100%)]"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
        width={100}
        height={100}
        x="50%"
        y={-1}
        patternUnits="userSpaceOnUse"
      >
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
    />
  </svg>
);

export default function WorkshopHeroSection() {
  return (
    <section className="relative py-4 px-4 sm:px-6 lg:px-8 xl:px-28 bg-white overflow-hidden isolate" id="home">
      {/* 1. BACKGROUND LAYERS */}
      <GridPattern />
      
      {/* Gradient Blob - Top Left */}
      <div
        className="absolute left-[calc(50%-11rem)] top-[-10rem] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-12 lg:px-8">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center items-start max-w-xl w-full md:pr-12 z-10"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Registration Closing Soon
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight relative tracking-tight">
            <span className="relative inline-block">
              Data Analytics
              {/* SVG Underline */}
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-indigo-600"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C49.5002 0.500022 132.5 -6.00003 198 4.00002"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            <span className="text-slate-700">for Scientific Research</span>
          </h1>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Three Days Hands-on Workshop <br />
            <span className="font-semibold text-slate-900">
              22 to 24 January 2025 &bull; 9:30 AM – 4:30 PM
            </span>
            <br />
            Department of Computer Science, Sacred Heart College, Thevara
          </p>

          <div className="flex gap-8 mt-2 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">100%</div>
              <div className="text-gray-600 text-sm font-medium">Expert-led</div>
            </div>
            <div className="w-px bg-gray-200 h-12"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">~200</div>
              <div className="text-gray-600 text-sm font-medium">Participants</div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image Adjustment */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-xl mt-16 md:mt-0 h-[400px] md:h-[500px] flex items-center justify-center"
        >
          {/* Decorative Circle behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60 transform scale-90" />
          
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/hero-new.png"
              alt="Data Analytics Workshop Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              unoptimized
            />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom Gradient for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}