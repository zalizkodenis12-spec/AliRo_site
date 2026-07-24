"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-[#FFB800] z-20 pt-24 pb-32 overflow-hidden">
      
      {/* Top Wave Divider pointing up to HistorySection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FFB800]"
          ></path>
        </svg>
      </div>

      {/* Infinite scrolling marquee text in the background */}
      <div className="absolute top-1/4 left-0 w-full flex whitespace-nowrap opacity-10 pointer-events-none -rotate-2 scale-110">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="text-[12vw] font-black uppercase tracking-tighter"
        >
          СМАЧНО • СОКОВИТО • СПРАВЖНЄ М'ЯСО • БЕЗ КОМПРОМІСІВ • СМАЧНО • СОКОВИТО • 
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full flex whitespace-nowrap opacity-10 pointer-events-none rotate-2 scale-110">
        <motion.div 
          animate={{ x: [-1000, 0] }} 
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="text-[12vw] font-black uppercase tracking-tighter"
        >
          СМАЧНО • СОКОВИТО • СПРАВЖНЄ М'ЯСО • БЕЗ КОМПРОМІСІВ • СМАЧНО • СОКОВИТО • 
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-[#0B0C10] flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 drop-shadow-sm">Хто ми такі?</h2>
          <p className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed mb-24">
            Ми — команда фанатів вуличної їжі, які вирішили, що фастфуд не обов'язково має бути шкідливим або "пластиковим". 
            Ми готуємо так, як готували б для своїх друзів на власному задньому дворі.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
          
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#FFB800] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Локальне м'ясо</h3>
            <p className="text-xl opacity-80 font-medium">Тільки свіжа відбірна яловичина від перевірених фермерів нашого регіону. Жодної заморозки.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#FFB800] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Живий вогонь</h3>
            <p className="text-xl opacity-80 font-medium">Ми смажимо всі котлети виключно на відкритому вогні, що дає їм неповторний димний аромат.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 rounded-full border-4 border-[#0B0C10] flex items-center justify-center mb-6 group-hover:bg-[#0B0C10] group-hover:text-[#FFB800] transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
               </svg>
            </div>
            <h3 className="text-3xl font-bold mb-4 font-serif">Секретний рецепт</h3>
            <p className="text-xl opacity-80 font-medium">Випікаємо бріош щоранку за власним рецептом. Вони не розмокають і ідеально тримають соус.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
