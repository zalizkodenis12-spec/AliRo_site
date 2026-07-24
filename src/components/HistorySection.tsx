"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
  return (
    <section id="history" className="relative w-full bg-white z-10 flex flex-col md:flex-row">
      
      {/* Left Side: Sticky (Stays on screen while right side scrolls) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 bg-[#F9F9F9] flex flex-col items-center justify-center overflow-hidden">
        {/* Light background image */}
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1586816001966-79b736744398?q=80&w=800')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/70"></div>
        
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-[#0B0C10] relative z-10 text-center mb-6 drop-shadow-sm px-4">
          Наша Історія
        </h2>
        <div className="w-24 h-1 bg-[#FFB800] relative z-10 mb-6"></div>
        <p className="text-[#0B0C10]/80 text-xl md:text-2xl font-medium relative z-10 font-sans text-center px-8">
          Як ми створювали BurgerMax
        </p>
      </div>

      {/* Right Side: Scrolling Content */}
      <div className="w-full md:w-1/2 bg-white flex flex-col py-24 md:py-[20vh] px-8 md:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-[25vh]"
        >
          <span className="text-[#FFB800] font-bold text-2xl tracking-widest uppercase mb-4 block">2015</span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C10] mb-6">Гараж і перший гриль</h3>
          <p className="text-xl text-[#0B0C10]/80 leading-relaxed font-medium">
            Все почалося з любові до м'яса. Ми купили старий вугільний гриль, поставили його в гаражі і почали експериментувати з пропорціями яловичини, спецій та температурою. Ми просто хотіли зробити ідеальний бургер для друзів.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-[25vh]"
        >
          <span className="text-[#FFB800] font-bold text-2xl tracking-widest uppercase mb-4 block">2018</span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C10] mb-6">Секретний соус</h3>
          <p className="text-xl text-[#0B0C10]/80 leading-relaxed font-medium">
            Після сотень спроб ми винайшли той самий "Секретний соус BurgerMax". Це був переломний момент. Чутки про наші бургери розлетілися містом, і до нас почали вишукуватися черги.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-[25vh]"
        >
          <span className="text-[#FFB800] font-bold text-2xl tracking-widest uppercase mb-4 block">2021</span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C10] mb-6">Перший заклад</h3>
          <p className="text-xl text-[#0B0C10]/80 leading-relaxed font-medium">
            Ми відкрили двері нашого першого справжнього закладу. Дизайн у стилі лофт, відкрита кухня, де видно вогонь, і незмінна якість інгредієнтів. Ми відмовилися від заморозки назавжди.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          className="mb-[10vh]"
        >
          <span className="text-[#FFB800] font-bold text-2xl tracking-widest uppercase mb-4 block">Сьогодні</span>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C10] mb-6">Більше ніж просто їжа</h3>
          <p className="text-xl text-[#0B0C10]/80 leading-relaxed font-medium">
            BurgerMax — це емоція. Ми продовжуємо шукати найкращих локальних фермерів і створювати нові смаки, щоб кожен ваш візит був таким же вражаючим, як і перший відкус нашого фірмового чізбургера.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
