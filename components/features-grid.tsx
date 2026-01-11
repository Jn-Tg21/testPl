import { Card, CardContent } from "@/components/ui/card"
import { Gift, ShieldCheck, Gamepad2, CreditCard, Trophy, Zap, Star } from "lucide-react"

const casinoFeatures = [
  {
    icon: Gift,
    title: "Hojny Bonus Powitalny",
    description: "Do 5000 zł + 300 darmowych spinów za pierwsze trzy depozyty - najlepsza oferta na rynku",
    color: "from-[#d67413] to-[#b3590d]",
    bg: "bg-gradient-to-br from-[#d67413]/10 to-[#b3590d]/5",
    border: "border-[#d67413]/30",
  },
  {
    icon: ShieldCheck,
    title: "Licencjonowane Bezpieczeństwo",
    description: "Pełna licencja, szyfrowanie SSL i certyfikowane gry RNG dla 100% bezpieczeństwa",
    color: "from-green-500 to-emerald-600",
    bg: "bg-gradient-to-br from-green-500/10 to-emerald-600/5",
    border: "border-green-500/30",
  },
  {
    icon: Gamepad2,
    title: "Topowi Dostawcy Gier",
    description: "Spinomenal, EvoPlay, Gamezix - setki slotów, gry stołowe i kasyno na żywo w HD",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/5",
    border: "border-blue-500/30",
  },
  {
    icon: CreditCard,
    title: "Nowoczesne Płatności",
    description: "Karty, e-portfele i kryptowaluty (Bitcoin, Ethereum) - szybkie wpłaty i wypłaty",
    color: "from-purple-500 to-pink-500",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/5",
    border: "border-purple-500/30",
  },
  {
    icon: Trophy,
    title: "Cotygodniowe Turnieje",
    description: "Regularne konkursy ze stałymi nagrodami pieniężnymi - rywalizuj z innymi graczami",
    color: "from-amber-500 to-yellow-600",
    bg: "bg-gradient-to-br from-amber-500/10 to-yellow-600/5",
    border: "border-amber-500/30",
  },
  {
    icon: Zap,
    title: "Szybkie Wypłaty",
    description: "Natychmiastowe transakcje przez e-portfele i kryptowaluty, minimalne opóźnienia",
    color: "from-indigo-500 to-purple-600",
    bg: "bg-gradient-to-br from-indigo-500/10 to-purple-600/5",
    border: "border-indigo-500/30",
  },
]

export function VoxCasinoFeatures() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#171a29] to-[#1a1d2e] relative overflow-hidden">
      {/* Элементы декора фона */}
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
              <span className="text-sm font-medium text-gray-300">KLUCZOWE CECHY</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Co Wyróżnia VOX Casino?
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Poznaj 6 najważniejszych zalet, które sprawiają, że VOX Casino jest wyjątkowym wyborem
            </p>
          </div>

          {/* Сетка фич */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinoFeatures.map((feature, index) => (
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
                              i < 5 ? 'bg-[#d67413]' : 'bg-gray-600'
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
        </div>
      </div>
    </section>
  )
}