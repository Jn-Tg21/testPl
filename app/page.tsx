import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { VoxCasinoOverview } from "@/components/slot-overview"
import { VoxCasinoFeatures } from "@/components/features-grid"
import { SoftCta } from "@/components/soft-cta"
import CommentsSection from "@/components/comments-section"
import { Footer } from "@/components/footer"
import { FeaturedSlots } from "@/components/slots"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedSlots />
        <VoxCasinoOverview />
        <VoxCasinoFeatures />
        <SoftCta />
        <CommentsSection />
      </main>
      <Footer />
    </div>
  )
}
