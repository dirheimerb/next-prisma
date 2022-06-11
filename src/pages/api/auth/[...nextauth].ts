import 'dotenv/config'
const fireApiKey = process.env.NEXTFIREBASE_API_KEY
const fireAuthDomain = process.env.NEXTFIREBASE_AUTH_DOMAIN
const fireDataBaseUrl = process.env.NEXTFIREBASE_DATABASE_URL
const fireProjectId = process.env.NEXTFIREBASE_PROJECT_ID
const fireStorageBucket = process.env.NEXTFIREBASE_STORAGEBUCKET
const fireAppId = process.env.NEXTFIREBASEAPP_ID
const fireMessurementId = process.env.NEXTFIREBASE_MEASUREMENTID
const fireMessage = process.env.NEXTMESSAGINGSENDERID
const firebaseConfig = {
  apiKey: fireApiKey,
  authDomain: fireAuthDomain,
  databaseURL: fireDataBaseUrl,
  projectId: fireProjectId,
  storageBucket: fireStorageBucket,
  messagingSenderId: fireMessage,
  appId: fireAppId,
  messurementId: fireMessurementId,
}

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextApiHandler } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from 'next-auth/providers/github'

import config from '../../../config'
import { prisma } from '../../../utils/ssr'

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: config.GITHUB_ID,
      clientSecret: config.GITHUB_SECRET,
    }),
    EmailProvider({
      server: config.SMTP_SERVER,
      from: config.SMTP_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma),

  secret: config.SECRET,
  callbacks: {
    session: async ({ session, user }) => {
      session.userId = user.id
      return Promise.resolve(session)
    },
  },
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)

export default authHandler
