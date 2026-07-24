"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Максим Д.",
    role: "Місцевий гурман",
    text: "Найкращий бургер, який я їв у цьому місті. Котлета просто тане в роті, а булочка тримає форму до останнього укусу. Рекомендую Гострий з халапеньйо!",
    rating: 5,
  },
  {
    name: "Олена В.",
    role: "Фуд-блогер",
    text: "Дуже стильне місце і неймовірно смачно. Веджі бургер — це просто відвал всього. Нарешті хтось зробив нормальну альтернативу м'ясу без втрати смаку.",
    rating: 5,
  },
  {
    name: "Андрій К.",
    role: "Постійний клієнт",
    text: "Я приходжу сюди щоп'ятниці. Завжди стабільно висока якість, м'ясо з димком, і соуси які вони роблять самі — це топ. 10/10.",
    rating: 5,
  },
];

const BURGER_IMAGES = [
  "/images/burger1/ezgif-frame-001.jpg",
  "/images/burger2/ezgif-frame-001.jpg",
  "/images/burger3/ezgif-frame-001.jpg",
  "/images/burger4/ezgif-frame-001.jpg",
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative w-full bg-white z-10 py-32 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      
      {/* Infinite scrolling images in the background */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex gap-8 opacity-[0.05] pointer-events-none -rotate-3 scale-110 blur-sm">
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-16 min-w-max items-center"
        >
          {/* Repeat images a few times to ensure infinite scroll */}
          {[...BURGER_IMAGES, ...BURGER_IMAGES, ...BURGER_IMAGES, ...BURGER_IMAGES].map((src, i) => (
            <div key={i} className="w-[450px] h-[450px] rounded-[3rem] overflow-hidden grayscale">
              <img src={src} alt="Burger pattern" className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-serif font-bold text-[#0B0C10] mb-8"
          >
            Що кажуть про нас
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-[#FFB800] mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/95 backdrop-blur-xl border border-black/5 p-10 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="text-[#FFB800] mb-8 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 drop-shadow-sm">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-[#0B0C10]/90 mb-12 leading-relaxed italic relative z-10">
                  "{review.text}"
                </p>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold font-serif text-[#0B0C10]">{review.name}</h4>
                <p className="text-[#FFB800] font-bold uppercase tracking-widest text-sm mt-2">{review.role}</p>
              </div>
              
              {/* Quote icon background decoration */}
              <div className="absolute bottom-6 right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.43 3.43 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
