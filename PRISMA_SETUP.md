# Prisma ORM Setup - Backend

## Instalação Completa

O Prisma ORM foi configurado no projeto backend com suporte a PostgreSQL.

## O que foi adicionado

### 1. **Dependências (package.json)**

- `@prisma/client` — Cliente Prisma para runtime
- `prisma` — CLI Prisma para desenvolvimento
- `@types/express` — Tipos TypeScript para Express

### 2. **Estrutura de Arquivos**

```
apps/backend/
├── prisma/
│   └── schema.prisma          # Schema do banco de dados
├── src/
│   ├── services/
│   │   └── DatabaseService.ts # Serviço que gerencia conexão Prisma
│   ├── repositories/
│   │   └── UserRepository.ts  # Exemplo de repositório com Prisma
│   └── types.ts               # Símbolos para Inversify (atualizado)
├── tests/
│   └── unit/
│       ├── example.spec.ts    # Teste básico
│       └── user-repository.spec.ts # Teste do repositório
├── .env.example               # Exemplo de variáveis de ambiente
└── vitest.config.ts           # Configuração vitest
```

### 3. **Configuração**

#### **.env (não versionado)**

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/web_market_db"
PORT=3000
NODE_ENV=development
```

#### **prisma/schema.prisma**

Exemplo de schema com modelos `User` e `Post`:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id    Int     @id @default(autoincrement())
  title String
  content String?
  published Boolean @default(false)
  author User @relation(fields: [authorId], references: [id])
  authorId Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### 4. **Integração com Inversify**

#### **DatabaseService** (`src/services/DatabaseService.ts`)

Gerencia a conexão Prisma:

```typescript
@injectable()
export class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrisma(): PrismaClient {
    return this.prisma;
  }

  async connect(): Promise<void> {
    await this.prisma.$connect();
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
```

#### **UserRepository** (`src/repositories/UserRepository.ts`)

Exemplo de repositório usando Prisma:

```typescript
@injectable()
export class UserRepository {
  constructor(
    @inject(TYPES.DatabaseService) private dbService: DatabaseService
  ) {}

  async create(data: { email: string; name?: string }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // ... mais métodos
}
```

#### **inversify.config.ts** (atualizado)

```typescript
container
  .bind<DatabaseService>(TYPES.DatabaseService)
  .to(DatabaseService)
  .inSingletonScope();
```

## Scripts Disponíveis

```bash
# Instalar dependências
yarn install

# Desenvolvimento
yarn dev

# Build
yarn build

# Testes
yarn test

# Prisma Commands
yarn prisma:generate    # Gera tipos Prisma (automático após install)
yarn prisma:migrate:dev # Criar nova migration
yarn prisma:migrate:prod # Aplicar migrations em produção
yarn prisma:studio     # Abrir Prisma Studio (GUI)
```

## Como Usar

### 1. **Configurar .env**

```bash
cp apps/backend/.env.example apps/backend/.env
# Editar DATABASE_URL com suas credenciais
```

### 2. **Gerar Cliente Prisma**

```bash
yarn prisma:generate
```

### 3. **Criar e Executar Migrations**

```bash
yarn prisma:migrate:dev --name init
```

### 4. **Usar em Services/Repositories**

```typescript
import { UserRepository } from "@/repositories/UserRepository";
import { TYPES } from "@/types";

// No Inversify container, injete o repositório
@injectable()
export class UserService {
  constructor(
    @inject(TYPES.UserRepository)
    private userRepository: UserRepository
  ) {}

  async getUsers() {
    return this.userRepository.findAll();
  }
}
```

### 5. **Testes**

```bash
yarn test
```

Exemplo de teste em `tests/unit/user-repository.spec.ts`.

## Estrutura Recomendada

```
src/
├── repositories/     # CRUD operations (UserRepository, PostRepository, etc)
├── services/        # Lógica de negócio (UserService, PostService, etc)
├── controllers/     # HTTP handlers (UserController, etc)
├── dto/             # Data Transfer Objects
├── entities/        # (Opcional) Modelos não Prisma
└── middlewares/     # (Opcional) Express middlewares
```

## Links Úteis

- [Documentação Prisma](https://www.prisma.io/docs/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma CLI](https://www.prisma.io/docs/reference/api-reference/command-reference)
- [PostgreSQL Setup](https://www.postgresql.org/)

## Troubleshooting

### Erro: "Cannot find module '@prisma/client'"

```bash
yarn install
yarn prisma:generate
```

### Erro: "Connection refused"

Verifique se o PostgreSQL está rodando e se `DATABASE_URL` está correto em `.env`.

### Erro: "Migration failed"

```bash
# Verificar status das migrations
yarn prisma migrate status

# Reset do banco (⚠️ apaga tudo)
yarn prisma migrate reset
```

---

✅ Prisma ORM está pronto para usar!
