import { NextResponse } from "next/server"

let developers = [
  {
    id: "1",
    nombre: "Brayan Gustavo Arengas Virguez",
    rol: "Frontend Developer",
    descripcion: "Especialista en React y Next.js",
    telefono: "3152747486",
    email: "brayang-arengasv@ahuihou.com"
  },
  {
    id: "2",
    nombre: "Laura Gabriela Balcazar Cardozo",
    rol: "Full Stack Developer",
    descripcion: "Desarrolladora full stack con experiencia en Node.js y Express.js",
    telefono: "3145144221",
    email: "laurag-balcazarc@ahuihou.com"
  },
  {
    id: "3",
    nombre: "Carlos José Petro Almario",
    rol: "Backend Developer",
    descripcion: "Especialista en Express.js y MySQL",
    telefono: "3005551234",
    email: "carlosj-petroa@ahuihou.com"
  }
]

// Validaciones con regex
const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

const validatePhone = (phone: string): boolean => {
  const regex = /^[0-9]{10}$/
  return regex.test(phone)
}

// GET - Obtener desarrollador por ID
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const developer = developers.find(d => d.id === id)
  
  if (!developer) {
    return NextResponse.json(
      { success: false, error: "Desarrollador no encontrado" },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: developer
  })
}

// PUT - Actualizar desarrollador
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const index = developers.findIndex(d => d.id === id)
    
    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Desarrollador no encontrado" },
        { status: 404 }
      )
    }

    if (body.email && !validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      )
    }

    if (body.telefono && !validatePhone(body.telefono)) {
      return NextResponse.json(
        { success: false, error: "Teléfono debe tener 10 dígitos" },
        { status: 400 }
      )
    }

    developers[index] = {
      ...developers[index],
      ...body,
      id
    }

    return NextResponse.json({
      success: true,
      data: developers[index],
      message: "Desarrollador actualizado exitosamente"
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al actualizar el desarrollador" },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar desarrollador
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const index = developers.findIndex(d => d.id === id)
  
  if (index === -1) {
    return NextResponse.json(
      { success: false, error: "Desarrollador no encontrado" },
      { status: 404 }
    )
  }

  const deletedDeveloper = developers.splice(index, 1)[0]

  return NextResponse.json({
    success: true,
    data: deletedDeveloper,
    message: "Desarrollador eliminado exitosamente"
  })
}
