"use client";

import { useState } from "react";
import BurgerModal from "./BurgerModal";

const BURGERS = [
  { id: 1, name: "Гострий з халапеньйо", price: "18$", folder: "/images/burger1" },
  { id: 2, name: "Середземноморський веджі", price: "24$", folder: "/images/burger2" },
  { id: 3, name: "Хрусткий курячий", price: "16$", folder: "/images/burger3" },
  { id: 4, name: "BBQ Чізбургер з беконом", price: "19$", folder: "/images/burger4" },
];

export default function MenuSection() {
  const [selectedBurger, setSelectedBurger] = useState<{name: string, folder: string} | null>(null);

  return (
    <section id="menu" className="relative w-full bg-[#FFB800] z-20 pb-32">
      {/* Top Smoother Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FFB800]"
          ></path>
        </svg>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#0B0C10] opacity-5"></div>
        <div className="absolute top-[40%] left-[2%] w-48 h-48 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-[#0B0C10] opacity-5"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute bottom-[30%] right-[2%] w-40 h-40 rounded-full bg-[#0B0C10] opacity-5"></div>
        <div className="absolute top-[5%] left-[50%] w-24 h-24 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute top-[80%] left-[5%] w-72 h-72 rounded-full bg-[#0B0C10] opacity-5"></div>
        <div className="absolute top-[35%] right-[40%] w-56 h-56 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute bottom-[5%] right-[45%] w-48 h-48 rounded-full bg-[#0B0C10] opacity-5"></div>
        <div className="absolute top-[15%] left-[80%] w-32 h-32 rounded-full bg-[#0B0C10] opacity-10"></div>
        <div className="absolute bottom-[50%] left-[40%] w-64 h-64 rounded-full bg-[#0B0C10] opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-extrabold text-[#0B0C10] mb-12 md:mb-16 tracking-wide drop-shadow-md">
          Ознайомтеся з колекцією BurgerMax
        </h2>
        
        {/* Changed to 2 columns for a perfect 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {BURGERS.map((burger) => (
            <div 
              key={burger.id}
              onClick={() => setSelectedBurger({ name: burger.name, folder: burger.folder })}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image using the first frame of its sequence */}
              <div className="w-full aspect-square bg-white rounded-3xl shadow-lg mb-4 md:mb-6 overflow-hidden relative transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl flex items-center justify-center">
                <img 
                  src={`${burger.folder}/ezgif-frame-001.jpg`} 
                  alt={burger.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-white/90 text-[#0B0C10] font-semibold px-4 py-2 rounded-full text-base md:text-lg backdrop-blur-sm shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     Натисніть для вибуху
                   </div>
                </div>
              </div>
              
              {/* Text Info */}
              <h3 className="text-3xl md:text-4xl font-bold text-[#0B0C10] transition-colors leading-tight">
                {burger.name}
              </h3>
              <p className="text-2xl md:text-3xl font-medium text-[#0B0C10]/80 mt-2">
                {burger.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Smoother Wavy SVG Divider (Flipped Vertically) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100 z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[150px]"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="fill-[#FFB800]"
          ></path>
        </svg>
      </div>

      {/* The isolated modal for the burger explosion */}
      <BurgerModal 
        isOpen={selectedBurger !== null}
        burgerName={selectedBurger?.name || ""}
        folderPath={selectedBurger?.folder || ""}
        onClose={() => setSelectedBurger(null)}
      />
    </section>
  );
}
