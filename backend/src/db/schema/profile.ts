import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { users } from './users'
import { notifications } from './notifications'

export const profile = pgTable('profile', {
  id        : text('id').primaryKey().$defaultFn(() => createId()),
  userId    : text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title     : text('title').notNull(),
  message   : text('message').notNull(),
  isRead    : boolean('is_read').default(false).notNull(),
  createdAt : timestamp('created_at').defaultNow().notNull(),
})

export type Profile    = typeof profile.$inferSelect
export type NewProfile = typeof profile.$inferInsert