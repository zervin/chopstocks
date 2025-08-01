import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ErrorBoundary from "@/components/error-boundary"
import logger from "@/lib/monitoring/logger"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ChopStocks - AI-Powered Investment Intelligence",
  description: "Transform complex market data into digestible insights with AI-powered investment analysis.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}