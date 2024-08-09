import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Here you're initializing NextAuth.js with the authConfig object and exporting the auth property..
export default NextAuth(authConfig).auth;

// .. . You're also using the matcher option from Middleware to specify that it should run on specific paths.
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
