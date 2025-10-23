export function About() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Misión es tu <span className="text-primary">Bienestar</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 text-balance">
                En A Hui Hou creemos que la naturaleza nos brinda todo lo necesario para vivir una vida plena y
                saludable. Cada producto que seleccionamos pasa por rigurosos estándares de calidad y sostenibilidad.
              </p>
              <p className="text-muted-foreground mb-8 text-balance">
                Trabajamos directamente con productores locales y orgánicos para garantizar que recibas productos
                frescos, puros y llenos de los nutrientes que tu cuerpo necesita.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">100% Natural</h3>
                  <p className="text-sm text-muted-foreground">Sin químicos ni conservantes artificiales</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sostenible</h3>
                  <p className="text-sm text-muted-foreground">Comprometidos con el medio ambiente</p>
                </div>
              </div>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/natural-organic-farm-sustainable-agriculture.jpg"
                alt="Productos naturales y sostenibles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
