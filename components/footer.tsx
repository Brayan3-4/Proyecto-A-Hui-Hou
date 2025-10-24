import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* Logo circular reemplazado por imagen */}
              <Image
                src="/AHuiHouB.png"
                alt="Logo A Hui Hou"
                width={120}
                height={80}
                className="object-contain"
              />
              {/* Texto reemplazado por imagen */}
              <Image
                src="/AHuiHouLB.png"
                alt="A Hui Hou"
                width={220}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-background/80 mb-4 max-w-md text-balance">
              Sumérgete en las profundidades de nuestro mundo saludable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/productos" className="text-background/80 hover:text-background transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-background/80 hover:text-background transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-background/80 hover:text-background transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-background/80 hover:text-background transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-background/80">
              <li>AHuiHou6063@gmail.com</li>
              <li>+57 3151604094</li>
              <li>Lun - Sab: 9:00 - 17:00</li>
              <li>Domingos: No hay servicio</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">© 2025 A Hui Hou. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
