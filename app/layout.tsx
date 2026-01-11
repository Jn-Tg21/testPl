import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chicken Road – Opinie Graczy",
  description: "Społeczność graczy Chicken Road dzieli się opiniami, strategiami i doświadczeniami",
  icons: {
    icon: [
      {
        url: "/vox2.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/vox2.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/vox2.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/vox2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
