import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Almendras",
    price: 15900,
    image: "/organic-coconut-oil-jar-natural.jpg",
    category: "Frutos secos",
  },
  {
    id: 2,
    name: "Miel de Manuka Premium",
    price: 45.99,
    image: "/manuka-honey-jar-premium-natural.jpg",
    category: "Superalimentos",
  },
  {
    id: 3,
    name: "Té Verde Matcha Ceremonial",
    price: 32.99,
    image: "/matcha-green-tea-powder-ceremonial.jpg",
    category: "Tés y Hierbas",
  },
  {
    id: 4,
    name: "Semillas de Chía Orgánicas",
    price: 18.99,
    image: "/organic-chia-seeds-package-natural.jpg",
    category: "Semillas y Granos",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">Productos Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Una selección especial de nuestros productos más valorados por su calidad excepcional y beneficios para tu
            bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="product-card border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
                  <h3 className="font-semibold text-foreground mb-2 text-balance">{product.name}</h3>
                  <p className="text-2xl font-bold text-foreground mb-4">${product.price}</p>
                  <Button className="w-full">Agregar al Carrito</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/productos">
            <Button variant="outline" size="lg">
              Ver Todos los Productos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
