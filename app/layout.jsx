"use client"
import "@/app/globals.css"
import Header from "@/lib/components/Molecules/Header.jsx"
import Footer from "@/lib/components/Molecules/Footer.jsx"
import Cookies from "js-cookie"
import { useEffect } from "react"

export default function RootLayout({ children }) {
  useEffect(() => {
    const pathsThatRequireToken = [
      "/account",
      "/modifmdp",
      "/rdv",
      "/modifantecedent",
    ]
    if (typeof window !== "undefined") {
      const path = window.location.pathname
      if (pathsThatRequireToken.includes(path)) {
        const token = Cookies.get("token")
        if (!token) {
          window.location.href = "/login"
        }
      }
    }
  }, [])

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
