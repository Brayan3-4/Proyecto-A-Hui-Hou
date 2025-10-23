import { ProductDetail } from "@/components/products/product-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Simulación de productos
const products = [
  {
    id: 1,
    name: "Aceite de Coco Orgánico",
    price: 24.99,
    originalPrice: 29.99,
    image: "/organic-coconut-oil-jar-natural.jpg",
    images: [
      "/organic-coconut-oil-jar-natural.jpg",
      "/coconut-oil-ingredients-natural.jpg",
      "/coconut-oil-usage-natural.jpg",
    ],
    category: "Aceites Naturales",
    description:
      "Aceite de coco virgen extra orgánico, prensado en frío para conservar todos sus nutrientes naturales.",
    longDescription:
      "Nuestro aceite de coco orgánico es extraído mediante prensado en frío de cocos frescos cultivados de manera sostenible. Rico en ácidos grasos de cadena media, es perfecto para cocinar, cuidado de la piel y el cabello. Sin refinar, sin blanquear y sin desodorizar para mantener su pureza natural.",
    benefits: [
      "Rico en ácidos grasos de cadena media (MCT)",
      "Propiedades antimicrobianas naturales",
      "Ideal para cocinar a altas temperaturas",
      "Hidrata y nutre la piel y el cabello",
      "100% orgánico y sin procesar",
    ],
    ingredients: ["100% Aceite de Coco Orgánico (Cocos nucifera)"],
    usage:
      "Para cocinar: usar como cualquier aceite de cocina. Para cuidado personal: aplicar directamente sobre piel o cabello.",
    inStock: true,
    stock: 25,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Miel de Manuka Premium",
    price: 45.99,
    originalPrice: 52.99,
    image: "/manuka-honey-jar-premium-natural.jpg",
    images: [
      "/manuka-honey-jar-premium-natural.jpg",
      "/manuka-honey-spoon-natural.jpg",
      "/manuka-honey-flowers-natural.jpg",
    ],
    category: "Superalimentos",
    description: "Miel de Manuka UMF 15+ de Nueva Zelanda, conocida por sus propiedades antibacterianas únicas.",
    longDescription:
      "Esta miel premium proviene de las flores del árbol de Manuka en Nueva Zelanda. Con un factor UMF 15+, garantiza la presencia de compuestos bioactivos únicos como el metilglioxal (MGO). Perfecta para fortalecer el sistema inmunológico y promover la salud digestiva.",
    benefits: [
      "Factor UMF 15+ certificado",
      "Propiedades antibacterianas naturales",
      "Fortalece el sistema inmunológico",
      "Promueve la salud digestiva",
      "Rica en antioxidantes naturales",
    ],
    ingredients: ["100% Miel de Manuka Pura (Leptospermum scoparium)"],
    usage: "Tomar 1-2 cucharaditas al día, preferiblemente con el estómago vacío. No calentar por encima de 40°C.",
    inStock: true,
    stock: 15,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Té Verde Matcha Ceremonial",
    price: 32.99,
    originalPrice: 38.99,
    image: "/matcha-green-tea-powder-ceremonial.jpg",
    images: [
      "/matcha-green-tea-powder-ceremonial.jpg",
      "/matcha-tea-preparation-traditional.jpg",
      "/matcha-powder-bowl-natural.jpg",
    ],
    category: "Tés y Hierbas",
    description:
      "Matcha ceremonial de grado premium de Uji, Japón. Molido en piedra para preservar su sabor y nutrientes.",
    longDescription:
      "Nuestro matcha ceremonial proviene de las mejores plantaciones de té de Uji, Japón. Las hojas de té verde son cultivadas en sombra durante 4 semanas antes de la cosecha, luego son molidas en piedra tradicional para crear este polvo fino y vibrante. Rico en L-teanina y antioxidantes.",
    benefits: [
      "Grado ceremonial premium",
      "Rico en antioxidantes (catequinas)",
      "Contiene L-teanina para relajación",
      "Aumenta la concentración y energía",
      "Molido en piedra tradicional",
    ],
    ingredients: ["100% Hojas de Té Verde Matcha (Camellia sinensis)"],
    usage: "Mezclar 1-2 cucharaditas con agua caliente (70-80°C) usando un batidor de bambú hasta formar espuma.",
    inStock: true,
    stock: 30,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Semillas de Chía Orgánicas",
    price: 18.99,
    originalPrice: 22.99,
    image: "/organic-chia-seeds-package-natural.jpg",
    images: [
      "/organic-chia-seeds-package-natural.jpg",
      "/chia-seeds-bowl-natural.jpg",
      "/chia-pudding-healthy-natural.jpg",
    ],
    category: "Semillas y Granos",
    description: "Semillas de chía orgánicas de México, ricas en omega-3, fibra y proteínas vegetales.",
    longDescription:
      "Estas semillas de chía orgánicas provienen de cultivos sostenibles en México. Son una excelente fuente de ácidos grasos omega-3, fibra soluble, proteínas completas y minerales esenciales. Perfectas para agregar a smoothies, yogures o crear deliciosos puddings.",
    benefits: [
      "Rica fuente de omega-3 vegetal",
      "Alto contenido en fibra soluble",
      "Proteína completa con todos los aminoácidos",
      "Rica en calcio, magnesio y fósforo",
      "Certificación orgánica",
    ],
    ingredients: ["100% Semillas de Chía Orgánicas (Salvia hispanica)"],
    usage:
      "Agregar 1-2 cucharadas a smoothies, yogures o cereales. Para pudding: mezclar con líquido y dejar reposar 15 minutos.",
    inStock: true,
    stock: 40,
    rating: 4.6,
    reviews: 203,
  },
  {
    id: 5,
    name: "Cúrcuma en Polvo Orgánica",
    price: 16.99,
    originalPrice: 19.99,
    image: "/turmeric-powder-organic-natural.jpg",
    images: [
      "/turmeric-powder-organic-natural.jpg",
      "/turmeric-root-fresh-natural.jpg",
      "/turmeric-latte-golden-milk.jpg",
    ],
    category: "Especias Medicinales",
    description:
      "Cúrcuma orgánica en polvo con alto contenido de curcumina, conocida por sus propiedades antiinflamatorias.",
    longDescription:
      "Nuestra cúrcuma orgánica es cultivada en India siguiendo métodos tradicionales. Rica en curcumina, el compuesto activo responsable de sus propiedades antiinflamatorias y antioxidantes. Perfecta para cocinar, preparar golden milk o como suplemento natural.",
    benefits: [
      "Alto contenido en curcumina",
      "Propiedades antiinflamatorias naturales",
      "Rica en antioxidantes",
      "Apoya la salud digestiva",
      "Cultivada orgánicamente en India",
    ],
    ingredients: ["100% Cúrcuma Orgánica en Polvo (Curcuma longa)"],
    usage: "Agregar a curries, smoothies o leche dorada. Combinar con pimienta negra para mejor absorción.",
    inStock: true,
    stock: 35,
    rating: 4.5,
    reviews: 178,
  },
  {
    id: 6,
    name: "Spirulina en Polvo Premium",
    price: 28.99,
    originalPrice: 34.99,
    image: "/spirulina-powder-premium-natural.jpg",
    images: [
      "/spirulina-powder-premium-natural.jpg",
      "/spirulina-smoothie-green-healthy.jpg",
      "/spirulina-tablets-natural.jpg",
    ],
    category: "Superalimentos",
    description: "Spirulina premium cultivada en agua pura, rica en proteínas, vitaminas y minerales esenciales.",
    longDescription:
      "Nuestra spirulina premium es cultivada en estanques de agua pura bajo condiciones controladas. Esta microalga azul-verde es una de las fuentes más concentradas de nutrición del planeta, conteniendo proteínas completas, vitamina B12, hierro y clorofila.",
    benefits: [
      "Proteína completa con todos los aminoácidos",
      "Rica en vitamina B12 y hierro",
      "Alto contenido en clorofila",
      "Apoya el sistema inmunológico",
      "Cultivada en agua pura",
    ],
    ingredients: ["100% Spirulina en Polvo (Arthrospira platensis)"],
    usage: "Mezclar 1 cucharadita en smoothies, jugos o agua. Comenzar con dosis pequeñas y aumentar gradualmente.",
    inStock: true,
    stock: 20,
    rating: 4.4,
    reviews: 92,
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
