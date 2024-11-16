# Web development learning project

## VSCode setup
### Settings
  * "remote.restoreForwardedPorts": false
### Shortcuts
  * Ctrl/Cmd + K, V: Preview markdown
  * Ctrl/Cmd + K, Ctrl/Cmd + &larr; / &rarr;: Window focus move left/right
  * Ctrl/Cmd + B: Primary side bar toggle
  * Ctrl/Cmd + Alt/Option + B: Secondary side bar toggle (AI chatting)
  * Ctrl/Cmd + J: Panel toggle
### AI extensions
  * Codeium for VSCode (drag it to the secondary side bar)

## Project setup
### Devcontainer
  * Image: mcr.microsoft.com/devcontainers/typescript-node:20
  * Features: enable docker-outside-of-docker
  * Set zsh and its default theme in post-create.sh
### Pure frontend projects - Vite
  ```bash
  $ npm create vite@latest my-app --template vanilla
  ```
### Fullstack projects - Nextjs
  ```bash
  $ npx create-next-app@latest
  ```
### Documents
  * [MDN web docs on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [📔](css/CSSLearningNotes.md)
  * [The Modern JavaScript Tutorial](https://javascript.info/) [📔](javascript/the-modern-javascript-tutorial/TMJT.md)
  * [The Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  * [Learn React](https://react.dev/learn)
  * [Next.js document](https://nextjs.org/docs)
  * [Learn Sass](https://sass-lang.com/guide/)
  * [TailwindCSS](https://tailwindcss.com/docs/installation)
  * [Vite](https://vite.dev/guide/)
  * [Framer Motion document](https://www.framer.com/motion/)

### Projects for Practice
  * A landing page with stunning scrolling animation [Apple TV+](https://www.apple.com/apple-tv-plus/)
  * Modern scroll snapping spa with interactions and animations [Monaspace](https://monaspace.githubnext.com/)