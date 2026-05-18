"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Target, Eye, Flag, Award } from "lucide-react"

export function CompanyInfo() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#f8fdf8] to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-audiowide text-3xl md:text-4xl font-bold text-center mb-12 tracking-wider bg-gradient-to-r from-[#2B587D] via-[#3d9a8b] to-[#2B7C59] bg-clip-text text-transparent">
          NUESTRA EMPRESA
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="mision" className="border rounded-lg px-4 shadow-sm bg-white">
              <AccordionTrigger className="text-left py-4">
                <span className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#2B7C59]/10">
                    <Target className="h-5 w-5 text-[#2B7C59]" />
                  </div>
                  <span className="font-semibold text-lg">Misión</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>
                  En A Hui Hou, creemos que la naturaleza nos brinda todo lo necesario para vivir una vida plena y
                  saludable. Nuestra misión es hacer accesibles productos naturales de la más alta calidad, cultivados
                  con respeto por la tierra y las personas que la trabajan.
                  <br />
                  <br />
                  Trabajamos directamente con productores locales y orgánicos que comparten nuestra visión de
                  sostenibilidad y calidad. Cada producto que seleccionamos pasa por rigurosos estándares de calidad
                  para garantizar que recibas lo mejor de la naturaleza.


                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vision" className="border rounded-lg px-4 shadow-sm bg-white">
              <AccordionTrigger className="text-left py-4">
                <span className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#2B587D]/10">
                    <Eye className="h-5 w-5 text-[#2B587D]" />
                  </div>
                  <span className="font-semibold text-lg">Visión</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <p>
                Convertirse en una tienda referente en el sector de frutos secos y productos saludables, reconocida por su eficiencia operativa, innovación digital y servicio confiable al cliente, mediante la implementación de soluciones tecnológicas escalables y de alta calidad
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="objetivos" className="border rounded-lg px-4 shadow-sm bg-white">
              <AccordionTrigger className="text-left py-4">
                <span className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#3d9a8b]/10">
                    <Flag className="h-5 w-5 text-[#3d9a8b]" />
                  </div>
                  <span className="font-semibold text-lg">Objetivos</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li><b>Objetivo general: </b>Desarrollar una solución integral que permita a “A Hui Hou” gestionar de forma eficiente sus procesos de inventario y ventas, reduciendo errores manuales, optimizando recursos y mejorando la atención al cliente.</li>
                  <li>Analizar los procesos actuales de gestión en A Hui Hou para identificar oportunidades de mejora.</li>
                  <li>Diseñar una base de datos estructurada que permita el control eficiente de productos y ventas.</li>
                  <li>Implementar un módulo de inventario con actualización automática.</li>
                  <li>Diseñar una interfaz sencilla, accesible y multiplataforma.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="valores" className="border rounded-lg px-4 shadow-sm bg-white">
              <AccordionTrigger className="text-left py-4">
                <span className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-[#9E5D3B]/10">
                    <Award className="h-5 w-5 text-[#9E5D3B]" />
                  </div>
                  <span className="font-semibold text-lg">Valores</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#2B7C59] mb-1">Calidad</h4>
                    <p className="text-sm">Productos seleccionados con los más altos estándares</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B7C59] mb-1">Sostenibilidad</h4>
                    <p className="text-sm">Compromiso con el medio ambiente y el futuro</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B7C59] mb-1">Transparencia</h4>
                    <p className="text-sm">Honestidad en cada aspecto de nuestro negocio</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2B7C59] mb-1">Bienestar</h4>
                    <p className="text-sm">Promovemos la salud integral de nuestros clientes</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
