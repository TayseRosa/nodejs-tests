<p align="center">
  <img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-logo.png" width="160">
</p>
<p align="center">
 NodeJS - Iniciante
</p>

<br>
<h1>Sobre o Projeto</h1>
<p>Projeto NodeJS do zero:</p>
<p>Este projeto foi desenvolvido para praticar e consolidar os conhecimentos em Node.js, construindo uma aplicação do zero. O objetivo principal é criar um servidor simples, com rotas e funcionalidades básicas, explorando desde a configuração inicial até a implementação de uma API funcional.</p>


<p>🛠️ Funcionalidades</p>

<ul>
    <li>Configuração do servidor do zero com Node.js</li>
    <li>Criação de rotas HTTP para atender diferentes endpoints</li>
    <li>Integração com um banco de dados (ex: MongoDB ou MySQL) para persistência de dados</li>
    <li>Implementação de middlewares para tratamento de erros e validação
</li>
    <li>Projeto modularizado para fácil manutenção e escalabilidade
</li>
</ul>

<p>🚀 Tecnologias Utilizadas </p>
<ul>
    <li>Node.js para a criação do servidor</li>
    <li>Express como framework de roteamento</li>
    <li>Banco de dados</li>
</ul>
<br>

<br>
<h1>Instalação</h1>
<p>Para rodar esse projeto em sua maquina local, basta seguir o passo abaixo:</p>

```
git clone
npm install
npm run start
```
<br>

<h1>Minhas anotações sobre o curso NodeJS.</h1>

## 📫 Como iniciar seu projeto em node e inserir Typescript no projeto

Para adicionar typescript ao seu projeto, siga estas etapas:

1. Instale  `npm install -D typescript`.
2. Instale  `npm install -D ts-node`.
3. `npx tsc --init`.
4. No arquivo tsconfig.json, descomentar o outDir e colocar "./dist"
5. No arquivo package.json em scripts,`"start":"ts-node ./server.ts"`
6. Rode  `npm start`.
7. Para dar o build no final do projeto: `npx tsc`, ele vai criar a pasta ./dist.
---
Modo Watch, siga estas etapas:
1. No prompt digite, e ele ficara monitorando as alterações  `node --watch src/server.js`.
2. No prompt digite:  `npm i -D tsx`. 
3. Em package.json > scrips > start: `node --import=tsx --watch src/server.ts`
---
## 📫Uso de variáveis de ambiente
```
5 principais tipos de arquivo de ambiente:
Arquivo .env
Arquivo .env.development
Arquivo .env.production
Arquivo .env.local
Arquivo .env.example
```

## 📫Configuração do Express:
1. Instale  `npm install -D typescript`.
2. Instale `npm install -D @types/express`

No arquivo server.ts:

```
import express from 'express'

const server = express();

server.get('/', (req, res)=>{
    res.send('Olá mundo de novo | Hello World again')
})

server.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
})
```

<br>

<h1>Licença</h1>
<p>Esse projeto está sob a licença MIT.</p>
<br>
<p align="center">Feito com 💜 por Tayse Rosa</p>
