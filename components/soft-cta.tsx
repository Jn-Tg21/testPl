// import { Button } from "@/components/ui/button"
// import { ExternalLink, Sparkles } from "lucide-react"

// export function SoftCta() {
//   return (
//     <section id="doswiadczenia" className="py-12 sm:py-16 md:py-20 lg:py-24">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto">
//           <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-card via-secondary to-card/80 p-6 sm:p-8 md:p-12 text-center shadow-[0_0_40px_rgba(34,197,94,0.2)]">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,179,16,0.08),transparent_70%)]" />
//             <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-accent/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl" />

//             <div className="relative z-10">
//               <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
//                 <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent animate-pulse" />
//                 <h4 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
//                   {"Rekomendacja społeczności"}
//                 </h4>
//                 <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent animate-pulse" />
//               </div>

//               <p className="text-sm sm:text-base md:text-lg text-foreground/90 mb-6 sm:mb-8 leading-relaxed px-2">
//                 {"Według opinii graczy, ten slot najlepiej działa w tym kasynie"}
//               </p>

//               <Button
//                 size="lg"
//                 className="gap-2 bg-gradient-to-r from-primary via-success to-primary hover:from-success hover:via-primary hover:to-success shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 hover:scale-105 font-bold border-2 border-primary/30 text-sm sm:text-base md:text-lg px-6 sm:px-8"
//               >
//                 {"Sprawdź kasyno"}
//                 <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
//               </Button>

//               <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
//                 {"To jest opinia społeczności, a nie reklama"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { Button } from "@/components/ui/button"
import { ExternalLink, Gift, Zap, Crown, Sparkles, Trophy, Star, Shield } from "lucide-react"

export function SoftCta() {
  return (
    <section id="doswiadczenia" className="py-12 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29] sm:py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#d67413]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#d67413]/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Верхние декоративные элементы */}
      <div className="absolute top-0 left-0 right-0 flex justify-between px-6 opacity-10">
        <Crown className="h-8 w-8 text-[#d67413]" />
        <Trophy className="h-8 w-8 text-[#d67413]" />
        <Star className="h-8 w-8 text-[#d67413]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1d2036]/80 via-[#1d2036]/90 to-[#171a29] border border-[#d67413]/30 rounded-2xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(214,116,19,0.15)] overflow-hidden">
            
            {/* Градиентный фон */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d67413]/5 via-transparent to-[#d67413]/5 opacity-30"></div>
            
            {/* Верхние угловые элементы */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#d67413]/40 rounded-tl-xl"></div>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24">
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#d67413]/40 rounded-tr-xl"></div>
            </div>

            {/* Контент */}
            <div className="relative z-10">
              <div className="text-center mb-10">

                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  Czas na Prawdziwe Doświadczenie!
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Dołącz do tysięcy graczy i dowiedz się, dlaczego kasyno VOX jest najlepsze.
                </p>
              </div>

              {/* Основные кнопки */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                {/* Кнопка регистрации с бонусом */}
                <Button
                  size="lg"
                  className="gap-4 bg-gradient-to-r from-[#d67413] via-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:via-[#d67413] hover:to-[#e68a29] text-white font-bold text-lg px-8 py-7 rounded-xl shadow-[0_10px_40px_rgba(214,116,19,0.3)] hover:shadow-[0_15px_50px_rgba(214,116,19,0.5)] transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                >
                  {/* Эффект свечения */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <Crown className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold">Zarejestruj się Teraz</span>
                    <span className="text-sm font-normal opacity-90">+ Odbierz Bonus 500 zł</span>
                  </div>
                  <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Кнопка демо */}
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-3 border-2 bg-white border-[#d67413] text-[#d67413] hover:bg-[#d67413]/10 hover:border-[#e68a29] hover:text-white font-semibold text-lg px-8 py-7 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                >
                  <Zap className="h-5 w-5 group-hover:animate-pulse" />
                  Zagraj w Trybie Demo
                </Button>
              </div>

              
            </div>

            {/* Нижние угловые элементы */}
            <div className="absolute bottom-0 left-0 w-24 h-24">
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#d67413]/40 rounded-bl-xl"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#d67413]/40 rounded-br-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}