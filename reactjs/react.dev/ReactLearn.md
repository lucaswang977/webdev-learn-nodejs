# React.dev Learn

https://react.dev/learn

## Quick Start

- Creating and nesting components
- Writing markup with JSX
- Adding styles
- Displaying data
- Conditional rendering
- Rendering lists
- Responding to events
- Updating the screen
- Using Hooks
- Sharing data between components

## Thinking in React

- Start with the mockup - Step 1: Break the UI into a component hierarchy
  - Programming: single responsibility principle
  - CSS: class selectors, granular than components
  - Design: organize the design's layers
  - Identified the components in the mockup, arrange them into a hierarchy.
- Step 2: Build a static version in React
  - At this point, you should not be using any state values.
  - The component at the top of the hierarchy will take your data model as a prop.
  - one-way data flow
- Step 3: Find the minimal but complete representation of UI state
  - Think of state as the minimal set of changing data that your app needs to remember.
  - The most important principle for structuring state is to keep it DRY (Don't Repeat Yourself).
  - Which of these are state?
    - Does it remain unchanged over time? If so, it isn't state.
    - Is it passed in from a parent via props? If so, it isn't state.
    - Can you compute it based on existing state or props in your component? If so, it definitely isn't state!
- Step 4: Identify where your state should live
  - Often, you can put the state directly into their common parent.
  - You can also put the state into some component above their common parent.
  - If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.
- Step 5: Add inverse data flow
  - You will need to support data flowing the other way: the components deep in the hierarchy need to update the state in the common parent component.

## Describing the UI

- React assumes that every component you write is a pure function. A pure function:
  - Minds its own business. It does not change any objects or variables that existed before it was called.
  - Same inputs, same output. Given the same inputs, a pure function should always return the same result.
- React uses trees to model the relationships between components and modules. A React render tree is a representation of the parent and child relationship between components.
- Components can render other components, but you must never nest their definitions. When a child component needs some data from a parent, pass it by props instead of nesting definitions.
- The Rules of JSX
  - Return a single root element
  - Close all the tags
  - camelCase all most of the things!
- You can only use curly braces in two ways inside JSX:
  - **As text** directly inside a JSX tag: &lt;h1&gt;{name}'s To Do List&lt;/h1&gt; works, but &lt;{tag}&gt;Gregorio Y. Zara's To Do List&lt;/{tag}&gt; will not.
  - **As attributes** immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}"
- Using “double curlies”: CSS and other objects in JSX. {{ and }} is not special syntax: it's a JavaScript object tucked inside JSX curly braces.
- To pass props, add them to the JSX, just like you would with HTML attributes. To read props, use the function Avatar({ person, size }) destructuring syntax.
- You can forward all props with &lt;Avatar {...props} /&gt; JSX spread syntax, but don't overuse it!
- Nested JSX like &lt;Card&gt;&lt;Avatar /&gt;&lt;/Card&gt; will appear as Card component's children prop.
- Props are read-only snapshots in time: every render receives a new version of props. You can't change props. When you need interactivity, you'll need to set state.
- In JSX, {cond ? &lt;A /&gt; : &lt;B /&gt;} means “if cond, render &lt;A /&gt;, otherwise &lt;B /&gt;”. {cond && &lt;A /&gt;} means “if cond, render &lt;A /&gt;, otherwise nothing”.
- Rules of keys
  - **Keys must be unique among siblings.** However, it's okay to use the same keys for JSX nodes in different arrays.
  - **Keys must not change or that defeats their purpose!** Don't generate them while rendering.
- In React, side effects usually belong inside event handlers. Event handlers don't need to be pure.
- Why does React care about purity?
  - Your components could run in a different environment.
  - You can improve performance by skipping rendering components whose inputs have not changed.
  - If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render.
- Render trees represent the nested relationship between React components across a single render. Dependency trees represent the module dependencies in a React app.

## Adding Interactivity

- Responding to Events
  - Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
  - Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
  - Explicitly calling an event handler prop from a child handler is a good alternative to propagation
- State: A Component's Memory
  - Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
  - You can have more than one state variable. Internally, React matches them up by their order.
  - State is private to the component. If you render it in two places, each copy gets its own state.
- Render and Commit
  - Step 1: Trigger a render
    - It's the component's initial render. (root.render())
    - The component's (or one of its ancestors') state has been updated. (Updating your component's state automatically queues a render.)
  - Step 2: React renders your components
    - "Rendering" is React calling your components. On initial render, React will call the root component. For subsequent renders, React will call the function component whose state update triggered the render. This process is recursive.
    - Rendering must always be a pure calculation: Same inputs, same output. It minds its own business.
    - When developing in **Strict Mode**, React calls each component's function twice, which can help surface mistakes caused by impure functions.
  - Step 3: React commits changes to the DOM
    - For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
    - React only changes the DOM nodes if there's a difference between renders.
- State as a Snapshot
  - When React re-renders a component: React calls your function again. Your function returns a new JSX snapshot. React then updates the screen to match the snapshot your function returned.
  - Setting state only changes it for the next render.
  - A state variable's value never changes within a render, even if its event handler's code is asynchronous. React keeps the state values “fixed” within one render’s event handlers.
- Queueing a Series of State Updates
  - React does not batch across multiple intentional events like clicks—each click is handled separately.
  - When you pass an **updater function** to a state setter: React queues this function to be processed after all the other code in the event handler has run. During the next render, React goes through the queue and gives you the final updated state.
  - Updater functions run during rendering, so updater functions must be pure and only return the result.
- Updating Objects in State
  - Treat all state in React as immutable.
  - When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
  - Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
  - You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
  - Spread syntax is shallow: it only copies one level deep.
  - To update a nested object, you need to create copies all the way up from the place you’re updating.
  - To reduce repetitive copying code, use Immer.
- Updating Arrays in State
  - avoid (mutates the array): push, unshift, pop, shift, splice, arr[i] = ... assignment, reverse, sort
  - prefer (returns a new array): concat, [...arr] spread syntax, filter, slice, map, copy the array first
  - Generally, you shouldn’t need to update state more than a couple of levels deep. If your state objects are very deep, you might want to restructure them differently so that they are flat.
