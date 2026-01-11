// components/footer.tsx
import { Facebook, Twitter, MessageSquare, Shield, Users, Heart, Crown, Coins, Trophy, Star, Globe, Phone, Mail, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#171a29] to-[#0f111e] border-t border-[#d67413]/20">
      {/* Верхняя часть футера */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Колонка 1: Лого и описание */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-xl font-bold text-white">VOX Casino</h3>
                <p className="text-sm text-gray-400">Licencjonowane kasyno</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Oficjalna strona dyskusyjna VOX Casino. Dzielimy się doświadczeniami, analizami i uczciwymi opiniami o najgorętszych slotach tego sezonu.
            </p>
            <div className="flex gap-3">
              <Button className="gap-2 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-semibold px-6">
                <Coins className="h-4 w-4" />
                Odbierz Bonus
              </Button>
              <Button variant="outline" className="gap-2 bg-white border-[#d67413] text-[#d67413] hover:bg-[#d67413]/10 hover:text-white px-6">
                <MessageSquare className="h-4 w-4" />
                Dyskutuj
              </Button>
            </div>
          </div>

          {/* Колонка 2: Быстрые ссылки */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#d67413]" />
              Szybkie Linki
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Przegląd Kasyna", href: "#przeglad" },
                { label: "Bonusy i Promocje", href: "#bonusy" },
                { label: "Gry Kasynowe", href: "#gry" },
                { label: "Live Casino", href: "#live" },
                { label: "Metody Płatności", href: "#platnosci" },
                { label: "FAQ i Pomoc", href: "#pomoc" },
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-[#d67413] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-[#d67413] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#d67413]" />
              Informacje
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Trophy className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Licencjonowane kasyno online</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">SSL Szyfrowanie danych</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Certyfikowane gry RNG</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-4 w-4 text-gray-400 mt-0.5" />
                <span className="text-gray-400 text-sm">Wsparcie 24/7</span>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#d67413]" />
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">E-mail</p>
                  <p className="text-sm text-gray-300">support@voxcasino.pl</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Live Chat</p>
                  <p className="text-sm text-gray-300">Dostępny 24/7</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="flex gap-3">
                  <a href="#" className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#d67413] hover:text-white transition-all duration-300 group">
                    <Facebook className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#d67413] hover:text-white transition-all duration-300 group">
                    <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="#" className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#d67413] hover:text-white transition-all duration-300 group">
                    <svg className="h-4 w-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Средняя часть: Платежные системы */}
      

      {/* Нижняя часть футера */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Копирайт */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              © {currentYear} VOX Casino. Wszelkie prawa zastrzeżone.
            </p>
            <p className="text-xs text-gray-500 mt-2 max-w-lg">
              VOX Casino działa zgodnie z licencją międzynarodową. Hazard wiąże się z ryzykiem. Graj odpowiedzialnie.
            </p>
          </div>

          {/* Disclaimer и ссылки */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Heart className="h-3 w-3 text-red-400" />
                <span>18+ | Odpowiedzialna Gra</span>
              </div>
              <div className="h-4 w-px bg-white/10"></div>
              <a href="#" className="text-xs text-[#d67413] hover:text-[#e68a29] transition-colors">
                Polityka prywatności
              </a>
              <div className="h-4 w-px bg-white/10"></div>
              <a href="#" className="text-xs text-[#d67413] hover:text-[#e68a29] transition-colors">
                Regulamin
              </a>
              <div className="h-4 w-px bg-white/10"></div>
              <a href="#" className="text-xs text-[#d67413] hover:text-[#e68a29] transition-colors">
                Zgody cookie
              </a>
            </div>
            
            {/* Бейджи лицензий */}
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="px-3 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-xs text-gray-400">Licencja Curacao</span>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-xs text-gray-400">RNG Certified</span>
              </div>
              <div className="px-3 py-1 bg-white/5 rounded border border-white/10">
                <span className="text-xs text-gray-400">GamCare Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Градиентная линия в самом низу */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#d67413] to-transparent opacity-30" />
    </footer>
  )
}