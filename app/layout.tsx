import type React from "react"
import type { Metadata } from "next"
import { Inter, Pixelify_Sans } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const pixelifySans = Pixelify_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-pixelify',
})

export const metadata: Metadata = {
  title: "Faktora AI - Talk to AI. Execute on-chain. Automate Defi.",
  description: "Autonomous AI agents for DeFi execution and on-chain intelligence",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} ${pixelifySans.className} bg-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}