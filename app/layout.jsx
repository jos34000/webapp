"use client"
import "@/app/globals.css"
import Header from "@/lib/components/Molecules/Header.jsx"
import Footer from "@/lib/components/Molecules/Footer.jsx"

export default function RootLayout({ children, session }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
