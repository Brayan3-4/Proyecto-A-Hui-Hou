import { NextResponse } from "next/server"

// Simulación de base de datos (en producción usar base de datos real)
let products = [
  { id: 1, name: "Almendras Naturales", price: 18900, category: "Frutos secos", stock: 50 },
  { id: 2, name: "Nueces de Brasil", price: 32900, category: "Frutos secos", stock: 30 },
  { id: 3, name: "Semillas de Chía", price: 15900, category: "Semillas y granos", stock: 100 },
  { id: 4, name: "Mango Deshidratado", price: 12900, category: "Frutas deshidratadas", stock: 75 },
  { id: 5, name: "Miel Pura de Abejas", price: 25900, category: "Endulzantes naturales", stock: 40 }
]

// GET - Obtener producto por ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return NextResponse.json(
      { success: false, error: "Producto no encontrado" },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: product
  })
}

// PUT - Actualizar producto
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const index = products.findIndex(p => p.id === parseInt(id))
    
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Producto no encontrado" },
        { status: 404 }
      )
    }

    products[index] = {
      ...products[index],
      ...body,
      id: parseInt(id)
    }

    return NextResponse.json({
      success: true,
      data: products[index],
      message: "Producto actualizado exitosamente"
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al actualizar el producto" },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar producto
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = products.findIndex(p => p.id === parseInt(id))
  
  if (index === -1) {
    return NextResponse.json(
      { success: false, error: "Producto no encontrado" },
      { status: 404 }
    )
  }

  const deletedProduct = products.splice(index, 1)[0]

  return NextResponse.json({
    success: true,
    data: deletedProduct,
    message: "Producto eliminado exitosamente"
  })
}
