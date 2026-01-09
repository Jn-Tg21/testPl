import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SlotOverview } from "@/components/slot-overview"
import { FeaturesGrid } from "@/components/features-grid"
import { SoftCta } from "@/components/soft-cta"
import { CommentsSection } from "@/components/comments-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SlotOverview />
        <FeaturesGrid />
        <SoftCta />
        <CommentsSection />
      </main>
      <Footer />
    </div>
  )
}
