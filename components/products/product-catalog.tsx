"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

// Simulación de productos
const products = [
  {
    id: 1,
    name: "Aceite de Coco Orgánico",
    price: 24.99,
    originalPrice: 29.99,
    image: "/organic-coconut-oil-jar-natural.jpg",
    category: "Aceites Naturales",
    description:
      "Aceite de coco virgen extra orgánico, prensado en frío para conservar todos sus nutrientes naturales.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Miel de Manuka Premium",
    price: 45.99,
    originalPrice: 52.99,
    image: "/manuka-honey-jar-premium-natural.jpg",
    category: "Superalimentos",
    description: "Miel de Manuka UMF 15+ de Nueva Zelanda, conocida por sus propiedades antibacterianas únicas.",
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Té Verde Matcha Ceremonial",
    price: 32.99,
    originalPrice: 38.99,
    image: "/matcha-green-tea-powder-ceremonial.jpg",
    category: "Tés y Hierbas",
    description:
      "Matcha ceremonial de grado premium de Uji, Japón. Molido en piedra para preservar su sabor y nutrientes.",
    inStock: true,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Semillas de Chía Orgánicas",
    price: 18.99,
    originalPrice: 22.99,
    image: "/organic-chia-seeds-package-natural.jpg",
    category: "Semillas y Granos",
    description: "Semillas de chía orgánicas de México, ricas en omega-3, fibra y proteínas vegetales.",
    inStock: true,
    rating: 4.6,
    reviews: 203,
  },
  {
    id: 5,
    name: "Cúrcuma en Polvo Orgánica",
    price: 16.99,
    originalPrice: 19.99,
    image: "/turmeric-powder-organic-natural.jpg",
    category: "Especias Medicinales",
    description:
      "Cúrcuma orgánica en polvo con alto contenido de curcumina, conocida por sus propiedades antiinflamatorias.",
    inStock: true,
    rating: 4.5,
    reviews: 178,
  },
  {
    id: 6,
    name: "Spirulina en Polvo Premium",
    price: 28.99,
    originalPrice: 34.99,
    image: "/spirulina-powder-premium-natural.jpg",
    category: "Superalimentos",
    description: "Spirulina premium cultivada en agua pura, rica en proteínas, vitaminas y minerales esenciales.",
    inStock: true,
    rating: 4.4,
    reviews: 92,
  },
]

const categories = [
  "Todos",
  "Frutos secos",
  "Semillas y granos",
  "Frutas deshidratadas",
  "Snacks y mezclas",
  "Especias y condimentos naturales",
  "Harinas y derivados",
  "Endulzantes naturales",
]

export function ProductCatalog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

      return matchesSearch && matchesCategory && matchesPrice
    })

    // Ordenar productos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, sortBy])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filtros */}
      <div className="lg:col-span-1">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Productos */}
      <div className="lg:col-span-3">
        {/* Barra de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron productos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
