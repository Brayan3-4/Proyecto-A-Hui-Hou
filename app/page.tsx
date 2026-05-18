import { Header } from "@/components/header"
import { ImageSlider } from "@/components/image-slider"
import { FeaturedProducts } from "@/components/featured-products"
import { About } from "@/components/about"
import { CompanyInfo } from "@/components/company-info"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { AccessibilityControls } from "@/components/accessibility-controls"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ImageSlider />
      <FeaturedProducts />
      <About />
      <CompanyInfo />
      <Newsletter />
      <Footer />
      <AccessibilityControls />
    </main>
  )
}
