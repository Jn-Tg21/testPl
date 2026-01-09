"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquarePlus, Sparkles, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary/30 bg-secondary/98 backdrop-blur-xl supports-[backdrop-filter]:bg-secondary/95 shadow-[0_0_20px_rgba(217,179,16,0.15)]">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4">
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-accent/30" />
            </div>
            <h1 className="text-sm sm:text-base lg:text-lg font-bold tracking-tight bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              {"Chicken Road"}
            </h1>
          </div>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm">
            <a
              href="#przeglad"
              className="text-foreground/80 hover:text-accent transition-colors font-medium hover:scale-105 duration-200"
            >
              {"Przegląd"}
            </a>
            <a
              href="#doswiadczenia"
              className="text-foreground/80 hover:text-accent transition-colors font-medium hover:scale-105 duration-200"
            >
              {"Doświadczenia"}
            </a>
            <a
              href="#strategie"
              className="text-foreground/80 hover:text-accent transition-colors font-medium hover:scale-105 duration-200"
            >
              {"Strategie"}
            </a>
            <a
              href="#komentarze"
              className="text-foreground/80 hover:text-accent transition-colors font-medium hover:scale-105 duration-200"
            >
              {"Komentarze"}
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button className="hidden sm:flex gap-2 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 border border-accent/20">
            <span className="hidden md:inline">{"Bonus"}</span>
            <span className="md:hidden">{"Bonus"}</span>
          </Button>
          <Button size="sm" className="sm:hidden bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-card/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <a
              href="#przeglad"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              {"Przegląd"}
            </a>
            <a
              href="#doswiadczenia"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              {"Doświadczenia graczy"}
            </a>
            <a
              href="#strategie"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              {"Strategie"}
            </a>
            <a
              href="#komentarze"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent transition-colors font-medium py-2"
            >
              {"Komentarze"}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
