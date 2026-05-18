import { ContactForm } from "@/components/contact/contact-form"
import { GoogleMap } from "@/components/google-map"
import { Mail, Phone, MapPin, Clock, ArrowLeft, Facebook, Instagram, MessageCircle, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Header />

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
                      <p className="text-muted-foreground">(+57) 3151604094</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 AM - 6:00 PM</p>
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
                      <p className="text-muted-foreground">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sábado: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold text-foreground mb-4">Síguenos en Redes Sociales</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/ahuihou_natural"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/ahuihou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://wa.me/573001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/ahuihou"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#3B9B9F]/10 via-[#7AA77A]/10 to-[#2B7C59]/10">
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
                  Sí, ofrecemos envío gratis en pedidos superiores a $50. Para pedidos menores, el costo de envío se
                  calcula según tu ubicación.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Puedo devolver un producto?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar sin abrir
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

      {/* Google Maps Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-8 text-center">Nuestra Ubicación</h2>
          <div className="max-w-4xl mx-auto">
            <GoogleMap />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
