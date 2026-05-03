import { pgTable, text, timestamp, boolean } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { users } from './users'

export const notifications = pgTable('notifications', {
  id        : text('id').primaryKey().$defaultFn(() => createId()),
  userId    : text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  title     : text('title').notNull(),
  message   : text('message').notNull(),
  isRead    : boolean('is_read').default(false).notNull(),
  createdAt : timestamp('created_at').defaultNow().notNull(),
})

export type Notification    = typeof notifications.$inferSelect
export type NewNotification = typeof notifications.$inferInsert