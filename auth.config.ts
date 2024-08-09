import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // , the user will be redirected to our custom login page, rather than the NextAuth.js default page.
  pages: {
    signIn: "/login",
  },
  providers: [],
} satisfies NextAuthConfig;
