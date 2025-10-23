import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Shield } from "lucide-react"

// Simulación de usuarios
const users = [
  {
    id: 1,
    name: "Admin Usuario",
    email: "admin@ahuihou.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-01",
    orders: 0,
  },
  {
    id: 2,
    name: "Usuario Demo",
    email: "usuario@demo.com",
    role: "user",
    status: "active",
    joinDate: "2024-01-10",
    orders: 3,
  },
  {
    id: 3,
    name: "María González",
    email: "maria@email.com",
    role: "user",
    status: "active",
    joinDate: "2024-01-12",
    orders: 5,
  },
  {
    id: 4,
    name: "Carlos Ruiz",
    email: "carlos@email.com",
    role: "user",
    status: "inactive",
    joinDate: "2024-01-08",
    orders: 1,
  },
]

export function UsersManager() {
  const getRoleBadge = (role: string) => {
    return role === "admin" ? (
      <Badge variant="destructive">
        <Shield className="h-3 w-3 mr-1" />
        Admin
      </Badge>
    ) : (
      <Badge variant="secondary">Usuario</Badge>
    )
  }

  const getStatusBadge = (status: string) => {
    return status === "active" ? <Badge variant="default">Activo</Badge> : <Badge variant="secondary">Inactivo</Badge>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gestión de Usuarios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Fecha Registro</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {user.role !== "admin" && (
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
