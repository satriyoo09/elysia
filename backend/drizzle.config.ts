import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/index.ts',
  out: './drizzle',
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_TiNPAE9G5eWF@ep-dark-pond-aom09bmj.c-2.ap-southeast-1.aws.neon.tech/Elysia_db?sslmode=require&channel_binding=require",
  },
})