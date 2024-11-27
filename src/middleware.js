import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/src/libs/session";

const protectedRoutes = ["/*"];
const publicRoutes = ["/signup/*"];

// 라우트가 수행되기 전에 호출되는 곳
// ex. lh:3-/login, lh:3-/dashboard라든지, 요청했을 때, 
export default async function middleware(req) {
  
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("Authorization")?.value;
  console.log('cookie', cookie);
  
  const session = await decrypt(cookie);

  console.log('memberId', session?.memberId);
  

  if (isProtectedRoute && !session?.memberId) {

    return NextResponse.redirect(new URL("/signup/select", req.nextUrl));
  }

  if (isPublicRoute && session?.userId) {
    console.log('/');
    
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}