import { RegisterForm } from "@/components/auth/register-form"
import Link from "next/link"
import { Leaf, ShoppingBag } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2B587D] via-[#3B9B9F] to-[#2B7C59] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 opacity-20">
          <Leaf className="h-32 w-32 text-white -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-20">
          <ShoppingBag className="h-24 w-24 text-white rotate-12" />
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-3 mb-8 group">
            <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
              <img src="/logo.jpg" alt="A Hui Hou Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-audiowide text-3xl font-bold text-white tracking-wider">A HUI HOU</span>
          </Link>
          <h2 className="font-audiowide text-3xl font-bold text-white mb-2">Crear Cuenta</h2>
          <p className="text-white/90">Únete a nuestra comunidad de bienestar</p>
        </div>
        <RegisterForm />
        <div className="text-center">
          <p className="text-sm text-white/90">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="font-medium text-white hover:text-white/80 underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
