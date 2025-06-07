// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Vérifie si l'utilisateur est connecté (cookie de next-auth)
  const isAuthenticated =
    request.cookies.has('next-auth.session-token') ||
    request.cookies.has('__Secure-next-auth.session-token');

  // Pages publiques (visibles uniquement si NON connecté)
  const publicPages = ['/', '/login', '/register'];

  // Pages privées (accessibles uniquement SI connecté)
  const protectedRoutes = ['/dashboard', '/new'];

  const isPublicPage = publicPages.includes(pathname);
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // 🔒 Si connecté et essaie d’accéder à une page publique → redirige vers /dashboard
  if (isAuthenticated && isPublicPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 🔐 Si NON connecté et essaie d’accéder à une route protégée → redirige vers /login
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Appliquer le middleware uniquement sur ces routes
export const config = {
  matcher: [
    '/',             // landing page
    '/login',
    '/register',
    '/dashboard/:path*',
    '/new/:path*',
  ],
};
