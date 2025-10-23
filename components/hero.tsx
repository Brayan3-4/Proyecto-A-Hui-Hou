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
    <section className="hero-gradient py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`font-audiowide text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance tracking-wider transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            BIENESTAR NATURAL PARA TU <span className="text-primary tech-text inline-block">VIDA SALUDABLE</span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance transition-all duration-1000 delay-200 ${
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
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                Explorar Productos
              </Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent hover:scale-105 transition-transform duration-300"
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
