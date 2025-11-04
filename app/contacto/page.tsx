import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-20 left-4 z-50">
        <Link href="/">
          <Button
            size="icon"
            variant="outline"
            className="h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur-sm border-2 hover:scale-110 hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-[#2B587D] via-[#3B9B9F] to-[#2B7C59]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-audiowide text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance tracking-wider">
              CONTÁCTANOS
            </h1>
            <p className="text-lg sm:text-xl text-white/90 text-balance">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">Información de Contacto</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestros productos, necesites ayuda
                  con un pedido o simplemente quieras compartir tu experiencia, estamos aquí para escucharte.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">AHuiHou6063@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24-48 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+57 3151604094</p>
                      <p className="text-sm text-muted-foreground">Lun - Sab: 10:00 AM - 4:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                      <p className="text-muted-foreground">Avenida 15 # 16 - 03</p>
                      <p className="text-muted-foreground">Barrio Ballenitas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horario de Atención</h3>
                      <p className="text-muted-foreground">Lunes - Sábado: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold text-foreground mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <span className="text-primary font-semibold">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <span className="text-primary font-semibold">ig</span>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                      aria-label="Twitter"
                    >
                      <span className="text-primary font-semibold">x</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Cuál es el tiempo de entrega?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los pedidos se procesan en 1-2 días hábiles y el tiempo de entrega es de 3-5 días hábiles dependiendo
                  de tu ubicación.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Ofrecen envío gratis?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, ofrecemos envío gratis en pedidos superiores a $30.000 Para pedidos menores, el costo de envío se
                  calcula según tu ubicación.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Puedo devolver un producto?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aceptamos devoluciones dentro de 24 horas posteriores a la compra. El producto debe estar sin abrir
                  y en su empaque original.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Los productos son realmente orgánicos?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sí, todos nuestros productos están certificados como orgánicos y trabajamos solo con productores que
                  cumplen con los más altos estándares de calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
