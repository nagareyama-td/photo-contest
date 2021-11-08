import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.NEXT_PUBLIC_APP_ID,
      clientSecret: process.env.NEXT_PUBLIC_APP_SECRET,
    }),
  ],
});
