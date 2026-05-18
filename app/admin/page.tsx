import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
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
          <AdminDashboard />
        </div>
      </div>
      <Footer />
    </main>
  )
}
