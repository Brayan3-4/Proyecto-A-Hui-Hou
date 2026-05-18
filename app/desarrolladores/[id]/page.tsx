"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Mail, Github, Linkedin, MapPin, Calendar, Code, User } from "lucide-react"
import Link from "next/link"

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
  ubicacion?: string
  fechaIngreso?: string
  habilidades?: string[]
}

const developersData: Developer[] = [
  {
    id: "1",
    nombre: "Brayan Gustavo Arengas Virguez",
    rol: "Estudiante de Ingeniería de Sistemas · Frontend Developer",
    descripcion: "Desarrollador frontend enfocado en creación de interfaces web modernas, responsivas y escalables utilizando React, Next.js y TypeScript. Interesado en experiencia de usuario, arquitectura de componentes y desarrollo de aplicaciones web con buenas prácticas de ingeniería de software.",
    foto: "/developers/Brayan.jpg",
    telefono: "3152747486",
    email: "brayang-arengasv@ahuihou.com",
    github: "https://github.com/brayanarengas",
    linkedin: "https://linkedin.com/in/brayan-arengas",
    ubicacion: "Bogotá, Colombia",
    fechaIngreso: "Abril 2023",
    habilidades: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Git", "Figma"]
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
    linkedin: "https://linkedin.com/in/gabriela-balcazar",
    ubicacion: "Bogotá, Colombia",
    fechaIngreso: "Abril 2023",
    habilidades: ["React", "Node.js", "Express", "MySQL", "JavaScript", "GitHub"]
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
    linkedin: "https://linkedin.com/in/jose-petro",
    ubicacion: "Bogotá, Colombia",
    fechaIngreso: "Septiembre 2023",
    habilidades: ["React", "Node.js", "Python", "AWS", "GraphQL"]
  }
]

export default function DeveloperProfilePage() {
  const params = useParams()
  const router = useRouter()
  const [developer, setDeveloper] = useState<Developer | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dev = developersData.find(d => d.id === params.id)
    if (dev) {
      setDeveloper(dev)
    }
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2B7C59]"></div>
      </main>
    )
  }

  if (!developer) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Desarrollador no encontrado</h1>
          <Button onClick={() => router.push("/desarrolladores")}>
            Volver a Desarrolladores
          </Button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero con gradiente */}
      <section className="relative py-20 bg-gradient-to-r from-[#1a3a5c] via-[#2B587D] via-[#2d8a9c] via-[#3d9a8b] to-[#2B7C59]">
        <Link
          href="/desarrolladores"
          className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Volver a la lista de desarrolladores"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar con foto */}
            <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30 shadow-xl overflow-hidden">
              <img 
                src={developer.foto} 
                alt={`Foto de ${developer.nombre}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <User className="h-20 w-20 text-white hidden" />
            </div>
            
            {/* Info básica */}
            <div className="text-center md:text-left">
              <h1 className="font-audiowide text-3xl md:text-4xl font-bold text-white mb-2 tracking-wider">
                {developer.nombre}
              </h1>
              <p className="text-xl text-white/90 mb-4">{developer.rol}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {developer.habilidades?.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Info de contacto */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B587D]">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a 
                  href={`tel:+57${developer.telefono}`} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  aria-label={`Llamar a ${developer.nombre}`}
                >
                  <Phone className="h-5 w-5 text-[#2B7C59]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Teléfono</p>
                    <p className="font-medium">+57 {developer.telefono}</p>
                  </div>
                </a>
                
                <a 
                  href={`mailto:${developer.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  aria-label={`Enviar correo a ${developer.nombre}`}
                >
                  <Mail className="h-5 w-5 text-[#2B7C59]" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">{developer.email}</p>
                  </div>
                </a>

                {developer.ubicacion && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <MapPin className="h-5 w-5 text-[#2B7C59]" />
                    <div>
                      <p className="text-xs text-muted-foreground">Ubicación</p>
                      <p className="font-medium">{developer.ubicacion}</p>
                    </div>
                  </div>
                )}

                {developer.fechaIngreso && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-[#2B7C59]" />
                    <div>
                      <p className="text-xs text-muted-foreground">Miembro desde</p>
                      <p className="font-medium">{developer.fechaIngreso}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Redes sociales */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B587D]">Redes Profesionales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {developer.github && (
                  <a
                    href={developer.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                    aria-label={`Perfil de GitHub de ${developer.nombre}`}
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                )}
                {developer.linkedin && (
                  <a
                    href={developer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors"
                    aria-label={`Perfil de LinkedIn de ${developer.nombre}`}
                  >
                    <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Descripción y habilidades */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#2B587D]">Sobre {developer.nombre.split(" ")[0]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {developer.descripcion}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2B587D]">
                  <Code className="h-5 w-5" />
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {developer.habilidades?.map((skill, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-br from-[#2B587D]/10 to-[#2B7C59]/10 border border-[#2B7C59]/20 text-center hover:scale-105 transition-transform"
                    >
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Botón de contacto */}
            <div className="flex gap-4">
              <Button 
                asChild
                className="flex-1 bg-gradient-to-r from-[#2B587D] to-[#2B7C59] hover:from-[#1a3a5c] hover:to-[#1f5c42]"
              >
                <a href={`mailto:${developer.email}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar Correo
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="flex-1 border-[#2B7C59] text-[#2B7C59] hover:bg-[#2B7C59]/10"
              >
                <a href={`tel:+57${developer.telefono}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
