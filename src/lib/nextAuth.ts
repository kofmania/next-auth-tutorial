import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "next-auth";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  theme: {
    logo: "https://authjs.dev/img/logo/logo-sm.webp",
    // logo: "https://z-emotion.com/static/favicon/favicon-32x32.png",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        const user: User = {
          id: "unknown",
        };

        try {
          const res = await axios.post(
            "/auth/signin",
            {
              email: credentials?.username,
              password: credentials?.password,
              loginType: "credentials",
            },
            { baseURL: process.env.NEXT_PUBLIC_API }
          );
          user.id = Date.now().toString();
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
          }
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS as string,
    }),
  ],
  callbacks: {
    async signIn(params) {
      console.log("[signIn]", params);
      // return params.user.id;
      return true;
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

      // if (params.account && params.user) {
      //   return {
      //     accessToken:
      //   }
      // }
      return params.token;
    },
  },
  pages: {
    // signIn: "/auth/signin",
  },
};
