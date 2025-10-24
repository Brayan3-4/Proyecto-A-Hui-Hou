import { Leaf, Heart, Users, Award } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="tech-text text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              A Hui Hou<span className="text-primary"></span>
            </h1>

            {/* Texto modificado con la fuente del header */}
            <p className="tech-text text-lg sm:text-xl text-primary mt-4">
              Sumérgete en las profundidades de nuestro mundo saludable
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
                  src="/AHuiHou.jpg"
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
                A Hui Hou nació del deseo compartido de tres personas con una misma visión: volver a lo esencial. En un mundo que avanza a un ritmo vertiginoso, decidimos detenernos un momento y mirar hacia atrás, hacia lo natural, hacia lo auténtico. Así comenzó nuestro viaje.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El nombre A Hui Hou significa “hasta que nos volvamos a encontrar”, una expresión hawaiana que representa el reencuentro, la continuidad y el vínculo que nunca se rompe. Y no es casualidad que nuestro logotipo lleve una ballena: las ballenas francas regresan cada año al lugar donde nacieron, enseñando a sus crías el camino de vuelta. Esa fidelidad transmitida de generación en generación simboliza exactamente lo que somos: una marca que regresa a sus raíces para compartir lo mejor de la naturaleza, una y otra vez.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Somos tres mentes distintas unidas por un propósito común: crear productos que conecten a las personas con su bienestar, con el planeta y con los valores que no deberían perderse. Cada decisión que tomamos desde los ingredientes hasta el diseño refleja ese compromiso con lo auténtico, lo consciente y lo sostenible.
              </p>
              {/* Aumentamos la separación entre el 3er y 4to párrafo */}
              <p className="text-muted-foreground leading-relaxed mt-8">
                Nuestro sueño es que cada experiencia con A Hui Hou te recuerde que, al igual que las ballenas, siempre es posible volver a lo que realmente importa. Porque más que una marca, somos un viaje de regreso: hacia la naturaleza, hacia el equilibrio y hacia nosotros mismos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
