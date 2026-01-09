import { Card, CardContent } from "@/components/ui/card"
import { Gift, Zap, Clock, AlertTriangle, Target, Sparkles } from "lucide-react"

const features = [
  {
    icon: Gift,
    title: "Częste rundy bonusowe",
    description: "Bonusy wpadają stosunkowo często, co utrzymuje zainteresowanie grą",
    color: "from-primary to-success",
  },
  {
    icon: Zap,
    title: "Wysokie mnożniki",
    description: "W szczęśliwych momentach mnożniki mogą sięgnąć x500 i więcej",
    color: "from-accent to-warning",
  },
  {
    icon: Clock,
    title: "Dobra gra na krótkie sesje",
    description: "Dynamiczna rozgrywka sprawia, że nawet 15 minut daje dużo emocji",
    color: "from-success to-primary",
  },
  {
    icon: AlertTriangle,
    title: "Wysokie ryzyko szybkich strat",
    description: "Przy złej passie można stracić budżet w kilka minut",
    color: "from-destructive to-warning",
  },
  {
    icon: Target,
    title: "Prosta mechanika",
    description: "Łatwa do zrozumienia dla początkujących, bez skomplikowanych funkcji",
    color: "from-accent to-primary",
  },
  {
    icon: Sparkles,
    title: "Przyjemna grafika",
    description: "Czytelne symbole i płynne animacje bez zbędnych efektów",
    color: "from-warning to-accent",
  },
]

export function FeaturesGrid() {
  return (
    <section id="strategie" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            {"Co wyróżnia Chicken Road?"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-border/50 bg-gradient-to-br from-card to-card/80 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] backdrop-blur group"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm sm:text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
