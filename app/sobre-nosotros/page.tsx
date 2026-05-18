import { Leaf, Heart, Users, Award, Phone, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const developers = [
  {
    id: 1,
    nombre: "Brayan Gustavo Arengas Virguez",
    rol: "Estudiante de Ingeniería de Sistemas · Frontend Developer",
    telefono: "3152747486",
    email: "brayang-arengasv@ahuihou.com",
    foto: "/developers/Brayan.jpg",
    github: "https://github.com/brayanarengas",
    linkedin: "https://linkedin.com/in/brayan-arengas",
    descripcion: "Desarrollador frontend enfocado en creación de interfaces web modernas, responsivas y escalables utilizando React, Next.js y TypeScript. Interesado en experiencia de usuario, arquitectura de componentes y desarrollo de aplicaciones web con buenas prácticas de ingeniería de software."
  },
  {
    id: 2,
    nombre: "Laura Gabriela Balcazar Cardozo",
    rol: "Estudiante de Ingeniería de Sistemas · Full Stack Developer",
    telefono: "3145144221",
    email: "laurag-balcazarc@ahuihou.com",
    foto: "/developers/Gaby.jpeg",
    github: "https://github.com/gabrielabalcazar",
    linkedin: "https://linkedin.com/in/gabriela-balcazar",
    descripcion: "Desarrolladora full stack enfocada en construcción de aplicaciones web integrando frontend y backend. Interesada en desarrollo de sistemas escalables, manejo de bases de datos y diseño de soluciones funcionales aplicando tecnologías modernas."
  },
  {
    id: 3,
    nombre: "Carlos José Petro Almario",
    rol: "Estudiante de Ingeniería de Sistemas · Backend Developer",
    telefono: "3028372725",
    email: "carlosj-petroa@ahuihou.com",
    foto: "/developers/José.jpeg",
    github: "https://github.com/josepetrodev",
    linkedin: "https://linkedin.com/in/jose-petro",
    descripcion: "Desarrollador backend enfocado en lógica de negocio, desarrollo de APIs y gestión de bases de datos. Interesado en optimización de sistemas, estructuras de datos y construcción de servicios mantenibles y seguros."
  }
]

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2B587D] via-[#3B9B9F] to-[#2B7C59]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-audiowide text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance tracking-wider">
              SOBRE <span className="text-white/90">A HUI HOU</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 text-balance">
              Conectando la sabiduría ancestral con el bienestar moderno a través de productos naturales de la más alta
              calidad
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[3/3] overflow-hidden rounded-lg">
                <img
                  src="/mision.png"
                  alt="Agricultura sostenible"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  En A Hui Hou, creemos que la naturaleza nos brinda todo lo necesario para vivir una vida plena y
                  saludable. Nuestra misión es hacer accesibles productos naturales de la más alta calidad, cultivados
                  con respeto por la tierra y las personas que la trabajan.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Trabajamos directamente con productores locales y orgánicos que comparten nuestra visión de
                  sostenibilidad y calidad. Cada producto que seleccionamos pasa por rigurosos estándares de calidad
                  para garantizar que recibas lo mejor de la naturaleza.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  "A Hui Hou" significa "hasta que nos volvamos a ver" en hawaiano, reflejando nuestro compromiso de
                  construir relaciones duraderas con nuestros clientes y la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#3B9B9F]/10 via-[#7AA77A]/10 to-[#2B7C59]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Los principios que guían cada decisión que tomamos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">100% Natural</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sin químicos, conservantes artificiales ni aditivos. Solo ingredientes puros de la naturaleza.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Sostenible</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprometidos con prácticas que protegen nuestro planeta para las futuras generaciones.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Comunidad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Apoyamos a productores locales y construimos relaciones justas y transparentes.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Calidad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estándares rigurosos en cada paso, desde la cosecha hasta tu hogar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Nuestra Historia
              </h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-8">
                  A Hui Hou nació de una pasión por el bienestar natural y el respeto por la tierra. Fundada en 2020, comenzamos como un pequeño proyecto familiar con el sueño de compartir los beneficios de productos naturales de alta calidad con nuestra comunidad.
                </p>
                <p className="text-muted-foreground leading-8">
                  Lo que comenzó en un mercado local ha crecido hasta convertirse en una tienda en línea que sirve a clientes en todo el país. A pesar de nuestro crecimiento, mantenemos los mismos valores que nos inspiraron desde el principio: calidad, sostenibilidad y un compromiso genuino con el bienestar de nuestros clientes.
                </p>
                <p className="text-muted-foreground leading-8">
                  Hoy, trabajamos con más de 50 productores locales y orgánicos, ofreciendo una cuidadosa selección de productos que nutren el cuerpo y el alma. Cada compra que realizas apoya no solo tu salud, sino también a las familias y comunidades que cultivan estos productos con amor y dedicación.
                </p>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex justify-center">
              <img
                src="/Nuestra Historia.png"
                alt="Nuestra Historia"
                className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Developers Section - SIN EFECTOS VISUALES EN LAS FOTOS */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2B587D]/5 via-[#3B9B9F]/5 to-[#2B7C59]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nuestro Equipo de Desarrollo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Los profesionales detrás de la plataforma digital de A Hui Hou
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {developers.map((dev) => (
                <Card key={dev.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-[#2B7C59]/20">
                  <Link href={`/desarrolladores/${dev.id}`} className="block">
                    {/* Contenedor de la imagen: solo la foto, sin círculo, sin overlay, sin zoom */}
                    <div className="h-120 bg-gradient-to-br from-[#2B587D] to-[#2B7C59] relative overflow-hidden">
                      <img 
                        src={dev.foto} 
                        alt={`Foto de ${dev.nombre}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <CardHeader className="pb-2">
                    <Link href={`/desarrolladores/${dev.id}`} className="hover:text-[#2B7C59] transition-colors">
                      <CardTitle className="text-[#2B587D] text-xl">{dev.nombre}</CardTitle>
                    </Link>
                    <CardDescription className="text-[#2B7C59] font-semibold">{dev.rol}</CardDescription>
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
                        <span className="truncate">{dev.email}</span>
                      </a>
                    </div>
                    <div className="flex gap-2 mt-4 pt-4 border-t">
                      {dev.github && (
                        <a 
                          href={dev.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-[#2B587D] hover:text-white transition-colors"
                          aria-label={`GitHub de ${dev.nombre}`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {dev.linkedin && (
                        <a 
                          href={dev.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-[#0A66C2] hover:text-white transition-colors"
                          aria-label={`LinkedIn de ${dev.nombre}`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      <Link 
                        href={`/desarrolladores/${dev.id}`}
                        className="ml-auto px-4 py-2 rounded-full bg-[#2B7C59]/10 hover:bg-[#2B7C59] hover:text-white transition-colors text-[#2B7C59] text-sm font-medium"
                      >
                        Ver Perfil
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}