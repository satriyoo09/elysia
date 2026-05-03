import { Elysia } from 'elysia'
import { authMiddleware } from './auth.middleware'

// Hanya ADMIN yang boleh akses
export const adminOnly = new Elysia({ name: 'admin-only' })
  .use(authMiddleware)
  .derive(({ user, set }) => {
    if (user.role !== 'ADMIN') {
      set.status = 403
      throw new Error('Akses ditolak. Hanya admin yang diizinkan')
    }
    return { user }
  })

// Hanya USER biasa yang boleh akses
export const userOnly = new Elysia({ name: 'user-only' })
  .use(authMiddleware)
  .derive(({ user, set }) => {
    if (user.role !== 'USER') {
      set.status = 403
      throw new Error('Akses ditolak. Hanya user yang diizinkan')
    }
    return { user }
  })