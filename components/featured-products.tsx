import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Almendras",
    price: 18500,
    image: "https://f.fcdn.app/imgs/d71a13/www.lamolienda.uy/moliuy/bf28/original/catalogo/000000000003083_000000000003083_1/2000-2000/almendras-peladas-tostadas-100g-almendra-pel-tostada-x-22-68.jpg",
    category: "Frutos secos",
  },
  {
    id: 2,
    name: "Semillas de Chía",
    price: 9000,
    image: "https://unimarc.vtexassets.com/arquivos/ids/233406/000000000000575376-KG-01.jpg?v=638200265654700000",
    category: "Semillas y granos",
  },
  {
    id: 3,
    name: "Miel Pura",
    price: 18500,
    image: "https://previews.123rf.com/images/kovalevaka/kovalevaka1708/kovalevaka170800023/84624517-liquid-honey-dripping-into-jar-from-dipper-isolated-on-white-background.jpg",
    category: "Endulzantes naturales",
  },
  {
    id: 4,
    name: "Mango Deshidratado",
    price: 16500,
    image: "https://frutosysemillas.com/cdn/shop/files/mango.jpg?v=1696626369",
    category: "Frutas deshidratadas",
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
                  <p className="text-2xl font-bold text-foreground mb-4">${product.price.toLocaleString("es-CO")}</p>
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
