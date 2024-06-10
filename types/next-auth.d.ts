import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      token: string;
    } & DefaultSession["user"];
    access_token: string | null;
    refresh_token: string | null;
    error: "RefreshAccessTokenError" | null;
  }
  interface User {
    access_token: string;
    refresh_token: string;
    access_token_expires: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    access_token: string;
    refresh_token: string;
    access_token_expires: number;
    error: "RefreshAccessTokenError" | null;
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    access_token: string;
    refresh_token: string;
    access_token_expires: number;
  }
}
