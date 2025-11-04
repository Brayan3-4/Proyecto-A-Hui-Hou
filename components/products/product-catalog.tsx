"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
// Simulación de productos
const products = [
  // 🥜 Frutos secos
  { id: 1, name: "Almendras", price: 18500, image: "https://f.fcdn.app/imgs/d71a13/www.lamolienda.uy/moliuy/bf28/original/catalogo/000000000003083_000000000003083_1/2000-2000/almendras-peladas-tostadas-100g-almendra-pel-tostada-x-22-68.jpg", category: "Frutos secos", description: "Almendras naturales sin sal, fuente de proteínas, fibra y grasas saludables.", inStock: true, rating: 4.8, reviews: 120 },
  { id: 2, name: "Nueces", price: 21000, image: "https://www.bioplaza.com.co/wp-content/uploads/2020/08/nuezbrasil-copia.png", category: "Frutos secos", description: "Nueces premium seleccionadas, ricas en omega-3 y antioxidantes naturales.", inStock: true, rating: 4.7, reviews: 98 },
  { id: 3, name: "Avellanas", price: 25000, image: "https://ecomarketcolombia.com/wp-content/uploads/2020/06/AvellanaS.jpg", category: "Frutos secos", description: "Avellanas tostadas con un sabor suave y textura crujiente.", inStock: true, rating: 4.6, reviews: 87 },
  { id: 4, name: "Maní Natural", price: 9500, image: "https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-sin-sal-1.jpg", category: "Frutos secos", description: "Maní natural sin sal, ideal para snacks o preparaciones saludables.", inStock: true, rating: 4.5, reviews: 134 },
  { id: 5, name: "Maní Salado", price: 10000, image: "https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008081.jpg", category: "Frutos secos", description: "Maní tostado con sal marina, perfecto para compartir o acompañar bebidas.", inStock: true, rating: 4.6, reviews: 115 },
  { id: 6, name: "Maní Confitado", price: 11000, image: "https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-confitado-2.jpg", category: "Frutos secos", description: "Maní cubierto con una fina capa de azúcar caramelizada, dulce y crujiente.", inStock: true, rating: 4.4, reviews: 102 },
  { id: 7, name: "Castañas", price: 26500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4LkPknGLbcyPkdAHBRDopJAgZ_vrGTdB9HvQs1QVGB_PCKe8BtKC-9k9aAwazmNMvgM&usqp=CAU", category: "Frutos secos", description: "Castañas naturales ricas en nutrientes y sabor delicado.", inStock: true, rating: 4.7, reviews: 89 },

  // 🌾 Semillas y granos
  { id: 8, name: "Chía", price: 9000, image: "https://unimarc.vtexassets.com/arquivos/ids/233406/000000000000575376-KG-01.jpg?v=638200265654700000", category: "Semillas y granos", description: "Semillas de chía, fuente de omega-3 vegetal, fibra y calcio.", inStock: true, rating: 4.8, reviews: 145 },
  { id: 9, name: "Linaza", price: 8500, image: "https://chasdomundo.pt/6364-large_default/linaza-marron.jpg", category: "Semillas y granos", description: "Linaza molida rica en fibra y ácidos grasos esenciales.", inStock: true, rating: 4.6, reviews: 112 },
  { id: 10, name: "Quinoa", price: 16000, image: "https://www.almacenesusabiaga.com/wp-content/uploads/2018/12/quinoa.jpg", category: "Semillas y granos", description: "Grano andino de alto valor proteico, ideal como acompañamiento o base de ensaladas.", inStock: true, rating: 4.7, reviews: 98 },
  { id: 11, name: "Ajonjolí", price: 7000, image: "https://nativoalimentos.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUzNjYwMCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c67d313b783e2f3945c49e674d22bb192b7b99c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--cef66509c9cdc75663c0eefd9421db1d2ea4fead/ajonjoli-medellin-domicilio-mayorista.png?locale=es", category: "Semillas y granos", description: "Semillas de ajonjolí tostado, ricas en calcio y sabor natural.", inStock: true, rating: 4.5, reviews: 76 },
  { id: 12, name: "Girasol", price: 9500, image: "https://escarola.co/wp-content/uploads/2015/08/semillas-de-girasol_1.jpg", category: "Semillas y granos", description: "Semillas de girasol peladas, fuente de vitamina E y antioxidantes.", inStock: true, rating: 4.7, reviews: 101 },
  { id: 13, name: "Calabaza", price: 12000, image: "https://healingfoods.com.co/cdn/shop/files/GranelSemillasdecalabaza.jpg?v=1716319191", category: "Semillas y granos", description: "Semillas de calabaza tostadas, ideales para snacks o ensaladas.", inStock: true, rating: 4.8, reviews: 85 },

  // 🍍 Frutas deshidratadas
  { id: 14, name: "Uvas Pasas", price: 9500, image: "https://www.orquidea.com.co/image/cache/catalog/Products/Nacional/1602015_1-1000x1000.jpg", category: "Frutas deshidratadas", description: "Uvas pasas dulces y naturales, perfectas para repostería o snacks.", inStock: true, rating: 4.6, reviews: 90 },
  { id: 15, name: "Dátiles", price: 18000, image: "https://frutosysemillas.com/cdn/shop/files/Datil.webp?v=1696621697", category: "Frutas deshidratadas", description: "Dátiles naturales sin azúcar añadida, ricos en energía y fibra.", inStock: true, rating: 4.8, reviews: 110 },
  { id: 16, name: "Ciruelas", price: 15000, image: "https://www.secofrut.com/wp-content/uploads/2018/11/ciruelasSP.gif", category: "Frutas deshidratadas", description: "Ciruelas pasas sin semilla, con alto contenido de antioxidantes y fibra.", inStock: true, rating: 4.7, reviews: 88 },
  { id: 17, name: "Arándanos", price: 21000, image: "https://frutosysemillas.com/cdn/shop/files/arandanos-deshidratados-a-granel.jpg?v=1696625808", category: "Frutas deshidratadas", description: "Arándanos deshidratados ligeramente endulzados, ricos en antioxidantes.", inStock: true, rating: 4.8, reviews: 123 },
  { id: 18, name: "Banano Deshidratado", price: 9500, image: "https://almifrut.cl/wp-content/uploads/2023/06/almifrut-bananadeshidratada-03.jpg", category: "Frutas deshidratadas", description: "Rodajas de banano deshidratado naturalmente, crujientes y dulces.", inStock: true, rating: 4.6, reviews: 97 },
  { id: 19, name: "Mango Deshidratado", price: 16500, image: "https://frutosysemillas.com/cdn/shop/files/mango.jpg?v=1696626369", category: "Frutas deshidratadas", description: "Láminas de mango deshidratado sin azúcar añadida, de sabor intenso y natural.", inStock: true, rating: 4.9, reviews: 111 },

  // 🍪 Snacks y mezclas
  { id: 20, name: "Mix de Frutos Secos", price: 18500, image: "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42c09af676d5308a7ecdc_64bf5d7041ec4e7c97dbe4bc_picture%2520(2).jpeg", category: "Snacks y mezclas", description: "Mezcla natural de almendras, nueces, arándanos y semillas.", inStock: true, rating: 4.8, reviews: 143 },
  { id: 21, name: "Barras Energéticas Naturales", price: 7500, image: "https://natruly.com/cdn/shop/files/NATRULY-SHOPIFY_1200x1200px_47_31253d54-2015-4eb7-a43a-aa327596bffe.png?v=1712319618&width=1200", category: "Snacks y mezclas", description: "Barras naturales con frutos secos, avena y miel, sin conservantes.", inStock: true, rating: 4.6, reviews: 92 },
  { id: 22, name: "Granolas", price: 14500, image: "https://img.freepik.com/fotos-premium/granola-aislado-sobre-fondo-blanco_176402-7347.jpg", category: "Snacks y mezclas", description: "Granola artesanal con avena, miel y frutas deshidratadas.", inStock: true, rating: 4.7, reviews: 100 },
  { id: 23, name: "Chips Saludables", price: 9500, image: "https://previews.123rf.com/images/baibaz/baibaz1609/baibaz160900041/63450930-heap-of-healthy-colorful-vegetable-chips-isolated-on-white-background-from-top-view.jpg", category: "Snacks y mezclas", description: "Chips naturales de coco, banano y yuca, horneados y sin conservantes.", inStock: true, rating: 4.5, reviews: 85 },

  // 🌿 Especias y condimentos naturales
  { id: 24, name: "Canela", price: 7000, image: "https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008062.jpg", category: "Especias y condimentos naturales", description: "Canela molida natural, ideal para bebidas, postres o cocina saludable.", inStock: true, rating: 4.7, reviews: 78 },
  { id: 25, name: "Nuez Moscada", price: 9500, image: "https://bioretiro.com/wp-content/uploads/2023/09/NUEZ-MOSCADA.jpg", category: "Especias y condimentos naturales", description: "Nuez moscada en polvo de aroma intenso y sabor cálido.", inStock: true, rating: 4.6, reviews: 74 },
  { id: 26, name: "Cúrcuma", price: 8500, image: "https://frutosysemillas.com/cdn/shop/files/CURCUMAMOLIDA.jpg?v=1696634942", category: "Especias y condimentos naturales", description: "Cúrcuma molida con alto contenido de curcumina, de origen natural.", inStock: true, rating: 4.8, reviews: 91 },
  { id: 27, name: "Pimienta", price: 7500, image: "https://todoespecias.com/1508-medium_default/pimienta-negra.jpg", category: "Especias y condimentos naturales", description: "Pimienta negra molida, esencial en la cocina y rica en antioxidantes.", inStock: true, rating: 4.7, reviews: 80 },

  // 🌾 Harinas y derivados
  { id: 28, name: "Harina de Almendra", price: 21000, image: "https://biovergel.es/wp-content/uploads/2020/04/almendra-harina-sin-piel.jpg", category: "Harinas y derivados", description: "Harina natural sin gluten, ideal para postres y recetas saludables.", inStock: true, rating: 4.8, reviews: 95 },
  { id: 29, name: "Harina de Avena", price: 9500, image: "https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/h/a/harina-de-avena-x-1-kg.jpg", category: "Harinas y derivados", description: "Harina integral de avena, fuente de fibra y energía.", inStock: true, rating: 4.7, reviews: 102 },
  { id: 30, name: "Harina de Coco", price: 12500, image: "https://frutosysemillas.com/cdn/shop/files/HarinadeCoco.jpg?v=1696634714", category: "Harinas y derivados", description: "Harina de coco natural rica en fibra y baja en carbohidratos.", inStock: true, rating: 4.6, reviews: 84 },
  { id: 31, name: "Harina de Linaza", price: 10000, image: "https://frutosysemillas.com/cdn/shop/files/HARINADELINAZA_grande.webp?v=1699361387", category: "Harinas y derivados", description: "Harina de linaza molida, ideal para panes, galletas y batidos.", inStock: true, rating: 4.7, reviews: 89 },

  // 🍯 Endulzantes naturales
  { id: 32, name: "Miel", price: 18500, image: "https://previews.123rf.com/images/kovalevaka/kovalevaka1708/kovalevaka170800023/84624517-liquid-honey-dripping-into-jar-from-dipper-isolated-on-white-background.jpg", category: "Endulzantes naturales", description: "Miel pura de abejas 100% natural, sin aditivos ni conservantes.", inStock: true, rating: 4.9, reviews: 132 },
  { id: 33, name: "Panela Pulverizada", price: 9500, image: "https://mrbatatacolombia.com/wp-content/uploads/2022/01/panela-1.png", category: "Endulzantes naturales", description: "Panela orgánica pulverizada, endulzante natural sin refinar.", inStock: true, rating: 4.8, reviews: 118 },
  { id: 34, name: "Stevia Natural", price: 12500, image: "https://acdn-us.mitiendanube.com/stores/001/021/255/products/fotos-productos-web-2024-11-19t133126-563-9c7fd74f3153c279cd17320339230395-1024-1024.png", category: "Endulzantes naturales", description: "Endulzante natural de stevia, sin calorías y sin aditivos.", inStock: true, rating: 4.7, reviews: 96 },
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
  const [priceRange, setPriceRange] = useState([0, 30000])
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

      <div className="lg:col-span-3">
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

        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Mostrando {filteredProducts.length} de {products.length} productos
          </p>
        </div>

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
