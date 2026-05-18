import { NextResponse } from "next/server"

// Simulación de base de datos de productos
let products = [
  {
    id: 1,
    name: "Almendras Naturales",
    price: 18900,
    category: "Frutos secos",
    stock: 50,
    description: "Almendras crudas sin sal, ricas en vitamina E y antioxidantes",
    image: "/products/almendras.jpg"
  },
  {
    id: 2,
    name: "Nueces de Brasil",
    price: 32900,
    category: "Frutos secos",
    stock: 30,
    description: "Fuente natural de selenio y grasas saludables",
    image: "/products/nueces-brasil.jpg"
  },
  {
    id: 3,
    name: "Semillas de Chía",
    price: 15900,
    category: "Semillas y granos",
    stock: 100,
    description: "Superalimento rico en omega-3 y fibra",
    image: "/products/chia.jpg"
  },
  {
    id: 4,
    name: "Mango Deshidratado",
    price: 12900,
    category: "Frutas deshidratadas",
    stock: 75,
    description: "Snack saludable sin azúcar añadida",
    image: "/products/mango.jpg"
  },
  {
    id: 5,
    name: "Miel Pura de Abejas",
    price: 25900,
    category: "Endulzantes naturales",
    stock: 40,
    description: "Miel 100% natural sin procesar",
    image: "/products/miel.jpg"
  }
]

// GET - Obtener todos los productos
export async function GET() {
  return NextResponse.json({
    success: true,
    data: products,
    total: products.length
  })
}

// POST - Crear nuevo producto
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validaciones
    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { success: false, error: "Nombre, precio y categoría son requeridos" },
        { status: 400 }
      )
    }

    const newProduct = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: body.name,
      price: Number(body.price),
      category: body.category,
      stock: body.stock || 0,
      description: body.description || "",
      image: body.image || "/products/default.jpg"
    }

    products.push(newProduct)

    return NextResponse.json({
      success: true,
      data: newProduct,
      message: "Producto creado exitosamente"
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
