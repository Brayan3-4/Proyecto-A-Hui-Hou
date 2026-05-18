import { CartPage } from "@/components/cart/cart-page"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CarritoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CartPage />
        </div>
      </div>
      <Footer />
    </main>
  )
}
