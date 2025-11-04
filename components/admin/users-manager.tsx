"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Trash2, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Simulación de usuarios
const initialUsers = [
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
  const [users, setUsers] = useState(initialUsers)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<any>(null)
  const { toast } = useToast()

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

  const handleEditUser = (userId: number, userName: string) => {
    const user = users.find((u) => u.id === userId)
    if (user) {
      setEditingUser(user)
      setIsEditDialogOpen(true)
    }
  }

  const handleDeleteUser = (userId: number, userName: string) => {
    setUsers(users.filter((u) => u.id !== userId))
    toast({
      title: "Usuario eliminado",
      description: `${userName} ha sido eliminado del sistema`,
      variant: "destructive",
    })
  }

  const handleSaveEdit = () => {
    if (editingUser) {
      setUsers(
        users.map((u) =>
          u.id === editingUser.id
            ? {
                ...u,
                name: editingUser.name,
                email: editingUser.email,
                status: editingUser.status,
              }
            : u,
        ),
      )
      setIsEditDialogOpen(false)
      setEditingUser(null)
      toast({
        title: "Usuario actualizado",
        description: `${editingUser.name} se actualizó exitosamente`,
      })
    }
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
                      <Button variant="ghost" size="sm" onClick={() => handleEditUser(user.id, user.name)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      {user.role !== "admin" && (
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteUser(user.id, user.name)}>
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

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Editar Usuario</DialogTitle>
            </DialogHeader>
            {editingUser && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-user-name">Nombre</Label>
                  <Input
                    id="edit-user-name"
                    value={editingUser.name}
                    onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-user-email">Email</Label>
                  <Input
                    id="edit-user-email"
                    type="email"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-user-status">Estado</Label>
                  <select
                    id="edit-user-status"
                    value={editingUser.status}
                    onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={handleSaveEdit}>
                    Guardar Cambios
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
