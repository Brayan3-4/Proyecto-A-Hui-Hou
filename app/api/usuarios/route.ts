import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server'

export async function POST(req: Request) {

  const body = await req.json()

  const usuario = await prisma.usuario.create({
    data: {
      nombre: body.nombre,
      correo: body.correo
    }
  })

  return NextResponse.json(usuario)
}
