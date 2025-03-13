# Web development learning project

- [Web development learning project](#web-development-learning-project)
  - [Core concepts learning](#core-concepts-learning)
  - [Utilities learning](#utilities-learning)
  - [Server side](#server-side)
    - [Quiz and challenges](#quiz-and-challenges)
    - [Best Practices](#best-practices)
  - [Opensource project code reading](#opensource-project-code-reading)
  - [VSCode setup](#vscode-setup)
    - [Settings](#settings)
    - [Shortcuts](#shortcuts)
  - [Project setup](#project-setup)
    - [Devcontainer](#devcontainer)
    - [Pure frontend projects - Vite](#pure-frontend-projects---vite)
    - [Fullstack projects - Nextjs](#fullstack-projects---nextjs)

## Core concepts learning

- Learn CSS by reading [MDN documents](https://developer.mozilla.org/en-US/docs/Web/CSS) [📔](core/css/MdnCSSNotes.md)
- Learn React by reading [React official documents](https://react.dev/learn) [📔](core/reactjs/react.dev/ReactLearn.md)
- Learn Javascript by reading documents from [javascript.info](https://javascript.info/) [📔](core/javascript/the-modern-javascript-tutorial/TMJT.md)
- Learn Typescript by reading [official handbook](https://www.typescriptlang.org/docs/handbook/intro.html) [📔](core/typescript/HandbookNotes.md)

## Utilities learning

- [ESLint](https://eslint.org/docs/latest/use/getting-started)[📔](utilities/eslint-prettier/EslintNotes.md) & [Prettier](https://prettier.io/docs/en/) [📔](utilities/eslint-prettier/PrettierNotes.md)
- [Sass](https://sass-lang.com/guide/) [📔](utilities/sass/README.md)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction) [📔](utilities/svg/README.md)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Vite](https://vite.dev/guide/) & [RsBuild](https://rsbuild.dev/)
- [Next.js document](https://nextjs.org/docs) [📔](utilities/nextjs/NextjsNotes.md)
- [React Router](https://reactrouter.com/home) [📔](utilities/react-router/Notes.md)
- [Remix](https://remix.run/docs/en/main)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/) [📔](utilities/webcomponent/readme.md)
- [Deno](https://docs.deno.com/) [📔](utilities/deno/README.md)
- [Astro](https://docs.astro.build/en/getting-started/) [📔](utilities/astro/README.md)
- [CSS Modules](https://github.com/css-modules/css-modules)
- Animation
  - [Animate.css](https://animate.style/)
  - [React Spring](https://react-spring.io/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [GSAP](https://greensock.com/)
- Other great utilities:
  - [FontSource](https://fontsource.org/)
  - [Gitignore.io](https://www.toptal.com/developers/gitignore)

## Server side
- [Nest.js](https://docs.nestjs.com/)[📔](server/nestjs/README.md)
- [tRPC](https://trpc.io/docs)[📔](server/trpc/README.md)
- [GraphQL](https://graphql.org/learn/)[📔](server/graphql/README.md)

### Quiz and challenges

- [CodePen Trending](https://codepen.io/trending)
- [Frontend Mentor](https://www.frontendmentor.io/)
- [Advent of CSS](https://www.adventofcss.com/)
- [Advent of JS](https://adventofjs.com/)
- [TypeHero](https://typehero.dev/)

### Best Practices

- Responsive design and implementation [📔](best-practices/responsive/README.md)
- Accessibility [📔](best-practices/aria/README.md)
- Performance optimization [📔](best-practices/performance/README.md)

## Opensource project code reading

## VSCode setup

### Settings

- "remote.restoreForwardedPorts": false

### Shortcuts

- Ctrl/Cmd + Shift + E: Toggle Explorer
- Ctrl/Cmd + B: Primary side bar toggle
- Alt/Option + Shift + Up/Down: Multiple cursors up/down
- Ctrl/Cmd + Shift + ]: Switch between terminal tabs
- Ctrl/Cmd + Alt/Option + Shift + ⬇/⬆: Create multiple cursors
- Ctrl/Cmd + Alt/Shift + I: Toggle Copilot Chat panel
- (Customized) Ctrl + Shift + t: Terminal in editor
- (Customized) Ctrl/Cmd + Shift + r: Show remote explorer(dev containers)

## Project setup

### Devcontainer

- Image: mcr.microsoft.com/devcontainers/typescript-node:20
- Features: enable docker-outside-of-docker
- Set zsh and its default theme in post-create.sh

### Pure frontend projects - Vite

```bash
$ npm create vite@latest my-app --template vanilla
```

### Fullstack projects - Nextjs

```bash
$ npx create-next-app@latest
```
