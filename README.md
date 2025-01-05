# Web development learning project

## Core concepts learning

- Learn CSS by reading [MDN documents](https://developer.mozilla.org/en-US/docs/Web/CSS) [📔](core/css/CSSLearningNotes.md)
- Learn React by reading [React official documents](https://react.dev/learn) [📔](core/reactjs/react.dev/ReactLearn.md)
- Learn Javascript by reading documents from [javascript.info](https://javascript.info/) [📔](core/javascript/the-modern-javascript-tutorial/TMJT.md)
- Learn Typescript by reading [official handbook](https://www.typescriptlang.org/docs/handbook/intro.html) [📔](core/typescript/HandbookNotes.md)

## Utitlities learning

- [ESLint](https://eslint.org/docs/latest/use/getting-started)[📔](utilities/eslint-prettier/EslintNotes.md) & [Prettier](https://prettier.io/docs/en/) [📔](utilities/eslint-prettier/PrettierNotes.md)
- [Learn Sass](https://sass-lang.com/guide/) [📔](sass/README.md)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vite.dev/guide/) & [Rsbuild](https://rsbuild.dev/)
- [Next.js document](https://nextjs.org/docs)
- [Remix](https://remix.run/docs/en/main)
- [React Router](https://reactrouter.com/home) [📔](utilities/react-router/Notes.md)
- [React Redux](https://react-redux.js.org/introduction/getting-started)

### Quiz and challenges

- [Advent of CSS](https://www.adventofcss.com/)
- [Advent of JS](https://adventofjs.com/)
- [Typehero](https://typehero.dev/)

### Projects for Practice

- [Frontend Mentor](https://www.frontendmentor.io/)
- Website cloning ideas:
  - https://choooodoii.com/
  - https://sankoudesign.com/

## Tips and tricks accumulating

- [Kevin Powell Video on CSS](https://www.youtube.com/@KevinPowell/videos) [📔](core/css/KevinPowellYoutube.md)
- [Matt Pocock Video on Typescript](https://www.youtube.com/@mattpocock/videos) [📔](core/typescript/matt-pocock.md)
- https://www.smashingmagazine.com/
- https://css-tricks.com/
- [Essential Typescript for React](https://www.jacobparis.com/content/react-ts)
- https://egghead.io/

## Opensource project code reading

## VSCode setup

### Settings

- "remote.restoreForwardedPorts": false

### Shortcuts

- Ctrl/Cmd + K, V: Preview markdown
- Ctrl/Cmd + K, Ctrl/Cmd + &larr; / &rarr;: Window focus move left/right
- Ctrl/Cmd + B: Primary side bar toggle
- Ctrl/Cmd + Alt/Option + B: Secondary side bar toggle (AI chatting)
- Ctrl/Cmd + J: Panel toggle

### AI extensions

- Codeium for VSCode (drag it to the secondary side bar)

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
