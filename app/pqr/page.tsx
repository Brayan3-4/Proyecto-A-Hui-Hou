"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, FileText, HelpCircle, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PQRPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    tipo: "",
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    descripcion: "",
    aceptaTerminos: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const validatePhone = (phone: string) => {
    const regex = /^(\+57)?[0-9]{10}$/
    return regex.test(phone.replace(/\s/g, ""))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.tipo) newErrors.tipo = "Seleccione el tipo de solicitud"
    if (!formData.nombre || formData.nombre.length < 3) newErrors.nombre = "Nombre debe tener al menos 3 caracteres"
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = "Ingrese un correo válido"
    if (!formData.telefono || !validatePhone(formData.telefono)) newErrors.telefono = "Ingrese un teléfono válido (10 dígitos)"
    if (!formData.asunto || formData.asunto.length < 5) newErrors.asunto = "Asunto debe tener al menos 5 caracteres"
    if (!formData.descripcion || formData.descripcion.length < 20) newErrors.descripcion = "Descripción debe tener al menos 20 caracteres"
    if (!formData.aceptaTerminos) newErrors.aceptaTerminos = "Debe aceptar los términos"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor corrija los errores indicados",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast({
      title: "PQR Enviada",
      description: `Su ${formData.tipo} ha sido registrada con éxito. Le responderemos pronto.`
    })

    setFormData({
      tipo: "",
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      descripcion: "",
      aceptaTerminos: false
    })
    setIsSubmitting(false)
  }

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
            PQR
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Peticiones, Quejas y Reclamos - Estamos comprometidos con tu satisfacción
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <Card className="border-[#2B7C59]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2B7C59]">
                  <FileText className="h-5 w-5" />
                  Petición
                </CardTitle>
                <CardDescription>
                  Solicitudes de información, documentos o servicios adicionales.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#2B587D]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#2B587D]">
                  <HelpCircle className="h-5 w-5" />
                  Queja
                </CardTitle>
                <CardDescription>
                  Manifestaciones de inconformidad con nuestro servicio.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#9E5D3B]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#9E5D3B]">
                  <AlertTriangle className="h-5 w-5" />
                  Reclamo
                </CardTitle>
                <CardDescription>
                  Solicitudes relacionadas con productos o servicios adquiridos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#7AA77A]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#7AA77A]">
                  <CheckCircle className="h-5 w-5" />
                  Tiempo de Respuesta
                </CardTitle>
                <CardDescription>
                  Nos comprometemos a responder en un máximo de 15 días hábiles.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulario de PQR</CardTitle>
                <CardDescription>
                  Complete todos los campos para radicar su solicitud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Solicitud *</Label>
                      <Select
                        value={formData.tipo}
                        onValueChange={(value) => setFormData({ ...formData, tipo: value })}
                      >
                        <SelectTrigger className={errors.tipo ? "border-red-500" : ""}>
                          <SelectValue placeholder="Seleccione..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Petición">Petición</SelectItem>
                          <SelectItem value="Queja">Queja</SelectItem>
                          <SelectItem value="Reclamo">Reclamo</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.tipo && <p className="text-red-500 text-sm">{errors.tipo}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className={errors.nombre ? "border-red-500" : ""}
                        placeholder="Ingrese su nombre"
                      />
                      {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="correo@ejemplo.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className={errors.telefono ? "border-red-500" : ""}
                        placeholder="3001234567"
                      />
                      {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto *</Label>
                    <Input
                      id="asunto"
                      value={formData.asunto}
                      onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      className={errors.asunto ? "border-red-500" : ""}
                      placeholder="Resumen de su solicitud"
                    />
                    {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción Detallada *</Label>
                    <Textarea
                      id="descripcion"
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      className={`min-h-[150px] ${errors.descripcion ? "border-red-500" : ""}`}
                      placeholder="Describa detalladamente su petición, queja o reclamo..."
                    />
                    {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion}</p>}
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="aceptaTerminos"
                      checked={formData.aceptaTerminos}
                      onChange={(e) => setFormData({ ...formData, aceptaTerminos: e.target.checked })}
                      className="mt-1"
                    />
                    <Label htmlFor="aceptaTerminos" className="text-sm">
                      Acepto la{" "}
                      <Link href="/politica-privacidad" className="text-[#2B7C59] underline">
                        política de privacidad
                      </Link>{" "}
                      y el{" "}
                      <Link href="/tratamiento-datos" className="text-[#2B7C59] underline">
                        tratamiento de datos personales
                      </Link>
                    </Label>
                  </div>
                  {errors.aceptaTerminos && <p className="text-red-500 text-sm">{errors.aceptaTerminos}</p>}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2B587D] to-[#2B7C59] hover:from-[#1a3a5c] hover:to-[#1f5c42]"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar PQR"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
