import { ProductCatalog } from "@/components/products/product-catalog"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="fixed top-20 left-4 z-50">
        <Link href="/">
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm border-2 hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      {/* </CHANGE> */}
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestros Productos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Descubre nuestra cuidadosa selección de productos naturales y orgánicos para tu bienestar integral.
            </p>
          </div>
          <ProductCatalog />
        </div>
      </div>
      <Footer />
    </main>
  )
}
