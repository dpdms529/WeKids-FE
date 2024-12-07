import { auth } from "@/auth";
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default auth(async (request, response) => {
  // const cookie = await cookies();
  // const cookieStore = request.headers.get("Cookie");
  // const cookies = new Map(cookieStore?.split("; ").map((c) => c.split("=")));
  const email = response.headers.get("Email");
  // const name = response.headers.get("Name");
  const authorization = response.headers.get("Authorization");
  console.log(email, authorization);
  // cookies.delete("Authorization");

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
