# 🤖 Discord Bot

Um bot para Discord desenvolvido com foco em organização, tipagem forte e escalabilidade, utilizando tecnologias modernas do ecossistema JavaScript.

---

## 🚀 Tecnologias

Este projeto foi construído utilizando:

- **Node.js** — ambiente de execução
- **TypeScript** — tipagem estática
- **discord.js** — integração com a API do Discord
- **Prisma** — ORM para banco de dados
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