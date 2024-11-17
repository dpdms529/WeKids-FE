import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((request) => {
  if (!request.auth && request.nextUrl.pathname !== "/signin") {
    const newUrl = new URL("/signin", request.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|signin|signout|_next/static|_next/image|favicon.ico).*)"],
};
