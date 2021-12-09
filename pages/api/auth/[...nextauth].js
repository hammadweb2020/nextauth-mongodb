import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
export default NextAuth({
  secret: process.env.SECRET,
  session: {
        jwt:true,
        maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // Facebook Provider
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),

      //Github Provider
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      }),

  ],
  pages:{
    error: '/login',
signIn: '/login'
  },

  jwt:{

    signingkey: process.env.JWT_SIGNING_PRIVATE_KEY

  },
  // MongoDB database connection
//database: process.env.DATABASE_URL,

})