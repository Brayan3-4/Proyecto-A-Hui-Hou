"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { CartButton } from "@/components/cart/cart-button"
import { User, Menu, X, LogOut } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú de usuario al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.user-menu-container')) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleLogout = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    logout()
    setIsMenuOpen(false)
    setShowUserMenu(false)
    router.push("/")
    router.refresh()
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-[#2B587D]/95 backdrop-blur supports-[backdrop-filter]:bg-[#2B587D]/90 shadow-md border-[#2B587D]/30"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
              <img src="/logo.jpg" alt="A Hui Hou Logo" className="h-full w-full object-contain" />
            </div>
            <span
              className={`font-audiowide text-xl font-bold tracking-wider transition-colors duration-300 ${
                isScrolled
                  ? "text-white"
                  : "bg-gradient-to-r from-[#2B587D] via-[#2B7C59] to-[#7AA77A] bg-clip-text text-transparent"
              }`}
            >
              A HUI HOU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-[#2B587D]"
              }`}
            >
              Productos
            </Link>
            <Link
              href="/sobre-nosotros"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-[#2B587D]"
              }`}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-[#2B587D]"
              }`}
            >
              Contacto
            </Link>
            <Link
              href="/pqr"
              className={`text-sm font-medium transition-all duration-300 hover:scale-110 ${
                isScrolled ? "text-white/90 hover:text-white" : "text-muted-foreground hover:text-[#2B587D]"
              }`}
            >
              PQR
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative user-menu-container">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`transition-all duration-300 hover:scale-105 ${
                    isScrolled ? "text-white hover:bg-white/10" : "hover:bg-[#2B587D]/10 hover:text-[#2B587D]"
                  }`}
                >
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                </Button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-popover border z-50">
                    <div className="py-1">
                      <Link
                        href="/perfil"
                        className="block px-4 py-2 text-sm hover:bg-accent"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        href="/perfil?tab=orders"
                        className="block px-4 py-2 text-sm hover:bg-accent"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Mis Pedidos
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          href="/admin"
                          className="block px-4 py-2 text-sm hover:bg-accent"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Panel Admin
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button
                        onClick={() => {
                          setShowUserMenu(false)
                          handleLogout()
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent"
                      >
                        <LogOut className="h-4 w-4 inline mr-2" />
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-all duration-300 hover:scale-105 ${
                    isScrolled ? "text-white hover:bg-white/10" : "hover:bg-[#2B587D]/10 hover:text-[#2B587D]"
                  }`}
                >
                  <User className="h-4 w-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}
            <CartButton />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/productos"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contacto
              </Link>
              <Link
                href="/pqr"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                PQR
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {user ? (
                  <>
                    <div className="text-sm font-medium text-foreground">Hola, {user.name}</div>
                    <Link href="/perfil" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Mi Perfil
                      </Button>
                    </Link>
                    {user.role === "admin" && (
                      <Link href="/admin" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                          Panel Admin
                        </Button>
                      </Link>
                    )}
                    <Button variant="ghost" size="sm" className="w-full justify-start" onClick={(e) => handleLogout(e)}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Iniciar Sesión
                    </Button>
                  </Link>
                )}
                <div className="w-full">
                  <CartButton />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}