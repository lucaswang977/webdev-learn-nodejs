# React Official Document Notes (v19)

## React
### Hooks 
* Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

#### State Hooks
* State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
* `useState`: declares a state variable that you can update directly.
* `useReducer`: declares a state variable with the update logic inside a reducer function.

#### Context Hooks
* Context lets a component receive information from distant parents without passing it as props. For example, your app's top-level component can pass the current UI theme to all components below, no matter how deep.
* `useContext`: reads and subscribes to a context.

#### Ref Hooks
* Refs let a component hold some information that isn't used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component.
* Refs are an "escape hatch" from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.
* `useRef`: declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
* `useImperativeHandle`: lets you customize the ref exposed by your component. This is rarely used.

#### Effect Hooks
* Effects let a component connect to and synchronize with external systems. 
* This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
* Effects are an "escape hatch" from the React paradigm. Don't use Effects to orchestrate the data flow of your application. If you’re not interacting with an external system, you might not need an Effect.
* `useEffect`: connects a component to an external system.
* `useLayoutEffect`: fires before the browser repaints the screen. You can measure layout here.
* `useInsertionEffect`: fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

#### Performance Hooks
* A common way to optimize re-rendering performance is to skip unnecessary work. For example, you can tell React to reuse a cached calculation or to skip a re-render if the data has not changed since the previous render.
* Sometimes, you can't skip re-rendering because the screen actually needs to update. In that case, you can improve performance by separating blocking updates that must be synchronous (like typing into an input) from non-blocking updates which don't need to block the user interface (like updating a chart).
* `useMemo`: lets you cache the result of an expensive calculation.
* `useCallback`: lets you cache a function definition before passing it down to an optimized component.
* `useTransition`: lets you mark a state transition as non-blocking and allow other updates to interrupt it.
* `useDeferredValue`: lets you defer updating a non-critical part of the UI and let other parts update first.

#### Other Hooks
* `useDebugValue`: lets you customize the label React DevTools displays for your custom Hook.
* `useId`: lets a component associate a unique ID with itself. Typically used with accessibility APIs.
* `useSyncExternalStore`: lets a component subscribe to an external store.
* `useActionState`: allows you to manage state of actions.

#### Your own Hooks
* You can also define your own custom Hooks as JavaScript functions.

### Components 
* React exposes a few built-in components that you can use in your JSX.
* `<Fragment>`: alternatively written as `<>...</>`, lets you group multiple JSX nodes together.
* `<Profiler>`: lets you measure rendering performance of a React tree programmatically.
* `<Suspense>`: lets you display a fallback while the child components are loading.
* `<StrictMode>`: enables extra development-only checks that help you find bugs early.

### APIs 
* In addition to Hooks and Components, the react package exports a few other APIs that are useful for defining components. This page lists all the remaining modern React APIs.
* Built-in React APIs
  * `createContext`: lets you define and provide context to the child components. Used with useContext.
  * `forwardRef`: lets your component expose a DOM node as a ref to the parent. Used with useRef.
  * `lazy`: lets you defer loading a component’s code until it’s rendered for the first time.
  * `memo`: lets your component skip re-renders with same props. Used with useMemo and useCallback.
  * `startTransition`: lets you mark a state update as non-urgent. Similar to useTransition.
  * `act`: lets you wrap renders and interactions in tests to ensure updates have processed before making assertions.
* Resource APIs
  * Resources can be accessed by a component without having them as part of their state. For example, a component can read a message from a Promise or read styling information from a context.
  * `use`: lets you read the value of a resource like a Promise or context.

### Directives 
* Directives provide instructions to bundlers compatible with React Server Components.
* `'use client'`: lets you mark what code runs on the client.
* `'use server'`: marks server-side functions that can be called from client-side code.

## React DOM
* React-dom contains features that are only supported for web applications (which run in the browser DOM environment).

### Hooks 
* Hooks for web applications which run in the browser DOM environment.
### Components 
* React supports all of the browser built-in HTML and SVG components.
### APIs 
* The react-dom package contains methods supported only in web applications.
### Client APIs 
* The react-dom/client APIs let you render React components on the client (in the browser).
### Server APIs 
* The react-dom/server APIs let you render React components to HTML on the server.

## Rules of React
### Components and Hooks must be pure 
* Purity makes your code easier to understand, debug, and allows React to automatically optimize your components and hooks correctly.
### React calls Components and Hooks 
* React is responsible for rendering components and hooks when necessary to optimize the user experience.
### Rules of Hooks 
* Hooks are defined using JavaScript functions, but they represent a special type of reusable UI logic with restrictions on where they can be called.