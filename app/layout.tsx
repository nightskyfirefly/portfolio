import type { Metadata } from 'next'
import { Cormorant_Garamond, Quicksand, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import AuroraBg from '@/components/Background/AuroraBg'
import Fireflies from '@/components/Background/Fireflies'
import Moondust from '@/components/Background/Moondust'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Mia Murphy - Finance × Data Portfolio',
  description: 'Finance-to-Data bridge: FP&A, P&L, dashboards, automation, and AI-driven reporting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${quicksand.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AuroraBg />
        <Fireflies />
        <Moondust />
        {children}
      </body>
    </html>
  )
}
