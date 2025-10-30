# Solução: Erro de Importação em Testes do Frontend

## Problema

O teste unitário estava falhando ao importar `HelloWorld.vue` usando o path alias `@/`.

## Solução Implementada

### 1. **Configuração do vitest.config.ts**

Adicionado o `resolve.alias` no vitest para reconhecer o `@` durante a execução dos testes:

```typescript
resolve: {
  alias: {
    "@": resolve(__dirname, "./src"),
  },
},
```

### 2. **Atualização do tsconfig.json**

- Adicionado `"vitest/globals"` nos types
- Adicionado `"moduleResolution": "bundler"` para melhor resolução de módulos
- Adicionado campo `vueCompilerOptions` para melhor suporte a arquivos `.vue`

### 3. **Arquivo de Setup (vitest.setup.ts)**

Criado arquivo de setup que:

- Configura Vue Test Utils globalmente
- Faz stub de componentes que não são necessários para testes
- Mock de `window.matchMedia` (necessário para Vuetify)

### 4. **Configuração no vitest.config.ts**

Adicionado o campo `setupFiles` para executar o arquivo de setup antes dos testes:

```typescript
setupFiles: ["./vitest.setup.ts"],
```

### 5. **Dependências Adicionadas**

Adicionado `@vitest/ui` para melhor visualização dos testes

## Como Rodar os Testes

```bash
# A partir do diretório raiz
yarn test:frontend:unit

# Ou com UI (recomendado)
yarn vitest --ui
```

## Estrutura Esperada

```
apps/frontend/
├── src/
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── views/
│   ├── router/
│   └── store/
├── tests/
│   └── unit/
│       └── example.spec.ts
├── vitest.config.ts
├── vitest.setup.ts
└── tsconfig.json
```

Agora os testes devem passar sem problemas! ✅
