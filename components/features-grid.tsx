import { Card, CardContent } from "@/components/ui/card"
import { Gift, Zap, Clock, AlertTriangle, Target, Sparkles, Crown, Coins, Trophy, Shield, Gamepad2, Star } from "lucide-react"

const features = [
  {
    icon: Crown,
    title: "Premium Experience",
    description: "Doświadczenie na poziomie premium z wysokiej jakości grafiką i efektami",
    color: "from-[#d67413] to-[#b3590d]",
    bg: "bg-gradient-to-br from-[#d67413]/10 to-[#b3590d]/5",
    border: "border-[#d67413]/30",
  },
  {
    icon: Zap,
    title: "Wysokie Mnożniki",
    description: "Mnożniki mogą osiągnąć nawet x5000 w najlepszych rundach bonusowych",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-gradient-to-br from-amber-500/10 to-yellow-600/5",
    border: "border-amber-500/30",
  },
  {
    icon: Clock,
    title: "Optymalne Sesje",
    description: "Perfekcyjna gra na krótkie, intensywne sesje 15-30 minutowe",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/30",
  },
  {
    icon: AlertTriangle,
    title: "Wysoka Volatility",
    description: "Wysoka zmienność = duże ryzyko, ale też potencjalnie duże wygrane",
    color: "from-red-500 to-orange-500",
    bg: "bg-gradient-to-br from-red-500/10 to-orange-500/5",
    border: "border-red-500/30",
  },
  {
    icon: Target,
    title: "Intuicyjna Rozgrywka",
    description: "Prosta mechanika idealna zarówno dla początkujących jak i doświadczonych",
    color: "from-green-500 to-emerald-500",
    bg: "bg-gradient-to-br from-green-500/10 to-emerald-500/5",
    border: "border-green-500/30",
  },
  {
    icon: Sparkles,
    title: "Bonus Buy Opcja",
    description: "Możliwość zakupu bonus rund dla natychmiastowego dostępu do akcji",
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/30",
  },
  {
    icon: Coins,
    title: "Różnorodne Stawki",
    description: "Zakład od 0.10€ do 100€ dostosowany do każdego budżetu",
    color: "from-yellow-500 to-amber-500",
    bg: "bg-gradient-to-br from-yellow-500/10 to-amber-500/5",
    border: "border-yellow-500/30",
  },
  {
    icon: Trophy,
    title: "Ranking Wygranych",
    description: "Tabela liderów z największymi wygranymi danego dnia",
    color: "from-orange-500 to-red-500",
    bg: "bg-gradient-to-br from-orange-500/10 to-red-500/5",
    border: "border-orange-500/30",
  },
  {
    icon: Shield,
    title: "RNG Certified",
    description: "Certyfikowany generator losowy zapewniający sprawiedliwą grę",
    color: "from-gray-500 to-slate-600",
    bg: "bg-gradient-to-br from-gray-500/10 to-slate-600/5",
    border: "border-gray-500/30",
  },
]

export function FeaturesGrid() {
  return (
    <section id="strategie" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e] relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d67413] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#d67413] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d67413]/20 to-[#b3590d]/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <Star className="h-4 w-4 text-[#d67413]" />
              <span className="text-sm font-medium text-gray-300">UNIKALNE CECHY</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Co Wyróżnia Chicken Road?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Poznaj kluczowe cechy, które sprawiają, że ten slot jest wyjątkowy
            </p>
          </div>

          {/* Сетка фич */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border ${feature.border} ${feature.bg} backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(214,116,19,0.15)] group overflow-hidden relative`}
              >
                {/* Анимированный фон при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:via-white/5 transition-all duration-500"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Иконка */}
                    <div className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                    
                    {/* Контент */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-lg text-white mb-2 group-hover:text-[#d67413] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Индикатор качества */}
                      <div className="mt-3 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-1 rounded-full transition-all duration-300 group-hover:scale-y-125 ${
                              i < 4 ? 'bg-[#d67413]' : 'bg-gray-600'
                            }`}
                            style={{ width: `${Math.random() * 12 + 8}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Декоративный элемент */}
                  <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <feature.icon className="h-16 w-16" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Заключительная секция */}
          <div className="mt-12 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-[#d67413] to-[#b3590d] rounded-lg">
              <div className="bg-[#1d2036] rounded-lg px-6 py-4">
                <div className="flex items-center justify-center gap-3">
                  <Gamepad2 className="h-5 w-5 text-[#d67413]" />
                  <span className="text-sm text-gray-300">
                    <span className="font-bold text-white">Ważne:</span> Każda z tych cech wpływa na ogólne doświadczenie gry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}