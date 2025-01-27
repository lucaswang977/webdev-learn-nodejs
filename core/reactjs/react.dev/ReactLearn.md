# React.dev Learn

https://react.dev/learn

- [React.dev Learn](#reactdev-learn)
  - [Quick Start](#quick-start)
  - [Thinking in React](#thinking-in-react)
  - [Describing the UI](#describing-the-ui)
  - [Adding Interactivity](#adding-interactivity)
  - [Managing State](#managing-state)
  - [Escape Hatches](#escape-hatches)

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
  - A state variable's value never changes within a render, even if its event handler's code is asynchronous. React keeps the state values “fixed” within one render's event handlers.
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
  - To update a nested object, you need to create copies all the way up from the place you're updating.
  - To reduce repetitive copying code, use Immer.
- Updating Arrays in State
  - avoid (mutates the array): push, unshift, pop, shift, splice, arr[i] = ... assignment, reverse, sort
  - prefer (returns a new array): concat, [...arr] spread syntax, filter, slice, map, copy the array first
  - Generally, you shouldn't need to update state more than a couple of levels deep. If your state objects are very deep, you might want to restructure them differently so that they are flat.

## Managing State

- Reacting to Input with State
  - Declarative UI compares to imperative: you describe what you want to happen, not how to do it.
  - Thinking about UI declaratively:
    - Identify your component's different visual states.
    - Determine what triggers those state changes.
    - Represent the state in memory using useState.
    - Remove any non-essential state variables.
    - Connect the event handlers to set the state.
  - If a component has a lot of visual states, it can be convenient to show them all on one page.
  - To prevent the cases where the state in memory doesn't represent any valid UI that you'd want a user to see.
    - Does this state cause a paradox?
    - Is the same information available in another state variable already?
    - Can you get the same information from the inverse of another state variable?
- Choosing the State Structure
  - Group related state: if some two state variables always change together, it might be a good idea to unify them into a single state variable.
  - Avoid contradictions in state: when the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes.
  - Avoid redundant state: If you can calculate some information from the component's props or its existing state variables during rendering, you should not put that information into that component's state.
  - Avoid duplication in state: when the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
  - Avoid deeply nested state: deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.
- Sharing State Between Components
  - Controlled and uncontrolled components: It is common to call a component with some local state “uncontrolled”. In contrast, you might say a component is “controlled” when the important information in it is driven by props rather than its own local state.
  - Lifting state up:
    - Step 1: Remove state from the child components.
    - Step 2: Pass hardcoded data from the common parent.
    - Step 3: Add state to the common parent.
  - For each unique piece of state, you will choose the component that “owns” it. This principle is also known as having a “single source of truth”.
- Preserving and Resetting State
  - If you want to preserve the state between re-renders, the structure of your tree needs to “match up” from one render to another. If the structure is different, the state gets destroyed because React destroys state when it removes a component from the tree.
  - Always declare component functions at the top level, and don't nest their definitions. Because changing the state will render a different component in the same position, and React will reset all state below. This leads to bugs and performance problems.
  - Specifying a key tells React to use the key itself as part of the position, instead of their order within the parent.
- Extracting State Logic into a Reducer
  - To convert from useState to useReducer:
    - Dispatch actions from event handlers.
    - Write a reducer function that returns the next state for a given state and action.
    - Replace useState with useReducer.
  - Reducers require you to write a bit more code, but they help with debugging and testing.
  - Reducers must be pure.
  - Each action describes a single user interaction, even if that leads to multiple changes in the data.
- Passing Data Deeply with Context
  - Context lets a parent component provide data to the entire tree below it.
    - Create a context.
    - Use that context from the component that needs the data.
    - Provide that context from the component that specifies the data.
  - Context lets you write components that "adapt to their surroundings" and display themselves differently depending on where (or, in other words, in which context) they are being rendered.
  - In React, the only way to override some context coming from above is to wrap children into a context provider with a different value. Different React contexts don't override each other.
  - A few alternatives you should consider before using context:
    - Start by passing props.
    - Extract components and pass JSX as children to them.
  - Use cases for context: theming, current account, routing, managing state
- Scaling Up with Reducer and Context

## Escape Hatches

- Referencing Values with Refs
  - When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn't require a re-render, using a ref may be more efficient.
  - You can modify and update current's value outside of the rendering process. You shouldn't read (or write) the current value during rendering.
  - React provides a built-in version of useRef because it is common enough in practice. But you can think of it as a regular state variable without a setter.
  - Refs are useful when you work with external systems or browser APIs. If much of your application logic and data flow relies on refs, you might want to rethink your approach.
- Manipulating the DOM with Refs
  - The useRef Hook can be used for storing other things outside React, like timer IDs. Similarly to state, refs remain between renders. Refs are like state variables that don't trigger re-renders when you set them.
  - Hooks must only be called at the top-level of your component. You can't call useRef in a loop, in a condition, or inside a map() call.
  - A **ref callback** is to pass a function to the ref attribute. React will call your ref callback with the DOM node when it's time to set the ref, and with null when it's time to clear it.
  - Components that want to expose their DOM nodes have to opt in to that behavior. A component can specify that it “forwards” its ref to one of its children. In uncommon cases, you may want to restrict the exposed functionality. You can do that with useImperativeHandle.
  - React sets ref.current during the commit. Before updating the DOM, React sets the affected ref.current values to null. So you don't want to access refs during rendering.
  - flushSync will instruct React to update the DOM synchronously right after the code wrapped in in executes.
- Synchronizing with Effects

  - Unlike events, Effects are caused by rendering itself rather than a particular interaction.
  - Effects let you synchronize a component with some external system (third-party API, network, etc).
  - By default, Effects run after every render (including the initial one).
  - React will skip the Effect if all of its dependencies have the same values as during the last render.
  - You can't “choose” your dependencies. They are determined by the code inside the Effect.
  - Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
  - In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.
  - If your Effect breaks because of remounting, you need to implement a cleanup function.
  - React will call your cleanup function before the Effect runs next time, and during the unmount.
  - Why was the ref omitted from the dependency array? This is because the ref object has a stable identity: React guarantees you'll always get the same object from the same useRef call on every render. It never changes, so it will never by itself cause the Effect to re-run. Therefore, it does not matter whether you include it or not.
  - If your Effect fetches something, the cleanup function should either abort the fetch or ignore its result:

    ```js
    useEffect(() => {
      let ignore = false; // to avoid memory leaks

      async function startFetching() {
        const json = await fetchTodos(userId);
        if (!ignore) {
          setTodos(json);
        }
      }

      startFetching();

      return () => {
        ignore = true; // abort the fetch
      };
    }, [userId]);
    ```

  - In production, there will only be one request. If the second request in development is bothering you, the best approach is to use a solution that deduplicates requests and caches their responses between components
  - Significant downsides when writing fetch calls inside Effects:
    - Effects don't run on the server.
    - Fetching directly in Effects makes it easy to create “network waterfalls”.
    - Fetching directly in Effects usually means you don't preload or cache data.
    - It's not very ergonomic. (race conditions)
  - Recommended approaches on fetching data:
    - If you use a framework, use its built-in data fetching mechanism. (Next.js)
    - Otherwise, consider using or building a client-side cache. (useSWR)
  - Not an Effect: Initializing the application

    ```js
    if (typeof window !== "undefined") {
      // Check if we're running in the browser.
      checkAuthToken();
      loadDataFromLocalStorage();
    }
    function App() {
      // ...
    }
    ```

- You Might Not Need an Effect

  - There are two common cases in which you don't need Effects:
    - You don't need Effects to transform data for rendering.
    - You don't need Effects to handle user events.
  - Updating state based on props or state: when something **can be calculated** from the existing props or state, don't put it in state. Instead, calculate it during rendering.
  - Caching expensive calculations:

    - useMemo won't make the first render faster. It only helps you skip unnecessary work on updates.

      ```js
      const [newTodo, setNewTodo] = useState("");
      const visibleTodos = useMemo(
        () => getFilteredTodos(todos, filter), // When getFilteredTodos is expensive
        [todos, filter]
      );
      ```

    - How to tell if a calculation is expensive?

      ```js
      console.time("filter array");
      const visibleTodos = getFilteredTodos(todos, filter);
      console.timeEnd("filter array");
      ```

  - Resetting all state when a prop changes: pass a "key" attribute from the outer component to the inner one.
  - Adjusting some state when a prop changes: you can store information from previous renders or calculate everything during rendering.
  - Use Effects only for code that should run because the **component was displayed** to the user.
  - When you choose whether to put some logic into an event handler or an Effect, the main question you need to answer is what kind of logic it is from the user's perspective. If this logic is caused by a particular interaction, keep it in the event handler. If it's caused by the user seeing the component on the screen, keep it in the Effect.
  - In React, data flows from the parent components to their children. When child components update the state of their parent components in Effects, the data flow becomes very difficult to trace.
  - React has a purpose-built Hook for subscribing to an external store: useSyncExternalStore.

    ```js
    function subscribe(callback) {
      window.addEventListener("online", callback);
      window.addEventListener("offline", callback);
      return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
      };
    }

    function useOnlineStatus() {
      return useSyncExternalStore(
        subscribe,
        () => navigator.onLine,
        () => true
      );
    }

    function ChatIndicator() {
      const isOnline = useOnlineStatus();
      // ...
    }
    ```

  - While this component is visible, you want to keep "results" synchronized with data from the network for the current "page" and "query". This is why it's an Effect.

- Lifecycle of Reactive Effects

  - Every React component goes through the same lifecycle:
    - A component mounts when it's added to the screen.
    - A component updates when it receives new props or state, usually in response to an interaction.
    - A component unmounts when it's removed from the screen.
  - It's a good way to think about components, but not about Effects. Instead, try to think about each Effect independently from your component's lifecycle. An Effect describes how to synchronize an external system to the current props and state. As your code changes, synchronization will need to happen more or less often.
  - Always focus on a single start/stop cycle at a time. It shouldn't matter whether a component is mounting, updating, or unmounting. All you need to do is to describe how to start synchronization and how to stop it. If you do it well, your Effect will be resilient to being started and stopped as many times as it's needed.
  - Each Effect in your code should represent a separate and independent synchronization process. When splitting Effects, you should think whether the processes are same or separate, not whether the code looks cleaner.
  - Props, state, and other values declared inside the component are reactive because they're calculated during rendering and participate in the React data flow.
  - All values inside the component (including props, state, and variables in your component's body) are reactive. Any reactive value can change on a re-render, so you need to include reactive values as Effect's dependencies.
  - Effects are reactive blocks of code. They re-synchronize when the values you read inside of them change.

- Separating Events from Effects

  - Event handlers and Effects respond to changes differently:
    - Logic inside event handlers is not reactive. It will not run again unless the user performs the same interaction (e.g. a click) again. Event handlers can read reactive values without "reacting" to their changes.
    - Logic inside Effects is reactive. If your Effect reads a reactive value, you have to specify it as a dependency. Then, if a re-render causes that value to change, React will re-run your Effect's logic with the new value.
  - Choose between Event Handlers and Effects:
    - Event handlers run in response to specific interactions.
    - Effects run whenever synchronization is needed.
  - You can think of Effect Events as being very similar to event handlers. The main difference is that event handlers run in response to a user interactions, whereas Effect Events are triggered by you from Effects. Effect Events let you “break the chain” between the reactivity of Effects and code that should not be reactive.
  - eslint-disable-next-line react-hooks/exhaustive-deps
  - If you never suppress the linter, you will never see problems with stale values.
  - Effect Events are very limited in how you can use them:
    - Only call them from inside Effects.
    - Never pass them to other components or Hooks.
  - Effect Events are non-reactive “pieces” of your Effect code. They should be next to the Effect using them.

- Removing Effect Dependencies

  - Should this code move to an event handler?
  - Is your Effect doing several unrelated things?
  - Are you reading some state to calculate the next state? (use updater function instead)
    - Do you want to read a value without "reacting" to its changes? (useEffectEvent)
    - Wrapping an event handler from the props (useEffectEvent)
    - Separating reactive and non-reactive code (useEffectEvent)
  - Does some reactive value change unintentionally?
    - Object and function dependencies can make your Effect re-synchronize more often than you need.
    - Move static objects and functions outside your component
    - Move dynamic objects and functions inside your Effect
    - Read primitive values from objects
    - Calculate primitive values from functions

- Reusing Logic with Custom Hooks
  - You must follow these naming conventions:
    - React component names must start with a capital letter, like StatusBar and SaveButton.
    - Hook names must start with "use" followed by a capital letter, like useState or useOnlineStatus.
  - Should all functions called during rendering start with the use prefix? No. Functions that don't call Hooks don't need to be Hooks.
  - Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent from every other call to the same Hook. But when you need to share the state itself between multiple components, lift it up and pass it down instead.
  - If you're writing an Effect, it means that you need to "step outside React" to synchronize with some external system or to do something that React doesn't have a built-in API for. Wrapping it into a custom Hook lets you precisely communicate your intent and how the data flows through it. With time, most of your app's Effects will be in custom Hooks.
  - A good custom Hook makes the calling code more declarative by constraining what it does.
  - Why wrapping Effects in custom Hooks is often beneficial:
    - You make the data flow to and from your Effects very explicit.
    - You let your components focus on the intent rather than on the exact implementation of your Effects.
    - When React adds new features, you can remove those Effects without changing any of your components.
