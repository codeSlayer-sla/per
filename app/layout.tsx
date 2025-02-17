import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JGMS",
  description: "Personal portfolio showcasing my skills and projects",
  icons: {
    icon: "/favicon.icon.png", 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.icon.png" /> {/* This is the favicon link */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


