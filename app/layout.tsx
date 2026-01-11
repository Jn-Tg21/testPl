import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Основные метаданные
  title: {
    default: "VOX Casino – Legalne Kasyno Online z Bonusem 725% do 3000€",
    template: "%s | VOX Casino"
  },
  description: "VOX Casino to legalne kasyno online z bonusem 725% do 3000€ + 600 FS. Graj w najnowsze sloty, gry stołowe i kasyno na żywo od Spinomenal, EvoPlay. Szybkie wypłaty, licencja i bezpieczeństwo.",
  
  // Ключевые слова для SEO
  keywords: [
    "VOX Casino",
    "kasyno online",
    "legalne kasyno",
    "bonus kasynowy",
    "slot online",
    "gry kasynowe",
    "kasyno na żywo",
    "bonus 725%",
    "free spiny",
    "Spinomenal",
    "EvoPlay",
    "kryptowaluty kasyno",
    "bezpieczne kasyno",
    "szybkie wypłaty",
    "turnieje kasynowe"
  ],
  
  // Авторы и создатели
  authors: [
    { name: "VOX Casino", url: "https://voxcasino.eu.com" },
  ],
  
  // Категория и темы
  category: "Gambling",
  classification: "Online Casino",
  
  // Иконки сайта
  icons: {
    icon: [
      {
        url: "/vox2.png",
        media: "(prefers-color-scheme: light)",
        sizes: "any",
        type: "image/png",
      },
      {
        url: "/vox2.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/vox2.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/vox2.png"],
  },
  
  // Open Graph для социальных сетей
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://voxcasino.eu.com",
    title: "VOX Casino – Legalne Kasyno Online z Bonusem 725% do 3000€",
    description: "Legalne kasyno online z bonusem 725% do 3000€ + 600 FS. Tysiące gier, szybkie wypłaty, pełna licencja.",
    siteName: "VOX Casino",
    images: [
      {
        url: "https://voxcasino.eu.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VOX Casino - Najlepsze Kasyno Online",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "VOX Casino – Legalne Kasyno Online z Bonusem 725% do 3000€",
    description: "Legalne kasyno online z bonusem 725% do 3000€ + 600 FS. Graj teraz i wygrywaj!",
    images: ["https://voxcasino.eu.com/twitter-image.jpg"],
    creator: "@voxcasino",
    site: "@voxcasino",
  },
  
  // Дополнительные метаданные
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Версии для других языков
  
  // Другие метатеги
  manifest: "/manifest.json",
  
  // Apple specific
  appleWebApp: {
    title: "VOX Casino",
    statusBarStyle: "black-translucent",
  },
  
  // Viewport для мобильных (в Next.js 15 это в layout.tsx)
  
  
  // Дополнительные теги
  other: {
    "format-detection": "telephone=no",
    "theme-color": "#d67413",
    "msapplication-TileColor": "#d67413",
    "msapplication-config": "/browserconfig.xml",
  },
}

// Структурированные данные для SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Casino",
  "name": "VOX Casino",
  "description": "Legalne kasyno online z bonusem powitalnym 725% do 3000€ + 600 darmowych spinów",
  "url": "https://voxcasino.eu.com",
  "logo": "https://voxcasino.eu.com/logo.png",
  "sameAs": [
    "https://facebook.com/voxcasino",
    "https://twitter.com/voxcasino",
    "https://instagram.com/voxcasino"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "EU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "paymentAccepted": ["Credit Card", "Cryptocurrency", "E-wallet"],
  "currenciesAccepted": ["EUR", "PLN", "USD"],
  "priceRange": "€€",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Casino Games",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Game",
          "name": "Online Slots",
          "description": "Klasyczne, tematyczne i progresywne sloty"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Game",
          "name": "Live Casino",
          "description": "Gry na żywo z prawdziwymi krupierami"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "1250",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Viewport для мобильных устройств */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Дополнительные SEO теги */}
        <meta name="language" content="Polish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="Adult" />
        <meta name="copyright" content="VOX Casino" />
        
        {/* Гео-метатеги */}
        <meta name="geo.region" content="EU" />
        <meta name="geo.placename" content="Europe" />
        <meta name="geo.position" content="" />
        <meta name="ICBM" content="" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}