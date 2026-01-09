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
import { ExternalLink, Gift, Zap } from "lucide-react"

export function SoftCta() {
  return (
    <section id="doswiadczenia" className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-card to-secondary/50 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Gotowy na grę?
              </h3>
              <p className="text-foreground/80 mb-2">
                Rozpocznij przygodę z Chicken Road
              </p>
            </div>

            {/* Две основные кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* Кнопка перехода */}
              <Button
                size="lg"
                className="gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 font-bold text-base sm:text-lg px-6 sm:px-8 py-6"
              >
                <Zap className="h-5 w-5" />
                Przejdź do kasyna
                <ExternalLink className="h-4 w-4" />
              </Button>

              {/* Кнопка бонусов */}
              <Button
                size="lg"
                variant="outline"
                className="gap-3 bg-gradient-to-r from-accent/10 to-accent/5 hover:bg-accent/20 border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 hover:scale-105 font-bold text-base sm:text-lg px-6 sm:px-8 py-6"
              >
                <Gift className="h-5 w-5 text-accent" />
                Odbierz bonus
              </Button>

            </div>

            {/* Пояснение */}
            <p className="text-xs text-muted-foreground text-center mt-6">
              Klikając, akceptujesz regulamin kasyna. Graj odpowiedzialnie.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}