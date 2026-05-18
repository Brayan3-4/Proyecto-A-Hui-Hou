"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden circuit-gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`font-audiowide text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance tracking-wider transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-white">BIENESTAR NATURAL PARA TU</span>{" "}
            <span className="text-white font-bold">VIDA SALUDABLE</span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Descubre nuestra cuidadosa selección de productos naturales y orgánicos que nutren tu cuerpo y elevan tu
            espíritu hacia una vida más plena.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link href="/productos">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#5dd9c1] hover:bg-[#4fb3d4] text-[#1e3a5f] font-semibold hover:scale-105 transition-transform duration-300"
              >
                Explorar Productos
              </Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300"
              >
                Nuestra Historia
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
