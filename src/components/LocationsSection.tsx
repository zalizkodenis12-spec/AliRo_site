"use client";

import { motion } from "framer-motion";

export default function LocationsSection() {
  return (
    <section id="locations" className="relative w-full bg-white z-10 py-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-[#0B0C10]">
        
        <div className="flex flex-col items-center mb-20 text-center pt-16">
          <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6">Наші Локації</h2>
          <div className="w-24 h-1 bg-[#FFB800] mb-8"></div>
          <p className="text-2xl md:text-3xl font-medium max-w-2xl text-[#0B0C10]/80">
            Забігай на найсмачніший бургер у місті. Ми завжди поруч.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Location 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F9F9F9] rounded-3xl p-10 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 group"
          >
            <h3 className="text-4xl font-serif font-bold mb-4 text-[#0B0C10]">Центр</h3>
            <p className="text-xl font-medium text-[#0B0C10]/70 mb-6 flex items-center gap-2">
              <span className="text-[#FFB800] text-2xl group-hover:-translate-y-1 transition-transform">📍</span> вул. Хрещатик, 15
            </p>
            <div className="flex flex-col gap-2 text-lg text-[#0B0C10]/80 mb-8 font-medium">
              <p>Пн-Пт: 10:00 - 22:00</p>
              <p>Сб-Нд: 10:00 - 23:00</p>
            </div>
            <button className="px-8 py-4 bg-[#FFB800] text-[#0B0C10] font-bold text-lg rounded-full hover:bg-[#E5A600] transition-colors w-full uppercase tracking-wider">
              Прокласти маршрут
            </button>
          </motion.div>

          {/* Location 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#F9F9F9] rounded-3xl p-10 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 group"
          >
            <h3 className="text-4xl font-serif font-bold mb-4 text-[#0B0C10]">Поділ</h3>
            <p className="text-xl font-medium text-[#0B0C10]/70 mb-6 flex items-center gap-2">
              <span className="text-[#FFB800] text-2xl group-hover:-translate-y-1 transition-transform">📍</span> вул. Сагайдачного, 24
            </p>
            <div className="flex flex-col gap-2 text-lg text-[#0B0C10]/80 mb-8 font-medium">
              <p>Пн-Пт: 11:00 - 23:00</p>
              <p>Сб-Нд: 11:00 - 00:00</p>
            </div>
            <button className="px-8 py-4 bg-[#FFB800] text-[#0B0C10] font-bold text-lg rounded-full hover:bg-[#E5A600] transition-colors w-full uppercase tracking-wider">
              Прокласти маршрут
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
