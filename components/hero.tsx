// import { Button } from "@/components/ui/button"
// import { MessageSquare, Trophy, Sparkles, Zap } from "lucide-react"

// export function Hero() {
//   return (
//     <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,179,16,0.12),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.10),transparent_50%)]" />
//       <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/8 rounded-full blur-3xl animate-pulse" />
//       <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/12 rounded-full blur-3xl animate-pulse delay-1000" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-success/5 rounded-full blur-[100px]" />

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">

//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6">
//             <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,179,16,0.3)] leading-tight inline-block">
//               {"Testujemy Chicken Road"}
//             </span>
//             <br />
//             <span className="text-foreground drop-shadow-lg">{"i dzielimy się prawdziwymi doświadczeniami"}</span>
//           </h2>

//           <p className="text-base sm:text-lg md:text-xl text-foreground/90 text-balance mb-6 sm:mb-8 leading-relaxed px-4">
//             {"Wygrane, przegrane, strategie i uczciwe opinie graczy"}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
//             <Button
//               size="lg"
//               className="gap-2 bg-gradient-to-r from-primary via-success to-primary hover:from-success hover:via-primary hover:to-success shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105 text-base sm:text-lg font-bold border-2 border-primary/30 glow-button"
//             >
//               <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
//               {"Rozpocznij grę"}
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="gap-2 bg-card/60 backdrop-blur-xl border-2 border-accent/40 hover:bg-accent/20 hover:border-accent/60 shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 text-foreground font-semibold text-base sm:text-lg"
//             >
//               <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
//               {"Zobacz dyskusję"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { Crown, Trophy, Sparkles, Zap, Shield, Star, Coins } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29] overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.webp" // или casino-background.webp
          alt="VOX Casino Background"
          fill
          className="object-cover object-center"
          quality={85}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171a29]/80 via-[#1a1d2e]/70 to-[#171a29]/80"></div>
      </div>

      {/* Основной контент */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">


          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">VOX </span>
            <span className="bg-gradient-to-r from-[#d67413] via-[#e68a29] to-[#d67413] bg-clip-text text-transparent animate-gradient">
              Najlepsze kasyno
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <Coins className="h-4 w-4 text-[#d67413]" />
              <span className="text-sm text-white">+500 zł Bonus Powitalny</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <Trophy className="h-4 w-4 text-[#d67413]" />
              <span className="text-sm text-white">2000+ Gier Kasynowych</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#d67413]" />
              <span className="text-sm text-white">Live Casino z Krupierami</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premie <span className="text-[#d67413] font-semibold">725% aż do 3000 € + 600 FS</span>
          </p>

          {/* Основные кнопки */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gap-3 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-[0_10px_40px_rgba(214,116,19,0.4)] hover:shadow-[0_15px_50px_rgba(214,116,19,0.6)] transition-all duration-300 hover:scale-105 group"
            >
              Zarejestruj się i Zdobądź Bonus

            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-3 border-2 border-[#d67413] bg-white text-[#d67413] hover:bg-[#d67413]/10 hover:border-[#e68a29] hover:text-white font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Przetestuj Demo
            </Button>
          </div>
          

          
        </div>
      </div>

      {/* Анимация для gradient текста */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}