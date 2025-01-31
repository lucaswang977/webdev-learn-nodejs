# Web development learning project

## Core concepts learning

- Learn CSS by reading [MDN documents](https://developer.mozilla.org/en-US/docs/Web/CSS) [📔](core/css/MdnCSSNotes.md)
- Learn React by reading [React official documents](https://react.dev/learn) [📔](core/reactjs/react.dev/ReactLearn.md)
- Learn Javascript by reading documents from [javascript.info](https://javascript.info/) [📔](core/javascript/the-modern-javascript-tutorial/TMJT.md)
- Learn Typescript by reading [official handbook](https://www.typescriptlang.org/docs/handbook/intro.html) [📔](core/typescript/HandbookNotes.md)
- Learn Data Structures and Algorithms on [LeetCode](https://leetcode.com) [📔](core/ds/Plan.md)

## Utitlities learning

- [ESLint](https://eslint.org/docs/latest/use/getting-started)[📔](utilities/eslint-prettier/EslintNotes.md) & [Prettier](https://prettier.io/docs/en/) [📔](utilities/eslint-prettier/PrettierNotes.md)
- [Learn Sass](https://sass-lang.com/guide/) [📔](utilities/sass/README.md)
- [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Introduction) [📔](utilities/svg/README.md)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vite.dev/guide/) & [Rsbuild](https://rsbuild.dev/)
- [Next.js document](https://nextjs.org/docs)
- [Remix](https://remix.run/docs/en/main)
- [React Router](https://reactrouter.com/home) [📔](utilities/react-router/Notes.md)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- Other great utilities:
  - [FontSource](https://fontsource.org/)
  - [Gitignore.io](https://www.toptal.com/developers/gitignore)

### Quiz and challenges

- [Frontend Mentor](https://www.frontendmentor.io/)
- [Advent of CSS](https://www.adventofcss.com/)
- [Advent of JS](https://adventofjs.com/)
- [Typehero](https://typehero.dev/)

### Best Practices

- Responsive design and implementation [📔](best-practices/responsive/README.md)
- Accessibility [📔](best-practices/aria/README.md)
- Performance optimization [📔](best-practices/performance/README.md)

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
