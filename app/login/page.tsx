import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Leaf, ShoppingBag, Heart } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2B587D] via-[#3B9B9F] to-[#2B7C59] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="h-32 w-32 text-white rotate-12" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <ShoppingBag className="h-24 w-24 text-white -rotate-12" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-10">
          <Heart className="h-40 w-40 text-white" />
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center animate-in fade-in slide-in-from-top duration-700">
          <Link href="/" className="flex items-center justify-center space-x-3 mb-8 group">
            <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-110">
              <img src="/logo.jpg" alt="A Hui Hou Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-audiowide text-3xl font-bold text-white tracking-wider">A HUI HOU</span>
          </Link>
          <h2 className="font-audiowide text-3xl font-bold text-white mb-2">Iniciar Sesión</h2>
          <p className="text-white/90">Accede a tu cuenta para continuar tu experiencia natural</p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          <LoginForm />
        </div>

        <div className="text-center space-y-4 animate-in fade-in duration-700 delay-300">
          <p className="text-sm text-white/90">
            ¿No tienes cuenta?{" "}
            <Link href="/registro" className="font-medium text-white hover:text-white/80 transition-colors underline">
              Regístrate aquí
            </Link>
          </p>
          <div className="pt-4 border-t border-white/20">
            <p className="text-xs text-white/80 mb-2">Usuarios de prueba:</p>
            <div className="flex flex-col gap-2 text-xs text-white/90">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <strong>Admin:</strong> admin@ahuihou.com / admin123
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <strong>Usuario:</strong> usuario@demo.com / demo123
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
