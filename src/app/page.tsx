"use client";

import { useState, useRef } from "react";

import CanvasSequence from "@/components/CanvasSequence";
import MenuSection from "@/components/MenuSection";
import HistorySection from "@/components/HistorySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

import { motion, useScroll, useTransform } from "framer-motion";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const spacerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"]
  });
  // Fade out the BURGER text as the user scrolls down the first 600px
  const burgerOpacity = useTransform(scrollY, [0, 600], [0.9, 0]);

  // Fade in text overlay at the end of scroll sequence
  const textOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const pointerEvents = useTransform(scrollYProgress, [0.85, 0.95], ["none", "auto"]);

  return (
    <main className="relative w-full bg-white">
      {/* Absolute Top Navigation Bar (Disappears on scroll) */}
      <div className="absolute top-0 left-0 w-full pt-4 pb-6 bg-[#7BA341] z-50">
        <div className="relative z-10 flex items-center w-full px-6 md:px-16">
          {/* Left Navigation Links */}
          <div className="hidden md:flex flex-1 items-center justify-between pr-12 lg:pr-32 font-sans font-semibold text-sm tracking-widest uppercase text-[#0B0C10]">
            <a href="#" className="hover:text-white transition-colors cursor-pointer">Головна</a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">Про нас</a>
            <a href="#history" className="hover:text-white transition-colors cursor-pointer">Історія</a>
          </div>

          {/* Logo (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-serif font-bold text-[#0B0C10] tracking-wider cursor-pointer">
            <span style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>AliRo</span>
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
          <div className="absolute top-full left-0 w-full bg-[#7BA341] pb-6 px-6 shadow-xl flex flex-col gap-4 font-sans font-semibold text-lg tracking-widest uppercase text-[#0B0C10] md:hidden z-50 border-t border-[#0B0C10]/10">
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
              className="fill-[#7BA341]"
            ></path>
          </svg>
        </div>
      </div>

      {/* Background Canvas Sequence with mix-blend-multiply to remove white background */}
      <div className="relative z-10 mix-blend-multiply">
        <CanvasSequence scrollContainerRef={spacerRef} folderPath="/images_new" frameCount={120} fileExtension=".png" />
      </div>

      {/* Overlay text that fades in at the end of the scroll sequence */}
      <motion.div 
        style={{ opacity: textOpacity }}
        className="fixed inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
      >
        <div className="flex items-center gap-4 mb-4 mt-16 md:mt-0">
          <div className="w-8 md:w-16 h-[2px] bg-[#7BA341]"></div>
          <span className="font-serif text-sm md:text-lg tracking-widest uppercase text-white drop-shadow-md">AliRo</span>
          <div className="w-8 md:w-16 h-[2px] bg-[#7BA341]"></div>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 text-center px-4" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}>
          Ваша щоденна кава
        </h2>
        <motion.button 
          style={{ pointerEvents: pointerEvents as any }}
          className="bg-[#7BA341] hover:bg-[#6A8D38] text-white px-10 py-4 rounded-full text-lg md:text-xl font-bold tracking-wide shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Замовити
        </motion.button>
      </motion.div>

      {/* Scrollable Content Container for Scrollytelling (height drives the canvas animation) */}
      <div ref={spacerRef} className="relative z-10 w-full h-[650vh]">
        {/* Scroll blocks removed as requested */}
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
