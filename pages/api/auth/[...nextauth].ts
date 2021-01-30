import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import jwt from 'jsonwebtoken'

import { ApiService } from 'services'

// TODO: Save this file from ESLint / TS hell

const providers = [
  Providers.Discord({
    clientId: process.env.NEXT_PUBLIC_DISCORD_ID!,
    clientSecret: process.env.NEXT_PUBLIC_DISCORD_SECRET!,
  }),
  Providers.Google({
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
  }),
  Providers.Reddit({
    clientId: process.env.NEXT_PUBLIC_REDDIT_ID!,
    clientSecret: process.env.NEXT_PUBLIC_REDDIT_SECRET!,
  }),
  Providers.Twitch({
    clientId: process.env.NEXT_PUBLIC_TWITCH_ID!,
    clientSecret: process.env.NEXT_PUBLIC_TWITCH_SECRET!,
  }),
  Providers.Twitter({
    clientId: process.env.NEXT_PUBLIC_TWITTER_ID!,
    clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET!,
  }),
]

const callbacks = {
  signIn: async (user, account, profile) => {
    user.accessToken = await ApiService.validateUser(
      account.provider,
      account.accessToken,
      account.refreshToken
    )
  },
  jwt: async (token, user) => {
    if (user) {
      const decodedJwt = jwt.verify(
        user.accessToken,
        process.env.NEXT_PUBLIC_JWT_SECRET
      )
      decodedJwt.accessToken = user.accessToken
      token = decodedJwt
    }
    return token
  },
  session: async (session, token) => {
    session.user = token.user
    session.accessToken = token.accessToken
    return session
  },
}

const options = {
  callbacks,
  providers,
  // secret: 'test12345',
  // debug: true,
}

const Auth: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default Auth
