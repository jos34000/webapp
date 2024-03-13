"use client"
import "@/app/globals.css"

export default function RootLayout({ children, session }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
