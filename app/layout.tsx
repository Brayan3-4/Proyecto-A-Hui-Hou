import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Audiowide } from "next/font/google"
import { AuthProvider } from "@/components/auth/auth-provider"
import { CartProvider } from "@/components/cart/cart-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
  display: "swap",
})

export const metadata: Metadata = {
  title: "A Hui Hou - Productos Naturales y Saludables",
  description: "Descubre nuestra selección de productos naturales y saludables para tu bienestar integral.",
  keywords: ["productos naturales", "alimentos saludables", "frutos secos", "semillas", "A Hui Hou", "Colombia"],
  authors: [{ name: "A Hui Hou" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${audiowide.variable} antialiased bg-background`}>
      <head>
        {/* Meta tags para cumplimiento W3C */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2B7C59" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className="font-sans min-h-screen">
        {/* Skip link para accesibilidad - Navegación por teclado */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <AuthProvider>
          <CartProvider>
            <div id="main-content" role="main">
              {children}
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
