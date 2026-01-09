import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Clock, TrendingUp } from "lucide-react"

export function ActivityIndicators() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-md">
        <CardContent className="p-3 sm:p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-success shadow-lg">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-foreground">{"3 nowe komentarze"}</p>
            <p className="text-xs text-muted-foreground">{"dzisiaj"}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5 hover:border-accent/40 transition-all duration-300 hover:scale-105 shadow-md">
        <CardContent className="p-3 sm:p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-warning shadow-lg">
            <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-foreground">{"Ostatnia odpowiedź"}</p>
            <p className="text-xs text-muted-foreground">{"1 godzinę temu"}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-success/20 bg-gradient-to-br from-card to-success/5 hover:border-success/40 transition-all duration-300 hover:scale-105 shadow-md sm:col-span-1 col-span-1">
        <CardContent className="p-3 sm:p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-success to-primary shadow-lg">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-success-foreground" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-bold text-foreground">{"Najczęściej omawiana"}</p>
            <p className="text-xs text-muted-foreground">{"opinia"}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
