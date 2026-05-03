import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'
import { books } from './books'

export const recommendations = pgTable('recommendations', {
  id        : text('id').primaryKey().$defaultFn(() => createId()),
  bookId    : text('book_id').notNull().references(() => books.id, { onDelete: 'cascade' }),
  note      : text('note'),              // catatan dari admin kenapa direkomendasikan
  createdAt : timestamp('created_at').defaultNow().notNull(),
})

export type Recommendation    = typeof recommendations.$inferSelect
export type NewRecommendation = typeof recommendations.$inferInsert