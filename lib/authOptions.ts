import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import NextAuth, { NextAuthOptions, DefaultSession } from "next-auth";

// estende os tipos do NextAuth
declare module "next-auth" {
  interface Session {
    user: {
      tipo?: string;
    } & DefaultSession["user"];
  }

  interface User {
    tipo?: string;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      // adiciona o tipo do usuário na sessão
      session.user.tipo = user.tipo;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
