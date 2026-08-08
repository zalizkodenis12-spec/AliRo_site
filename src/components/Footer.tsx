"use client";

export default function Footer() {
  return (
    <footer id="contacts" className="relative w-full bg-[#7BA341] text-[#0B0C10] pt-8 pb-12 z-20">
      
      {/* Top Wave Divider pointing up to ReviewsSection */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[calc(100%-1px)] z-20 pointer-events-none">
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

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 text-center md:text-left mt-2">
        
        {/* Logo and brief */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h2 className="text-5xl font-black font-serif text-[#0B0C10] tracking-tighter mb-4 md:mb-6 drop-shadow-sm">BurgerMax</h2>
          <p className="text-[#0B0C10]/80 text-lg leading-relaxed max-w-sm font-medium">
            Справжні бургери на живому вогні. Ніяких компромісів зі смаком. Від фанатів для фанатів.
          </p>
        </div>

        {/* Contacts & Socials side-by-side on mobile */}
        <div className="md:col-span-8 flex flex-row justify-between md:grid md:grid-cols-2 gap-2 md:gap-10 text-left w-full px-2">
          {/* Contacts */}
          <div className="flex flex-col items-start w-[48%] md:w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 font-serif">Контакти</h3>
            <p className="text-[#0B0C10]/90 mb-3 text-xs md:text-xl flex items-center gap-2 font-semibold">
              <span className="text-base md:text-2xl">📍</span> вул. Наукова, 9а
            </p>
            <p className="text-[#0B0C10]/90 mb-4 md:mb-6 text-xs md:text-xl flex items-center gap-2 font-semibold">
              <span className="text-base md:text-2xl">📞</span> 096 159 23 77
            </p>
            <p className="text-[#0B0C10] font-black text-[10px] md:text-lg bg-white/40 px-2 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl inline-block shadow-sm">
              Щодня: 10:00-22:00
            </p>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-start w-[48%] md:w-full">
            <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 font-serif">Слідкуй за нами</h3>
            
            <div className="flex flex-col gap-4 md:gap-5 w-full">
              {/* Instagram */}
              <a href="https://instagram.com/denis__zalizko" target="_blank" rel="noreferrer" className="group flex items-center gap-2 md:gap-4 hover:-translate-y-1 transition-transform text-left">
                <div className="w-8 h-8 md:w-14 md:h-14 bg-[#0B0C10] text-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow shrink-0">
                  <svg className="w-4 h-4 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <span className="font-black text-[11px] sm:text-xs md:text-xl text-[#0B0C10]">@denis_zalizko</span>
              </a>
              
              {/* TikTok */}
              <a href="https://tiktok.com/@rubinchik1m" target="_blank" rel="noreferrer" className="group flex items-center gap-2 md:gap-4 hover:-translate-y-1 transition-transform text-left">
                <div className="w-8 h-8 md:w-14 md:h-14 bg-[#0B0C10] text-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow shrink-0">
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="font-black text-[11px] sm:text-xs md:text-xl text-[#0B0C10]">Denis🏀❤️</span>
                  <span className="font-bold text-[#0B0C10]/60 text-[9px] sm:text-[10px] md:text-sm">@rubinchik1m</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full text-center text-[#0B0C10]/40 text-sm mt-16 md:mt-24 pt-8 border-t border-[#0B0C10]/10 max-w-7xl mx-auto px-6 font-semibold">
        © 2026 BurgerMax. Всі права захищено.
      </div>
    </footer>
  );
}
