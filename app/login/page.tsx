import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
            {/* Imagen que reemplaza el círculo verde */}
            <Image
              src="/logodef.png" // 🔹 Cambia esta ruta por la de tu imagen
              alt="Logo"
              width={90}
              height={40}
              className="rounded-full"
            />
            {/* Imagen que reemplaza el texto "A Hui Hou" */}
            <Image
              src="/logoLetra.png" // 🔹 Cambia esta ruta por la de tu imagen de texto
              alt="A Hui Hou"
              width={300}
              height={100}
            />
          </Link>
          <h2 className="font-playfair text-3xl font-bold text-foreground">Iniciar Sesión</h2>
          <p className="mt-2 text-muted-foreground">Accede a tu cuenta para continuar</p>
        </div>
        <LoginForm />
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-medium text-primary hover:text-primary/80">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
