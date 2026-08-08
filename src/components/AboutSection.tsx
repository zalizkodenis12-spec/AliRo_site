"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#7BA341] z-20 pt-16 md:pt-24 pb-16 md:pb-32">
      
      {/* Top Wave Divider pointing up to HistorySection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#7BA341]"
          ></path>
        </svg>
      </div>

      {/* Infinite scrolling marquee text in the background (wrapped in overflow-hidden) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full flex whitespace-nowrap opacity-10 -rotate-2 scale-110">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-[16vw] md:text-[12vw] font-black uppercase tracking-tighter"
          >
            ЗАТИШНО • НАТУРАЛЬНО • З ДУШЕЮ • СВІЖО • ЗАТИШНО • НАТУРАЛЬНО • 
          </motion.div>
        </div>
        <div className="absolute bottom-1/4 left-0 w-full flex whitespace-nowrap opacity-10 rotate-2 scale-110">
          <motion.div 
            animate={{ x: [-1000, 0] }} 
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="text-[16vw] md:text-[12vw] font-black uppercase tracking-tighter"
          >
            ЗАТИШНО • НАТУРАЛЬНО • З ДУШЕЮ • СВІЖО • ЗАТИШНО • НАТУРАЛЬНО • 
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-[#0B0C10] flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 drop-shadow-sm">Хто ми такі?</h2>
          <p className="text-xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed mb-16 md:mb-24">
            Ми — невелика команда, яка вірить що кава й десерти можуть бути частиною теплих спогадів. 
            Готуємо так, щоб кожна чашка нагадувала смак дитинства — просто, затишно, з душею.
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-16 w-full overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory px-4 md:px-0" style={{ scrollbarWidth: 'none' }}>
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#7BA341] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M6 2v2M10 2v2M14 2v2"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Свіжа обсмажка</h3>
            <p className="text-xl opacity-80 font-medium">Кавові зерна обсмажуємо самі, щодня свіжа партія.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#7BA341] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m4.6 13.4-.9 5.9a2.1 2.1 0 0 0 2.5 2.4l5.8-1.5a2.1 2.1 0 0 1 1.2 0l5.8 1.5a2.1 2.1 0 0 0 2.5-2.4l-.9-5.9a2.1 2.1 0 0 0-1.2-1.5l-4.2-1.8a2.1 2.1 0 0 1-1-1.1l-1.5-4.3a2.1 2.1 0 0 0-4 0l-1.5 4.3a2.1 2.1 0 0 1-1 1.1l-4.2 1.8a2.1 2.1 0 0 0-1.2 1.5Z"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Домашня випічка</h3>
            <p className="text-xl opacity-80 font-medium">Десерти готуємо щоранку за власними рецептами.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#7BA341] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10"/>
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Затишна атмосфера</h3>
            <p className="text-xl opacity-80 font-medium">Місце, де хочеться затриматись довше на чашку кави.</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider pointing down to whatever is next */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#7BA341]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
