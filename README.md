## NLW Valoriza

## O que é o projeto ?

O NLW Valoriza foi um projeto desenvolvido durante a Next Level Week 6, onde criamos um backend para uma aplicação para enviar "avaliações" para outros usuários.

## Dependencias

| Dependencia  |  Versão  |
| ------------------- | ------------------- |
|  bcryptjs |  ^2.4.3 |
|  class-transforme |  ^0.4.0 |
|  cors |  ^2.8.5 |
|  express |  ^4.17.1 |
|  express-async-errors |  ^3.1.1 |
|  jsonwebtoken |  ^8.5.1 |
|  pg |  ^8.6.0 |
|  reflect-metadata |  ^0.1.13 |
|  typeorm |  ^0.2.34 |
|  uuid |  ^8.3.2 |


## Dependencias de Desenvolvimento

| Dependencia  |  Versão  |
| ------------------- | ------------------- |
|  @types/bcryptjs |  ^2.4.2 |
|  @types/cors |  ^2.8.10 |
|  @types/express |  ^4.17.12 |
|  express |  ^4.17.1 |
|  @types/jsonwebtoken |  ^8.5.2 |
|  @types/uuid |  ^8.3.0 |
|  ts-node-dev |  ^1.1.6 |
|  typescript |  ^4.3.4 |

## Regras

- Cadastro de usuários

  - [x] Não é permitido cadastrar mais de 1 usuário com o mesmo e-mail

  - [x] Não é permitido cadastrar usuário sem e-mail

- Cadastrar tag

  - [x] Não é permitido cadastrar mais de uma tag com o mesmo nome 

  - [x] Não é permitido cadastrar tag sem nome 

  - [x] Não é permitido o cadastro por usuário que não seja adm

- Cadastro de Elogios

  - [x] Não é permitido um usuário cadastrar elogio para si

  - [x] Não é permitido cadastrar elogios para usuários inválidos

  - [x] O usuário precisa estar autenticado na aplicação

- Algo Mais

  - [x] Mostrar todos os Compliments do usuario logado enviou

  - [x] Mostrar todos os Compliments que o usuario logado recebeu

  - [x] Listar Tags

  - [x] Listar Usuarios mas nao mostrar a senha

- Coisas a Mais

  - [x] Aplicação ja pronta para o deploy

  - [x] Colocado o tratamento de erros como um middleware

  - [x] Foi Usado container para rodar o banco deste projeto

  - [x] Foi usado o banco Postgres em vez do SQLite
