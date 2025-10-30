# Web Market Workspace (Nx-like monorepo)

Conteúdo gerado automaticamente: um monorepo com frontend (Vue 3 + Vite + TypeScript + Pinia + Vuetify) e backend (Node + Express + TypeScript + Inversify + Postgres driver).

Como usar (resumo):

1. Instalar dependências na raiz:

```bash
yarn install
```

2. Rodar frontend (desenvolvimento):

```bash
yarn start:frontend
```

3. Rodar backend (desenvolvimento):

```bash
yarn start:backend
```

4. Testes:

- Frontend unit: `yarn test:frontend:unit`
- Frontend integration (Cypress): `yarn test:frontend:integration`
- Backend unit: `yarn test:backend`

Obs: Este repositório é um scaffold. Depois de `yarn install` pode ser necessário ajustar versões e configurar variáveis de ambiente (ex: conexão com Postgres).
