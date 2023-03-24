# Desafio Fullstack - Backend

## Tecnologias Utilizadas

<li><a href="https://expressjs.com/pt-br/">ExpressJS</a>: é um framework para Node.js que fornece recursos mínimos para construção de servidores web.

<br>
<li><a href="https://nodejs.org/en/docs/">NodeJS</a>: é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

<br>
<li><a href="https://www.typescriptlang.org/">TypeScript</a>: TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.

<br>
<li><a href="https://typeorm.io/">TipeORM</a>:  é um ORM que pode ser executado nas plataformas NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo e Electron e pode ser usado tanto com o TypeScript, quanto com o JavaScript.

<br>
<li><a href="https://sqlite.org/">SQLite</a>: uma biblioteca em linguagem C que implementa uma base de dados SQL embutida.

<br>

## Como Rodar o Projeto

<ol>
    <li> Abrir um terminal na pasta backend;
    <li> Rodar o comando "yarn" para instalar as dependências; 
    <li> Criar um arquivo .env dentro desse repositorio a partir de uma cópia do .env.example, e preencher as chaves com as configurações da sua maquina.
    <li> Em seguida, rodar o comando "yarn typeorm migration:run -d src/data-source.ts" para criar as tabelas e banco de dados (cria automaticamente um arquivo de nome db.sqlite3)
    <li> E por fim, rodar o comando "yarn dev" pra subir o servidor localmente da API. O servidor vai estar na rota <a>http://localhost:3001</a> e voce verá no terminal a mensagem "Servidor executando na porta http://localhost:3001" 
    <li> Agora é com o front-end.</a>
</ol>

<br>
<br>

## Documentação da API - Rotas

base URL: <a> http://localhost:3001 </a>

<br>

<h3> Rotas relacionadas aos usuários e login </h3>
<br>

**POST** /users <br>

Rota para a criação de um novo usuário.

Formato da requisição:

```json
{
  "name": "ana",
  "email": "ana@mail.com",
  "cellphone": "00112223334",
  "password": "123456"
}
```

Resposta esperada:

```json
200

{
	"id": "dd2f4148-65b2-4202-adfd-863638bd3b62",
	"name": "ana",
	"cellphone": "00112223334",
	"email": "ana@mail.com",
	"updatedAt": "2023-03-21T21:46:54.000Z",
	"createdAt": "2023-03-21T21:46:54.000Z",
}
```

<br>

**POST** /login <br>

Rota para logar na aplicação. Retorna um token, informação que será utilizada nas requisições em que é necessário autenticação.

Formato da requisição:

```json
{
  "email": "ana@mail.com",
  "password": "123456"
}
```

Resposta esperada:

```json
200

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...",
	"id": "2322b607-9044-4363-9127-3eeb0b28ab37"
}
```

<br>

**GET** /users/:userId <br>

Rota para recuperar as informações do usuário. userId é o id do usuário que estamos buscando. Essa rota necessita de autenticação, então é necessário enviar no cabeçalho da requisição o token recebido quando um login é criado.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Resposta esperada:

```json
200

{
	"id": "0fc64b35-4e68-4e5c-b111-c316af921228",
	"name": "ana",
	"email": "ana@mail.com",
	"cellphone": "00114423334",
	"createdAt": "2023-03-21T21:46:54.000Z",
	"updatedAt": "2023-03-21T21:59:34.000Z",
	"contacts": [
		...
	]
}
```

<br>

**PATCH** /users/:userId <br>

Rota para alterar as informações do usuário. userId é o id do usuário que estamos buscando. Essa rota necessita de autenticação (Bearer token) e somente o dono do recurso consegue alterá-lo. Podem ser alterados o nome, o email e o numero de telefone, não sendo necessário o envio de todas as informações, apenas as que serão atualizadas.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Formato da requisição:

```json
{
  "name": "anaaaaaaaaaaaaa"
}
```

Resposta esperada:

```json
200

{
	"id": "0fc64b35-4e68-4e5c-b111-c316af921228",
	"name": "anaaaaaaaaaaaaa",
	"email": "ana@mail.com",
	"cellphone": "00114423334",
	"createdAt": "2023-03-21T21:46:54.000Z",
	"updatedAt": "2023-03-21T21:59:34.000Z",
}
```

<br>

<br>

**DELETE** /users/:userId <br>

Rota para deletar as informações do usuário. userId é o id do usuário que estamos buscando. Essa rota necessita de autenticação (Bearer token) e somente o dono do recurso consegue alterá-lo.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Resposta esperada:

```json
204
```

<br>

<h3>Rotas relacionadas aos contatos</h3>

<br>

**POST** /contacts <br>

Rota para a criação de um novo contato. Essa rota necessita de autenticação, então é necessário enviar no cabeçalho da requisição o token recebido quando um login é criado.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Formato da requisição:

```json
{
  "name": "contatinho",
  "email": "contatinho@mail.com",
  "cellphone": "0002345678"
}
```

Resposta esperada:

```json
200
{
	"id": "92661308-6214-4abf-a072-b876f07a49b5",
    "name": "contatinho",
    "email": "contatinho@mail.com",
	"cellphone": "0002345678",
	"insertedAt": "Wed Mar 22 2023 13:27:46 GMT-0300 (Horário Padrão de Brasília)"
}

```

<br>

**PATCH** /contacts/:contactId <br>

Rota para a atualização dos dados de um contato. contactId é o id do contato que estamos buscando. Essa rota necessita de autenticação (Bearer token) e somente o dono do recurso consegue alterá-lo. Podem ser alterados o nome, o email e o numero de telefone, não sendo necessário o envio de todas as informações, apenas as que serão atualizadas.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Formato da requisição:

```json
{
  "name": "contatinho (novo)"
}
```

Resposta esperada:

```json
200
{
	"id": "92661308-6214-4abf-a072-b876f07a49b5",
    "name": "contatinho (novo)",
    "email": "contatinho@mail.com",
	"cellphone": "0002345678",
	"insertedAt": "Wed Mar 22 2023 13:27:46 GMT-0300 (Horário Padrão de Brasília)"
}

```

<br>

**DELETE** /contacts/:contactId <br>

Rota para a deleção de um contato. contactId é o id do contato que estamos buscando. Essa rota necessita de autenticação (Bearer token) e somente o dono do recurso consegue alterá-lo.

Headers:

```javascript
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxlaWxhQG1haWwuY29tI...";
```

Resposta esperada:

```json
204
```

<br>
