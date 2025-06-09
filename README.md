# 💼 Portfolio Project

Um portfólio pessoal moderno e responsivo desenvolvido com React e Vite, apresentando meus projetos, habilidades e experiências de forma interativa e profissional.

## 🌟 Características

- **Design Responsivo**: Funciona perfeitamente em dispositivos desktop, tablet e mobile
- **Integração com GitHub**: Conecta com a API do GitHub para exibir repositórios dinamicamente
- **Interface Moderna**: Design limpo e profissional com componentes reutilizáveis
- **Performance Otimizada**: Construído com Vite para carregamento rápido
- **Custom Hooks**: Hooks personalizados para gerenciar estado e API calls
- **Tratamento de Erros**: Páginas de erro e loading dedicadas
- **Componentes UI**: Sistema de componentes UI consistente

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18
- **Build Tool**: Vite
- **Linguagem**: JavaScript/JSX
- **Estilização**: CSS3 (App.css, index.css)
- **API Integration**: GitHub API
- **Custom Hooks**: useGitHub hook para gerenciamento de estado
- **Services**: githubService para chamadas de API
- **Linting**: ESLint
- **Bundler**: Vite com Hot Module Replacement (HMR)

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/NiltonCBS/portfolio-project.git
   cd portfolio-project
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra no navegador**
   
   O projeto estará disponível em `http://localhost:5173`

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão otimizada para produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 📁 Estrutura do Projeto

```
portfolio-project/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── pages/
│   │   │   ├── ErrorPage.jsx
│   │   │   ├── LoadingPage.jsx
│   │   │   └── UsernameInput.jsx
│   │   └── sections/
│   │       ├── ContactSection.jsx
│   │       ├── Footer.jsx
│   │       ├── HeroSection.jsx
│   │       ├── ProjectsSection.jsx
│   │       └── StatsSection.jsx
│   ├── hooks/
│   │   └── useGitHub.js
│   ├── services/
│   │   └── githubService.js
│   ├── ui/
│   │   ├── LoadingSpinner.jsx
│   │   └── RepoCard.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── README.md
```

## 🎨 Componentes e Seções

### 📄 **Páginas (Pages)**
- **ErrorPage.jsx**: Página de erro personalizada
- **LoadingPage.jsx**: Página de carregamento
- **UsernameInput.jsx**: Componente para entrada de username

### 🏗️ **Seções (Sections)**
- **HeroSection.jsx**: Seção principal/hero do portfólio
- **ProjectsSection.jsx**: Seção de projetos integrada com GitHub
- **StatsSection.jsx**: Seção de estatísticas e métricas
- **ContactSection.jsx**: Seção de contato
- **Footer.jsx**: Rodapé do site

### 🎨 **Componentes UI**
- **LoadingSpinner.jsx**: Componente de loading reutilizável
- **RepoCard.jsx**: Card para exibir repositórios do GitHub

### 🔧 **Hooks Personalizados**
- **useGitHub.js**: Hook para integração com a API do GitHub

### 🌐 **Serviços**
- **githubService.js**: Serviço para comunicação com a API do GitHub

## 🚀 Deploy

### GitHub Pages

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Configure o repositório para GitHub Pages**
   - Vá para Settings > Pages
   - Selecione a branch `gh-pages` ou `main`
   - Configure a pasta `/dist` como source

### Netlify

1. **Conecte seu repositório ao Netlify**
2. **Configure os comandos de build:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. **Importe o projeto no Vercel**
2. **As configurações serão detectadas automaticamente**

