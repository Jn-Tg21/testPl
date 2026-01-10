"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Crown, Trophy, Menu, X, Shield, Star, Coins } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-accent/30 bg-[#171a29] backdrop-blur-xl supports-[backdrop-filter]:bg-[#171a29]/95 shadow-[0_4px_20px_rgba(214,116,19,0.3)]">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
        {/* Логотип и название */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* <div className="relative p-2 bg-gradient-to-br from-[#d67413] to-[#b3590d] rounded-lg">
              <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              <div className="absolute inset-0 rounded-lg border border-[#d67413]/50 shadow-inner"></div>
            </div> */}
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                VOX Casino
              </h1>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-[#d67413]" />
                <span className="text-xs text-gray-300">Licencjonowane kasyno</span>
              </div>
            </div>
          </div>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center gap-1">
            <a
              href="#przeglad"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              Przegląd
            </a>
            <a
              href="#bonusy"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Coins className="h-4 w-4" />
              Bonusy
            </a>
            <a
              href="#gry"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              Gry
            </a>
            <a
              href="#doswiadczenia"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Przegląd graczy
            </a>
            <a
              href="#strategie"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Strategie
            </a>
            <a
              href="#komentarze"
              className="px-4 py-2 text-sm font-medium text-white hover:text-[#d67413] transition-colors duration-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              Komentarze
            </a>
          </nav>
        </div>

        {/* Кнопки справа */}
        <div className="flex items-center gap-3">
          {/* Кнопка регистрации */}
          <Button className="hidden sm:flex gap-2 bg-gradient-to-r from-[#d67413] to-[#b3590d] hover:from-[#e68a29] hover:to-[#d67413] text-white font-bold shadow-lg hover:shadow-[0_0_20px_rgba(214,116,19,0.4)] transition-all duration-300 hover:scale-105 border border-[#d67413]/40 px-6 py-2 rounded-lg">
            <Crown className="h-4 w-4" />
            <span className="hidden md:inline">Zarejestruj się</span>
            <span className="md:hidden">Rejestracja</span>
          </Button>
          
          {/* Кнопка входа */}
          <Button variant="outline" className="hidden sm:flex gap-2 border-[#d67413] text-[#d67413] hover:bg-[#d67413]/10 font-medium px-4 py-2 rounded-lg">
            Zaloguj się
          </Button>

          {/* Кнопка бонуса для мобилки */}
          <Button size="sm" className="sm:hidden bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold px-4">
            Bonus +500 zł
          </Button>
          
          {/* Мобильное меню */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-[#d67413]/20 bg-[#1d2036]/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            <a
              href="#przeglad"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              <Star className="h-4 w-4" />
              Przegląd kasyna
            </a>
            <a
              href="#bonusy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              <Coins className="h-4 w-4" />
              Bonusy i promocje
            </a>
            <a
              href="#gry"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg flex items-center gap-3"
            >
              <Trophy className="h-4 w-4" />
              Gry kasynowe
            </a>
            <a
              href="#doswiadczenia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg"
            >
              Doświadczenia graczy
            </a>
            <a
              href="#strategie"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg"
            >
              Strategie gry
            </a>
            <a
              href="#komentarze"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-white hover:text-[#d67413] transition-colors font-medium hover:bg-white/5 rounded-lg"
            >
              Komentarze i opinie
            </a>
            
            <div className="flex gap-3 mt-4 px-4">
              <Button className="flex-1 bg-gradient-to-r from-[#d67413] to-[#b3590d] text-white font-bold py-3">
                Rejestracja
              </Button>
              <Button variant="outline" className="flex-1 border-[#d67413] text-[#d67413] py-3">
                Logowanie
              </Button>
            </div>
          </div>
        </nav>
      )}

      {/* Дополнительная строка с гарантиями */}
      {/* <div className="hidden lg:block border-t border-[#d67413]/10 bg-[#1d2036]/80">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-center gap-6 text-xs text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 text-[#d67413]" />
              <span>Licencja Curacao</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>SSL Szyfrowanie</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Odpowiedzialna gra</span>
            </div>
            <div className="h-3 w-px bg-[#d67413]/30"></div>
            <div className="flex items-center gap-2">
              <Crown className="h-3 w-3 text-[#d67413]" />
              <span>18+ Tylko dla pełnoletnich</span>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  )
}