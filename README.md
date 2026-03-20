# Sistema de Atendimento Inteligente - Clínica Médica

Este projeto é uma aplicação Full Stack desenvolvida para o Trabalho de Disciplina (DESENVOLVIMENTO BACKEND I) da Unijorge. O sistema permite o agendamento de consultas, autenticação de usuários e integração com APIs externas (ViaCEP e OpenWeatherMap).

## Tecnologias Utilizadas

### Backend:
- **Node.js** com **TypeScript**
- **Express** (Framework web)
- **MongoDB Atlas** (Banco de dados na nuvem)
- **JWT** (Autenticação segura)
- **Axios** (Consumo de APIs externas)

### Frontend:
- **Vue.js 3** (Composition API)
- **Vue Router** (Navegação SPA)
- **Axios** (Comunicação com o backend)

## Como rodar o projeto localmente

### Pré-requisitos:
- Node.js instalado
- Conta no MongoDB Atlas (ou banco local)

### Passo 1: Configurar o Backend
1. Entre na pasta `backend`: `cd backend`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` baseado no exemplo abaixo:
   ```env
   MONGO_URI=sua_url_do_mongodb
   JWT_SECRET=sua_chave_secreta