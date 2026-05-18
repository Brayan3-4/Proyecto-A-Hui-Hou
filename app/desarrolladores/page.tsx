"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail, Github, Linkedin, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Developer {
  id: string
  nombre: string
  rol: string
  descripcion: string
  foto: string
  telefono: string
  email: string
  github?: string
  linkedin?: string
}

const initialDevelopers: Developer[] = [
  {
    id: "1",
    nombre: "Brayan Gustavo Arengas Virguez",
    rol: "Estudiante de Ingeniería de Sistemas · Frontend Developer",
    descripcion: "Desarrollador frontend enfocado en creación de interfaces web modernas, responsivas y escalables utilizando React, Next.js y TypeScript. Interesado en experiencia de usuario, arquitectura de componentes y desarrollo de aplicaciones web con buenas prácticas de ingeniería de software.",
    foto: "/developers/Brayan.jpg",
    telefono: "3152747486",
    email: "brayang-arengasv@ahuihou.com",
    github: "https://github.com/brayanarengas",
    linkedin: "https://linkedin.com/in/brayan-arengas"
  },
  {
    id: "2",
    nombre: "Laura Gabriela Balcazar Cardozo",
    rol: "Estudiante de Ingeniería de Sistemas · Full Stack Developer",
    descripcion: "Desarrolladora full stack enfocada en construcción de aplicaciones web integrando frontend y backend. Interesada en desarrollo de sistemas escalables, manejo de bases de datos y diseño de soluciones funcionales aplicando tecnologías modernas.",
    foto: "/developers/Gaby.jpeg",
    telefono: "3145144221",
    email: "laurag-balcazarc@ahuihou.com",
    github: "https://github.com/gabrielabalcazar",
    linkedin: "https://linkedin.com/in/gabriela-balcazar"
  },
  {
    id: "3",
    nombre: "Carlos José Petro Almario",
    rol: "Estudiante de Ingeniería de Sistemas · Backend Developer",
    descripcion: "Desarrollador backend enfocado en lógica de negocio, desarrollo de APIs y gestión de bases de datos. Interesado en optimización de sistemas, estructuras de datos y construcción de servicios mantenibles y seguros.",
    foto: "/developers/José.jpeg",
    telefono: "3028372725",
    email: "carlosj-petroa@ahuihou.com",
    github: "https://github.com/josepetrodev",
    linkedin: "https://linkedin.com/in/jose-petro"
  }
]

export default function DesarrolladoresPage() {
  const developers = initialDevelopers

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-r from-[#1a3a5c] via-[#2B587D] via-[#2d8a9c] via-[#3d9a8b] to-[#2B7C59]">
        <Link
          href="/"
          className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-audiowide text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
            DESARROLLADORES
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Conoce al equipo detrás de A Hui Hou
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev) => (
            <Card key={dev.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <Link href={`/desarrolladores/${dev.id}`} className="block">
                <div className="h-48 bg-gradient-to-br from-[#2B587D] to-[#2B7C59] flex items-center justify-center relative overflow-hidden">
                  {/* Foto del desarrollador */}
                  <img 
                    src={dev.foto} 
                    alt={`Foto de ${dev.nombre}`}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full">Ver Perfil Completo</span>
                  </div>
                </div>
              </Link>
              <CardHeader>
                <Link href={`/desarrolladores/${dev.id}`} className="hover:text-[#2B7C59] transition-colors">
                  <CardTitle className="text-[#2B587D]">{dev.nombre}</CardTitle>
                </Link>
                <CardDescription className="text-[#2B7C59] font-medium">{dev.rol}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{dev.descripcion}</p>
                <div className="space-y-2 text-sm">
                  <a href={`tel:+57${dev.telefono}`} className="flex items-center gap-2 hover:text-[#2B7C59] transition-colors">
                    <Phone className="h-4 w-4 text-[#2B7C59]" />
                    <span>+57 {dev.telefono}</span>
                  </a>
                  <a href={`mailto:${dev.email}`} className="flex items-center gap-2 hover:text-[#2B7C59] transition-colors">
                    <Mail className="h-4 w-4 text-[#2B7C59]" />
                    <span>{dev.email}</span>
                  </a>
                </div>
                <div className="flex gap-2 mt-4">
                  {dev.github && (
                    <a href={dev.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label={`GitHub de ${dev.nombre}`}>
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {dev.linkedin && (
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label={`LinkedIn de ${dev.nombre}`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <Link 
                    href={`/desarrolladores/${dev.id}`}
                    className="p-2 rounded-full bg-[#2B7C59]/10 hover:bg-[#2B7C59]/20 transition-colors text-[#2B7C59]"
                    aria-label={`Ver perfil de ${dev.nombre}`}
                  >
                    <User className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
