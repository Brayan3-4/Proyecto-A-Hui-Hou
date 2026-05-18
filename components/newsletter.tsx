"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "¡Suscripción exitosa!",
      description: "Gracias por suscribirte a nuestro boletín",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-[#7AA77A]/10 via-background to-[#5dd9c1]/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mantente Conectado con la{" "}
            <span className="bg-gradient-to-r from-[#5dd9c1] to-[#2B7C59] bg-clip-text text-transparent">
              Naturaleza
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Recibe consejos de bienestar, recetas saludables y ofertas exclusivas directamente en tu correo.
          </p>
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col sm:flex-row gap-4 max-w-md mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 focus:scale-105 transition-transform duration-300 focus:border-[#5dd9c1] focus:ring-[#5dd9c1]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              className="hover:scale-105 transition-transform duration-300 bg-[#5dd9c1] hover:bg-[#4fb3d4] text-[#1e3a5f]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Suscribiendo..." : "Suscribirse"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No spam. Solo contenido valioso para tu bienestar.</p>
        </div>
      </div>
    </section>
  )
}
