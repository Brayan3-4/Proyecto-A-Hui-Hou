"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-[#2B587D]/5 via-muted/50 to-[#4fb3d4]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Misión es tu{" "}
                <span className="bg-gradient-to-r from-[#2B587D] via-[#4fb3d4] to-[#5dd9c1] bg-clip-text text-transparent">
                  Bienestar
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-balance">
                En A Hui Hou creemos que la naturaleza nos brinda todo lo necesario para vivir una vida plena y
                saludable. Cada producto que seleccionamos pasa por rigurosos estándares de calidad y sostenibilidad.
              </p>
              <p className="text-muted-foreground mb-8 text-balance">
                Trabajamos directamente con productores locales y orgánicos para garantizar que recibas productos
                frescos, puros y llenos de los nutrientes que tu cuerpo necesita.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="group hover:scale-105 transition-all duration-300 p-4 rounded-lg border-2 border-transparent hover:border-[#4fb3d4] hover:bg-[#4fb3d4]/5">
                  <h3 className="font-semibold text-foreground mb-2">100% Natural</h3>
                  <p className="text-sm text-muted-foreground">Sin químicos ni conservantes artificiales</p>
                </div>
                <div className="group hover:scale-105 transition-all duration-300 p-4 rounded-lg border-2 border-transparent hover:border-[#5dd9c1] hover:bg-[#5dd9c1]/5">
                  <h3 className="font-semibold text-foreground mb-2">Sostenible</h3>
                  <p className="text-sm text-muted-foreground">Comprometidos con el medio ambiente</p>
                </div>
              </div>
            </div>
            <div
              className={`aspect-square overflow-hidden rounded-lg transition-all duration-1000 delay-300 border-4 ${
                isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
              }`}
              style={{
                borderImage: "linear-gradient(135deg, #2B587D, #4fb3d4, #5dd9c1, #7AA77A) 1",
              }}
            >
              <img
                src="/AHuiHou.jpg"
                alt="Productos naturales y sostenibles"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
