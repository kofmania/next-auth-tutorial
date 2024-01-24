import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // id: "next-auth",
      name: "next-auth-name",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        // check from backend api

        const user = {
          id: "user-id",
          name: "name",
          email: "user@test.com",
          image: "http://xxx",
        };

        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async signIn(params) {
      console.log("[signIn]", params);
      return params.user.id;
    },
    async redirect(params) {
      console.log("[redirect]", params);
      return params.url;
    },
    async session(params) {
      console.log("[session]", params);
      return params.session;
    },
    async jwt(params) {
      console.log("[jwt]", params);
      return params.token;
    },
  },
});

export { handler as GET, handler as POST };
