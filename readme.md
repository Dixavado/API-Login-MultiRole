# API de Login Multi Role

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] API DE LOGIN/CADASTRO com Hash e JWT
- [x] Sistema de Saldo Completo
- [x] PAGINAS EM EJS

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `NodeJS`
* Você tem uma máquina `<Windows / Linux / Mac>`.

## 💻 Oque essa API Faz

Essa e uma api completa de usuarios com sistema de Saldo.

* Esta api utiliza `Multi-ROLE`, para diferentes tipos de acesso, como Usuario e Administrador
* Sistema de cadastro utiliza `BCRYPT`como Hash
* Sistema de Login utiliza `JWT` e `COOKIES` para manter a conexao do usuario
* Sistema de Saldo desconta `1` do usuario a cada uso de serviços
* Banco de dados utilizado e o `Mongoose`
* Toda a API foi feita utilizando o sistema `MVC`
* Todas as paginas WEB utilizam `EJS` para a vizualização e a facil edição em `HTML`

## 🚀 Sistema de Pastas <api_ccleo>

```
├── config
│   ├── bancoDeDados.js OK
│   ├── autenticacao.js OK
│   └── middleware.js OK
├── controllers
│   ├── auth.js
│   ├── dashboard.js
│   └── users.js
├── models
│   └── user.js
├── public
│   ├── css
│   ├── img
│   └── js
├── routes
│   ├── auth.js
│   ├── dashboard.js
│   └── users.js
├── views
│   ├── dashboard
│   ├── layout.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   └── users
├── .env
├── app.js
├── package.json
└── README.md

```

## ☕ Usando <api_ccleo>

Para usar <api_ccleo>, siga estas etapas:

```
node start
```

Apos iniciar o servidor, acesse http://localhost:3000

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

Dixavado
