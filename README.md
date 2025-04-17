# Nectar Admin Tool

A lightweight admin tool for managing users in workspaces.

## Features

- Add users to workspaces with specific roles
- User-friendly interface with confirmation dialogs
- Status notifications for success/failure

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma ORM
- @getnectar/schema
- Headless UI components

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Setup

1. Clone the repository
2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables by creating a `.env` file:

```
DATABASE_URL=postgres://postgres.judbqaotzbgkvqsvbuwd:sNMb8yd9whqi0HKR@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=2
DIRECT_URL=postgres://postgres.judbqaotzbgkvqsvbuwd:WfOpmdlxKOL4o9lU@aws-0-us-east-1.pooler.supabase.com:5432/postgres
NPM_TOKEN=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
```

4. Generate Prisma client:

```bash
pnpm run db:generate
```

5. Run the development server:

```bash
pnpm dev
```

## API Routes

- `GET /api/users` - Fetch all users
- `GET /api/workspaces` - Fetch all workspaces
- `POST /api/add-user-to-workspace` - Add a user to a workspace

## Deployment

This project is set up to be deployed on Vercel. 