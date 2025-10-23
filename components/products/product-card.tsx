"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  inStock: boolean
  rating: number
  reviews: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
    })
  }

  return (
    <Card className="product-card border-0 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-0">
        <Link href={`/productos/${product.id}`}>
          <div className="aspect-square overflow-hidden rounded-t-lg relative">
            {discount > 0 && (
              <Badge className="absolute top-2 left-2 z-10 bg-destructive text-destructive-foreground animate-pulse">
                -{discount}%
              </Badge>
            )}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>
        <div className="p-6">
          <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
          <Link href={`/productos/${product.id}`}>
            <h3 className="font-semibold text-foreground mb-2 text-balance hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Precio */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>

          <Button
            className="w-full hover:scale-105 transition-all duration-300"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Agregar al Carrito" : "Agotado"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
