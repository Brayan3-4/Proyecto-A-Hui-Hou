"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, Contrast, Type } from "lucide-react"

export function AccessibilityControls() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`
  }, [fontSize])

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }, [highContrast])

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10)
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10)
    }
  }

  const toggleContrast = () => {
    setHighContrast(!highContrast)
  }

  const resetAccessibility = () => {
    setFontSize(100)
    setHighContrast(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`flex flex-col gap-2 mb-2 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <Button
          onClick={increaseFontSize}
          size="icon"
          variant="outline"
          className="bg-white shadow-lg hover:bg-[#2B7C59] hover:text-white"
          aria-label="Aumentar tamaño de fuente"
          title="Aumentar tamaño de fuente"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={decreaseFontSize}
          size="icon"
          variant="outline"
          className="bg-white shadow-lg hover:bg-[#2B7C59] hover:text-white"
          aria-label="Disminuir tamaño de fuente"
          title="Disminuir tamaño de fuente"
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={toggleContrast}
          size="icon"
          variant="outline"
          className={`bg-white shadow-lg hover:bg-[#2B587D] hover:text-white ${highContrast ? "bg-[#2B587D] text-white" : ""}`}
          aria-label="Alternar alto contraste"
          title="Alternar alto contraste"
        >
          <Contrast className="h-5 w-5" />
        </Button>

        <Button
          onClick={resetAccessibility}
          size="icon"
          variant="outline"
          className="bg-white shadow-lg hover:bg-gray-600 hover:text-white"
          aria-label="Restablecer accesibilidad"
          title="Restablecer accesibilidad"
        >
          <Type className="h-5 w-5" />
        </Button>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full h-14 w-14 bg-gradient-to-r from-[#2B587D] to-[#2B7C59] hover:from-[#1a3a5c] hover:to-[#1f5c42] shadow-xl"
        aria-label="Controles de accesibilidad"
        title="Controles de accesibilidad"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      </Button>
    </div>
  )
}
