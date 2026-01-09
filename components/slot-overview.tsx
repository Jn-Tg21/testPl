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
import { Percent, TrendingUp, Coins, Sparkles, AlertTriangle, Target, Clock, BarChart3, DollarSign, Trophy, Shield, Users, Gamepad2, Zap, Crown } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function SlotOverview() {
  // Данные для таблицы характеристик
  const slotFeatures = [
    { feature: "RTP (Return to Player)", value: "96.5%", level: "Średni", color: "text-success" },
    { feature: "Zmienność (Volatility)", value: "Wysoka", level: "Wysoki", color: "text-warning" },
    { feature: "Linie wypłat", value: "20", level: "Standard", color: "text-muted-foreground" },
    { feature: "Maksymalna wygrana", value: "5000x stawki", level: "Wysoki", color: "text-accent" },
    { feature: "Bonus Buy", value: "Dostępny", level: "Tak", color: "text-success" },
    { feature: "Free Spins", value: "Do 20", level: "Średni", color: "text-primary" },
    { feature: "Multiplikatory", value: "Do 10x", level: "Wysoki", color: "text-warning" },
    { feature: "Wild Symbol", value: "Tak", level: "Dostępny", color: "text-success" },
  ]

  // Данные для прогресс-баров
  const progressData = [
    { label: "Potencjał wygranych", value: 85, color: "bg-success" },
    { label: "Interesująca grafika", value: 70, color: "bg-primary" },
    { label: "Efekty dźwiękowe", value: 65, color: "bg-accent" },
    { label: "Płynność gry", value: 90, color: "bg-info" },
    { label: "Częstotliwość bonusów", value: 60, color: "bg-warning" },
  ]

  // Статистика gier
  const gameStats = [
    { label: "Łączna liczba spinów", value: "2,548", icon: <Gamepad2 className="h-4 w-4" /> },
    { label: "Średnia wygrana na spin", value: "1.8x", icon: <Coins className="h-4 w-4" /> },
    { label: "Największa wygrana", value: "245x", icon: <Trophy className="h-4 w-4" /> },
    { label: "Aktywowane bonusy", value: "37", icon: <Zap className="h-4 w-4" /> },
  ]

  return (
    <section id="przeglad" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок с иконкой */}
          <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent text-center">
                {"Pełny Przegląd Chicken Road"}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl">
              {"Szczegółowa analiza, statystyki i uczciwe oceny z kilkudniowego testowania"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Основная карточка с ключевыми показателями */}
            <Card className="lg:col-span-2 border-2 border-primary/30 bg-gradient-to-br from-card via-card to-card/95 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-5 w-5 text-primary" />
                  {"Kluczowe Wskaźniki"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {gameStats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-success/5 border border-primary/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Прогресс-бары с оценками */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    {"Nasza Ocena Gry"}
                  </h4>
                  {progressData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className="text-sm font-bold">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className={`h-2 ${item.color}`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Боковая панель с быстрыми фактами */}
            <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-warning/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  {"Szybkie Fakty"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-warning/10">
                    <span className="text-sm font-medium">{"Ryzyko"}</span>
                    <Badge variant="destructive" className="font-bold">{"WYSOKIE"}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-success/10">
                    <span className="text-sm font-medium">{"Dla początkujących"}</span>
                    <Badge variant="outline" className="font-bold">{"NIE"}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                    <span className="text-sm font-medium">{"Czas gry"}</span>
                    <Badge className="font-bold">{"15-30 min"}</Badge>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <h4 className="font-semibold">{"Nasza rekomendacja"}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {"Gra dla doświadczonych graczy, którzy szukają wysokiego ryzyka i potencjalnie dużych wygranych. Nie polecamy dla początkujących."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Таблица характеристик */}
          <Card className="mb-8 border-2 border-border shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                {"Specyfikacja Techniczna"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-secondary/30">
                      <th className="text-left p-4 font-semibold">{"Funkcja"}</th>
                      <th className="text-left p-4 font-semibold">{"Wartość"}</th>
                      <th className="text-left p-4 font-semibold">{"Poziom"}</th>
                      <th className="text-left p-4 font-semibold">{"Nasza ocena"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slotFeatures.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-secondary/10 transition-colors">
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="p-4 font-bold">{item.value}</td>
                        <td className="p-4">
                          <Badge variant="outline" className={`${item.color} font-semibold`}>
                            {item.level}
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-8 rounded-full ${item.color.replace('text-', 'bg-')}/20`}>
                              <div 
                                className={`h-full rounded-full ${item.color.replace('text-', 'bg-')}`}
                                style={{ width: `${Math.random() * 30 + 70}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">
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
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
  <CardContent className="p-0">
    <div className="relative h-64 sm:h-80 group">
      {/* Фоновое изображение игры */}
      <img
        src="/baner2.webp" // Замените на ваш путь
        alt="Chicken Road Slot Machine Screenshot"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Затемнение и градиент поверх */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      {/* Контент поверх изображения */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-sm px-3 py-1 shadow-lg">
          {"NOWOŚĆ"}
        </Badge>
        
        <div className="text-center mb-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-lg">{"CHICKEN ROAD"}</h3>
          <p className="text-sm text-primary-foreground/90 drop-shadow">
            {"Kliknij, aby zobaczyć pełną galerię"}
          </p>
        </div>
        
        {/* Иконки особенностей */}
        <div className="flex gap-3 mt-4">
          <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Coins className="h-5 w-5" />
          </div>
          <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Trophy className="h-5 w-5" />
          </div>
        </div>
      </div>
      
      {/* Кнопка увеличения */}
      <button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
      </button>
    </div>
  </CardContent>
</Card>

            <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-card/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  {"Doświadczenia Graczy"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy className="h-4 w-4 text-success" />
                      <h4 className="font-semibold">{"Pozytywne"}</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        {"Wysokie potencjalne wygrane"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        {"Ciekawa mechanika bonusów"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        {"Szybka i płynna rozgrywka"}
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <h4 className="font-semibold">{"Negatywne"}</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-destructive" />
                        {"Bardzo wysoka zmienność"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-destructive" />
                        {"Długie serie bez wygranych"}
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-destructive" />
                        {"Dla doświadczonych graczy"}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{"Ogólna ocena"}</h4>
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white font-bold text-lg px-3 py-1">
                      7.8/10
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {"Solidny slot dla miłośników wysokiego ryzyka. Nie dla każdego, ale jeśli lubisz emocje, warto spróbować."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Заключительное описание */}
          <Card className="border-2 border-success/30 bg-gradient-to-br from-success/5 to-primary/5 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-success to-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{"Podsumowanie Po Kilkudniowym Testowaniu"}</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  {"Po intensywnym testowaniu Chicken Road przez kilka dni, możemy stwierdzić, że jest to slot dla graczy o stalowych nerwach. Wysoka zmienność oznacza, że można przeżyć długie serie bez znaczących wygranych, ale kiedy już wpadnie bonus lub duży mnożnik, nagrody mogą być naprawdę imponujące."}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      {"Nasze strategie"}
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Start od minimalnej stawki</li>
                      <li>• Używanie Bonus Buy po 50 spinach</li>
                      <li>• Stop-loss na 100x depozytu</li>
                      <li>• Gra w sesjach maks 30-minutowych</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-accent" />
                      {"Dla kogo jest ta gra?"}
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Doświadczeni gracze</li>
                      <li>• Miłośnicy wysokiego ryzyka</li>
                      <li>• Szukający dużych mnożników</li>
                      <li>• Gracze z dużym budżetem</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 mt-4 rounded-lg bg-gradient-to-r from-warning/10 to-accent/10 border-2 border-warning/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    <h4 className="font-bold text-warning">{"Ważna uwaga!"}</h4>
                  </div>
                  <p className="text-sm">
                    {"Pamiętaj o odpowiedzialnej grze. Chicken Road ma wysoką zmienność - ustal budżet przed rozpoczęciem i się go trzymaj. To rozrywka, a nie sposób na zarobek."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}