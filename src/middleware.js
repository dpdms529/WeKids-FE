import { auth } from "@/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default auth(async (request) => {
  const cookie = await cookies();
  const email = cookie.get("email");
  cookie.delete("Authorization");

  if (!request.auth?.user && request.nextUrl.pathname !== "/onboard") {
    if (!email) {
      const newUrl = new URL("/onboard", request.nextUrl.origin);
      return NextResponse.redirect(newUrl);
    }
  }
});

export const config = {
  matcher: [
    "/((?!api|onboard|signout|_next/static|_next/image|favicon.ico).*)",
  ],
};
