import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 👇 Lire le cookie non-HttpOnly "auth_status"
  const isAuthenticated = request.cookies.get("auth_status")?.value === "true";

  const publicPages = ['/', '/login', '/register'];
  const protectedRoutes = ['/dashboard', '/new', '/payment_failed', '/payment_success'];

  const isPublicPage = publicPages.includes(pathname);
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isAuthenticated && isPublicPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/', '/login', '/register',
    '/dashboard/:path*', '/new/:path*',
    '/payment_failed', '/payment_success',
  ],
};
