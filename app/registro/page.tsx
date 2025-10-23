import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            <div className="h-10 w-10 rounded-full bg-primary"></div>
            <span className="font-playfair text-3xl font-bold text-foreground">A Hui Hou</span>
          </Link>
          <h2 className="font-playfair text-3xl font-bold text-foreground">Crear Cuenta</h2>
          <p className="mt-2 text-muted-foreground">Únete a nuestra comunidad de bienestar</p>
        </div>
        <RegisterForm />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-medium text-primary hover:text-primary/80">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
