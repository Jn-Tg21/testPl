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




import { Button } from "@/components/ui/button"
import { MessageSquare, Trophy, Sparkles, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <img
          src="/hero.webp" // Замените на ваш путь к изображению
          alt="Chicken Road фон"
          className="w-full h-full object-cover"
        />
        {/* Затемнение изображения для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Градиентные эффекты поверх изображения */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,179,16,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.12),transparent_50%)]" />
      
      {/* Дополнительные эффекты для глубины */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-3xl animate-pulse mix-blend-overlay" />
      <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000 mix-blend-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-success/8 rounded-full blur-[100px] mix-blend-overlay" />

      {/* Текстовый контент */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(217,179,16,0.4)] leading-tight inline-block">
              {"Testujemy Chicken Road"}
            </span>
            <br />
            <span className="text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {"i dzielimy się prawdziwymi doświadczeniami"}
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/95 text-balance mb-6 sm:mb-8 leading-relaxed px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {"Wygrane, przegrane, strategie i uczciwe opinie graczy"}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary via-success to-primary hover:from-success hover:via-primary hover:to-success shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:shadow-[0_0_35px_rgba(34,197,94,0.8)] transition-all duration-300 hover:scale-105 text-base sm:text-lg font-bold border-2 border-primary/30 glow-button backdrop-blur-sm"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              {"Rozpocznij grę"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-card/70 backdrop-blur-xl border-2 border-accent/40 hover:bg-accent/30 hover:border-accent/60 shadow-lg hover:shadow-accent/40 transition-all duration-300 hover:scale-105 text-foreground font-semibold text-base sm:text-lg"
            >
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
              {"Zobacz dyskusję"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}