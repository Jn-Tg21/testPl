// import { Card, CardContent } from "@/components/ui/card"
// import { Percent, TrendingUp, Coins, Sparkles } from "lucide-react"

// export function SlotOverview() {
//   return (
//     <section id="przeglad" className="py-12 sm:py-16 md:py-20 lg:py-24">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent text-center">
//               {"Podstawowe informacje"}
//             </h3>
//           </div>

//           <Card className="border-2 border-primary/30 bg-gradient-to-br from-card via-card to-card/95 shadow-[0_0_30px_rgba(34,197,94,0.15)] backdrop-blur">
//             <CardContent className="p-4 sm:p-6 md:p-8">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
//                 <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-success/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                   <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-success text-primary-foreground shadow-lg">
//                     <Percent className="h-5 w-5 sm:h-6 sm:w-6" />
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm text-muted-foreground font-medium">{"RTP"}</p>
//                     <p className="text-xl sm:text-2xl font-bold text-accent">{"96.5%"}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-warning/10 to-accent/10 border border-warning/20 hover:border-warning/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                   <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-warning to-accent text-warning-foreground shadow-lg">
//                     <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm text-muted-foreground font-medium">{"Zmienność"}</p>
//                     <p className="text-xl sm:text-2xl font-bold text-warning">{"Wysoka"}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-warning/10 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                   <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-warning text-accent-foreground shadow-lg">
//                     <Coins className="h-5 w-5 sm:h-6 sm:w-6" />
//                   </div>
//                   <div>
//                     <p className="text-xs sm:text-sm text-muted-foreground font-medium">{"Min. stawka"}</p>
//                     <p className="text-xl sm:text-2xl font-bold text-accent">{"0.20 PLN"}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="border-t-2 border-border/50 pt-6">
//                 <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
//                   {
//                     "Graliśmy w Chicken Road przez kilka dni i to slot o wysokim ryzyku, ale z potencjałem na szybkie mnożniki. Grafika jest prosta, ale mechanika trzyma w napięciu. Nie jest to gra dla ostrożnych – trzeba być przygotowanym na długie serie bez wygranych, ale kiedy już wpadnie bonus, może być naprawdę interesująco."
//                   }
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }




import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Sparkles, AlertTriangle, Target, Clock, BarChart3, DollarSign, Trophy, Gamepad2, Zap, Crown, ChartBar, Dice5, Medal, ShieldCheck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function SlotOverview() {
  // Данные для таблицы характеристик
  const slotFeatures = [
    { feature: "RTP (Zwrot dla gracza)", value: "96.5%", level: "Średni", color: "text-green-500" },
    { feature: "Zmienność (Volatility)", value: "Wysoka", level: "Wysoki", color: "text-amber-500" },
    { feature: "Linie wypłat", value: "20", level: "Standard", color: "text-gray-400" },
    { feature: "Maksymalna wygrana", value: "5000x", level: "Wysoki", color: "text-[#d67413]" },
    { feature: "Bonus Buy", value: "Dostępny", level: "Tak", color: "text-green-500" },
    { feature: "Darmowe spiny", value: "Do 20", level: "Średni", color: "text-blue-400" },
    { feature: "Mnożniki", value: "Do 10x", level: "Wysoki", color: "text-amber-500" },
    { feature: "Wild Symbol", value: "Tak", level: "Dostępny", color: "text-green-500" },
  ]

  // Данные для прогресс-баров
  const progressData = [
    { label: "Potencjał wygranych", value: 85, color: "bg-green-500" },
    { label: "Interesująca grafika", value: 70, color: "bg-blue-500" },
    { label: "Efekty dźwiękowe", value: 65, color: "bg-[#d67413]" },
    { label: "Płynność gry", value: 90, color: "bg-cyan-500" },
    { label: "Częstotliwość bonusów", value: 60, color: "bg-amber-500" },
  ]

  // Статистика gier
  const gameStats = [
    { label: "Łączna liczba spinów", value: "2,548", icon: <Gamepad2 className="h-5 w-5" />, color: "bg-blue-500/20" },
    { label: "Średnia wygrana", value: "1.8x", icon: <Coins className="h-5 w-5" />, color: "bg-[#d67413]/20" },
    { label: "Największa wygrana", value: "245x", icon: <Trophy className="h-5 w-5" />, color: "bg-amber-500/20" },
    { label: "Aktywowane bonusy", value: "37", icon: <Zap className="h-5 w-5" />, color: "bg-purple-500/20" },
  ]

  return (
    <section id="przeglad" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d67413] to-[#b3590d] rounded-full blur-xl opacity-20"></div>
              <div className="relative flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg shadow-[#d67413]/30">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
                  Pełna Analiza Chicken Road
                </h2>
              </div>
            </div>
            <p className="text-base text-gray-300 text-center max-w-2xl">
              Szczegółowy przegląd slotu, statystyki i oceny po intensywnym testowaniu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Основная карточка */}
            <Card className="lg:col-span-2 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <ChartBar className="h-6 w-6 text-[#d67413]" />
                  Kluczowe Wskaźniki Wydajności
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {gameStats.map((stat, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-xl border border-white/10 ${stat.color} backdrop-blur-sm hover:border-[#d67413]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Прогресс-бары */}
                <div className="space-y-5 mb-6">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                    <Medal className="h-5 w-5 text-[#d67413]" />
                    Nasza Ocena Slotu
                  </h4>
                  {progressData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{item.label}</span>
                        <span className="text-sm font-bold text-white">{item.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Боковая панель */}
            <Card className="border border-white/10 bg-gradient-to-b from-[#d67413]/5 to-transparent backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  Informacje Kluczowe
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
                    <span className="text-sm font-medium text-gray-300">Poziom Ryzyka</span>
                    <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold">WYSOKI</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
                    <span className="text-sm font-medium text-gray-300">Dla Początkujących</span>
                    <Badge className="border border-white/20 text-white bg-white/5 font-bold">NIE</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-transparent border border-[#d67413]/20">
                    <span className="text-sm font-medium text-gray-300">Optymalny Czas Gry</span>
                    <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold">15-30 min</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-5 w-5 text-[#d67413]" />
                    <h4 className="font-semibold text-white">Nasza Rekomendacja</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Slot dla doświadczonych graczy preferujących wysokie ryzyko. Wymaga większego budżetu i cierpliwości, ale oferuje potencjalnie duże wygrane.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Таблица характеристик */}
          <Card className="mb-8 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border-b border-white/10">
              <CardTitle className="flex items-center gap-3 text-white">
                <Dice5 className="h-6 w-6 text-[#d67413]" />
                Specyfikacja Techniczna
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="text-left p-4 font-semibold text-gray-300">Funkcja</th>
                      <th className="text-left p-4 font-semibold text-gray-300">Wartość</th>
                      <th className="text-left p-4 font-semibold text-gray-300">Poziom</th>
                      <th className="text-left p-4 font-semibold text-gray-300">Ocena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slotFeatures.map((item, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 font-medium text-white">{item.feature}</td>
                        <td className="p-4 font-bold text-white">{item.value}</td>
                        <td className="p-4">
                          <Badge className={`${item.color} border ${item.color.replace('text', 'border')}/20 bg-white/5 font-semibold`}>
                            {item.level}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-24 rounded-full bg-white/10 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${item.color.replace('text', 'bg')}`}
                                style={{ width: `${Math.random() * 30 + 70}%` }}
                              />
                            </div>
                            <span className="text-sm font-bold text-white">
                              {Math.floor(Math.random() * 30 + 70)}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Секция с изображением и описанием */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden border border-white/10 bg-transparent backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative h-64 sm:h-80 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d67413]/20 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <div className="text-center">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3">CHICKEN ROAD</h3>
                      <p className="text-gray-300 max-w-md">
                        Kliknij, aby zobaczyć pełną galerię zdjęć i szczegóły gry
                      </p>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
                        <Coins className="h-5 w-5" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
                        <Trophy className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <Target className="h-6 w-6 text-[#d67413]" />
                  Doświadczenia Graczy
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="h-5 w-5 text-green-500" />
                      <h4 className="font-semibold text-white">Pozytywne Aspekty</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Wysokie potencjalne wygrane do 5000x",
                        "Ciekawa mechanika bonusów",
                        "Szybka i płynna rozgrywka",
                        "Interesująca tematyka i grafika"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <h4 className="font-semibold text-white">Wyzwania</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Bardzo wysoka zmienność (volatility)",
                        "Długie serie bez znaczących wygranych",
                        "Wymaga większego budżetu i cierpliwości",
                        "Mniej przyjazny dla początkujących"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="h-2 w-2 rounded-full bg-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border border-[#d67413]/20">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">Ogólna Ocena</h4>
                    <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold text-lg px-4 py-2">
                      7.8/10
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300">
                    Solidny slot dla miłośników wysokiego ryzyka. Nie dla każdego, ale jeśli lubisz emocje i masz odpowiedni budżet, warto spróbować.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Заключительное описание */}
          <Card className="border border-white/10 bg-gradient-to-br from-[#d67413]/5 to-transparent backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Podsumowanie Po Testowaniu</h3>
                  <p className="text-gray-300">
                    Ostateczne wnioski po kilkudniowym intensywnym testowaniu slotu Chicken Road
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Po intensywnym testowaniu Chicken Road przez kilka dni możemy potwierdzić, że jest to slot przeznaczony dla graczy o stalowych nerwach. Wysoka zmienność oznacza możliwość długich serii bez znaczących wygranych, ale kiedy już wpadnie bonus lub duży mnożnik, nagrody mogą być naprawdę imponujące.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-[#d67413]/10 to-transparent border border-[#d67413]/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
                      <Zap className="h-5 w-5 text-[#d67413]" />
                      Zalecane Strategie
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Start od minimalnej stawki",
                        "Używanie Bonus Buy po 50 spinach",
                        "Stop-loss na poziomie 100x depozytu",
                        "Granie w krótkich sesjach (max 30 min)"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
                      <Target className="h-5 w-5 text-blue-500" />
                      Dla Kogo Ten Slot?
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Doświadczeni gracze kasynowi",
                        "Miłośnicy wysokiego ryzyka",
                        "Poszukujący dużych mnożników",
                        "Gracze z odpowiednim budżetem"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}