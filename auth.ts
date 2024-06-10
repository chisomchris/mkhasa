import NextAuth, { Account, Profile, Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import axios, { AxiosError } from "axios";
import { env } from "./lib/env";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import {
  TokenRequestParamsSchema,
  requestToken,
} from "./lib/request-oauth-token";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const { email, password } = credentials;
          const response = await axios.post(`${env.API_BASE_URL}/login`, {
            email,
            password,
          });
          if (response.status !== 200) {
            return null;
          }
          return {
            id: response.data.id,
            email: response.data.email,
            name: response.data.username,
            access_token: response.data.accessToken,
            access_token_expires: response.data.expiresIn,
            refresh_token: response.data.refreshToken,
          };
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error(error?.response?.data);
          } else console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  secret: env.AUTH_SECRET,
  callbacks: {
    async signIn(msg) {
      console.log(msg.user);
      // check if user exists in database, if exists, proceed
      // if not, redirect user to page for complete registration
      return true;
    },
    jwt: async ({
      token,
      user,
      account,
    }: {
      token: JWT;
      user: AdapterUser | User;
      account: Account | null;
      profile?: Profile;
    }) => {
      if (account?.provider === "google") {
        if (account) {
          const user_details = {
            id: user.id || "",
            name: user.name || "",
            email: user.email || "",
            access_token: account.access_token,
            provider: account?.provider,
          };

          // check if the user exists in the database, if yes return access token and refresh token
          // if user does not exist, create a new user and return access token and refresh token
          const { success, data } =
            TokenRequestParamsSchema.safeParse(user_details);
          if (success) {
            const response = await requestToken(data);
            if (response) {
              token.accessToken = response.access_token;
              token.accessTokenExpires = response.access_token_expires;
              token.refreshToken = response.refresh_token;
            }
          }
        }
      } else {
        if (user) {
          token.access_token = user.access_token;
          token.refresh_token = user.refresh_token;
          token.access_token_expires = user.access_token_expires;
          token.id = user.id!;
        }
      }
      return token;
    },

    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (session) {
        session.user.id = token.id;
        session.access_token = token.access_token;
        session.refresh_token = token.refresh_token;
        session.error = token.error;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
