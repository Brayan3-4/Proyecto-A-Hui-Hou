import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos de usuarios
const users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@ahuihou.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Usuario Demo",
    email: "usuario@demo.com",
    password: "demo123",
    role: "user",
  },
]

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    // Verificar si el usuario ya existe
    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return NextResponse.json({ message: "El usuario ya existe" }, { status: 400 })
    }

    // Crear nuevo usuario
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      role: "user",
    }

    users.push(newUser)

    // Retornar usuario sin contraseña
    const { password: _, ...userWithoutPassword } = newUser

    return NextResponse.json({
      message: "Usuario creado exitosamente",
      user: userWithoutPassword,
    })
  } catch (error) {
    return NextResponse.json({ message: "Error del servidor" }, { status: 500 })
  }
}
