"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Eye, Bell, Trash2, Globe } from "lucide-react"
import Link from "next/link"

export default function PoliticaPrivacidadPage() {
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
            POLÍTICA DE PRIVACIDAD
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#2B7C59]" />
                1. Información que Recopilamos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                En A Hui Hou, recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Crea una cuenta en nuestra plataforma</li>
                <li>Realiza una compra o transacción</li>
                <li>Se suscribe a nuestro boletín de noticias</li>
                <li>Nos contacta a través de nuestros canales de atención</li>
                <li>Participa en encuestas o promociones</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#2B587D]" />
                2. Uso de la Información
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Procesar y gestionar sus pedidos</li>
                <li>Enviar confirmaciones de compra y actualizaciones de envío</li>
                <li>Personalizar su experiencia de compra</li>
                <li>Enviar comunicaciones de marketing (con su consentimiento)</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#3d9a8b]" />
                3. Compartir Información
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>No vendemos ni alquilamos su información personal. Solo compartimos datos con:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proveedores de servicios de pago para procesar transacciones</li>
                <li>Empresas de logística para realizar envíos</li>
                <li>Autoridades cuando sea requerido por ley</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#7AA77A]" />
                4. Cookies y Tecnologías Similares
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, 
                analizar el tráfico del sitio y personalizar contenido. Puede configurar 
                su navegador para rechazar cookies, aunque esto puede afectar algunas 
                funcionalidades del sitio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-[#9E5D3B]" />
                5. Sus Derechos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información incorrecta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
                <li>Presentar quejas ante la autoridad de protección de datos</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="h-5 w-5 text-[#C18F6B]" />
                6. Retención de Datos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Conservamos sus datos personales durante el tiempo necesario para cumplir 
                con los fines descritos en esta política, a menos que la ley requiera o 
                permita un período de retención más largo. Los datos de transacciones se 
                conservan por un período mínimo de 5 años según las regulaciones fiscales 
                colombianas.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-[#2B587D]/10 to-[#2B7C59]/10 rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Última actualización: Mayo 2026
            </p>
            <p className="text-sm text-muted-foreground">
              Para cualquier consulta sobre esta política, contáctenos en{" "}
              <a href="mailto:privacidad@ahuihou.com" className="text-[#2B7C59] underline">
                privacidad@ahuihou.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
