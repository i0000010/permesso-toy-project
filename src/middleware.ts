/**
 * This middleware is used to protect the routes that require authentication.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  const { headers } = request;
  const authorization = headers.get("authorization");

  // // Return to / if don't have a session
  // if (!author) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // // Call the authentication endpoint
  // const apiUrl = new URL("/api/signin", process.env.NEXT_PUBLIC_URL);
  // const responseAPI = await fetch(apiUrl, {
  //   headers: {
  //     Cookie: `session=${session?.value}`,
  //   },
  // });

  // // Return to / if token is not authorized
  // if (responseAPI.status !== 200) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  return NextResponse.next();
}

//Add your protected routes
export const config = {
  matcher: [
    "/protected/:path*",
    "/posts/:path*",
  ],
};