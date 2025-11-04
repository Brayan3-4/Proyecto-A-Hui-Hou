"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Search } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { formatPrice } from "@/lib/utils"

// Simulación de productos para admin
const initialProducts = [
  {
    id: 1,
    name: "Aceite de Coco Orgánico",
    price: 24.99,
    stock: 25,
    category: "Aceites Naturales",
    status: "active",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Miel de Manuka Premium",
    price: 45.99,
    stock: 15,
    category: "Superalimentos",
    status: "active",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Té Verde Matcha Ceremonial",
    price: 32.99,
    stock: 30,
    category: "Tés y Hierbas",
    status: "active",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Semillas de Chía Orgánicas",
    price: 18.99,
    stock: 0,
    category: "Semillas y Granos",
    status: "out_of_stock",
    image: "/placeholder.svg",
  },
]

export function ProductsManager() {
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "",
  })
  const { toast } = useToast()

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isEdit = false) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageUrl = reader.result as string
        if (isEdit && editingProduct) {
          setEditingProduct({ ...editingProduct, image: imageUrl })
        } else {
          setNewProduct({ ...newProduct, image: imageUrl })
        }
        toast({
          title: "Imagen cargada",
          description: "La imagen se cargó correctamente",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string, stock: number) => {
    if (stock === 0) {
      return <Badge variant="destructive">Agotado</Badge>
    }
    if (stock < 10) {
      return <Badge variant="secondary">Stock Bajo</Badge>
    }
    return <Badge variant="default">Activo</Badge>
  }

  const handleSaveProduct = () => {
    const product = {
      id: products.length + 1,
      name: newProduct.name,
      price: Number.parseFloat(newProduct.price),
      stock: Number.parseInt(newProduct.stock),
      category: newProduct.category,
      status: "active",
      image: newProduct.image,
    }

    setProducts([...products, product])
    setIsAddDialogOpen(false)
    setNewProduct({ name: "", price: "", stock: "", category: "", description: "", image: "" })

    toast({
      title: "Producto agregado",
      description: `${product.name} se agregó exitosamente`,
    })
  }

  const handleDeleteProduct = (id: number, name: string) => {
    setProducts(products.filter((p) => p.id !== id))
    toast({
      title: "Producto eliminado",
      description: `${name} se eliminó del inventario`,
      variant: "destructive",
    })
  }

  const handleEditProduct = (id: number) => {
    const product = products.find((p) => p.id === id)
    if (product) {
      setEditingProduct({
        ...product,
        price: product.price.toString(),
        stock: product.stock.toString(),
      })
      setIsEditDialogOpen(true)
    }
  }

  const handleSaveEdit = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: editingProduct.name,
                price: Number.parseFloat(editingProduct.price),
                stock: Number.parseInt(editingProduct.stock),
                category: editingProduct.category,
                status: Number.parseInt(editingProduct.stock) === 0 ? "out_of_stock" : "active",
                image: editingProduct.image,
              }
            : p,
        ),
      )
      setIsEditDialogOpen(false)
      setEditingProduct(null)
      toast({
        title: "Producto actualizado",
        description: `${editingProduct.name} se actualizó exitosamente`,
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Gestión de Productos</CardTitle>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Agregar Producto
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Agregar Nuevo Producto</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image">Imagen del Producto</Label>
                  <div className="mt-2">
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, false)}
                      className="cursor-pointer"
                    />
                    {newProduct.image && (
                      <div className="mt-2 relative w-full h-32">
                        <img
                          src={newProduct.image || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="name">Nombre del Producto</Label>
                  <Input
                    id="name"
                    placeholder="Ej: Aceite de Coco Orgánico"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Precio (COP)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="25000"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="stock">Stock</Label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="25"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoría</Label>
                  <Input
                    id="category"
                    placeholder="Aceites Naturales"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    placeholder="Descripción del producto..."
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={handleSaveProduct}>
                    Guardar Producto
                  </Button>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${formatPrice(product.price)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{getStatusBadge(product.status, product.stock)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product.id)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id, product.name)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Editar Producto</DialogTitle>
            </DialogHeader>
            {editingProduct && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="edit-image">Imagen del Producto</Label>
                  <div className="mt-2">
                    <Input
                      id="edit-image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, true)}
                      className="cursor-pointer"
                    />
                    {editingProduct.image && (
                      <div className="mt-2 relative w-full h-32">
                        <img
                          src={editingProduct.image || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="edit-name">Nombre del Producto</Label>
                  <Input
                    id="edit-name"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-price">Precio (COP)</Label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-stock">Stock</Label>
                  <Input
                    id="edit-stock"
                    type="number"
                    value={editingProduct.stock}
                    onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-category">Categoría</Label>
                  <Input
                    id="edit-category"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  />
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
