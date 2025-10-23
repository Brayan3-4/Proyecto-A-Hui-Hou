import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="hero-gradient py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Bienestar Natural para tu <span className="text-primary">Vida Saludable</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Descubre nuestra cuidadosa selección de productos naturales y orgánicos que nutren tu cuerpo y elevan tu
            espíritu hacia una vida más plena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button size="lg" className="w-full sm:w-auto">
                Explorar Productos
              </Button>
            </Link>
            <Link href="/sobre-nosotros">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Nuestra Historia
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
