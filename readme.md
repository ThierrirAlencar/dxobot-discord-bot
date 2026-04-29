
<p align="center" >
    <img src="public/dxAsset1.png" style="width:450px;height:400px">
</p>

# 🤖 DX! - Um bot de propósito Geral

Um bot para Discord desenvolvido com foco em múlti propósito, desenvolvimento em automação, uso geral e comunicação de avisos. 

O projeto tem como foco um bot de alertas para avisos de time como informações de deploy de projetos e alertas de falhas em sistemas complexos. A automação se unirá a uma rede de serviços simultâneos para prover um fluxo de deploy de projetos. 

---

## 🚀 Tecnologias

Este projeto foi construído utilizando:

- **Node.js** — ambiente de execução
- **TypeScript** — tipagem estática
- **discord.js** — integração com a API do Discord
- **Prisma** — ORM para banco de dados
- **Postgresql** — Banco de dados relacional
- **Zod** — validação de dados segura e tipada

---

## 📦 Funcionalidades

- Sistema de comandos (slash commands)
- Validação robusta de inputs com Zod
- Integração com banco de dados via Prisma
- Estrutura modular e escalável
- Tratamento de erros centralizado
- Suporte a eventos do Discord

---

## 📁 Estrutura do Projeto

```bash
src/
├── commands/        # Comandos do bot
├── events/          # Eventos do Discord
├── services/        # Lógica de negócio
├── schemas/         # Validações com Zod
├── database/        # Configuração do Prisma
├── utils/           # Funções utilitárias
└── server.ts         # Entrada principal

