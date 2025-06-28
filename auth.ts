import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";
export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },

      async authorize(credentials) {
        if (credentials == null) {
          return null;
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        // check if user exists and password is correct
        if (user && user.password) {
          const isPasswordsMatch = compareSync(
            credentials.password as string,
            user.password
          );

          // if password is correct, return user
          if (isPasswordsMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
            };
          }
        }

        return null;
      },
    }),
  ],
  callbacks : {
    async session({ session, token, trigger, user } : any) {

        // set user id to session
        session.user.id = token.sub as string;

        // if there is update set the user name 
        if(trigger === 'update' && user){
            session.user.name = user.name;
        }
        return session
      },
  },
} satisfies NextAuthConfig;


export const { handlers, auth, signIn, signOut } = NextAuth(config);
