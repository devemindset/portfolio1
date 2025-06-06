import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: false, // nécessaire en dev (http)
  })

  const isAuthenticated = !!token
  const { pathname } = req.nextUrl

  // Rediriger les utilisateurs connectés loin de la landing
  if ((pathname === '/' || pathname === "/login" || pathname === "/register") && isAuthenticated) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }
 

  // Protéger certaines routes
  const protectedRoutes = ['/dashboard', '/new', '/account']
  if (!isAuthenticated && protectedRoutes.some(route => pathname.startsWith(route))) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/new/:path*', '/account/:path*',"/login","/register"],
}
