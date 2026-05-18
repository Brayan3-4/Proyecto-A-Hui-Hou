import { NextResponse } from "next/server"

// API virtual para desarrolladores con CRUD completo
let developers = [
  {
    id: "1",
    nombre: "Brayan Gustavo Arengas Virguez",
    rol: "Frontend Developer",
    descripcion: "Especialista en React y Next.js",
    telefono: "3152747486",
    email: "brayang-arengasv@ahuihou.com",
    github: "https://github.com/brayanarengas",
    linkedin: "https://linkedin.com/in/brayanarengas"
  },
  {
    id: "2",
    nombre: "Laura Gabriela Balcazar Cardozo",
    rol: "Full Stack Developer",
    descripcion: "Desarrolladora full stack con experiencia en Node.js y Express.js",
    telefono: "3145144221",
    email: "laurag-balcazarc@ahuihou.com",
    github: "https://github.com/gabrielacardozo",
    linkedin: "https://linkedin.com/in/gabrielacardozo"
  },
  {
    id: "3",
    nombre: "Carlos José Petro Almario",
    rol: "Backend Developer",
    descripcion: "Especialista en Express.js y MySQL",
    telefono: "3005551234",
    email: "carlosj-petroa@ahuihou.com",
    github: "https://github.com/josepetro",
    linkedin: "https://linkedin.com/in/josepetro"
  }
]

// Validación de email con regex
const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

// Validación de teléfono colombiano con regex
const validatePhone = (phone: string): boolean => {
  const regex = /^[0-9]{10}$/
  return regex.test(phone)
}

// GET - Obtener todos los desarrolladores
export async function GET() {
  return NextResponse.json({
    success: true,
    data: developers,
    total: developers.length
  })
}

// POST - Crear nuevo desarrollador
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validaciones
    if (!body.nombre || !body.rol || !body.telefono || !body.email) {
      return NextResponse.json(
        { success: false, error: "Nombre, rol, teléfono y email son requeridos" },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      )
    }

    if (!validatePhone(body.telefono)) {
      return NextResponse.json(
        { success: false, error: "Teléfono debe tener 10 dígitos" },
        { status: 400 }
      )
    }

    const newDeveloper = {
      id: Date.now().toString(),
      nombre: body.nombre,
      rol: body.rol,
      descripcion: body.descripcion || "",
      telefono: body.telefono,
      email: body.email,
      github: body.github || "",
      linkedin: body.linkedin || ""
    }

    developers.push(newDeveloper)

    return NextResponse.json({
      success: true,
      data: newDeveloper,
      message: "Desarrollador creado exitosamente"
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
