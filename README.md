# Desafio Técnico – Automação de Testes de API (Cypress)
![CI](https://github.com/janaeufrasio/desafio-api-inmetrics/actions/workflows/cypress-api-ci.yml/badge.svg)

Projeto desenvolvido para o Desafio Técnico da Inmetrics, contendo automação da API Serverest utilizando:

- **Cypress + JavaScript**
- **Mochawesome (relatórios HTML consolidados)**
- **Factories para massa dinâmica**
- **Arquitetura modular (Services + Helpers + Testes)**
- **Cenários positivos e negativos**
- **Testes de API via Postman**

---

## Tecnologias usadas

- **Node.js**
- **Cypress 12+**
- **JavaScript (ES6)**
- **Mochawesome**
- **Mochawesome Merge**
- **Marge Reporter**
- **VS Code**
- **Postman**

---

## Pré-requisitos

Certifique-se de ter instalado:

- Node.js **v16+**
- NPM **v8+**
- Git

---

## Como instalar o projeto

```bash
git clone <git@github.com:janaeufrasio/desafio-api-inmetrics.git>
cd desafio-api-inmetrics
npm install
```

---

## Factories

Factories criados para geração de massa dinâmica:

### `createRandomUser()`

Gera um usuário válido e único.

### `createInvalidUser()`

Retorna campos obrigatórios vazios.

### `createUserWithInvalidEmail()`

Gera email inválido para cenários negativos.

**Exemplo:**

```js
const usuario = createRandomUser()
```

---

## Services

Toda comunicação com a API está centralizada em:

`cypress/support/services/usersService.js`

### Métodos disponíveis:

- `createUser()`
- `getUsers()`
- `getUserById()`
- `updateUser()`
- `deleteUser()`

**Exemplo:**

```js
usersService.createUser(body)
```

---

## Execução dos testes

### Headless

```bash
npm test

```

### Interface interativa:

```bash
npx cypress open

```

---

## Relatórios Mochawesome

Relatórios configurados seguindo boas práticas:

- Cypress gera um JSON por spec
- mochawesome-merge junta tudo em um único JSON consolidado
- marge gera um único HTML final

---

## Cobertura dos testes

### POST /usuarios

- Criar usuário válido
- Email duplicado
- Campos obrigatórios vazios
- Email inválido

### GET /usuarios

- Listar usuários
- Estrutura básica

### GET /usuarios/:id

- ID válido (positivo)
- ID inválido (negativo)
- ID inexistente (negativo)

### PUT /usuarios/:id

- Atualizar usuário válido
- Email duplicado
- Campos obrigatórios vazios
- BUG real documentado: API retorna 201 para ID inexistente

### DELETE /usuarios/:id

- Exclusão válida
- ID inválido
- ID inexistente

---

## Testes de API no Postman (Complementares)

Além da automação no Cypress, foram criados e executados testes adicionais no Postman:

### ✔ Estrutura criada:

- Collection organizada em pastas
- Ambiente configurado com variáveis dinâmicas
- Testes manuais de:
  - Autenticação
  - Token válido e inválido
  - Cadastro
  - Consultas
  - Atualização
  - Exclusão

### ✔ Validações incluídas:

- Body
- Código de status
- Token JWT
- Mensagens de erro da API
- Cenários negativos exploratórios

Esses testes complementares validam comportamentos que não fazem parte da automação, mas que são importantes para entendimento completo da API.

---

## Diferenciais implementados

- Arquitetura padronizada (**Services + Helpers + Tests**)
- Factories profissionais para massa dinâmica
- Separação clara entre fluxos positivos e negativos
- Documentação de BUG real da API Serverest
- Relatório HTML único consolidado
- Pasta de testes extremamente organizada
- Testes independentes (não poluem ambiente)
- Uso de IDs válidos e inexistentes
- Limpeza automática de relatórios
- Código limpo e padronizado
- Testes exploratórios e de autenticação no Postman

---

## Finalização

Projeto completo, organizado e com arquitetura sólida, pronto para:

- avaliação técnica
- apresentação
- evolução contínua
- integração em CI/CD
