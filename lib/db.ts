import { Pool } from "pg";
const g = globalThis as unknown as { pool?: Pool };
export const pool = g.pool ?? new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
if (process.env.NODE_ENV !== "production") g.pool = pool;
let ready: Promise<unknown> | undefined;
export const init = () =>
  (ready ??= pool.query(`CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL,
    body TEXT NOT NULL, created_at TIMESTAMPTZ DEFAULT now())`));
