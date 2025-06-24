import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Only apply cache optimizations in production
  if (process.env.NODE_ENV === 'production') {
    const { pathname } = request.nextUrl;

    // Set bfcache-friendly headers for main pages
    if (pathname === '/' || !pathname.startsWith('/_next/')) {
      response.headers.set(
        'Cache-Control',
        'public, max-age=0, must-revalidate'
      );
    }

    // Add performance headers
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    
    // Add bfcache optimization headers
    response.headers.set('Vary', 'Accept-Encoding');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
