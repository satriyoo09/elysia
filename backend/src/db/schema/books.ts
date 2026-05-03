import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const books = pgTable('books', {
  id          : text('id').primaryKey().$defaultFn(() => createId()),
  title       : text('title').notNull(),
  author      : text('author').notNull(),
  description : text('description'),
  cover       : text('cover'),           // URL gambar cover buku
  category    : text('category').notNull(),
  fileUrl     : text('file_url'),        // URL PDF/ebook
  createdAt   : timestamp('created_at').defaultNow().notNull(),
})

export type Book    = typeof books.$inferSelect
export type NewBook = typeof books.$inferInsert