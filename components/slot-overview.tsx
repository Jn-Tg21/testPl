// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Coins, Sparkles, AlertTriangle, Target, Clock, BarChart3, DollarSign, Trophy, Gamepad2, Zap, Crown, ChartBar, Dice5, Medal, ShieldCheck } from "lucide-react"
// import { Progress } from "@/components/ui/progress"
// import { Badge } from "@/components/ui/badge"

// export function SlotOverview() {
//   // Данные для таблицы характеристик
//   const slotFeatures = [
//     { feature: "RTP (Zwrot dla gracza)", value: "96.5%", level: "Średni", color: "text-green-500" },
//     { feature: "Zmienność (Volatility)", value: "Wysoka", level: "Wysoki", color: "text-amber-500" },
//     { feature: "Linie wypłat", value: "20", level: "Standard", color: "text-gray-400" },
//     { feature: "Maksymalna wygrana", value: "5000x", level: "Wysoki", color: "text-[#d67413]" },
//     { feature: "Bonus Buy", value: "Dostępny", level: "Tak", color: "text-green-500" },
//     { feature: "Darmowe spiny", value: "Do 20", level: "Średni", color: "text-blue-400" },
//     { feature: "Mnożniki", value: "Do 10x", level: "Wysoki", color: "text-amber-500" },
//     { feature: "Wild Symbol", value: "Tak", level: "Dostępny", color: "text-green-500" },
//   ]

//   // Данные для прогресс-баров
//   const progressData = [
//     { label: "Potencjał wygranych", value: 85, color: "bg-green-500" },
//     { label: "Interesująca grafika", value: 70, color: "bg-blue-500" },
//     { label: "Efekty dźwiękowe", value: 65, color: "bg-[#d67413]" },
//     { label: "Płynność gry", value: 90, color: "bg-cyan-500" },
//     { label: "Częstotliwość bonusów", value: 60, color: "bg-amber-500" },
//   ]

//   // Статистика gier
//   const gameStats = [
//     { label: "Łączna liczba spinów", value: "2,548", icon: <Gamepad2 className="h-5 w-5" />, color: "bg-blue-500/20" },
//     { label: "Średnia wygrana", value: "1.8x", icon: <Coins className="h-5 w-5" />, color: "bg-[#d67413]/20" },
//     { label: "Największa wygrana", value: "245x", icon: <Trophy className="h-5 w-5" />, color: "bg-amber-500/20" },
//     { label: "Aktywowane bonusy", value: "37", icon: <Zap className="h-5 w-5" />, color: "bg-purple-500/20" },
//   ]

//   return (
//     <section id="przeglad" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29]">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Заголовок */}
//           <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-12">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#d67413] to-[#b3590d] rounded-full blur-xl opacity-20"></div>
//               <div className="relative flex items-center gap-3">
//                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg shadow-[#d67413]/30">
//                   <Crown className="h-6 w-6 text-white" />
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
//                   Pełna Analiza Chicken Road
//                 </h2>
//               </div>
//             </div>
//             <p className="text-base text-gray-300 text-center max-w-2xl">
//               Szczegółowy przegląd slotu, statystyki i oceny po intensywnym testowaniu
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             {/* Основная карточка */}
//             <Card className="lg:col-span-2 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-xl text-white">
//                   <ChartBar className="h-6 w-6 text-[#d67413]" />
//                   Kluczowe Wskaźniki Wydajności
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//                   {gameStats.map((stat, index) => (
//                     <div 
//                       key={index} 
//                       className={`p-4 rounded-xl border border-white/10 ${stat.color} backdrop-blur-sm hover:border-[#d67413]/30 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
//                     >
//                       <div className="flex items-center gap-3 mb-3">
//                         <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
//                           {stat.icon}
//                         </div>
//                         <span className="text-sm font-medium text-gray-300">{stat.label}</span>
//                       </div>
//                       <span className="text-2xl font-bold text-white">{stat.value}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Прогресс-бары */}
//                 <div className="space-y-5 mb-6">
//                   <h4 className="text-lg font-semibold text-white flex items-center gap-3">
//                     <Medal className="h-5 w-5 text-[#d67413]" />
//                     Nasza Ocena Slotu
//                   </h4>
//                   {progressData.map((item, index) => (
//                     <div key={index} className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-sm font-medium text-gray-300">{item.label}</span>
//                         <span className="text-sm font-bold text-white">{item.value}%</span>
//                       </div>
//                       <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
//                         <div 
//                           className={`h-full rounded-full ${item.color} transition-all duration-1000`}
//                           style={{ width: `${item.value}%` }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Боковая панель */}
//             <Card className="border border-white/10 bg-gradient-to-b from-[#d67413]/5 to-transparent backdrop-blur-sm">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-white">
//                   <AlertTriangle className="h-6 w-6 text-amber-500" />
//                   Informacje Kluczowe
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6 space-y-4">
//                 <div className="space-y-3">
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
//                     <span className="text-sm font-medium text-gray-300">Poziom Ryzyka</span>
//                     <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold">WYSOKI</Badge>
//                   </div>
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20">
//                     <span className="text-sm font-medium text-gray-300">Dla Początkujących</span>
//                     <Badge className="border border-white/20 text-white bg-white/5 font-bold">NIE</Badge>
//                   </div>
//                   <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-transparent border border-[#d67413]/20">
//                     <span className="text-sm font-medium text-gray-300">Optymalny Czas Gry</span>
//                     <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold">15-30 min</Badge>
//                   </div>
//                 </div>

//                 <div className="p-4 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/10">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Clock className="h-5 w-5 text-[#d67413]" />
//                     <h4 className="font-semibold text-white">Nasza Rekomendacja</h4>
//                   </div>
//                   <p className="text-sm text-gray-300 leading-relaxed">
//                     Slot dla doświadczonych graczy preferujących wysokie ryzyko. Wymaga większego budżetu i cierpliwości, ale oferuje potencjalnie duże wygrane.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Таблица характеристик */}
//           <Card className="mb-8 border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm overflow-hidden">
//             <CardHeader className="bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border-b border-white/10">
//               <CardTitle className="flex items-center gap-3 text-white">
//                 <Dice5 className="h-6 w-6 text-[#d67413]" />
//                 Specyfikacja Techniczna
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-0">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-white/5 border-b border-white/10">
//                       <th className="text-left p-4 font-semibold text-gray-300">Funkcja</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Wartość</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Poziom</th>
//                       <th className="text-left p-4 font-semibold text-gray-300">Ocena</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {slotFeatures.map((item, index) => (
//                       <tr 
//                         key={index} 
//                         className="border-b border-white/5 hover:bg-white/5 transition-colors"
//                       >
//                         <td className="p-4 font-medium text-white">{item.feature}</td>
//                         <td className="p-4 font-bold text-white">{item.value}</td>
//                         <td className="p-4">
//                           <Badge className={`${item.color} border ${item.color.replace('text', 'border')}/20 bg-white/5 font-semibold`}>
//                             {item.level}
//                           </Badge>
//                         </td>
//                         <td className="p-4">
//                           <div className="flex items-center gap-3">
//                             <div className="h-2 w-24 rounded-full bg-white/10 overflow-hidden">
//                               <div 
//                                 className={`h-full rounded-full ${item.color.replace('text', 'bg')}`}
//                                 style={{ width: `${Math.random() * 30 + 70}%` }}
//                               />
//                             </div>
//                             <span className="text-sm font-bold text-white">
//                               {Math.floor(Math.random() * 30 + 70)}%
//                             </span>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Секция с изображением и описанием */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//             <Card className="overflow-hidden border border-white/10 bg-transparent backdrop-blur-sm">
//               <CardContent className="p-0">
//                 <div className="relative h-64 sm:h-80 group">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#d67413]/20 to-transparent opacity-50"></div>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
//                     <div className="text-center">
//                       <h3 className="text-2xl sm:text-3xl font-bold mb-3">CHICKEN ROAD</h3>
//                       <p className="text-gray-300 max-w-md">
//                         Kliknij, aby zobaczyć pełną galerię zdjęć i szczegóły gry
//                       </p>
//                     </div>
                    
//                     <div className="flex gap-4 mt-6">
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Sparkles className="h-5 w-5" />
//                       </div>
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Coins className="h-5 w-5" />
//                       </div>
//                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#d67413]/30 transition-colors cursor-pointer">
//                         <Trophy className="h-5 w-5" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Декоративные элементы */}
//                   <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
//                   <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#d67413] to-transparent rounded-full blur-3xl opacity-20"></div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border border-white/10 bg-[#1d2036]/60 backdrop-blur-sm">
//               <CardHeader className="border-b border-white/10">
//                 <CardTitle className="flex items-center gap-3 text-white">
//                   <Target className="h-6 w-6 text-[#d67413]" />
//                   Doświadczenia Graczy
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="pt-6">
//                 <div className="space-y-4">
//                   <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
//                     <div className="flex items-center gap-3 mb-3">
//                       <Trophy className="h-5 w-5 text-green-500" />
//                       <h4 className="font-semibold text-white">Pozytywne Aspekty</h4>
//                     </div>
//                     <ul className="space-y-2 text-sm">
//                       {[
//                         "Wysokie potencjalne wygrane do 5000x",
//                         "Ciekawa mechanika bonusów",
//                         "Szybka i płynna rozgrywka",
//                         "Interesująca tematyka i grafika"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-3 text-gray-300">
//                           <div className="h-2 w-2 rounded-full bg-green-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="p-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
//                     <div className="flex items-center gap-3 mb-3">
//                       <AlertTriangle className="h-5 w-5 text-amber-500" />
//                       <h4 className="font-semibold text-white">Wyzwania</h4>
//                     </div>
//                     <ul className="space-y-2 text-sm">
//                       {[
//                         "Bardzo wysoka zmienność (volatility)",
//                         "Długie serie bez znaczących wygranych",
//                         "Wymaga większego budżetu i cierpliwości",
//                         "Mniej przyjazny dla początkujących"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-3 text-gray-300">
//                           <div className="h-2 w-2 rounded-full bg-amber-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border border-[#d67413]/20">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-semibold text-white">Ogólna Ocena</h4>
//                     <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold text-lg px-4 py-2">
//                       7.8/10
//                     </Badge>
//                   </div>
//                   <p className="text-sm text-gray-300">
//                     Solidny slot dla miłośników wysokiego ryzyka. Nie dla każdego, ale jeśli lubisz emocje i masz odpowiedni budżet, warto spróbować.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Заключительное описание */}
//           <Card className="border border-white/10 bg-gradient-to-br from-[#d67413]/5 to-transparent backdrop-blur-sm">
//             <CardContent className="p-6">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
//                 <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg">
//                   <ShieldCheck className="h-6 w-6 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">Podsumowanie Po Testowaniu</h3>
//                   <p className="text-gray-300">
//                     Ostateczne wnioski po kilkudniowym intensywnym testowaniu slotu Chicken Road
//                   </p>
//                 </div>
//               </div>
              
//               <div className="space-y-6">
//                 <p className="text-gray-300 leading-relaxed">
//                   Po intensywnym testowaniu Chicken Road przez kilka dni możemy potwierdzić, że jest to slot przeznaczony dla graczy o stalowych nerwach. Wysoka zmienność oznacza możliwość długich serii bez znaczących wygranych, ale kiedy już wpadnie bonus lub duży mnożnik, nagrody mogą być naprawdę imponujące.
//                 </p>
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="p-4 rounded-lg bg-gradient-to-br from-[#d67413]/10 to-transparent border border-[#d67413]/20">
//                     <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
//                       <Zap className="h-5 w-5 text-[#d67413]" />
//                       Zalecane Strategie
//                     </h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                       {[
//                         "Start od minimalnej stawki",
//                         "Używanie Bonus Buy po 50 spinach",
//                         "Stop-loss na poziomie 100x depozytu",
//                         "Granie w krótkich sesjach (max 30 min)"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-2">
//                           <div className="h-1.5 w-1.5 rounded-full bg-[#d67413]" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
//                     <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
//                       <Target className="h-5 w-5 text-blue-500" />
//                       Dla Kogo Ten Slot?
//                     </h4>
//                     <ul className="space-y-2 text-sm text-gray-300">
//                       {[
//                         "Doświadczeni gracze kasynowi",
//                         "Miłośnicy wysokiego ryzyka",
//                         "Poszukujący dużych mnożników",
//                         "Gracze z odpowiednim budżetem"
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-2">
//                           <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }







import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  Gift,
  Dice5,
  Users,
  Trophy,
  CreditCard,
  Zap,
  Award,
  Calendar,
  Coins,
  Gamepad2,
  Sparkles,
  BarChart3,
  Crown,
  Target,
  Medal,
  AlertTriangle,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function VoxCasinoOverview() {
  // Dane dotyczące kluczowych cech kasyna
  const keyFeatures = [
    { feature: "Bonus Powitalny", value: "do 5000 zł + 300 FS", level: "Bardzo wysoki", color: "text-[#d67413]", icon: <Gift className="h-4 w-4" /> },
    { feature: "Licencja", value: "Ważna", level: "Bezpieczeństwo", color: "text-green-500", icon: <ShieldCheck className="h-4 w-4" /> },
    { feature: "Szyfrowanie", value: "SSL", level: "Standard", color: "text-blue-500", icon: <ShieldCheck className="h-4 w-4" /> },
    { feature: "Gry na Żywo", value: "Dostępne", level: "Tak", color: "text-green-500", icon: <Users className="h-4 w-4" /> },
    { feature: "Turnieje", value: "Co tydzień", level: "Częste", color: "text-amber-500", icon: <Trophy className="h-4 w-4" /> },
    { feature: "Jackpoty", value: "Progresywne", level: "Duże", color: "text-[#d67413]", icon: <Coins className="h-4 w-4" /> },
    { feature: "Płatności", value: "Kryptowaluty", level: "Nowoczesne", color: "text-purple-500", icon: <CreditCard className="h-4 w-4" /> },
    { feature: "Dostawcy Gier", value: "Spinomenal, EvoPlay", level: "Topowi", color: "text-cyan-500", icon: <Gamepad2 className="h-4 w-4" /> },
  ];

  // Dane dla pasków postępu (ocena aspektów)
  const ratingData = [
    { label: "Bezpieczeństwo", value: 95, color: "bg-green-500", icon: <ShieldCheck className="h-4 w-4" /> },
    { label: "Wartość Bonusów", value: 90, color: "bg-[#d67413]", icon: <Gift className="h-4 w-4" /> },
    { label: "Różnorodność Gier", value: 88, color: "bg-blue-500", icon: <Dice5 className="h-4 w-4" /> },
    { label: "Szybkość Transakcji", value: 85, color: "bg-cyan-500", icon: <Zap className="h-4 w-4" /> },
    { label: "Wsparcie Gracza", value: 82, color: "bg-purple-500", icon: <Users className="h-4 w-4" /> },
  ];

  // Statystyki platformy
  const platformStats = [
    { label: "Kategorie Gier", value: "5+", icon: <Dice5 className="h-5 w-5" />, color: "bg-blue-500/20", desc: "Sloty, Live, Stołowe, Crash" },
    { label: "Bonus Powitalny", value: "5000zł", icon: <Award className="h-5 w-5" />, color: "bg-[#d67413]/20", desc: "+ 300 Free Spinów" },
    { label: "Free Spiny", value: "300 FS", icon: <Sparkles className="h-5 w-5" />, color: "bg-amber-500/20", desc: "w pakiecie powitalnym" },
    { label: "Turnieje", value: "Weekly", icon: <Calendar className="h-5 w-5" />, color: "bg-purple-500/20", desc: "Regularne konkursy" },
  ];

  // Szczegóły pakietu powitalnego
  const welcomePackages = [
    { step: "Pierwszy Depozyt", bonus: "125%", spins: "100 FS", requirement: "Obłożenie x40" },
    { step: "Drugi Depozyt", bonus: "150%", spins: "100 FS", requirement: "Obłożenie x40" },
    { step: "Trzeci Depozyt", bonus: "150%", spins: "100 FS", requirement: "Obłożenie x40" },
  ];

  // Kategorie gier
  const gameCategories = [
    { category: "Sloty Online", examples: "Klasyczne, Tematyczne, Jackpoty", features: "Gry od Spinomenal, EvoPlay", color: "from-blue-500/20 to-blue-700/10" },
    { category: "Kasyno Na Żywo", examples: "Ruletka, Blackjack, Poker", features: "Prawdziwi krupierzy, HD", color: "from-green-500/20 to-green-700/10" },
    { category: "Gry Stołowe", examples: "Baccarat, Craps", features: "Różne warianty, RNG", color: "from-amber-500/20 to-amber-700/10" },
    { category: "Gry Crash", examples: "Aviator, JetX, Plinko", features: "Prosta mechanika, szybkie", color: "from-purple-500/20 to-purple-700/10" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] via-[#1a1d2e] to-[#171a29]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Nagłówek główny */}
          <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d67413] to-[#b3590d] rounded-full blur-xl opacity-20"></div>
              <div className="relative flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg shadow-[#d67413]/30">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
                  Kompleksowy Przegląd VOX Casino
                </h2>
              </div>
            </div>
            <p className="text-base text-gray-300 text-center max-w-3xl">
              Legalne kasyno online z bonusem 725% do 3000€ + 600 FS. Szczegółowa analiza platformy, 
              oferty gier, bezpieczeństwa i promocji po dokładnej weryfikacji.
            </p>
          </div>

          {/* Statystyki platformy */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {platformStats.map((stat, index) => (
              <Card key={index} className="border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-full ${stat.color} flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300">{stat.label}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <p className="text-xs text-gray-400">{stat.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Główna sekcja - Ocena i cechy */}
            <Card className="lg:col-span-2 border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-xl text-white">
                  <BarChart3 className="h-6 w-6 text-[#d67413]" />
                  Kluczowe Wskaźniki i Ocena
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Paski oceny */}
                <div className="space-y-5 mb-8">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                    <Medal className="h-5 w-5 text-[#d67413]" />
                    Szczegółowa Ocena Platformy
                  </h4>
                  {ratingData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-sm font-medium text-gray-300">{item.label}</span>
                        </div>
                        <span className="text-sm font-bold text-white">{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-[#d67413] [&>div]:to-[#b3590d]" />
                    </div>
                  ))}
                </div>

                {/* Cechy kasyna */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {keyFeatures.map((feat, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#d67413]/30 transition-colors">
                      <div className={`p-2 rounded-lg ${feat.color.replace('text', 'bg')}/20`}>
                        {feat.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">{feat.feature}</p>
                        <p className="text-xs text-gray-400">{feat.value}</p>
                      </div>
                      <Badge className={`${feat.color} border ${feat.color.replace('text', 'border')}/20 bg-white/5`}>
                        {feat.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Panel boczny - Bonusy */}
            <Card className="border border-white/10 bg-gradient-to-b from-[#d67413]/10 to-transparent backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <Gift className="h-6 w-6 text-[#d67413]" />
                  Bonus Powitalny
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-r from-[#d67413]/20 to-[#b3590d]/20 border border-[#d67413]/30">
                    <h3 className="text-2xl font-bold text-white mb-2">5000zł + 300 FS</h3>
                    <p className="text-sm text-gray-300">Za pierwsze 3 depozyty</p>
                  </div>

                  {welcomePackages.map((pkg, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-white">{pkg.step}</span>
                        <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white">
                          {pkg.bonus}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Free Spiny:</span>
                        <span className="text-white font-medium">{pkg.spins}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-400">Wymagania:</span>
                        <span className="text-amber-500">{pkg.requirement}</span>
                      </div>
                    </div>
                  ))}

                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="h-5 w-5 text-blue-500" />
                      <h4 className="font-semibold text-white">Magic Bonus</h4>
                    </div>
                    <p className="text-sm text-gray-300">
                      100% dopasowania depozytu (min. 8zł). Obłożenie x45. Aktywuj przed wpłatą.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sekcja gier */}
          <Card className="mb-8 border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
            <CardHeader className="border-b border-white/10">
              <CardTitle className="flex items-center gap-3 text-white">
                <Dice5 className="h-6 w-6 text-[#d67413]" />
                Katalog Gier VOX Casino
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gameCategories.map((cat, index) => (
                  <div key={index} className={`p-4 rounded-xl border border-white/10 bg-gradient-to-br ${cat.color}`}>
                    <h4 className="font-semibold text-white mb-3">{cat.category}</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Przykłady:</p>
                        <p className="text-sm text-white">{cat.examples}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Cechy:</p>
                        <p className="text-sm text-gray-300">{cat.features}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Turnieje */}
              <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="h-5 w-5 text-purple-500" />
                  <h4 className="font-semibold text-white">Turnieje Slotów</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Środy', 'Czwartki', 'Weekendy'].map((day, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-white/5 text-center">
                      <p className="text-sm font-medium text-white">{day}</p>
                      <p className="text-xs text-gray-400">Regularne nagrody</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bezpieczeństwo i płatności */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                  Bezpieczeństwo i Licencja
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { title: "Licencja", desc: "Ważna licencja od uznanego regulatora", icon: <ShieldCheck className="h-5 w-5 text-green-500" /> },
                    { title: "Szyfrowanie SSL", desc: "Standardowe szyfrowanie danych", icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> },
                    { title: "Odpowiedzialna Gra", desc: "Samowykluczenie, limity depozytów", icon: <Users className="h-5 w-5 text-amber-500" /> },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                      {item.icon}
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-3 text-white">
                  <CreditCard className="h-6 w-6 text-[#d67413]" />
                  Płatności
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-3">
                  {['Visa/Mastercard', 'Skrill/Neteller', 'Bitcoin', 'Ethereum'].map((method, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/10 text-center">
                      <p className="text-sm font-medium text-white">{method}</p>
                      <p className="text-xs text-gray-400">
                        {idx < 2 ? 'Szybkie wpłaty' : 'Natychmiastowe transakcje'}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20">
                  <p className="text-sm text-gray-300">
                    <AlertTriangle className="h-4 w-4 inline mr-2 text-amber-500" />
                    Wypłaty kartą: kilka dni | E-portfele/krypto: natychmiastowe
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Podsumowanie */}
          <Card className="border border-white/10 bg-gradient-to-br from-[#1a1d2e]/60 to-[#1a1d2e]/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#d67413] to-[#b3590d] flex items-center justify-center shadow-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Nasze Podsumowanie</h3>
                  <p className="text-gray-300">
                    VOX Casino to kompleksowa platforma łącząca hojne bonusy z bogatą ofertą gier
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  VOX Casino wyróżnia się na rynku dzięki <span className="text-white font-semibold">hojnemu pakietowi powitalnemu (do 5000zł + 300 FS)</span>,
                  różnorodności gier od topowych dostawców oraz nowoczesnemu podejściu do bezpieczeństwa (licencja, SSL).
                  Regularne turnieje i akceptacja kryptowalut to dodatkowe atuty dla doświadczonych graczy.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-green-500" />
                      Zalety
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Bardzo wysoki bonus powitalny",
                        "Regularne turnieje z nagrodami",
                        "Szeroki wybór metod płatności",
                        "Licencjonowana i bezpieczna platforma"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      Na co uważać
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      {[
                        "Obłożenie bonusów 40x-45x",
                        "Wypłaty kartą mogą trwać kilka dni",
                        "Minimalny depozyt 8zł (Magic Bonus)",
                        "Warunki terytorialne mogą obowiązywać"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[#d67413]/10 to-[#b3590d]/10 border border-[#d67413]/20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white">Ogólna rekomendacja</h4>
                      <p className="text-sm text-gray-300 mt-1">
                        Solidny wybór dla graczy szukających dużych bonusów i różnorodności gier
                      </p>
                    </div>
                    <Badge className="bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold text-lg px-6 py-3">
                      8.2/10
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}