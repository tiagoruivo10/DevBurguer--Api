# 🍔 DevBurger API

Backend responsável pela plataforma **DevBurger**, um sistema completo para gerenciamento de hamburgueria, permitindo controle de usuários, produtos, categorias, pedidos e processamento de pagamentos online.

A API foi desenvolvida utilizando Node.js e Express, seguindo boas práticas de arquitetura, autenticação segura e integração com serviços externos.

---

# 📖 Sobre o Projeto

A DevBurger API foi criada para atender as necessidades de uma hamburgueria moderna, fornecendo recursos para gerenciamento de cardápio, controle de pedidos e processamento de pagamentos.

O sistema possui dois perfis principais:

* Cliente
* Administrador

Clientes podem realizar pedidos e acompanhar compras, enquanto administradores possuem acesso às funcionalidades de gerenciamento da plataforma.

---

# 🚀 Tecnologias Utilizadas

## Backend

* Node.js
* Express

## Banco de Dados

* MongoDB
* Mongoose

## Banco Relacional

* PostgreSQL
* Sequelize ORM

## Autenticação

* JSON Web Token (JWT)
* Bcrypt

## Upload de Arquivos

* Multer

## Pagamentos

* Stripe

## Validação

* Yup

## Utilitários

* UUID
* Dotenv
* CORS

---

# ✨ Funcionalidades

## Usuários

* Cadastro de usuários
* Login seguro
* Criptografia de senhas
* Geração de token JWT

## Produtos

* Cadastro de produtos
* Atualização de produtos
* Exclusão de produtos
* Upload de imagens
* Controle de disponibilidade

## Categorias

* Cadastro de categorias
* Organização do cardápio
* Associação de produtos

## Pedidos

* Criação de pedidos
* Atualização de status
* Consulta de pedidos
* Histórico de compras

## Administração

* Rotas protegidas
* Controle de permissões
* Gerenciamento completo da plataforma

## Pagamentos

* Integração com Stripe
* Criação de intenções de pagamento
* Processamento seguro de transações

---

# 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura organizada por responsabilidades.

```text
src/
├── app/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── schemas/
│
├── config/
├── database/
├── routes.js
├── app.js
└── server.js
```

---

## Controllers

Responsáveis pelo processamento das requisições e regras de negócio.

### Principais Controllers

* UserController
* SessionController
* ProductController
* CategoryController
* OrderController
* CreatePaymentIntentController

---

## Middlewares

Responsáveis pelo controle de acesso.

### Auth Middleware

* Validação de token JWT
* Proteção de rotas privadas

### Admin Middleware

* Controle de permissões administrativas

---

## Models

Representação das entidades do sistema.

### Entidades

* Usuário
* Produto
* Categoria
* Pedido

---

## Schemas

Validações dos dados recebidos pela API.

---

# 🔐 Sistema de Autenticação

A autenticação utiliza JSON Web Token (JWT).

Fluxo:

1. Usuário realiza login.
2. API valida credenciais.
3. Token JWT é gerado.
4. Cliente utiliza o token nas próximas requisições.
5. Middleware valida o acesso.

Benefícios:

* Segurança
* Escalabilidade
* Controle de permissões

---

# 👨‍💼 Área Administrativa

O sistema possui rotas exclusivas para administradores.

Funcionalidades:

* Gerenciar produtos
* Gerenciar categorias
* Atualizar pedidos
* Acompanhar operações da plataforma

---

# 🍔 Gestão de Cardápio

Os produtos podem ser organizados por categorias.

Exemplos:

* Hambúrgueres
* Combos
* Bebidas
* Sobremesas

Cada produto pode conter:

* Nome
* Descrição
* Preço
* Categoria
* Imagem

---

# 🛒 Sistema de Pedidos

Os clientes podem:

* Selecionar produtos
* Adicionar ao pedido
* Finalizar compra
* Efetuar pagamento

Os administradores podem:

* Atualizar status
* Consultar pedidos
* Gerenciar entregas

---

# 💳 Integração com Stripe

O projeto utiliza Stripe para processamento de pagamentos online.

Recursos:

* Payment Intent
* Pagamentos seguros
* Integração com cartões
* Confirmação de transações

---

# ⚙️ Instalação

## Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

## Entrar na pasta

```bash
cd DevBurger-Api
```

## Instalar dependências

```bash
npm install
```

---

# 🔐 Variáveis de Ambiente

PORT=3001

# Chave secreta para criptografia do JWT
JWT_SECRET=sua_chave_secreta_jwt_aqui

# Integração Stripe (Chave privada de testes)
STRIPE_SECRET_KEY=sk_test_suachave_stripe_aqui

# URL de conexão do MongoDB (NoSQL)
MONGO_URL=mongodb://localhost:27017/devburger

# Credenciais do PostgreSQL (Banco Relacional)
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=sua_senha_do_banco
DB_NAME=devburger

# 🗄️ Configuração do Banco

Executar migrations:

```bash
npx sequelize-cli db:migrate
```

Executar seeders (caso existam):

```bash
npx sequelize-cli db:seed:all
```

---

# ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

---

# 🔗 Principais Endpoints

## Usuários

```http
POST /users
```

Cadastro de usuário.

---

## Sessão

```http
POST /sessions
```

Autenticação de usuário.

---

## Categorias

```http
GET /categories
POST /categories
```

---

## Produtos

```http
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
```

---

## Pedidos

```http
GET /orders
POST /orders
PUT /orders/:id
```

---

## Pagamentos

```http
POST /create-payment-intent
```

---

# 🎯 Objetivos do Projeto

* Construir uma API REST escalável.
* Implementar autenticação segura.
* Trabalhar com múltiplos bancos de dados.
* Aplicar conceitos de e-commerce e delivery.
* Integrar pagamentos online utilizando Stripe.
* Desenvolver uma arquitetura organizada e de fácil manutenção.

---

# 👨‍💻 Autor

Desenvolvido por Tiago Ruivo.

Projeto desenvolvido para compor portfólio profissional e demonstrar conhecimentos em Node.js, Express, MongoDB, PostgreSQL, autenticação JWT, integração com Stripe e desenvolvimento de APIs REST.
