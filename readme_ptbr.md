# NiñoPulse Global 2.3 Beta 1

> Versão em português do README. Se quiser ver em inglês, use: [English README](README.md)

Eu criei o **NiñoPulse Global** como um painel de pesquisa sobre ENSO, feito para monitorar, explicar e visualizar **El Niño**, **La Niña** e seus impactos climáticos pelo mundo. A ideia foi juntar dados oficiais da NOAA/CPC, clima ao vivo da Open-Meteo, histórico ONI/RONI, mapas interativos, exportações, API pública, suporte PWA e versão Android com Capacitor em uma plataforma só.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-2.3.0--beta.1-blue)
![Project](https://img.shields.io/badge/project-ENSO%20research-0ab6c8)
![Climate](https://img.shields.io/badge/focus-climate%20science-blue)
![Education](https://img.shields.io/badge/purpose-education%20%26%20research-purple)
![Private](https://img.shields.io/badge/package-private-lightgrey)

![React](https://img.shields.io/badge/React-18.2.0-20232A?logo=react&logoColor=61DAFB)
![React DOM](https://img.shields.io/badge/React%20DOM-18.2.0-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=nodedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.3-DD3A0A?logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.20-DD3735?logo=autoprefixer&logoColor=white)

![PWA](https://img.shields.io/badge/PWA-ready-purple)
![Vite PWA](https://img.shields.io/badge/Vite%20PWA-1.3.0-5A0FC8)
![Workbox](https://img.shields.io/badge/Workbox-enabled-orange)
![Capacitor](https://img.shields.io/badge/Capacitor-7.4.4-119EFF?logo=capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-ready-3DDC84?logo=android&logoColor=white)
![Android SDK](https://img.shields.io/badge/Android%20SDK-35-3DDC84?logo=android&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)
![Serverless](https://img.shields.io/badge/API-serverless-black)

![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?logo=leaflet&logoColor=white)
![React Leaflet](https://img.shields.io/badge/React%20Leaflet-4.2.1-199900?logo=leaflet&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2.15.4-orange)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.84.1-FF4154?logo=reactquery&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.16.4-0055FF?logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-0.475.0-black)
![html2canvas](https://img.shields.io/badge/html2canvas-1.4.1-yellow)
![jsPDF](https://img.shields.io/badge/jsPDF-4.2.1-red)
![next-themes](https://img.shields.io/badge/next--themes-0.4.4-black)

![NOAA CPC](https://img.shields.io/badge/data-NOAA%2FCPC-blue)
![Open-Meteo](https://img.shields.io/badge/weather-Open--Meteo-0ea5e9)
![CORS](https://img.shields.io/badge/CORS-enabled-green)
![Upstash](https://img.shields.io/badge/Upstash-optional%20rate%20limit-00E9A3?logo=upstash&logoColor=white)
![Tests](https://img.shields.io/badge/tests-Node%20Test-green)
![ESLint](https://img.shields.io/badge/ESLint-9.19.0-4B32C3?logo=eslint&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-enabled-2088FF?logo=githubactions&logoColor=white)

---

## Preview

<img width="1920" height="1080" alt="Preview do NiñoPulse Global" src="YOUR-IMAGE-LINK-HERE" />

---

## Demo online

```txt
https://YOUR-PROJECT.vercel.app/
```

---

## Visão geral

Eu desenvolvi o **NiñoPulse Global** para transformar dados climáticos complexos em algo mais visual, organizado e fácil de entender.

O projeto junta monitoramento atual do ENSO, índices semanais das regiões Niño, probabilidades sazonais, histórico ONI/RONI, clima ao vivo de países, perfis educativos, mapa global, exportações, alertas locais, uma API pública somente leitura e uma estrutura pronta para Android.

Meu objetivo não foi só mostrar números. Eu quis criar uma plataforma que explicasse o que esses números significam na prática: mudanças de chuva, risco de seca, enchentes, alterações de temperatura, impactos na agricultura, pressão em ecossistemas e efeitos econômicos.

---

## O que é ENSO?

ENSO significa **El Niño-Southern Oscillation**, ou Oscilação Sul-El Niño. É um padrão climático de grande escala que acontece no oceano Pacífico tropical e influencia o clima em várias partes do mundo.

Ele tem três fases principais:

- **El Niño**: quando as águas do Pacífico central/oriental ficam mais quentes que o normal.
- **La Niña**: quando essas águas ficam mais frias que o normal.
- **Neutro**: quando as condições não chegam ao limite para El Niño nem para La Niña.

Esses fenômenos podem influenciar chuva, seca, calor, agricultura e outros padrões climáticos. Mas o impacto muda bastante dependendo da região, da estação do ano e de outros fatores locais.

---

## Principais funcionalidades

- Interface em português e inglês.
- Layout responsivo, feito primeiro para celular.
- Suporte a tema claro, escuro e automático pelo sistema.
- Exibição da fase atual do ENSO.
- Indicadores semanais de anomalia da temperatura da superfície do mar nas regiões Niño.
- Tabelas de probabilidade sazonal do ENSO.
- Dados históricos de ONI e RONI.
- Detecção automática de episódios quentes e frios.
- Mapa global interativo.
- Perfis climáticos de 30 países.
- Clima atual e previsão de 7 dias para locais representativos.
- Painel de favoritos salvo localmente.
- Modo pesquisa para análise mais profunda.
- Página de documentação da API pública.
- Exportação em CSV, JSON e PDF.
- Compartilhamento de imagem do dashboard.
- Suporte a PWA instalável.
- Mensagens de atualização e modo offline.
- Cache de API apenas para respostas bem-sucedidas usando Workbox.
- Notificações locais para mudanças climáticas selecionadas.
- Suporte Android com Capacitor.
- Integrações nativas de Android para share, filesystem, teclado, splash screen e notificações locais.
- Cache de API, estado de saúde das fontes, tentativas de reconexão e fallback com últimos dados válidos.
- Workflow de qualidade com GitHub Actions.
- Workflow opcional para gerar APK debug.
- Workflow opcional para deploy na Vercel.
- Testes automatizados com Node Test.
- Validação completa com lint, typecheck, testes e build.

---

## Limite científico do projeto

Eu fiz o NiñoPulse Global para ser uma ferramenta educacional e de pesquisa. Ele **não** é uma agência oficial de previsão, não é sistema de alerta de desastre e não substitui órgãos meteorológicos.

Os dados atuais sobre ENSO e probabilidades vêm da NOAA/CPC. Os dados de clima atual dos países vêm da Open-Meteo e representam um local escolhido por país. Isso não significa média nacional, aviso oficial ou medição de todas as regiões do país.

Os perfis de impacto por país são resumos educativos baseados em contexto histórico. Eles se adaptam à fase global do ENSO, mas não calculam chuva local, prejuízo agrícola, enchente, seca ou dano econômico real.

O **Signal Index** experimental é uma heurística transparente para exploração. Ele não é machine learning, não é previsão oficial, não é intervalo de confiança e não deve ser tratado como produto da NOAA.

Para decisões reais, principalmente sobre segurança, agricultura, enchentes ou emergências, o certo é consultar órgãos meteorológicos nacionais e autoridades locais.

---

## Fontes de dados

O projeto trabalha com dados e interpretações relacionados ao ENSO.

As áreas principais são:

- fase oficial do ENSO;
- índices semanais das regiões Niño;
- probabilidades sazonais do ENSO;
- série histórica ONI;
- série histórica RONI;
- episódios quentes e frios detectados automaticamente;
- cenários educativos de impacto por país;
- clima atual de locais representativos;
- previsão de 7 dias para locais representativos.

---

## Screenshots

### Dashboard principal



### Mapa global do ENSO

<img width="1920" height="1080" alt="Mapa global do ENSO" src="YOUR-IMAGE-LINK-HERE" />

### Perfil climático de país

<img width="1920" height="1080" alt="Perfil climático de país" src="YOUR-IMAGE-LINK-HERE" />

### Análises históricas

<img width="1920" height="1080" alt="Análises históricas" src="YOUR-IMAGE-LINK-HERE" />

### Modo pesquisa

<img width="1920" height="1080" alt="Modo pesquisa" src="YOUR-IMAGE-LINK-HERE" />

### Visual mobile / Android

<img width="390" height="844" alt="Visual mobile" src="YOUR-IMAGE-LINK-HERE" />

---

## API pública

Eu também criei rotas públicas somente leitura para acessar dados de ENSO, histórico, países e saúde da aplicação.

```txt
GET /api/v1/enso
GET /api/v1/history
GET /api/v1/countries
GET /api/v1/live-countries
GET /api/v1/countries?risk=alto
GET /api/v1/countries?threat=seca
GET /api/v1/countries?q=brasil
GET /api/health
```

As rotas `/api/v1/*` têm suporte a CORS para funcionar com o app Android e outros usos de pesquisa.

O acesso anônimo tem limite por padrão. Também deixei suporte para chaves nomeadas e rate limiting distribuído usando variáveis de ambiente.

---

## Como a API se comporta

- As rotas da API são somente leitura.
- O CORS é público de propósito, para pesquisa e uso no app.
- As requisições para a NOAA usam timeout.
- Os dados da NOAA são validados antes de substituir os últimos dados válidos.
- O clima da Open-Meteo é buscado em lote para os países.
- As respostas do servidor têm fallback caso algum provedor falhe temporariamente.
- Chaves de API opcionais podem ser configuradas por quem opera o projeto.
- O Upstash Redis pode ser usado para rate limiting distribuído em produção.

---

## Stack usada

### Frontend

- React 18
- React DOM
- React Router DOM
- Vite 6
- JavaScript / ESM
- TypeScript tooling
- Tailwind CSS
- next-themes
- Framer Motion
- Lucide React

### Dados e visualização

- Leaflet
- React Leaflet
- Recharts
- TanStack React Query
- html2canvas
- jsPDF

### Backend / API

- Node.js 20+
- Vercel Serverless Functions
- Middleware local de API no Vite para desenvolvimento
- Parsers NOAA/CPC
- Serviço de clima ao vivo com Open-Meteo
- Utilitários de CORS, cache e validação
- Suporte opcional a Upstash Redis para rate limiting

### Mobile / Native

- Capacitor 7
- Capacitor Android
- Capacitor App
- Capacitor Filesystem
- Capacitor Keyboard
- Capacitor Local Notifications
- Capacitor Share
- Capacitor Splash Screen
- Projeto Android com splash e ícones adaptativos

### Qualidade e ferramentas

- ESLint 9
- TypeScript 5 tooling
- Node Test
- GitHub Actions
- Vite PWA
- Workbox
- Android Gradle project

---

## Estrutura do projeto

```txt
android/                 Projeto Android com Capacitor
api/                     Rotas serverless da Vercel
server/                  Parsers NOAA, cache, helpers de API e servidor local
src/components/elnino/   Dashboard, mapa, alertas, países e componentes de pesquisa
src/components/system/   Runtime, error boundary, PWA e conectividade
src/contexts/            Contextos de idioma e preferências
src/hooks/               Hooks de ENSO, histórico, países ao vivo e PWA
src/lib/                 Modelos, fallback data, formatação e helpers de runtime
src/pages/               Home, pesquisa, sobre, privacidade e documentação da API
src/services/            Serviços de exportação, share e notificações
public/icons/            Ícones da PWA
docs/                    Metodologia, privacidade, segurança, validação e releases
scripts/                 Scripts de Android e build
.github/workflows/       CI, Android e deploy opcional na Vercel
```

---

## Requisitos

- Node.js 20+
- npm
- Android Studio, apenas para builds Android
- Android SDK 35, apenas para builds Android
- Uma URL HTTPS publicada para a API quando for build nativo Android

---

## Rodando localmente

Instale as dependências:

```bash
npm ci
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

No desenvolvimento local, o servidor do Vite também inclui middleware de API para ENSO, histórico, países ao vivo e rotas públicas v1.

---

## Validação completa

Para rodar a checagem completa do projeto:

```bash
npm run check
```

Esse comando roda:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

---

## Build de produção

```bash
npm run build
```

---

## Preview de produção

```bash
npm run build
npm start
```

O preview de produção usa o servidor local em `server/index.js`.

---

## Testes

```bash
npm test
```

A suíte de testes usa Node Test e cobre:

- comportamento do serviço NOAA;
- comportamento do serviço de histórico;
- utilitários da API;
- filtros da API de países;
- comportamento das APIs da Vercel;
- serviço de clima ao vivo por país;
- lógica do modelo experimental;
- lógica de outlook dos países;
- helpers de runtime.

---

## Lint e typecheck

```bash
npm run lint
npm run typecheck
```

Para corrigir automaticamente o que for possível:

```bash
npm run lint:fix
```

---

## Deploy na Vercel

Para publicar, basta importar o repositório na Vercel e manter estas pastas/arquivos na raiz:

```txt
api/
server/
src/
public/
vercel.json
package.json
```

Configurações recomendadas:

```txt
Framework: Vite
Build command: npm run build
Output directory: dist
Node.js: 20+
```

Não precisa de credencial da NOAA.

---

## Variáveis de ambiente

Variáveis opcionais:

```txt
NOAA_CACHE_TTL_MS=600000
HISTORY_CACHE_TTL_MS=21600000
NINOPULSE_API_KEYS=
NINOPULSE_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### O que cada uma faz

- `NOAA_CACHE_TTL_MS`: tempo de cache para dados atuais da NOAA.
- `HISTORY_CACHE_TTL_MS`: tempo de cache para dados históricos.
- `NINOPULSE_API_KEYS`: JSON opcional para chaves nomeadas e limites por chave.
- `NINOPULSE_API_KEY`: chave única antiga/opcional.
- `UPSTASH_REDIS_REST_URL`: URL opcional do Upstash Redis para rate limiting distribuído.
- `UPSTASH_REDIS_REST_TOKEN`: token opcional do Upstash Redis.

Exemplo de chaves nomeadas:

```json
{
  "school-lab": {
    "key": "research-key-1",
    "limit": 600
  },
  "partner": "research-key-2"
}
```

---

## Build Android

O app Android nativo precisa chamar uma API HTTPS publicada, porque as rotas serverless da Vercel não rodam dentro do APK.

Copie o arquivo de ambiente Android:

```bash
cp .env.android.example .env.android
```

Defina a URL da API publicada:

```txt
VITE_API_BASE_URL=https://your-project.vercel.app
```

Prepare o projeto Android:

```bash
npm run android:config
npm run build
npm run android:sync
npm run android:open
```

No Windows:

```bat
npm run android:prepare:windows
npm run android:open
```

Rodar no Android:

```bash
npm run android:run
```

Build do APK debug:

```bash
npm run android:apk
```

Saída:

```txt
android/app/build/outputs/apk/debug/app-debug.apk
```

Build do AAB para Play Store:

```bash
npm run android:aab
```

Saída:

```txt
android/app/build/outputs/bundle/release/app-release.aab
```

Não commite `.env.android`, keystores, `android/keystore.properties`, arquivos `.jks` ou credenciais da Play Console.

---

## Notas de release Android

Antes de publicar uma build Android, eu checaria:

- publicar o projeto web/API em uma URL HTTPS;
- configurar `.env.android` com a URL de produção;
- rodar `npm run check`;
- rodar `npm run android:config`;
- rodar `npm run build`;
- rodar `npm run android:sync`;
- testar em celular físico e emulador;
- testar português e inglês;
- testar tema claro, escuro e automático;
- testar mapa, páginas de país e modo pesquisa;
- testar comportamento offline;
- testar exportações e compartilhamento de imagem;
- testar permissão de notificação;
- gerar o AAB final com a mesma chave de upload.

---

## Recursos de PWA

O NiñoPulse Global também funciona como PWA instalável usando Vite PWA e Workbox.

Comportamentos suportados:

- precache gerado pelo Workbox;
- lógica de instalação;
- aviso de atualização disponível;
- aviso de modo offline pronto;
- fallback de navegação;
- cache de API em runtime;
- cache de tiles do mapa;
- limpeza de caches antigos;
- modo standalone.

---

## CI/CD

O repositório inclui workflows do GitHub Actions para validação de qualidade, geração opcional de artefato Android e deploy opcional na Vercel.

### Workflow de CI

Roda em push para `main` e em pull requests:

```txt
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

### Workflow Android

Pode gerar um APK debug como artifact quando arquivos Android mudam ou quando é rodado manualmente.

### Workflow de deploy na Vercel

Pode validar e publicar uma build de produção na Vercel quando rodado manualmente com os secrets necessários.

---

## Segurança

- O app não tem login com senha.
- Não existe banco de contas na nuvem.
- Favoritos, idioma, tema e alertas ficam salvos localmente.
- As APIs são somente leitura.
- O CORS público é intencional para pesquisa e uso no app.
- As chaves de API opcionais são configuradas por quem opera o projeto.
- O Upstash Redis pode adicionar rate limiting distribuído.
- Sem Upstash, o rate limiting é local do processo e deve ser visto como proteção básica.
- Tráfego HTTP sem criptografia fica desativado no Android.
- Backups Android ficam desativados para preferências locais.
- Senhas, chaves de upload e credenciais devem ficar fora do Git.

---

## Privacidade

O NiñoPulse Global não exige conta, login, senha, documentos pessoais, localização GPS precisa, dados bancários ou perfil de anúncios.

Preferências como idioma, tema, favoritos e alertas escolhidos podem ficar salvas localmente no navegador ou no dispositivo.

Serviços externos podem processar requisições técnicas necessárias para carregar mapas, clima, dados climáticos e infraestrutura de hospedagem, seguindo as políticas deles.

---

## Validação da versão

O relatório da versão 2.3.0-beta.1 indica:

- lint aprovado;
- typecheck aprovado;
- testes automatizados aprovados;
- build de produção do Vite aprovado;
- geração PWA concluída;
- sincronização Android com Capacitor concluída;
- audit de dependências de produção sem vulnerabilidades conhecidas no momento da validação;
- código pesado de mapa, histórico, PDF e exportação de imagem separado em chunks sob demanda.

---

## Coisas que eu não estou fingindo que existem

- Não tem login com senha.
- Não tem sincronização de conta na nuvem.
- Preferências e favoritos ficam salvos localmente.
- Alertas são locais e verificados enquanto o app está ativo.
- Não tem push notification remoto.
- Chaves de API são configuradas por quem opera o projeto, não emitidas automaticamente por portal de usuário.
- Cenários por país não são previsões nacionais.
- O Signal Index não é modelo oficial de previsão.
- O clima atual por país não é média nacional.

---

## Roadmap

Ideias para versões futuras:

- exploração mais detalhada por cidade;
- mais perfis de países;
- mais bases climáticas oficiais;
- testes melhores de acessibilidade;
- mais explicações educativas;
- material baixável para sala de aula;
- painel opcional para gerenciar chaves de API;
- mais testes automatizados de UI;
- mais testes em dispositivos Android.

---

## Destaques do changelog

### 2.3.0-beta.1

- Melhorias para Android WebView.
- Ajustes de viewport dinâmico.
- Layout adaptado para teclado.
- Comportamento nativo do botão voltar no Android.
- Splash screen com marca.
- Mensagens de conexão perdida/restaurada.
- Avisos de PWA para atualização e offline.
- Carregamento sob demanda de módulos pesados.
- Melhorias no comportamento do mapa Leaflet.
- Cards de pesquisa otimizados para mobile.
- Suporte a multi-window no Android.
- Atualização do version code Android.
- Documentação de QA para release.

### 2.2.0

- Condições atuais e previsão de 7 dias para 30 países.
- Busca em lote de clima pela Open-Meteo.
- Fallback com último dado válido no servidor.
- Fallback de snapshot no navegador.
- Detalhes de clima nos cards de país.
- `/api/live-countries` e `/api/v1/live-countries`.

### 2.1.0

- Busca oficial de histórico ONI/RONI da NOAA.
- Detecção automática de episódios ENSO.
- Signal Index experimental e transparente.
- Cenários educativos dinâmicos por país.
- Compartilhamento de imagem do dashboard.
- Migração para Vite PWA / Workbox.
- Projeto Android com Capacitor.
- Rotas `/api/v1/*` na Vercel.
- Chaves nomeadas e rate limiting opcional com Upstash.

### 2.0.0

- Primeiro dashboard bilíngue mobile-first.
- Dados atuais da NOAA.
- Base de PWA.
- Exportações.
- Favoritos.
- Modo pesquisa.
- API somente leitura.

---

## Por que eu fiz esse projeto

El Niño e La Niña podem afetar chuva, seca, enchentes, calor, agricultura, ecossistemas, infraestrutura e economia em várias partes do mundo.

Eu criei o NiñoPulse Global para deixar esse assunto mais acessível. Em vez de depender só de tabelas difíceis ou textos técnicos, eu quis juntar dados oficiais, histórico climático, explicações educativas, mapas, exportações e contexto por país em uma interface mais clara.

Minha meta é que estudantes, professores e pessoas curiosas consigam entender melhor como padrões oceano-atmosfera podem influenciar a vida real.

---

## Autor

**Samuel Borba**

Sou um estudante desenvolvedor do Brasil, interessado em ciência climática, tecnologia educacional, visualização de dados, programação e projetos com impacto real.

---

## Nota sobre o repositório

No `package.json`, este projeto ainda está marcado como pacote privado.

Se eu decidir tornar o projeto open source, o ideal é adicionar um arquivo de licença real e atualizar o badge de licença/status no topo do README.
