// components/footer.tsx
import { Facebook, Twitter, MessageSquare, Zap, Shield, Users, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background to-secondary/5">
      {/* Верхняя часть футера */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Колонка 1: О нас */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div>
                <h3 className="text-lg font-bold">Chicken Road</h3>
                <p className="text-xs text-muted-foreground">Społeczność Graczy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Niezależna platforma stworzona przez graczy dla graczy. Dzielimy się prawdziwymi doświadczeniami, strategiami i uczciwymi recenzjami.
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <MessageSquare className="h-3 w-3" />
              Dołącz do dyskusji
            </Button>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              Przeglądaj
            </h4>
            <ul className="space-y-3">
              <li><a href="#przeglad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Analiza gry</a></li>
              <li><a href="#strategie" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strategie i porady</a></li>
              <li><a href="#doswiadczenia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Doświadczenia graczy</a></li>
              <li><a href="#bonusy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Porównanie bonusów</a></li>
              <li><a href="#ankieta" className="text-sm text-muted-foreground hover:text-primary transition-colors">Wyniki ankiety</a></li>
            </ul>
          </div>

          {/* Колонка 3: Информация */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              Informacje
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">Strona nieafiliowana</li>
              <li className="text-sm text-muted-foreground">Niezależne recenzje</li>
              <li className="text-sm text-muted-foreground">Bezpłatne porady</li>
              <li className="text-sm text-muted-foreground">Testy społecznościowe</li>
              <li className="text-sm text-muted-foreground">Zasady odpowiedzialnej gry</li>
            </ul>
          </div>

          {/* Колонка 4: Соцсети */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              Społeczność
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Dołącz do naszej społeczności i dziel się doświadczeniami.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Копирайт */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Chicken Road – Społeczność Graczy. Wszystkie prawa zastrzeżone.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                To jest strona dyskusyjna, nie afiliacyjna. Nie jesteśmy właścicielem gier hazardowych.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Heart className="h-3 w-3 text-red-500" />
                <span>Graj odpowiedzialnie. 18+</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Polityka prywatności</a>
                <span className="text-border">•</span>
                <a href="#" className="hover:text-primary transition-colors">Regulamin</a>
                <span className="text-border">•</span>
                <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Декоративный элемент */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  )
}