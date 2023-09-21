import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "./_components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mile Competition",
  description: "Web app to track stats and countdown for biweekly mile competition",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{margin:0}}><Header></Header>{children}</body>
    </html>
  )
}

//className = inter.className initializes the css to have a magrn of 8px -> look into it in the future