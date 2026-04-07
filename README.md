# Brendon Silva — Portfolio

Portfolio pessoal construido com **React.js**, **TypeScript**, **Sass**, **Framer Motion** e **Vite**.
Disponivel em **PT-BR** e **EN-US** com toggle de idioma.

> **Curriculo:** [Brendon-CV-PTbr-2026.pdf](./public/Brendon-CV-PTbr-2026.pdf) | [brendon-cv-en.pdf](./public/brendon-cv-en.pdf)

---

## Como rodar o projeto

### Pre-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- npm ou yarn

### 1. Clone o repositorio

```bash
git clone https://github.com/BrendonSSilva/portfolio.git
cd portfolio
```

### 2. Instale as dependencias

```bash
npm install
```

### 3. Rode o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estara disponivel em `http://localhost:5173`.

### 4. Build para producao

```bash
npm run build
```

Os arquivos otimizados serao gerados na pasta `dist/`.

### 5. Preview do build

```bash
npm run preview
```

---

## Estrutura do projeto

```
portfolio/
├── public/
│   ├── icons/          # Icones SVG (techs, redes sociais)
│   ├── imgs/           # Imagens dos projetos e certificacoes
│   ├── Brendon-CV-PTbr-2026.pdf
│   └── brendon-cv-en.pdf
├── src/
│   ├── components/
│   │   ├── About/          # Secao Sobre Mim
│   │   ├── Card1/          # Cards de projetos (pagina completa)
│   │   ├── Experience/     # Timeline de experiencia profissional
│   │   ├── Footer/         # Rodape
│   │   ├── Hero/           # Secao principal (hero)
│   │   ├── Jobs/           # Projetos em destaque (home)
│   │   ├── LanguageToggle/ # Toggle de idioma PT-BR / EN-US
│   │   ├── Main/           # Services, Skills, Education
│   │   └── Navbar/         # Menu de navegacao
│   ├── i18n/
│   │   ├── translations.ts    # Traducoes PT-BR e EN-US
│   │   └── LanguageContext.tsx # Context provider de idioma
│   ├── App.jsx         # Rotas e layout principal
│   ├── App.css         # Estilos globais do root
│   ├── index.scss      # Estilos globais (body, scrollbar, botoes)
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Stack

| Categoria | Tecnologias |
|-----------|------------|
| Framework | React.js 18 + Vite 5 |
| Linguagem | TypeScript / JavaScript |
| Estilos | SCSS/Sass, Styled Components |
| Animacoes | Framer Motion |
| Rotas | React Router DOM |
| i18n | React Context + localStorage |
| Fonts | Montserrat, JetBrains Mono |

---

## Quer usar este projeto como base?

Fique a vontade para usar este portfolio como inspiracao ou template para o seu.

**Apenas peco que:**

> Inclua um link para o repositorio original como referencia/inspiracao no README do seu projeto.
>
> Exemplo:
> ```
> Inspirado no portfolio de Brendon Silva: https://github.com/BrendonSSilva/portfolio
> ```

Nao e necessario colocar o credito no site que ficara online — apenas no repositorio do seu projeto.

---

## Contato

- **LinkedIn:** [linkedin.com/in/brendon-silva](https://www.linkedin.com/in/brendon-silva/)
- **GitHub:** [github.com/BrendonSSilva](https://github.com/BrendonSSilva)
- **Email:** brendon.dasilva03@gmail.com

---

---

# Brendon Silva — Portfolio (EN-US)

Personal portfolio built with **React.js**, **TypeScript**, **Sass**, **Framer Motion** and **Vite**.
Available in **PT-BR** and **EN-US** with a language toggle.

> **Resume:** [brendon-cv-en.pdf](./public/brendon-cv-en.pdf) | [Brendon-CV-PTbr-2026.pdf](./public/Brendon-CV-PTbr-2026.pdf)

---

## How to run the project

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/BrendonSSilva/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The project will be available at `http://localhost:5173`.

### 4. Build for production

```bash
npm run build
```

Optimized files will be generated in the `dist/` folder.

### 5. Preview the build

```bash
npm run preview
```

---

## Project structure

```
portfolio/
├── public/
│   ├── icons/          # SVG icons (techs, social media)
│   ├── imgs/           # Project and certification images
│   ├── Brendon-CV-PTbr-2026.pdf
│   └── brendon-cv-en.pdf
├── src/
│   ├── components/
│   │   ├── About/          # About Me section
│   │   ├── Card1/          # Project cards (full page)
│   │   ├── Experience/     # Professional experience timeline
│   │   ├── Footer/         # Footer
│   │   ├── Hero/           # Main section (hero)
│   │   ├── Jobs/           # Featured projects (home)
│   │   ├── LanguageToggle/ # PT-BR / EN-US language toggle
│   │   ├── Main/           # Services, Skills, Education
│   │   └── Navbar/         # Navigation menu
│   ├── i18n/
│   │   ├── translations.ts    # PT-BR and EN-US translations
│   │   └── LanguageContext.tsx # Language context provider
│   ├── App.jsx         # Routes and main layout
│   ├── App.css         # Root global styles
│   ├── index.scss      # Global styles (body, scrollbar, buttons)
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Stack

| Category | Technologies |
|----------|-------------|
| Framework | React.js 18 + Vite 5 |
| Language | TypeScript / JavaScript |
| Styles | SCSS/Sass, Styled Components |
| Animations | Framer Motion |
| Routing | React Router DOM |
| i18n | React Context + localStorage |
| Fonts | Montserrat, JetBrains Mono |

---

## Want to use this project as a base?

Feel free to use this portfolio as inspiration or a template for your own.

**I just ask that you:**

> Include a link to the original repository as a reference/inspiration in your project's README.
>
> Example:
> ```
> Inspired by Brendon Silva's portfolio: https://github.com/BrendonSSilva/portfolio
> ```

You don't need to add credits to the live website — just in your project's repository.

---

## Contact

- **LinkedIn:** [linkedin.com/in/brendon-silva](https://www.linkedin.com/in/brendon-silva/)
- **GitHub:** [github.com/BrendonSSilva](https://github.com/BrendonSSilva)
- **Email:** brendon.dasilva03@gmail.com
