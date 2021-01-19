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
]

const callbacks = {
  signIn: async (user, account, profile) => {
    if (account.provider === 'discord') {
      user.accessToken = await ApiService.validateUser(
        'discord',
        account.accessToken
      )
      return true
    }
    return false
  },
  jwt: async (token, user) => {
    if (user) {
      // console.log('userToken', user.accessToken)
      // console.log('SUPER SECRET', process.env.NEXT_PUBLIC_JWT_SECRET)

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
  providers,
  callbacks,
}

const Auth: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default Auth
