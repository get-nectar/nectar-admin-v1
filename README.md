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
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_url
NPM_TOKEN=your_npm_token
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