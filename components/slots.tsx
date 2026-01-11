"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Star, Zap, Coins, Crown, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

const featuredSlots = [
  {
    id: 1,
    title: "Mega Wild Fruits & Chillies",
    provider: "Spinomenal",
    description: "Klasyczna przygoda w stylu egipskim z mechanicą Expanding Symbols",
    rtp: "96.50%",
    volatility: "Wysoka",
    maxWin: "5000x",
    image: "https://spinomenal.com/wp-content/uploads/2025/07/500R_MegaWildFruitsChillies.png",
    link: "https://voxcasino.eu.com/games/mega-wild-fruits-chillies",
    features: ["Free Spins", "Expanding Wilds", "Gamble Feature"],
    rating: 4.8,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: 2,
    title: "Coin Win 2: Hold The Spin",
    provider: "Spinomenal",
    description: "Egipska przygoda z rozszerzającymi się symbolami i darmowymi spinami",
    rtp: "96.20%",
    volatility: "Średnia",
    maxWin: "3000x",
    image: "https://images.sigma.world/Coin-Win-Hold-the-Spin-Logo.png",
    link: "https://voxcasino.eu.com/games/book-of-rebirth",
    features: ["Book Scatter", "Expanding Symbols", "Free Spins"],
    rating: 4.6,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Aviator",
    provider: "Spribe",
    description: "Popularna gra crash z rosnącym mnożnikiem i prostą mechaniką",
    rtp: "97.00%",
    volatility: "Zmienna",
    maxWin: "10000x",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9YRUexAI8IfabOWTbTDQhJLRCmlPObaYVg&s",
    link: "https://voxcasino.eu.com/games/aviator",
    features: ["Crash Game", "Instant Cashout", "Multiplayer"],
    rating: 4.9,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 4,
    title: "Chicken Road 2",
    provider: "EvoPlay",
    description: "RPG-style slot z unikalnymi bonusami i mroczną atmosferą",
    rtp: "95.80%",
    volatility: "Niska",
    maxWin: "1000x",
    image: "https://cultmtl.com/wp-content/uploads/2025/06/IMG_8547.jpeg",
    link: "https://voxcasino.eu.com/games/dungeon-immortal-evil",
    features: ["Bonus Rounds", "Multipliers", "Wild Symbols"],
    rating: 4.5,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 5,
    title: "Buffalo Power",
    provider: "Spinomenal",
    description: "Slot w stylu amerykańskiej prerii z potężnymi symbolami zwierząt",
    rtp: "96.30%",
    volatility: "Wysoka",
    maxWin: "7500x",
    image: "https://igamingbusiness.com/img-srv/TOk-RP0jQLb6AlguttQJjQ4WT0e9nioENE1jGxthCJc/resizing_type:auto/width:0/height:0/gravity:sm/enlarge:1/ext:webp/strip_metadata:1/quality:90/cachebuster:filesize-418731/bG9jYWw6Ly8vaWdhbWluZ2J1c2luZXNzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wNS9pbWFnZTAwNC5wbmc.webp",
    link: "https://voxcasino.eu.com/games/buffalo-power",
    features: ["Mega Symbols", "Free Spins", "Bonus Buy"],
    rating: 4.7,
    color: "from-[#d67413] to-[#b3590d]",
  },
  {
    id: 6,
    title: "Lucky Streak 3",
    provider: "EvoPlay",
    description: "Nowoczesny slot z 3D grafiką i unikalnymi rundami bonusowymi",
    rtp: "96.10%",
    volatility: "Średnia",
    maxWin: "2500x",
    image: "https://battlebrotherhood.ru/wp-content/uploads/2025/04/lucky-streak-3.webp",
    link: "https://voxcasino.eu.com/games/lucky-streak-3",
    features: ["3D Graphics", "Interactive Bonus", "Cascading Reels"],
    rating: 4.4,
    color: "from-red-500 to-pink-600",
  },
]

export function FeaturedSlots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d67413]/20 to-[#b3590d]/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <Crown className="h-4 w-4 text-[#d67413]" />
              <span className="text-sm font-medium text-gray-300">TOP SLOTY VOX CASINO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Najpopularniejsze Gry
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Odkryj 6 najlepszych slotów dostępnych w VOX Casino z najlepszymi dostawcami
            </p>
          </div>

          {/* Контейнер с кнопками навигации */}
          <div className="relative mb-8">
            {/* Кнопки навигации - видно только на мобилках */}
            <div className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 flex justify-between px-2">
              <button
                onClick={scrollLeft}
                className="h-10 w-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-[#d67413] transition-colors shadow-lg"
                aria-label="Przewiń w lewo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollRight}
                className="h-10 w-10 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-[#d67413] transition-colors shadow-lg"
                aria-label="Przewiń w prawo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Контейнер для горизонтального скролла */}
            <div
              ref={scrollContainerRef}
              className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Скрываем скроллбар для WebKit браузеров */}
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .snap-x {
                  scroll-snap-type: x mandatory;
                }
                .snap-start {
                  scroll-snap-align: start;
                }
              `}</style>

              {featuredSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="flex-none w-[calc(100vw-3rem)] sm:w-96 lg:w-full snap-start"
                >
                  <Card className="border border-white/10 bg-gradient-to-b from-[#1d2036]/60 to-[#1a1d2e]/60 backdrop-blur-sm overflow-hidden group hover:border-[#d67413]/40 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(214,116,19,0.2)] h-full">
                    {/* Изображение слота */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${slot.color} opacity-20`} />
                      
                      {/* Реальное изображение */}
                      <div className="relative w-full h-full">
                        <img 
                          src={slot.image} 
                          alt={slot.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback если изображение не загрузится
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentElement?.querySelector('.image-fallback');
                            if (fallback) fallback.classList.remove('hidden');
                          }}
                        />
                        {/* Фолбэк если изображение не загрузилось */}
                        <div className="image-fallback hidden absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                          <div className="text-center">
                            <Sparkles className="h-12 w-12 text-white/30 mx-auto mb-2" />
                            <span className="text-white/50 text-sm">{slot.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Заголовок и описание */}
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-white mb-2 group-hover:text-[#d67413] transition-colors">
                          {slot.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                          {slot.description}
                        </p>
                      </div>

                      {/* Статистика */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">RTP</div>
                          <div className="font-bold text-green-500">{slot.rtp}</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">Volatility</div>
                          <div className="font-bold text-amber-500">{slot.volatility}</div>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-white/5">
                          <div className="text-xs text-gray-400 mb-1">Max Win</div>
                          <div className="font-bold text-[#d67413]">{slot.maxWin}</div>
                        </div>
                      </div>

                      {/* Особенности */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {slot.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Кнопка играть */}
                      <a
                        href={slot.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-semibold rounded-lg hover:from-[#e6801a] hover:to-[#c46a1a] transition-all duration-300 group/btn"
                      >
                        <Zap className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Graj Teraz</span>
                        <ExternalLink className="h-3 w-3 ml-auto opacity-70" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Индикаторы прокрутки для мобилок */}
            <div className="lg:hidden flex justify-center gap-2 mt-4">
              {featuredSlots.map((_, index) => (
                <div
                  key={index}
                  className="h-2 w-2 rounded-full bg-white/30 transition-all duration-300"
                />
              ))}
            </div>
          </div>

          {/* Информационная панель */}
          {/* <Card className="border border-[#d67413]/30 bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/5 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center">
                    <Coins className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Więcej Gier w VOX Casino</h4>
                    <p className="text-sm text-gray-300">
                      To tylko niewielka część z tysięcy dostępnych slotów i gier stołowych
                    </p>
                  </div>
                </div>
                <a
                  href="https://voxcasino.eu.com/games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <span>Zobacz Wszystkie Gry</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}