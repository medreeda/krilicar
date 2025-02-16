import { clerkMiddleware } from '@clerk/nextjs/server'

const isPublicRoute = (path: string) => {
  const publicRoutes = ['/', '/sign-in', '/signup'];
  return publicRoutes.includes(path);
};

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req.nextUrl.pathname)) {
    return;
  }
  auth();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
