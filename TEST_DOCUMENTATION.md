# Documentação dos Testes – API Serverest (Cypress)

Este documento descreve de forma objetiva todos os testes implementados para o desafio técnico da Inmetrics, incluindo:

- Estratégia de testes
- Cobertura dos cenários (positivos e negativos)
- Arquitetura adotada
- Como executar a automação
- Justificativas técnicas e evidências

---

# Objetivo

Validar os principais endpoints da API Serverest garantindo:

- Conformidade com regras de negócio
- Comportamento esperado nos fluxos positivos
- Tratamento de erros nos fluxos negativos
- Independência entre os testes
- Rastreabilidade e evidência através de relatórios

---

# Estratégia de Testes

A automação foi desenvolvida com foco em:

- _Testes de API REST_ (CRUD de usuários)
- _Cobertura de cenários positivos e negativos_
- _Massa dinâmica via Factories_
- _Arquitetura desacoplada_ (Services + Helpers + Specs)
- _Execução contínua via GitHub Actions_
- _Relatórios consolidados (Mochawesome)_

Cada suíte foi separada por recurso e por fluxo:

- 01-post/
- 02-get/
- 03-getById/
- 04-put/  
  05-delete/

Dentro de cada pasta:

- 01-nome.positivo.cy.js
- 02-nome.negativo.cy.js

Isso facilita manutenção, escalabilidade e leitura dos testes.

---

## Postman – Testes Manuais da API

Além da automação em Cypress, todas as rotas da API foram validadas manualmente via Postman.

Requisições: :

- POST /usuarios
- GET /usuarios
- GET /usuarios/:id
- PUT /usuarios/:id
- DELETE /usuarios/:id
- Autenticação (token)

Contém exemplos de massa, variáveis e validações.

---

# Arquitetura dos testes

### Services

Toda comunicação com a API centralizada em:  
`cypress/support/services/usersService.js`

### Factories

Geração de massa dinâmica em:  
`cypress/support/helpers/userFactory.js`

Factories disponíveis:

- `createRandomUser()` – usuário válido e único
- `createInvalidUser()` – campos obrigatórios vazios
- `createUserWithInvalidEmail()` – email inválido
- `generateValidFakeId()` – ID válido porém inexistente

### Specs

Testes organizados por método HTTP e fluxo (positivo/negativo).

---

# **Cobertura dos Testes Implementados**

A seguir, uma explicação clara do que cada suíte cobre:

---

## **POST /usuarios**

### Cenários positivos

- Criar usuário válido com sucesso
- Validar retorno do status `201`
- Verificar mensagem `"Cadastro realizado com sucesso"`
- Verificar presença do `_id`

### Cenários negativos

- Tentar criar usuário com email duplicado
- Tentar criar usuário com campos obrigatórios vazios
- Validar email inválido
- Validar mensagens retornadas pela API

---

## **GET /usuarios**

### Cenários positivos

- Listar todos os usuários
- Validar estrutura da resposta

---

## **GET /usuarios/:id**

### Cenário positivo

- Consultar usuário existente por ID

### Cenários negativos

- Buscar ID no formato inválido (retorna 400)
- Buscar ID inexistente
- Validar campos retornados em erro

---

## **PUT /usuarios/:id**

### Cenário positivo

- Atualizar usuário existente
- Validar mensagem `"Registro alterado com sucesso"`

### Cenários negativos

- Atualizar com email duplicado
- Atualizar com campos obrigatórios vazios
- BUG documentado: ID inexistente retorna `201` ao invés de `400`

---

## **DELETE /usuarios/:id**

### Cenário positivo

- Excluir usuário válido

### Cenários negativos

- Excluir ID inexistente
- Excluir ID inválido

---

# **Como executar os testes**

### Via terminal (headless)

```bash
npm test
```

---

### Via Cypress UI

```bash
npx cypress open
```

# Relatórios de Teste

### Gerados automaticamente em:

```bash
cypress/reports/final-report.html
```

### Para gerar manualmente:

```bash
npm run report
```

# Integração Contínua – GitHub Actions

## Pipeline configurado para:

- Instalar dependências

- Rodar toda a suíte de testes

- Gerar relatórios

- Publicar artefatos no Actions

Badge no README mostra o status da build:

![CI](https://github.com/janaeufrasio/desafio-api-inmetrics/actions/workflows/cypress-api-ci.yml/badge.svg)

---

# Considerações finais

A automação cobre os principais fluxos funcionais e comportamentais da API Serverest, estruturada com:

- Código limpo
- Separação de responsabilidades
- Massa dinâmica
- Testes independentes
- CI/CD ativo
- Relatórios consolidados
- Documentação completa

O projeto está preparado para escalabilidade e fácil manutenção, podendo receber novos endpoints facilmente.

### Projeto finalizado com qualidade e seguindo boas práticas de automação.
