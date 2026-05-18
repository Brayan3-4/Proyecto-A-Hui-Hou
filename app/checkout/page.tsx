"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart/cart-provider"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, CreditCard, Landmark, Wallet, Shield, Lock } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CheckoutPage() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  })

  // Validaciones con expresiones regulares
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  const validatePhone = (phone: string) => {
    const regex = /^(\+57)?[0-9]{10}$/
    return regex.test(phone.replace(/\s/g, ""))
  }

  const validateCardNumber = (card: string) => {
    const regex = /^[0-9]{16}$/
    return regex.test(card.replace(/\s/g, ""))
  }

  const validateExpiry = (expiry: string) => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/
    return regex.test(expiry)
  }

  const validateCVV = (cvv: string) => {
    const regex = /^[0-9]{3,4}$/
    return regex.test(cvv)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName || formData.firstName.length < 2) {
      newErrors.firstName = "Nombre requerido (min. 2 caracteres)"
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      newErrors.lastName = "Apellido requerido (min. 2 caracteres)"
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Teléfono inválido (10 dígitos)"
    }
    if (!formData.address || formData.address.length < 10) {
      newErrors.address = "Dirección completa requerida"
    }
    if (!formData.city) {
      newErrors.city = "Ciudad requerida"
    }

    if (paymentMethod === "card") {
      if (!validateCardNumber(formData.cardNumber)) {
        newErrors.cardNumber = "Número de tarjeta inválido (16 dígitos)"
      }
      if (!validateExpiry(formData.expiry)) {
        newErrors.expiry = "Formato MM/AA"
      }
      if (!validateCVV(formData.cvv)) {
        newErrors.cvv = "CVV inválido (3-4 dígitos)"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor corrija los campos marcados en rojo",
        variant: "destructive"
      })
      return
    }

    setIsProcessing(true)

    // Simulación de procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "¡Pedido confirmado!",
      description: "Tu pedido ha sido procesado exitosamente. Recibirás un correo de confirmación.",
    })

    // Limpiar carrito
    dispatch({ type: "CLEAR_CART" })

    // Redirigir a página de confirmación
    router.push("/")
  }

  if (state.items.length === 0) {
    router.push("/carrito")
    return null
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero con gradiente */}
      <section className="relative py-16 bg-gradient-to-r from-[#1a3a5c] via-[#2B587D] via-[#2d8a9c] via-[#3d9a8b] to-[#2B7C59]">
        <Link
          href="/carrito"
          className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Volver al carrito"
        >
          <ArrowLeft className="h-5 w-5 text-white" />
        </Link>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-white" />
            <h1 className="font-audiowide text-3xl md:text-4xl font-bold text-white tracking-wider">
              CHECKOUT SEGURO
            </h1>
          </div>
          <p className="text-white/90 max-w-xl mx-auto">
            Tus datos están protegidos con encriptación SSL de 256 bits
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl font-bold text-foreground mb-8">Finalizar Compra</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulario de envío */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de Envío</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nombre *</Label>
                        <Input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellido *</Label>
                        <Input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="correo@ejemplo.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono * (10 dígitos)</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={errors.phone ? "border-red-500" : ""}
                        placeholder="3001234567"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <Label htmlFor="address">Dirección *</Label>
                      <Input 
                        id="address" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className={errors.address ? "border-red-500" : ""}
                        placeholder="Calle, número, barrio"
                      />
                      {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">Ciudad *</Label>
                        <Input 
                          id="city" 
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Código Postal</Label>
                        <Input 
                          id="zipCode" 
                          value={formData.zipCode}
                          onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#2B7C59]" />
                      Método de Pago
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 text-[#2B587D]" />
                          Tarjeta de Crédito/Débito
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="pse" id="pse" />
                        <Label htmlFor="pse" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Landmark className="h-5 w-5 text-[#2B7C59]" />
                          PSE - Débito Bancario
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                        <RadioGroupItem value="efectivo" id="efectivo" />
                        <Label htmlFor="efectivo" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Wallet className="h-5 w-5 text-[#9E5D3B]" />
                          Efectivo (Efecty, Baloto)
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 pt-4 border-t">
                        <div>
                          <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                          <Input 
                            id="cardNumber" 
                            placeholder="1234 5678 9012 3456" 
                            value={formData.cardNumber}
                            onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                            className={errors.cardNumber ? "border-red-500" : ""}
                          />
                          {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Fecha de Expiración *</Label>
                            <Input 
                              id="expiry" 
                              placeholder="MM/AA" 
                              value={formData.expiry}
                              onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                              className={errors.expiry ? "border-red-500" : ""}
                            />
                            {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input 
                              id="cvv" 
                              placeholder="123" 
                              value={formData.cvv}
                              onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                              className={errors.cvv ? "border-red-500" : ""}
                            />
                            {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "pse" && (
                      <div className="p-4 bg-[#2B7C59]/10 rounded-lg text-sm text-muted-foreground">
                        Serás redirigido a tu banco para completar el pago de forma segura.
                      </div>
                    )}

                    {paymentMethod === "efectivo" && (
                      <div className="p-4 bg-[#9E5D3B]/10 rounded-lg text-sm text-muted-foreground">
                        Recibirás un código de pago para realizar el pago en puntos Efecty o Baloto.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Resumen del pedido */}
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Resumen del Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {state.items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Envío</span>
                        <span>Gratis</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${state.total.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Sello de seguridad */}
                    <div className="flex items-center justify-center gap-2 p-3 bg-muted/50 rounded-lg mb-4">
                      <Shield className="h-5 w-5 text-[#2B7C59]" />
                      <span className="text-sm text-muted-foreground">
                        Pago 100% seguro con encriptación SSL
                      </span>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-[#2B587D] to-[#2B7C59] hover:from-[#1a3a5c] hover:to-[#1f5c42]" 
                      size="lg" 
                      disabled={isProcessing}
                      aria-label="Confirmar y pagar pedido"
                    >
                      {isProcessing ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Procesando pago...
                        </>
                      ) : (
                        <>
                          <CreditCard className="h-4 w-4 mr-2" />
                          Pagar ${state.total.toLocaleString('es-CO')}
                        </>
                      )}
                    </Button>

                    {/* Métodos de pago aceptados */}
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs text-center text-muted-foreground mb-2">Aceptamos</p>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">VISA</span>
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">MasterCard</span>
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">PSE</span>
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Efecty</span>
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">Baloto</span>
                      </div>
                    </div>

                    {/* Políticas */}
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Al confirmar, aceptas nuestros{" "}
                      <Link href="/terminos-condiciones" className="text-[#2B7C59] underline">
                        Términos y Condiciones
                      </Link>{" "}
                      y{" "}
                      <Link href="/tratamiento-datos" className="text-[#2B7C59] underline">
                        Política de Tratamiento de Datos
                      </Link>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    <Footer />
    </div>
  )
}
