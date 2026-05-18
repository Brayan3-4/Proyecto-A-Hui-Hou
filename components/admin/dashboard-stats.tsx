import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, ShoppingCart, Users, DollarSign } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Productos Totales",
      value: "24",
      change: "+2 este mes",
      icon: Package,
    },
    {
      title: "Pedidos Pendientes",
      value: "12",
      change: "+3 hoy",
      icon: ShoppingCart,
    },
    {
      title: "Usuarios Registrados",
      value: "156",
      change: "+8 esta semana",
      icon: Users,
    },
    {
      title: "Ventas del Mes",
      value: "$2,847",
      change: "+12% vs mes anterior",
      icon: DollarSign,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
