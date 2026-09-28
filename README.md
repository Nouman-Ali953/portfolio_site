# Nauman Mukhtar: portfolio

## Run locally (Docker + Postgres)
    docker compose up --build      # http://localhost:3000

## Move to Neon
1. Copy `.env.example` to `.env`, set `DATABASE_URL` to your Neon string (keep `?sslmode=require`).
2. `docker compose up --build web` (add `--no-deps` to skip the local db).
The `messages` table is created automatically on the first contact submission.

## Dev without Docker
    docker compose up db -d
    DATABASE_URL=postgres://portfolio:portfolio@localhost:5432/portfolio npm install && npm run dev

Edit content in `lib/data.ts`. Read messages: `docker compose exec db psql -U portfolio -c "select * from messages"`.
