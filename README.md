
# São Francisco Golf Club — Frontend

Este repositório contém o frontend do site do São Francisco Golf Club (SFGC). É uma aplicação React criada com Vite e Material UI, com foco em apresentação visual do clube: localização, história, notícias, serviços e contato.

O objetivo aqui é ter uma versão do site que você possa rodar localmente, testar, ajustar responsividade e usar como material para portfólio.

Principais características
- React + Vite (dev server rápido e build otimizado)
- Material UI (componentes e sistema de breakpoints)
- Layout responsivo para desktop e mobile
- Componentes reutilizáveis para navbar, footer, sidebar e seções da home

Pré-requisitos
- Node.js 16+ (recomendado)
- npm ou yarn

Como rodar (passo a passo)

1) Instale as dependências

```bash
npm install
# ou
yarn
```

2) Rode em modo desenvolvimento (hot-reload)

```bash
npm run dev
# ou
yarn dev
```

Abra http://localhost:5173 no navegador. O Vite exibirá a porta se for diferente.

3) Build para produção

```bash
npm run build
# ou
yarn build
```

Os arquivos prontos para deploy ficarão na pasta `dist/`.

Deploy recomendado
- Vercel ou Netlify — basta apontar o repositório e usar o comando de build acima. Ambos oferecem deploy automático a cada push.

Observações práticas
- Não use `100vw` em wrappers (pode criar scroll horizontal). O projeto já usa tokens de layout em `src/styles/layout.js` para `maxWidth` e `px`.
- Efeitos pesados (parallax, backgrounds fixos) são desativados em telas pequenas para preservar performance e bateria.

Estrutura relevante
- `src/pages/` — páginas e seções (home, login, história)
- `src/components/` — componentes base (navbar, footer, sidebar)
- `src/assets/` — imagens e recursos estáticos
- `src/styles/` — constantes de layout e tokens

Licença
Se não houver restrição contratual, este projeto usa MIT (veja `LICENSE`). Se precisar de outra licença, me diga que eu atualizo.

Se quiser, eu posso:
- adicionar um script de deploy automático (Vercel/Netlify),
- criar um `CONTRIBUTING.md` com convenções de commits e PRs.

Por onde começar a colaborar
- Abra issues pequenas (ex.: "corrigir centralização do logo"), crie branches com nomes claros e envie PRs com commits pequenos. Posso te ajudar a criar as primeiras issues e PRs.

---

Qualquer dúvida sobre como rodar ou ajustar algo específico, me fala que eu aplico as mudanças direto no projeto.
