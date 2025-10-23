"use client"
import { useAuth } from "@/components/auth/auth-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductsManager } from "./products-manager"
import { OrdersManager } from "./orders-manager"
import { UsersManager } from "./users-manager"
import { DashboardStats } from "./dashboard-stats"
import { Package, ShoppingCart, Users, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/")
    }
  }, [user, router])

  if (!user || user.role !== "admin") {
    return (
      <div className="text-center py-16">
        <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">Acceso Denegado</h2>
        <p className="text-muted-foreground">No tienes permisos para acceder a esta página.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-playfair text-3xl font-bold text-foreground">Panel de Administración</h1>
          <p className="text-muted-foreground">Gestiona tu tienda A Hui Hou</p>
        </div>
      </div>

      <DashboardStats />

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Resumen
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Productos
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Pedidos
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Usuarios
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Resumen General</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BarChart3 className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Dashboard de Análisis</h3>
                <p className="text-muted-foreground">
                  Aquí se mostrarían gráficos y métricas detalladas de ventas, productos más vendidos, y análisis de
                  usuarios.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <ProductsManager />
        </TabsContent>

        <TabsContent value="orders">
          <OrdersManager />
        </TabsContent>

        <TabsContent value="users">
          <UsersManager />
        </TabsContent>
      </Tabs>
    </div>
  )
}
