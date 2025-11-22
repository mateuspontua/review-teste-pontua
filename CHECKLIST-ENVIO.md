# Checklist de Envio para Candidatos

Use este checklist antes de enviar o desafio para garantir que está tudo correto.

---

## ✅ Pré-Envio - Validação Técnica

### 1. Instalação e Execução
```bash
cd teste-tecnico-pontua
npm install
npm run dev
```

- [ ] npm install roda sem erros
- [ ] npm run dev inicia o servidor
- [ ] Aplicação carrega em http://localhost:5173
- [ ] Página home aparece corretamente
- [ ] Navegação para /products funciona (mesmo com erro esperado)

### 2. Testes
```bash
npm test
```

- [ ] Comando de teste roda
- [ ] Framework de teste está configurado
- [ ] Testes placeholder estão presentes

### 3. TypeScript
```bash
npm run typecheck
```

- [ ] Nenhum erro de tipo no código base
- [ ] tsconfig.json configurado corretamente

### 4. Build
```bash
npm run build
```

- [ ] Build completa sem erros
- [ ] Pasta build/ é gerada

---

## 📋 Arquivos para Enviar ao Candidato

### Documentação (OBRIGATÓRIOS)
- [ ] README.md (documento principal)
- [ ] INSTRUCOES-COMPLEMENTARES.md (guia de apoio)
- [ ] SOLUCAO-TEMPLATE.md (template de entrega)

### Documentação (NÃO ENVIAR - Uso Interno)
- [ ] ~~GUIA-AVALIACAO.md~~ (remover ou ocultar)
- [ ] ~~SOLUCAO-EXEMPLO.md~~ (remover ou ocultar)
- [ ] ~~README-ORGANIZACAO.md~~ (remover ou ocultar)
- [ ] ~~RESUMO-CRIACAO.md~~ (remover ou ocultar)
- [ ] ~~CHECKLIST-ENVIO.md~~ (este arquivo - remover)

### Código (OBRIGATÓRIOS)
- [ ] app/ (toda a pasta)
- [ ] package.json
- [ ] tsconfig.json
- [ ] vite.config.ts
- [ ] .gitignore
- [ ] index.html (se aplicável)

### Não Enviar
- [ ] ~~node_modules/~~ (excluir)
- [ ] ~~.react-router/~~ (excluir)
- [ ] ~~build/~~ (excluir)

---

## 🔍 Validação de Conteúdo

### README.md
- [ ] Contexto claro
- [ ] 8 tarefas descritas
- [ ] Restrições listadas
- [ ] Critérios de avaliação
- [ ] Pontos extras opcionais
- [ ] Comandos de execução
- [ ] Tempo estimado (1h-1h30)

### Código Base
- [ ] TODOs marcados com ⚠️
- [ ] Comentários explicativos presentes
- [ ] Código base funciona (mesmo incompleto)
- [ ] Estrutura de pastas correta
- [ ] Imports corretos

### app/routes/api/products.ts
- [ ] TODO na linha ~15 (implementar loader)
- [ ] TODO na linha ~18 (tratamento de erro)
- [ ] Import de fetchProducts presente
- [ ] Estrutura básica do loader presente

### app/routes/products.tsx
- [ ] TODO linha ~25 (useLoaderData)
- [ ] TODO linha ~45 (renderizar lista)
- [ ] Comentários sobre acessibilidade
- [ ] Interface Product definida
- [ ] Tratamento de erro básico presente

### app/components/ProductCard.tsx
- [ ] TODO linha ~15 (interface de props)
- [ ] TODO linha ~30 (implementação)
- [ ] Classes CSS definidas
- [ ] Estrutura básica presente

### app/app.css
- [ ] TODOs para todos os estilos
- [ ] Estrutura de classes presente
- [ ] Comentários explicativos
- [ ] Sugestões de implementação

### app/__tests__/products.test.tsx
- [ ] TODO linha ~20 (implementar testes)
- [ ] Estrutura de teste presente
- [ ] Imports corretos
- [ ] Exemplo comentado

---

## 📦 Opções de Envio

### Opção A: Repositório Git (Recomendado)

#### Preparação:
```bash
# Limpar arquivos internos
rm GUIA-AVALIACAO.md
rm SOLUCAO-EXEMPLO.md
rm README-ORGANIZACAO.md
rm RESUMO-CRIACAO.md
rm CHECKLIST-ENVIO.md

# Criar repositório
git init
git add .
git commit -m "feat: initial challenge setup"
git branch -M main
```

#### Envio:
1. [ ] Criar repositório privado no GitHub/GitLab
2. [ ] Push do código
3. [ ] Convidar candidato como colaborador
4. [ ] Enviar instruções por email

**Email Template:**
```
Assunto: Desafio Técnico - Desenvolvedor Front-end React Router

Olá [Nome],

Segue o link para o desafio técnico:
[LINK DO REPOSITÓRIO]

Instruções:
1. Faça um fork do repositório
2. Complete as tarefas descritas no README.md
3. Envie um Pull Request quando finalizar
4. Preencha o arquivo SOLUCAO.md

Tempo estimado: 1h a 1h30
Prazo de entrega: [DATA]

Qualquer dúvida, estou à disposição.

Att,
[Seu Nome]
```

---

### Opção B: Arquivo ZIP

#### Preparação:
```bash
# Limpar arquivos
rm GUIA-AVALIACAO.md SOLUCAO-EXEMPLO.md README-ORGANIZACAO.md RESUMO-CRIACAO.md CHECKLIST-ENVIO.md
rm -rf node_modules .react-router build

# Criar ZIP
# Windows: Usar Explorer > Enviar para > Pasta compactada
# Mac/Linux: zip -r desafio-tecnico.zip teste-tecnico-pontua/
```

#### Checklist do ZIP:
- [ ] Removeu node_modules/
- [ ] Removeu .react-router/
- [ ] Removeu build/
- [ ] Removeu arquivos internos de avaliação
- [ ] Manteve README.md principal
- [ ] Manteve INSTRUCOES-COMPLEMENTARES.md
- [ ] Manteve SOLUCAO-TEMPLATE.md
- [ ] Tamanho do arquivo < 1MB

**Email Template:**
```
Assunto: Desafio Técnico - Desenvolvedor Front-end React Router

Olá [Nome],

Segue em anexo o desafio técnico.

Instruções:
1. Descompacte o arquivo
2. Execute: npm install
3. Execute: npm run dev
4. Complete as tarefas no README.md
5. Preencha o arquivo SOLUCAO.md
6. Envie de volta compactado ou via repositório

Tempo estimado: 1h a 1h30
Prazo de entrega: [DATA]

Qualquer dúvida, estou à disposição.

Att,
[Seu Nome]
```

---

### Opção C: Plataforma Online (CodeSandbox, StackBlitz)

#### Preparação:
1. [ ] Remover arquivos internos
2. [ ] Importar projeto para plataforma
3. [ ] Testar se funciona online
4. [ ] Gerar link compartilhável

**Email Template:**
```
Assunto: Desafio Técnico - Desenvolvedor Front-end React Router

Olá [Nome],

Segue o link para o desafio técnico:
[LINK DA PLATAFORMA]

Você pode trabalhar diretamente online ou fazer download do projeto.

Instruções estão no README.md

Tempo estimado: 1h a 1h30
Prazo de entrega: [DATA]

Para entregar: exporte o projeto e envie de volta, ou compartilhe o link.

Att,
[Seu Nome]
```

---

## ✉️ Comunicação com Candidato

### Informações Essenciais a Incluir:

- [ ] Tempo estimado (1h-1h30)
- [ ] Prazo de entrega
- [ ] Forma de entrega (PR, ZIP, etc.)
- [ ] Pessoa de contato para dúvidas
- [ ] O que será avaliado
- [ ] Se pode consultar documentação
- [ ] Se pode usar IA (ChatGPT, Copilot)

### Exemplo de Email Completo:

```
Assunto: Desafio Técnico - Desenvolvedor Front-end React Router - [Nome da Vaga]

Olá [Nome do Candidato],

É um prazer tê-lo(a) nesta etapa do processo seletivo!

🎯 SOBRE O DESAFIO

Este é um desafio técnico prático para avaliar suas habilidades com React Router v7, TypeScript e desenvolvimento front-end em geral.

⏱️ INFORMAÇÕES IMPORTANTES

• Tempo estimado: 1h a 1h30
• Prazo de entrega: [DATA e HORA]
• Formato: Código + documentação
• Pode consultar: Documentação oficial, StackOverflow, etc.
• Uso de IA: [Permitido/Não permitido]

📦 ACESSO AO DESAFIO

[LINK OU ANEXO]

📋 COMO COMEÇAR

1. [Instruções específicas conforme opção escolhida]
2. Leia o README.md completamente antes de começar
3. Complete as 8 tarefas obrigatórias
4. Preencha o arquivo SOLUCAO.md explicando suas decisões
5. [Instruções de entrega]

📊 O QUE SERÁ AVALIADO

• Qualidade e organização do código
• Compreensão de React Router (server vs client routes)
• TypeScript e tipagem
• Atenção aos detalhes
• Capacidade de seguir instruções

✅ ENTREGA

[Instruções específicas: PR, email com ZIP, etc.]

❓ DÚVIDAS

Em caso de dúvidas técnicas ou bloqueios, entre em contato:
[Seu email] | [Seu telefone]

Estamos à disposição para ajudar!

Boa sorte e bom código! 🚀

Att,
[Seu Nome]
[Seu Cargo]
[Empresa]
```

---

## 🔄 Após Receber a Solução

### Checklist de Recebimento:
- [ ] Candidato entregou dentro do prazo?
- [ ] Código está completo?
- [ ] SOLUCAO.md foi preenchido?
- [ ] Projeto roda sem erros?

### Processo de Avaliação:
1. [ ] Seguir GUIA-AVALIACAO.md
2. [ ] Testar funcionalidades
3. [ ] Revisar código
4. [ ] Pontuar cada tarefa
5. [ ] Preencher template de feedback
6. [ ] Tomar decisão (aprovar/rejeitar/próxima etapa)

---

## 📝 Notas Finais

### Arquivos Internos (NÃO enviar):
- GUIA-AVALIACAO.md
- SOLUCAO-EXEMPLO.md
- README-ORGANIZACAO.md
- RESUMO-CRIACAO.md
- CHECKLIST-ENVIO.md

### Arquivos para Candidato (ENVIAR):
- README.md
- INSTRUCOES-COMPLEMENTARES.md
- SOLUCAO-TEMPLATE.md
- Todo o código em app/
- Arquivos de configuração

---

## ✅ Validação Final

Antes de enviar, confirme:

- [ ] Testei o projeto localmente
- [ ] Todos os TODOs estão marcados
- [ ] Documentação está clara
- [ ] Arquivos internos foram removidos
- [ ] Prazo de entrega foi definido
- [ ] Forma de entrega foi comunicada
- [ ] Email de envio foi preparado
- [ ] Pessoa de contato foi informada

---

**Status:** [ ] Pronto para envio

**Data de envio planejada:** ___/___/___

**Candidato:** _________________

**Enviado por:** _________________

**Método de envio:** [ ] Git [ ] ZIP [ ] Plataforma

---

Última atualização: 2025-11-22
