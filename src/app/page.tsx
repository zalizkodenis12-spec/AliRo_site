"use client";

import { useState } from "react";

import CanvasSequence from "@/components/CanvasSequence";
import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

import { motion, useScroll, useTransform } from "framer-motion";

// Helper component for scrollytelling text blocks
const ScrollBlock = ({ align, title, desc, top }: { align: "left" | "right", title: string, desc: string, top: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
      className={`absolute w-[90%] left-[5%] md:w-full max-w-[320px] md:max-w-[320px] lg:max-w-[380px] p-6 md:p-0 bg-white/70 backdrop-blur-md rounded-2xl md:bg-transparent md:backdrop-blur-none md:rounded-none z-10 ${
        align === "left" ? "md:left-[5%] md:right-auto" : "md:right-[5%] md:left-auto"
      }`}
      style={{ top }}
    >
      <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#0B0C10] mb-4 md:mb-6 drop-shadow-sm whitespace-pre-line">{title}</h3>
      <p className="text-lg md:text-2xl font-sans font-medium text-[#0B0C10] md:text-[#0B0C10]/80 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  // Fade out the BURGER text as the user scrolls down the first 600px
  const burgerOpacity = useTransform(scrollY, [0, 600], [0.9, 0]);

  return (
    <main className="relative w-full bg-white">
      {/* Absolute Top Navigation Bar (Disappears on scroll) */}
      <div className="absolute top-0 left-0 w-full pt-4 pb-6 bg-[#FFB800] z-50">
        <div className="relative z-10 flex items-center w-full px-6 md:px-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pr-12 lg:pr-32 font-sans font-semibold text-sm tracking-widest uppercase text-[#0B0C10]">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Головна</a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">Про нас</a>
            <a href="#history" className="hover:text-white transition-colors cursor-pointer">Історія</a>
          </div>

          {/* Center Logo (Handwritten / Caveat) */}
          <div className="flex-1 md:flex-none text-left md:text-center text-4xl md:text-5xl font-bold text-[#0B0C10] whitespace-nowrap md:px-8">
            BurgerMax
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pl-12 lg:pl-32 font-sans font-semibold text-sm tracking-widest uppercase text-[#0B0C10]">
            <a href="#menu" className="hover:text-white transition-colors cursor-pointer">Меню</a>
            <a href="#reviews" className="hover:text-white transition-colors cursor-pointer">Відгуки</a>
            <a href="#contacts" className="hover:text-white transition-colors cursor-pointer">Контакти</a>
          </div>

          {/* Mobile Hamburger Icon */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-[#0B0C10] z-[60] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FFB800] pb-6 px-6 shadow-xl flex flex-col gap-4 font-sans font-semibold text-lg tracking-widest uppercase text-[#0B0C10] md:hidden z-50 border-t border-[#0B0C10]/10">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Головна</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Про нас</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Історія</a>
            <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Меню</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Відгуки</a>
            <a href="#contacts" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors cursor-pointer block">Контакти</a>
          </div>
        )}

        {/* Bottom Wavy SVG for Navbar */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform translate-y-[calc(100%-1px)] -scale-y-100">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[40px] md:h-[60px]"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-[#FFB800]"
            ></path>
          </svg>
        </div>
      </div>

      {/* Huge Background Text (Fades out with scroll) */}
      <motion.div 
        style={{ opacity: burgerOpacity }}
        className="fixed inset-0 w-full h-screen flex items-center justify-between z-0 pointer-events-none px-[4vw]"
      >
        <h1 
          className="relative text-[18vw] md:text-[14vw] font-serif text-[#0B0C10] font-bold flex w-full justify-between"
          style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
        >
          {/* Left Side: B U R */}
          <div className="flex w-[40%] justify-between">
            <span>B</span>
            <span>U</span>
            <span>R</span>
          </div>

          {/* Large Center Gap for the Burger to prevent overlap */}
          <div className="w-[20%] flex-shrink-0"></div>

          {/* Right Side: G E R */}
          <div className="flex w-[40%] justify-between">
            <span>G</span>
            <span>E</span>
            <span>R</span>
          </div>
          
          {/* White occlusion overlay to hide the middle letters 'R' and 'G' behind the burger */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[150%] bg-white rounded-[50%] blur-xl"></div>
        </h1>
      </motion.div>

      {/* Background Canvas Sequence with mix-blend-multiply to remove white background */}
      <div className="relative z-10 mix-blend-multiply">
        <CanvasSequence />
      </div>

      {/* Scrollable Content Container for Scrollytelling (1000vh height drives the canvas animation) */}
      <div className="relative z-10 w-full h-[1000vh]">
        <ScrollBlock 
          align="left" 
          top="150vh"
          title="Свіжі інгредієнти" 
          desc="Тільки найкраще відбірне м'ясо та хрусткі овочі від локальних фермерів. Ми обираємо безкомпромісну якість, яку ви можете відчути в кожному шматочку." 
        />
        <ScrollBlock 
          align="right" 
          top="280vh"
          title="Крафтова булочка" 
          desc="М'яка, пухка, злегка підсмажена бріош, яка не розмокає і ідеально тримає форму. Випікається щоранку за власною рецептурою." 
        />
        <ScrollBlock 
          align="left" 
          top="410vh"
          title="Ідеальне просмаження" 
          desc="Соковита котлета, приготована саме так, як ви любите. Максимум насиченого смаку, який розкривається з першим укусом." 
        />
        <ScrollBlock 
          align="right" 
          top="540vh"
          title="Авторські рецепти" 
          desc="Наші фірмові соуси – це секрет, який робить смак неповторним. Ідеальні пропорції, розроблені справжніми фанатами бургерної культури." 
        />
        <ScrollBlock 
          align="left" 
          top="670vh"
          title="Живий вогонь" 
          desc="Наші котлети смажаться виключно на відкритому вогні. Це додає м'ясу неповторний аромат і хрустку скоринку, зберігаючи соковитість." 
        />
        <ScrollBlock 
          align="right" 
          top="800vh"
          title="Атмосфера смаку" 
          desc="Бургер – це не просто їжа, це емоція. Насолоджуйтесь кожною хвилиною та кожним смаком у затишній атмосфері нашого закладу." 
        />
      </div>

      {/* The new Menu Section that slides up after the animation finishes */}
      <MenuSection />

      {/* The History Section telling the story of BurgerMax */}
      <HistorySection />

      {/* About Us section describing the values */}
      <AboutSection />

      {/* Reviews Section with Infinite Image Carousel */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
