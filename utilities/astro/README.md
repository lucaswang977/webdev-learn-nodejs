# Astro Document Notes

## Core Philosophy

- **Definition**: Astro is the web framework for building content-driven websites like blogs, marketing, and e-commerce. Astro is best-known for pioneering a new frontend architecture to reduce JavaScript overhead and complexity compared to other frameworks. If you need a website that loads fast and has great SEO, then Astro is for you.
- **Content-driver**: designed for building content-rich websites rather than building web applications.
- **Server-first**: leverages server rendering over client-side rendering in the browser as much as possible. Like traditional server-side frameworks(PHP, WordPress, etc.) but without need to learn a new language. And unlike modern Javascript framework like Next.js, SvelteKit, Astro’s server-first approach allows you to opt in to client-side rendering only if, and exactly as, necessary.
- **Fast by default**: An Astro website can load 40% faster with 90% less JavaScript than the same site built with the most popular React web framework.
- **Easy to use**: if you can write HTML, you can write Astro components, it also combines some of our favorite features borrowed from other component languages like JSX expressions (React) and CSS scoping by default (Svelte and Vue).
- **Developer-focused**: CLI, VS Code extension, Typescript and Intellisense, community.

## Features

### Islands architecture

- The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions […] that can then be “hydrated” on the client into small self-contained widgets, reusing their server-rendered initial HTML.
  - Client island: an interactive JavaScript UI component that is hydrated separately from the rest of the page.
  - Server island: a UI component that server-renders its dynamic content separately from the rest of the page.
  - An island always runs in isolation from other islands on the page, and multiple islands can exist on a page.
  - Client islands can still share state and communicate with each other, even though they run in different component contexts.
- Client island:
  - By default, Astro will automatically render every UI component to just HTML & CSS, stripping out all client-side JavaScript automatically.
  - Turning any static UI component into an interactive island requires only a client:\* directive.
  - Benefits of client islands: performance, parallel loading, lazy loading
- Server island:
  - Add the server:defer directive to any Astro component on your page to turn it into its own server island. This breaks up your page with smaller areas of server-rendered content that each load in parallel.
  - Your page’s main content can be rendered immediately with placeholder content, such as a generic avatar until your island’s own content is available.
  - Benefits of server islands: performance, experience
