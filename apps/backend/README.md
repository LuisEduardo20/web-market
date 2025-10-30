# Backend (Node + Express + TypeScript + Inversify + Prisma)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **DI Container**: Inversify
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Testing**: Vitest

## Setup

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Environment

```bash
cp .env.example .env
# Edit .env with your database credentials
```

### 3. Generate Prisma Client

```bash
yarn prisma:generate
```

### 4. Run Migrations

```bash
yarn prisma:migrate:dev --name init
```

## Commands

### Development

```bash
yarn dev          # Start dev server with auto-reload
```

### Production

```bash
yarn build        # Build TypeScript to JavaScript
yarn start        # Run production build
```

### Testing

```bash
yarn test         # Run all tests once
```

### Database

```bash
yarn prisma:generate       # Generate Prisma Client
yarn prisma:migrate:dev    # Create new migration
yarn prisma:migrate:prod   # Apply migrations (production)
yarn prisma:studio        # Open Prisma Studio (GUI)
```

## Quick Start

```bash
# 1. Copy env file
cp .env.example .env

# 2. Install deps
yarn install

# 3. Generate Prisma Client
yarn prisma:generate

# 4. Create database and run migrations
yarn prisma:migrate:dev --name init

# 5. Start development server
yarn dev
```

## Project Structure

```
src/
├── controllers/        # HTTP request handlers
├── services/           # DatabaseService, UserService, etc
├── repositories/       # Data access layer (UserRepository, etc)
├── types.ts            # Inversify symbols
├── inversify.config.ts # DI container configuration
└── index.ts            # Express app entry point

tests/
└── unit/               # Unit tests with Vitest

prisma/
└── schema.prisma       # Database schema definition

.env                    # Local env vars (git ignored)
.env.example            # Example env file
```

## Prisma ORM

For detailed Prisma setup and usage, see [PRISMA_SETUP.md](../../PRISMA_SETUP.md)
