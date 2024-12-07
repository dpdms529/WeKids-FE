import { auth } from "@/auth";
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default auth(async (request) => {
  // const cookie = await cookies();
  const cookieStore = request.headers.get("cookie");
  const cookies = new Map(cookieStore?.split("; ").map((c) => c.split("=")));
  const email = cookies.get("email");
  const name = cookies.get("name");
  const authorization = cookies.get("Authorization");
  console.log(email, name, authorization);
  cookies.delete("Authorization");

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
