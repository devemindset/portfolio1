import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";



export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.socialId = profile.sub;
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.socialId = token.socialId as string;

      // 👉 Appel à ton backend pour récupérer username_slug
      

      return session;
    },
  },
};

const handler = NextAuth(authOptions); 
export { handler as GET, handler as POST}
