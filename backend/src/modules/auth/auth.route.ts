import { Elysia } from 'elysia'
import { jwt } from '@elysiajs/jwt'
import { RegisterUsers, LoginUsers } from './auth.service'
import { registerSchema, LoginSchema } from './auth.schema'
import { suscessResponse, errorResponse } from '../../utils/response'

export const authRoute = new Elysia({ prefix: '/auth' })
  .use(jwt({ name: 'jwt', secret: process.env.JWT_SECRET! }))

  // POST /auth/register
  .post(
    '/register',
    async ({ body, set }) => {
      try {
        const user = await RegisterUsers(body)
        set.status = 201
        return suscessResponse(user, 'Registrasi berhasil')
      } catch (error: any) {
        set.status = 400
        return errorResponse(error.message)
      }
    },
    { body: registerSchema }
  )

  // POST /auth/login
  .post(
    '/login',
    async ({ body, jwt, set }) => {
      try {
        const user = await LoginUsers(body)

        const token = await jwt.sign({
          id    : user.id,
          name  : user.name,
          email : user.email,
          role  : user.role,
        })

        return suscessResponse({ token, user }, 'Login berhasil')
      } catch (error: any) {
        set.status = 401
        return errorResponse(error.message)
      }
    },
    { body: LoginSchema }
  )