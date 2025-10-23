import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Mantente Conectado con la <span className="text-primary">Naturaleza</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Recibe consejos de bienestar, recetas saludables y ofertas exclusivas directamente en tu correo.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="tu@email.com" className="flex-1" required />
            <Button type="submit">Suscribirse</Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">No spam. Solo contenido valioso para tu bienestar.</p>
        </div>
      </div>
    </section>
  )
}
