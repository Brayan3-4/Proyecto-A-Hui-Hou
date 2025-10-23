import { Leaf, Heart, Users, Award } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Sobre <span className="text-primary">A Hui Hou</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
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
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src="/natural-organic-farm-sustainable-agriculture.jpg"
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
      <section className="py-16 lg:py-24 bg-muted/50">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Hui Hou nació de una pasión por el bienestar natural y el respeto por la tierra. Fundada en 2020,
                comenzamos como un pequeño proyecto familiar con el sueño de compartir los beneficios de productos
                naturales de alta calidad con nuestra comunidad.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lo que comenzó en un mercado local ha crecido hasta convertirse en una tienda en línea que sirve a
                clientes en todo el país. A pesar de nuestro crecimiento, mantenemos los mismos valores que nos
                inspiraron desde el principio: calidad, sostenibilidad y un compromiso genuino con el bienestar de
                nuestros clientes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, trabajamos con más de 50 productores locales y orgánicos, ofreciendo una cuidadosa selección de
                productos que nutren el cuerpo y el alma. Cada compra que realizas apoya no solo tu salud, sino también
                a las familias y comunidades que cultivan estos productos con amor y dedicación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
