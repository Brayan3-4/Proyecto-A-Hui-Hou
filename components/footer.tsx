import Link from "next/link"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2B7C59] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.jpg" alt="A Hui Hou" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-playfair text-2xl font-bold">A Hui Hou</span>
            </Link>
            <p className="text-white/80 mb-4 text-sm text-balance">
              Tu tienda de confianza para productos naturales y saludables.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/ahuihou_natural"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/ahuihou"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ahuihou"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-white/80 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-white/80 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/pqr" className="text-white/80 hover:text-white transition-colors">
                  PQR
                </Link>
              </li>
              <li>
                <Link href="/desarrolladores" className="text-white/80 hover:text-white transition-colors">
                  Desarrolladores
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/tratamiento-datos" className="text-white/80 hover:text-white transition-colors">
                  Tratamiento de Datos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><b>Correo: </b><br />AHuiHou6063@gmail.com</li>
              <li><b>Celular: </b><br />(+57) 315 160 40 94</li>
              <li><b>Ubicación: </b><br />Avenida 15 # 16 - 03, Barrio Ballenitas</li>
              <li><b>Horarios de atención: </b><br />Lunes - Viernes: 9:00 AM - 6:00 PM <br />Sábado: 10:00 AM - 4:00 PM<br />Domingo: Cerrado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2026 A Hui Hou. Todos los derechos reservados.</p>
          <p className="text-white/60 text-sm mt-2 md:mt-0">
            Desarrollado con Next.js y React
          </p>
        </div>
      </div>
    </footer>
  )
}
