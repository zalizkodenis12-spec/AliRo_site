"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="relative w-full bg-white z-10 py-40 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
         <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap">BURGERMAX</h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-7xl md:text-[8rem] font-black text-[#0B0C10] mb-8 uppercase tracking-tighter leading-none">
            Вже течуть <span className="text-[#FFB800]">слинки?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-3xl md:text-4xl font-medium text-[#0B0C10]/80 mb-16 max-w-4xl leading-snug">
            Не стримуй себе. Замовляй найсоковитіший бургер у місті прямо зараз, і ми доставимо його ще гарячим за 30 хвилин.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 w-full justify-center"
        >
          <button className="group relative px-12 py-6 bg-[#FFB800] text-[#0B0C10] font-black text-2xl rounded-full overflow-hidden shadow-2xl hover:shadow-[#FFB800]/50 hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 w-full h-full bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative z-10 uppercase tracking-widest">Замовити онлайн</span>
          </button>
          
          <button className="group px-12 py-6 bg-[#0B0C10] text-white font-black text-2xl rounded-full shadow-2xl hover:shadow-[#0B0C10]/50 hover:scale-105 hover:bg-[#1a1c23] transition-all duration-300 flex items-center justify-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.71i4.58h1.085c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clipRule="evenodd" />
            </svg>
            <span className="uppercase tracking-widest">Завантажити додаток</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
