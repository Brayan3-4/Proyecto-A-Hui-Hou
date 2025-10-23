import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if accessing admin routes
  if (pathname.startsWith("/admin")) {
    // In a real app, you'd verify the JWT token here
    // For now, we'll let the client-side handle the redirect
    // but this middleware can be enhanced for server-side protection
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
