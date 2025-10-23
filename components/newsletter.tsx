"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"

export function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mantente Conectado con la <span className="text-primary">Naturaleza</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Recibe consejos de bienestar, recetas saludables y ofertas exclusivas directamente en tu correo.
          </p>
          <form
            className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 focus:scale-105 transition-transform duration-300"
              required
            />
            <Button type="submit" className="hover:scale-105 transition-transform duration-300">
              Suscribirse
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No spam. Solo contenido valioso para tu bienestar.</p>
        </div>
      </div>
    </section>
  )
}
