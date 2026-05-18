"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Database } from "lucide-react"
import Link from "next/link"

export default function TratamientoDatosPage() {
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
            TRATAMIENTO DE DATOS
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Política de protección de datos personales
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 mx-auto text-[#2B7C59] mb-4" />
            <CardTitle className="mb-2">Protección</CardTitle>
            <p className="text-sm text-muted-foreground">
              Sus datos están protegidos bajo estándares de seguridad internacional
            </p>
          </Card>
          <Card className="text-center p-6">
            <Lock className="h-12 w-12 mx-auto text-[#2B587D] mb-4" />
            <CardTitle className="mb-2">Confidencialidad</CardTitle>
            <p className="text-sm text-muted-foreground">
              Garantizamos la confidencialidad de toda su información personal
            </p>
          </Card>
          <Card className="text-center p-6">
            <Eye className="h-12 w-12 mx-auto text-[#3d9a8b] mb-4" />
            <CardTitle className="mb-2">Transparencia</CardTitle>
            <p className="text-sm text-muted-foreground">
              Transparencia total sobre el uso de sus datos
            </p>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#2B7C59]" />
              Política de Tratamiento de Datos Personales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, A Hui Hou establece 
              la presente política para el tratamiento de datos personales.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-[#2B587D]" />
                    1. Responsable del Tratamiento
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-2"><strong>Razón Social:</strong> A Hui Hou S.A.S.</p>
                  <p className="mb-2"><strong>NIT:</strong> 900.000.000-0</p>
                  <p className="mb-2"><strong>Dirección:</strong> Bogotá, Colombia</p>
                  <p className="mb-2"><strong>Correo:</strong> datos@ahuihou.com</p>
                  <p><strong>Teléfono:</strong> +57 300 123 4567</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#2B587D]" />
                    2. Datos que Recolectamos
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Nombre completo</li>
                    <li>Número de identificación</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Dirección de domicilio para envíos</li>
                    <li>Historial de compras</li>
                    <li>Preferencias de productos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-[#2B587D]" />
                    3. Finalidades del Tratamiento
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Gestionar el registro y autenticación de usuarios</li>
                    <li>Procesar pedidos y realizar envíos</li>
                    <li>Enviar información sobre productos y promociones</li>
                    <li>Atender peticiones, quejas y reclamos</li>
                    <li>Realizar análisis estadísticos para mejorar el servicio</li>
                    <li>Cumplir con obligaciones legales y contractuales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#2B587D]" />
                    4. Derechos del Titular
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">Como titular de los datos personales, usted tiene derecho a:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Conocer, actualizar y rectificar sus datos personales</li>
                    <li>Solicitar prueba de la autorización otorgada</li>
                    <li>Ser informado sobre el uso de sus datos</li>
                    <li>Revocar la autorización y/o solicitar la supresión del dato</li>
                    <li>Presentar quejas ante la Superintendencia de Industria y Comercio</li>
                    <li>Acceder en forma gratuita a sus datos personales</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-[#2B587D]" />
                    5. Medidas de Seguridad
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p className="mb-4">
                    A Hui Hou implementa las siguientes medidas de seguridad para proteger sus datos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cifrado de datos sensibles mediante protocolos SSL/TLS</li>
                    <li>Acceso restringido a bases de datos</li>
                    <li>Monitoreo constante de sistemas</li>
                    <li>Copias de seguridad periódicas</li>
                    <li>Capacitación al personal sobre protección de datos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-[#2B587D]" />
                    6. Vigencia
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>
                    La presente política entra en vigencia a partir de su publicación y estará 
                    vigente mientras exista la relación comercial o contractual entre el titular 
                    y A Hui Hou, y durante el período de tiempo necesario para cumplir con las 
                    finalidades descritas y las obligaciones legales aplicables.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>Última actualización: Mayo 2026</p>
          <p className="mt-2">
            Para ejercer sus derechos, contáctenos en{" "}
            <a href="mailto:datos@ahuihou.com" className="text-[#2B7C59] underline">
              datos@ahuihou.com
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
