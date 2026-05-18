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
    const { email, password } = await request.json()

    // Buscar usuario
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      return NextResponse.json({ message: "Credenciales inválidas" }, { status: 401 })
    }

    // Retornar usuario sin contraseña
    const { password: _, ...userWithoutPassword } = user

    return NextResponse.json({
      message: "Login exitoso",
      user: userWithoutPassword,
    })
  } catch (error) {
    return NextResponse.json({ message: "Error del servidor" }, { status: 500 })
  }
}
