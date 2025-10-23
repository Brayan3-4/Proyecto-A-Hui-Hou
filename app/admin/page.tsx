import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdminDashboard />
        </div>
      </div>
      <Footer />
    </main>
  )
}
