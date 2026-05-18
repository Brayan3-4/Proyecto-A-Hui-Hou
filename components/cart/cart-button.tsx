"use client"

import { useCart } from "./cart-provider"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function CartButton() {
  const { state } = useCart()

  return (
    <Button variant="outline" size="sm" asChild className="relative bg-transparent">
      <Link href="/carrito">
        <ShoppingCart className="h-4 w-4 mr-2" />
        Carrito
        {state.itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {state.itemCount}
          </span>
        )}
      </Link>
    </Button>
  )
}
