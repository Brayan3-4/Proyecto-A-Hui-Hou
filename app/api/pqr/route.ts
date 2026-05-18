import { NextResponse } from "next/server"

interface PQR {
  id: string
  tipo: "Petición" | "Queja" | "Reclamo"
  nombre: string
  email: string
  telefono: string
  asunto: string
  descripcion: string
  estado: "Pendiente" | "En proceso" | "Resuelto"
  fechaCreacion: string
  fechaActualizacion: string
}

let pqrs: PQR[] = []

// Validaciones con expresiones regulares
const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return regex.test(email)
}

const validatePhone = (phone: string): boolean => {
  const regex = /^(\+57)?[0-9]{10}$/
  return regex.test(phone.replace(/\s/g, ""))
}

// GET - Obtener todas las PQR
export async function GET() {
  return NextResponse.json({
    success: true,
    data: pqrs,
    total: pqrs.length
  })
}

// POST - Crear nueva PQR
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validaciones
    if (!body.tipo || !body.nombre || !body.email || !body.telefono || !body.asunto || !body.descripcion) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    if (!["Petición", "Queja", "Reclamo"].includes(body.tipo)) {
      return NextResponse.json(
        { success: false, error: "Tipo de solicitud inválido" },
        { status: 400 }
      )
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: "Correo electrónico inválido" },
        { status: 400 }
      )
    }

    if (!validatePhone(body.telefono)) {
      return NextResponse.json(
        { success: false, error: "Número de teléfono inválido (debe tener 10 dígitos)" },
        { status: 400 }
      )
    }

    if (body.nombre.length < 3) {
      return NextResponse.json(
        { success: false, error: "El nombre debe tener al menos 3 caracteres" },
        { status: 400 }
      )
    }

    if (body.descripcion.length < 20) {
      return NextResponse.json(
        { success: false, error: "La descripción debe tener al menos 20 caracteres" },
        { status: 400 }
      )
    }

    const now = new Date().toISOString()
    const newPQR: PQR = {
      id: `PQR-${Date.now()}`,
      tipo: body.tipo,
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono,
      asunto: body.asunto,
      descripcion: body.descripcion,
      estado: "Pendiente",
      fechaCreacion: now,
      fechaActualizacion: now
    }

    pqrs.push(newPQR)

    return NextResponse.json({
      success: true,
      data: newPQR,
      message: `Su ${body.tipo} ha sido registrada con el número ${newPQR.id}. Le responderemos en un máximo de 15 días hábiles.`
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al procesar la solicitud" },
      { status: 500 }
    )
  }
}
