import Credentials from 'next-auth/providers/credentials'
import { db } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const credentialsProvider = Credentials({
  type: 'credentials',
  credentials: {
    email: { label: 'Email', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    const { email, password } = credentials as {
      email: string
      password: string
    }

    if (!email || !password) return null

    const user = await db.user.findUnique({
      where: { email: email },
    })

    if (user && bcrypt.compareSync(password, user.password ?? '')) {
      return user
    } else {
      throw new Error('invalid credentials')
    }
  },
})

export default credentialsProvider
