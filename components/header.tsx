"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { CartButton } from "@/components/cart/cart-button"
import { User, Menu, X, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* ---------- LOGO (DOS IMÁGENES) ---------- */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Primera imagen: ícono o símbolo */}
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logodef.png"
                alt="Símbolo A Hui Hou"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Segunda imagen: texto del logo o nombre */}
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logoLetra.png"
                alt="Texto A Hui Hou"
                width={220}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* ---------- NAVEGACIÓN DESKTOP ---------- */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/productos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Productos
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              Contacto
            </Link>
          </nav>

          {/* ---------- ACCIONES DESKTOP ---------- */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Mi Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Mis Pedidos</DropdownMenuItem>
                  {user.role === "admin" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/admin">Panel Admin</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
            )}
            <CartButton />
          </div>

          {/* ---------- BOTÓN MENÚ MÓVIL ---------- */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* ---------- NAVEGACIÓN MÓVIL ---------- */}
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
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {user ? (
                  <>
                    <div className="text-sm font-medium text-foreground">Hola, {user.name}</div>
                    {user.role === "admin" && (
                      <Link href="/admin">
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                          Panel Admin
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <Link href="/login">
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
