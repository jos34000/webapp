"use client"
import "@/app/globals.css"
import { SessionProvider } from "next-auth/react"

export default function RootLayout({ children, session }) {
  return (
    <html lang="fr">
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
