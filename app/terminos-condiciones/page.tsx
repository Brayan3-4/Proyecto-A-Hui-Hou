"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, ShoppingCart, Truck, RefreshCw, Scale, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function TerminosCondicionesPage() {
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
            TÉRMINOS Y CONDICIONES
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Condiciones de uso de nuestros servicios
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#2B7C59]" />
                1. Aceptación de los Términos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Al acceder y utilizar el sitio web de A Hui Hou, usted acepta estar sujeto 
                a estos términos y condiciones de uso. Si no está de acuerdo con alguna 
                parte de estos términos, le recomendamos no utilizar nuestros servicios.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-[#2B587D]" />
                2. Proceso de Compra
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Los precios mostrados están en Pesos Colombianos (COP) e incluyen IVA</li>
                <li>Los precios pueden cambiar sin previo aviso</li>
                <li>La disponibilidad de productos está sujeta a existencias</li>
                <li>Nos reservamos el derecho de cancelar pedidos en caso de errores de precio</li>
                <li>Debe proporcionar información veraz y completa al realizar su pedido</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-[#3d9a8b]" />
                3. Envíos y Entregas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Realizamos envíos a todo el territorio colombiano</li>
                <li>Los tiempos de entrega varían según la ubicación (3-7 días hábiles)</li>
                <li>Los costos de envío se calculan según el peso y destino</li>
                <li>Envío gratis en compras superiores a $150.000 COP</li>
                <li>No nos hacemos responsables por retrasos causados por terceros</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-[#7AA77A]" />
                4. Devoluciones y Reembolsos
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Tiene 5 días hábiles desde la recepción para solicitar devolución</li>
                <li>El producto debe estar sin abrir y en su empaque original</li>
                <li>No se aceptan devoluciones de productos perecederos abiertos</li>
                <li>El reembolso se procesará en un plazo de 10 días hábiles</li>
                <li>Los costos de envío de devolución corren por cuenta del cliente</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#9E5D3B]" />
                5. Propiedad Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                Todo el contenido del sitio web, incluyendo pero no limitado a texto, 
                gráficos, logotipos, imágenes y software, es propiedad de A Hui Hou 
                o sus proveedores de contenido y está protegido por las leyes de 
                propiedad intelectual colombianas e internacionales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-[#C18F6B]" />
                6. Limitación de Responsabilidad
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                A Hui Hou no será responsable por daños indirectos, incidentales, 
                especiales o consecuentes que resulten del uso o la imposibilidad 
                de uso de nuestros productos o servicios. Nuestra responsabilidad 
                máxima estará limitada al valor del pedido en cuestión.
              </p>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-[#2B587D]/10 to-[#2B7C59]/10 rounded-lg p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Estos términos se rigen por las leyes de la República de Colombia.
            </p>
            <p className="text-sm text-muted-foreground">
              Última actualización: Mayo 2026
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
