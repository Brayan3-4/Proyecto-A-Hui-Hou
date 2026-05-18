"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: "welcome",
    title: "BIENESTAR NATURAL",
    subtitle: "PARA TU VIDA SALUDABLE",
    description: "Descubre nuestra cuidadosa selección de productos naturales y orgánicos que nutren tu cuerpo y elevan tu espíritu hacia una vida más plena.",
    showButtons: true,
    bgImage: null
  },
  {
    id: "naturales",
    title: "Productos 100% Naturales",
    subtitle: "",
    description: "Seleccionados cuidadosamente para tu bienestar",
    showButtons: false,
    bgImage: "https://www.nutrimarket.com/blog/wp-content/uploads/2023/02/6.png"
  },
  {
    id: "frutos",
    title: "Frutos Secos Premium",
    subtitle: "",
    description: "Almendras, nueces y más de la mejor calidad",
    showButtons: false,
    bgImage: "https://www.recetasnestle.com.mx/sites/default/files/2022-05/frutos-secos-semillas.jpg.jpg"
  },
  {
    id: "semillas",
    title: "Semillas y Superalimentos",
    subtitle: "",
    description: "Chía, quinoa y semillas para una vida saludable",
    showButtons: false,
    bgImage: "https://wp.es.aleteia.org/wp-content/uploads/sites/7/2017/09/web3-quinoa-chia-amaranto-seeds-healthy-food-shutterstock_509078254-efetova-anna-ai.jpg"
  },
  {
    id: "frutas",
    title: "Frutas Deshidratadas",
    subtitle: "",
    description: "Snacks saludables sin azúcar añadida",
    showButtons: false,
    bgImage: "https://granvita.com/wp-content/uploads/2024/03/fruta-deshidratada-beneficios.jpg"
  },
  {
    id: "envios",
    title: "Envíos a Todo Colombia",
    subtitle: "",
    description: "Recibe tus productos naturales en tu puerta",
    showButtons: false,
    bgImage: "https://cdn.shopify.com/s/files/1/0335/1062/1243/files/parcel.jpg?v=1596836455"
  }
]

const GRADIENT = "linear-gradient(135deg, #1a3a5c 0%, #2B587D 25%, #2d8a9c 50%, #3d9a8b 75%, #2B7C59 100%)"

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center"
          >
            {/* Base gradient — always on top as the dominant layer */}
            <div
              className="absolute inset-0"
              style={{ background: GRADIENT }}
            />

            {/* Background image — only for slides 2–6, very subtle */}
            {slide.bgImage && (
              <div
                className="absolute inset-0 bg-center bg-cover mix-blend-overlay"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  opacity: 0.70
                }}
              />
            )}

            {/* Dark overlay to keep text readable */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
              <h2
                className={`font-audiowide text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-wider transition-all duration-700 ${
                  currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {slide.title}
              </h2>
              {slide.subtitle && (
                <h3
                  className={`font-audiowide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider transition-all duration-700 delay-100 ${
                    currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {slide.subtitle}
                </h3>
              )}
              <p
                className={`text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-200 ${
                  currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {slide.description}
              </p>
              {slide.showButtons && (
                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
                    currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <Link href="/productos">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-[#5dd9c1] hover:bg-[#4fb3d4] text-[#1e3a5f] font-semibold hover:scale-105 transition-transform duration-300 text-lg px-8 py-6"
                    >
                      Explorar Productos
                    </Button>
                  </Link>
                  <Link href="/sobre-nosotros">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-transform duration-300 text-lg px-8 py-6"
                    >
                      Nuestra Historia
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white h-14 w-14 rounded-full backdrop-blur-sm"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white h-14 w-14 rounded-full backdrop-blur-sm"
        onClick={nextSlide}
        aria-label="Slide siguiente"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-10"
                : "bg-white/50 hover:bg-white/75 w-3"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}