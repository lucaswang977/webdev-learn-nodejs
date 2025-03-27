# React.dev Learn

https://react.dev/learn

- [React.dev Learn](#reactdev-learn)
  - [Quick Start](#quick-start)
  - [Thinking in React](#thinking-in-react)
    - [Step 1: Break the UI into a component hierarchy](#step-1-break-the-ui-into-a-component-hierarchy)
    - [Step 2: Build a static version in React](#step-2-build-a-static-version-in-react)
    - [Step 3: Find the minimal but complete representation of UI state](#step-3-find-the-minimal-but-complete-representation-of-ui-state)
    - [Step 4: Identify where your state should live](#step-4-identify-where-your-state-should-live)
    - [Step 5: Add inverse data flow](#step-5-add-inverse-data-flow)
  - [Describing the UI](#describing-the-ui)
    - [Your first component](#your-first-component)
    - [Importing and Exporting Components](#importing-and-exporting-components)
    - [Writing Markup with JSX](#writing-markup-with-jsx)
    - [JavaScript in JSX with Curly Braces](#javascript-in-jsx-with-curly-braces)
    - [Passing Props to a Component](#passing-props-to-a-component)
    - [Conditional Rendering](#conditional-rendering)
    - [Rendering Lists](#rendering-lists)
    - [Keeping Components Pure](#keeping-components-pure)
    - [Understanding Your UI as a Tree](#understanding-your-ui-as-a-tree)
  - [Adding Interactivity](#adding-interactivity)
    - [Responding to Events](#responding-to-events)
    - [State: A Component's Memory](#state-a-components-memory)
    - [Render and Commit](#render-and-commit)
    - [State as a Snapshot](#state-as-a-snapshot)
    - [Queueing a Series of State Updates](#queueing-a-series-of-state-updates)
    - [Updating Objects in State](#updating-objects-in-state)
    - [Updating Arrays in State](#updating-arrays-in-state)
  - [Managing State](#managing-state)
    - [Reacting to Input with State](#reacting-to-input-with-state)
    - [Choosing the State Structure](#choosing-the-state-structure)
    - [Sharing State Between Components](#sharing-state-between-components)
    - [Preserving and Resetting State](#preserving-and-resetting-state)
    - [Extracting State Logic into a Reducer](#extracting-state-logic-into-a-reducer)
    - [Passing Data Deeply with Context](#passing-data-deeply-with-context)
    - [Scaling Up with Reducer and Context](#scaling-up-with-reducer-and-context)
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

- Start with the mockup 

### Step 1: Break the UI into a component hierarchy
- Programming: single responsibility principle
- CSS: class selectors, granular than components
- Design: organize the design's layers
- Identified the components in the mockup, arrange them into a hierarchy.

### Step 2: Build a static version in React
- At this point, you should not be using any state values.
- The component at the top of the hierarchy will take your data model as a prop.
- one-way data flow

### Step 3: Find the minimal but complete representation of UI state
- Think of state as the minimal set of changing data that your app needs to remember.
- The most important principle for structuring state is to keep it DRY (Don't Repeat Yourself).
- Which of these are state?
  - Does it remain unchanged over time? If so, it isn't state.
  - Is it passed in from a parent via props? If so, it isn't state.
  - Can you compute it based on existing state or props in your component? If so, it definitely isn't state!

### Step 4: Identify where your state should live
- Often, you can put the state directly into their common parent.
- You can also put the state into some component above their common parent.
- If you can't find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.

### Step 5: Add inverse data flow
- You will need to support data flowing the other way: the components deep in the hierarchy need to update the state in the common parent component.

## Describing the UI
* React is a JavaScript library for rendering user interfaces (UI). 
* UI is built from small units like buttons, text, and images. 
* React lets you combine them into **reusable, nestable components**. 

### Your first component
* Components are one of the core concepts of React.
* Components: UI building blocks: React lets you combine your markup, CSS, and JavaScript into custom "components", reusable UI elements for your app.
* Defining a component
  * Step 1: Export the component
  * Step 2: Define the function
  * Step 3: Add markup
    ```Javascript
    // Without parentheses, any code on the lines after return will be ignored!
    return (
      <div>
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
      </div>
    );
    ```
* Using a component
  * Components are regular JavaScript functions, so you can keep multiple components in the same file.
    ```Javascript
    function Profile() {
      return (
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt="Katherine Johnson"
        />
      );
    }
    export default function Gallery() {
      return (
        <section>
          <h1>Amazing scientists</h1>
          <Profile />
          <Profile />
          <Profile />
        </section>
      );
    }
    ```
  * When a child component needs some data from a parent, pass it by props instead of nesting definitions.
  * Components can render other components, but you must never nest their definitions.
    ```Javascript
    export default function Gallery() {
      // ...
    }

    // ✅ Declare components at the top level
    function Profile() {
      // ...
    }
    ```
  * Your React application begins at a "root" component. Usually, it is created automatically when you start a new project. 

### Importing and Exporting Components
* The magic of components lies in their reusability: you can create components that are composed of other components. 
* But as you nest more and more components, it often makes sense to start splitting them into different files. 
* This lets you keep your files easy to scan and reuse components in more places.
* The root component file
  * The root component is the first component that React renders. It is usually created automatically when you start a new project.
  * The root component is usually called App.js or App.jsx.
* Exporting and importing a component
  ```Javascript
  import Gallery from './Gallery.js';

  export default function App() {
    return (
      <Gallery />
    );
  }
  ```
  * There are two primary ways to export values with JavaScript: `default exports` and `named exports`.

    | Syntax  | Export statement                      | Import statement                        |
    | ------- | ------------------------------------- | --------------------------------------- |
    | Default | `export default function Button() {}` | `import Button from './Button.js';`     |
    | Named   | `export function Button() {}`         | `import { Button } from './Button.js';` |
* Exporting and importing multiple components from the same file
  * A file can only have one default export, but it can have numerous named exports!
  * To reduce the potential confusion between default and named exports, some teams choose to only stick to one style (default or named), or avoid mixing them in a single file.

    ```Javascript
    import Gallery from './Gallery.js';
    import { Profile } from './Gallery.js';

    export default function App() {
      return (
        <Profile />
      );
    }
    ```
### Writing Markup with JSX
* JSX: Putting markup into JavaScript
* The Rules of JSX
  * Return a single root element
  * Close all the tags
  * camelCase all most of the things!
    * For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.
* This empty tag \<>\</> is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
* JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array.

### JavaScript in JSX with Curly Braces
* JSX is a special way of writing JavaScript. That means it’s possible to use JavaScript inside it—with curly braces { }.
  ```Javascript
  const today = new Date();

  function formatDate(date) {
    return new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' }
    ).format(date);
  }

  export default function TodoList() {
    return (
      <h1>To Do List for {formatDate(today)}</h1>
    );
  }
  ```
* You can only use curly braces in two ways inside JSX:
  * As text directly inside a JSX tag: \<h1>{name}'s To Do List\</h1> works, but \<{tag}>Gregorio Y. Zara's To Do List\</{tag}> will not.
  * As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".
* Using "double curlies": CSS and other objects in JSX (it’s nothing more than an object inside the JSX curlies)
  ```Javascript
  export default function TodoList() {
    return (
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    );
  }
  ```
* Notice: Inline style properties are written in camelCase. 
  * For example, HTML \<ul style="background-color: black"> would be written as \<ul style={{ backgroundColor: 'black' }}>  in your component.

### Passing Props to a Component
* Props are the information that you pass to a JSX tag.
* Step 1: Pass props to the child component
  ```Javascript
  export default function Profile() {
    return (
      <Avatar
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
      />
    );
  }
  ```
* Step 2: Read props inside the child component
  ```Javascript
  // destructuring from "props"
  function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  ```
* Specifying a default value for a prop
  ```Javascript
  // The default value is only used if the size prop is missing or if you pass size={undefined}.
  function Avatar({ person, size = 100 }) {
    // ...
  }
  ```
* Forwarding props with the JSX spread syntax
  ```Javascript
  function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props} />
      </div>
    );
  }
  ```
  * Use spread syntax with restraint. If you're using it in every other component, something is wrong. Often, it indicates that you should split your components and pass children as JSX.
* Passing JSX as children
  * When you nest content inside a JSX tag, the parent component will receive that content in a prop called children.
  * You can think of a component with a children prop as having a "hole" that can be "filled in" by its parent components with arbitrary JSX.
  ```Javascript
  function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

  export default function Profile() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }
  ```
* How props change over time
  * A component may receive different props over time. Props are not always static.
  * However, props are immutable—a term from computer science meaning "unchangeable". 
  * Don’t try to "change props". Instead, think of props as a snapshot of the data at a given moment in time. If you want to change the data, you need to "ask" its parent component to pass it different props.

### Conditional Rendering
* Your components will often need to display different things depending on different conditions.
* Conditionally returning JSX 
  ```Javascript
  function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">{name} ✅</li>;
    }
    return <li className="item">{name}</li>;
  }

  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  ```
* Conditionally returning nothing with null
  ```Javascript
  function Item({ name, isPacked }) {
    if (isPacked) {
      return null;
    }
    return <li className="item">{name}</li>;
  }

  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  ```
* Conditional (ternary) operator (? :) 
  ```Javascript
  function Item({ name, isPacked }) {
    return (
      <li className="item">
        {isPacked ? (
          <del>
            {name + ' ✅'}
          </del>
        ) : (
          name
        )}
      </li>
    );
  }

  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  ```
  * If your components get messy with too much nested conditional markup, consider extracting child components to clean things up.
* Logical AND operator (&&) 
  * A JavaScript && expression returns the value of its right side (in our case, the checkmark) if the left side (our condition) is true. But if the condition is false, the whole expression becomes false. 
  * React considers false as a "hole" in the JSX tree, just like null or undefined, and doesn’t render anything in its place.
  ```Javascript
  function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked && '✅'}
      </li>
    );
  }
  ```
* Conditionally assigning JSX to a variable
  ```Javascript
  function Item({ name, isPacked }) {
    let itemContent = name;
    if (isPacked) {
      itemContent = (
        <del>
          {name + " ✅"}
        </del>
      );
    }
    return (
      <li className="item">
        {itemContent}
      </li>
    );
  }
  ```

### Rendering Lists
* Rendering data from arrays 
* Keeping list items in order with key
  ```Javascript
  export default function List() {
    const listItems = people.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  ```
* Displaying several DOM nodes for each list item
  ```Javascript
  import { Fragment } from 'react';

  // ...

  const listItems = people.map(person =>
    <Fragment key={person.id}>
      <h1>{person.name}</h1>
      <p>{person.bio}</p>
    </Fragment>
  );
  ```
* Rules of keys
  * Keys must be unique among siblings. However, it's okay to use the same keys for JSX nodes in different arrays.
  * Keys must not change or that defeats their purpose! Don't generate them while rendering.
* Where to get your key
  * Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
  * Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

### Keeping Components Pure
- A pure function:
  - Minds its own business. It does not change any objects or variables that existed before it was called.
  - Same inputs, same output. Given the same inputs, a pure function should always return the same result.
- React assumes that every component you write is a `pure function`. 
- Side Effects: (un)intended consequences
  ```Javascript
  // passing guest as a prop instead modifying it inside of the component
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }

  export default function TeaSet() {
    return (
      <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </>
    );
  }
  ```
* Detecting impure calculations with StrictMode 
  * React offers a "Strict Mode" in which it calls each component's function twice during development. By calling the component functions twice, Strict Mode helps find components that break these rules.
  * Strict Mode has no effect in production, so it won’t slow down the app for your users. To opt into Strict Mode, you can wrap your root component into \<React.StrictMode>. Some frameworks do this by default.
* Local mutation
  * It’s completely fine to change variables and objects that you’ve just created while rendering. 
  * It’s fine because you’ve created them during the same render.
  ```Javascript
  function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }

  export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
  }
  ```
* Where you can cause side effects
  * These changes—updating the screen, starting an animation, changing the data—are called side effects. They're things that happen "on the side", not during rendering.
  * In React, side effects usually belong inside **event handlers**. Even though event handlers are defined inside your component, they don't run during rendering! So event handlers don't need to be pure.
  * If you've exhausted all other options and can't find the right event handler for your side effect, you can still attach it to your returned JSX with a `useEffect` call in your component.
  * This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.
* Why does React care about purity?
  - Your components could run in a different environment. For example, React Native runs on mobile devices, and React Server runs on the server.
  - You can improve performance by skipping rendering components whose inputs have not changed.
  - If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render.

### Understanding Your UI as a Tree
* React uses trees to model the relationships between components and modules. 
* The Render Tree
  * A React render tree is a representation of the parent and child relationship between components.
  * Components can render other components, but you must never nest their definitions. 
  * When a child component needs some data from a parent, pass it by props instead of nesting definitions.
  * Render trees represent the nested relationship between React components across a single render. 
* The Module Dependency Tree
  * Another relationship in a React app that can be modeled with a tree are an app's module dependencies. 
  * Each node in a module dependency tree is a module and each branch represents an import statement in that module.
  * Dependency trees are useful to determine what modules are necessary to run your React app. 

## Adding Interactivity
* In React, data that changes over time is called state. You can add state to any component, and update it as needed.

### Responding to Events
* React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
* Adding event handlers
  ```Javascript
  export default function Button() {
    function handleClick() {
      alert('You clicked me!');
    }

    return (
      // Functions passed to event handlers must be passed, not called.
      <button onClick={handleClick}>
        Click me
      </button>
    );
  }
  ```
* Reading props in event handlers
  ```Javascript
  function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }

  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="Playing!">
          Play Movie
        </AlertButton>
        <AlertButton message="Uploading!">
          Upload Image
        </AlertButton>
      </div>
    );
  }
  ```
* Passing event handlers as props
  * Often you’ll want the parent component to specify a child’s event handler.
  ```Javascript
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }

  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }

    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }

  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }

  export default function Toolbar() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }
  ```
* Naming event handler props
  * Built-in components like \<button> and \<div> only support browser event names like onClick. However, when you're building your own components, you can name their event handler props any way that you like.
  * By convention, event handler props should start with on, followed by a capital letter.
  ```Javascript
  function Button({ onSmash, children }) {
    return (
      <button onClick={onSmash}>
        {children}
      </button>
    );
  }

  export default function App() {
    return (
      <div>
        <Button onSmash={() => alert('Playing!')}>
          Play Movie
        </Button>
        <Button onSmash={() => alert('Uploading!')}>
          Upload Image
        </Button>
      </div>
    );
  }
  ```
* Event propagation
  * Events propagate upwards. Call e.stopPropagation() on the first argument to prevent that.
    ```Javascript
    function Button({ onClick, children }) {
      return (
        <button onClick={e => {
          e.stopPropagation();
          onClick();
        }}>
          {children}
        </button>
      );
    }

    export default function Toolbar() {
      return (
        <div className="Toolbar" onClick={() => {
          alert('You clicked on the toolbar!');
        }}>
          <Button onClick={() => alert('Playing!')}>
            Play Movie
          </Button>
          <Button onClick={() => alert('Uploading!')}>
            Upload Image
          </Button>
        </div>
      );
    }
    ```
  * In rare cases, you might need to catch all events on child elements, even if they stopped propagation.
    ```Javascript
    <div onClickCapture={() => { /* this runs first */ }}>
      <button onClick={e => e.stopPropagation()} />
      <button onClick={e => e.stopPropagation()} />
    </div>
    ```
  * Explicitly calling an event handler prop from a child handler is a good alternative to propagation.
    ```Javascript
    function Button({ onClick, children }) {
      return (
        <button onClick={e => {
          e.stopPropagation();
          onClick();
        }}>
          {children}
        </button>
      );
    }
    ```
  * Events may have unwanted default browser behavior. Call e.preventDefault() to prevent that.
    ```Javascript
    export default function Signup() {
      return (
        <form onSubmit={e => {
          e.preventDefault();
          alert('Submitting!');
        }}>
          <input />
          <button>Send</button>
        </form>
      );
    }
    ```
* Unlike rendering functions, event handlers don't need to be pure, so it's a great place to change something outside of the component. Event handlers are the best place for side effects.

### State: A Component's Memory
* When a regular variable isn't enough
  * Local variables don't persist between renders. When React renders this component a second time, it renders it from scratch—it doesn't consider any changes to the local variables.
  * Changes to local variables won't trigger renders. React doesn't realize it needs to render the component again with the new data.
* The useState Hook provides those two things:
  * A state variable to retain the data between renders.
  * A state setter function to update the variable and trigger React to render the component again.
* Adding a state variable
  ```Javascript
  import { useState } from 'react';
  import { sculptureList } from './data.js';

  export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
      setIndex(index + 1);
    }

    let sculpture = sculptureList[index];
    return (
      <>
        <button onClick={handleClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
        <p>
          {sculpture.description}
        </p>
      </>
    );
  }
  ```
* Anatomy of useState 
  * Hooks are special functions that are only available while React is rendering. They let you "hook into" different React features.
  * Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.
  * The only argument to useState is the initial value of your state variable.
  * Every time your component renders, useState gives you an array containing two values:
    1. The current value of the state variable.
    2. A function to update the state variable.
* Giving a component multiple state variables
  * It is a good idea to have multiple state variables if their state is unrelated. But if you find that you often change two state variables together, it might be easier to combine them into one.
* State is isolated and private
  * State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state!
  * Unlike props, state is fully private to the component declaring it. The parent component can't change it.
  * This lets you add state to any component or remove it without impacting the rest of the components.

### Render and Commit
* Step 1: Trigger a render
  * It's the component's initial render. (root.render())
  * The component's (or one of its ancestors') state has been updated. (Updating your component's state automatically queues a render.)
    ```Javascript
    import Image from './Image.js';
    import { createRoot } from 'react-dom/client';

    const root = createRoot(document.getElementById('root'))
    root.render(<Image />);
    ```
* Step 2: React renders your components
  * "Rendering" is React calling your components. On initial render, React will call the root component. For subsequent renders, React will call the function component whose state update triggered the render. This process is recursive.
  * Rendering must always be a pure calculation: Same inputs, same output. It minds its own business.
  * When developing in **Strict Mode**, React calls each component's function twice, which can help surface mistakes caused by impure functions.
* Step 3: React commits changes to the DOM
  * For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
  * React only changes the DOM nodes if there's a difference between renders.
    ```Javascript
    export default function Clock({ time }) {
      return (
        <>
          <h1>{time}</h1>
          <input />
        </>
      );
    }
    ```

### State as a Snapshot
* State variables might look like regular JavaScript variables that you can read and write to. 
* However, state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
* Setting state triggers renders
  ```Javascript
  import { useState } from 'react';

  export default function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');
    if (isSent) {
      return <h1>Your message is on its way!</h1>
    }
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    );
  }

  function sendMessage(message) {
    // ...
  }
  ```
* Rendering takes a snapshot in time
  * When React re-renders a component: 
    * React calls your function again. 
    * Your function returns a new JSX snapshot. 
    * React then updates the screen to match the snapshot your function returned.
  * When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!
  * Setting state only changes it for the next render.
* State over time
  * A state variable's value never changes within a render, even if its event handler’s code is asynchronous.
  * React keeps the state values "fixed" within one render's event handlers.
    ```Javascript
    import { useState } from 'react';

    export default function Form() {
      const [to, setTo] = useState('Alice');
      const [message, setMessage] = useState('Hello');

      function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
          alert(`You said ${message} to ${to}`);
        }, 5000);
      }

      return (
        <form onSubmit={handleSubmit}>
          <label>
            To:{' '}
            <select
              value={to}
              onChange={e => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </label>
          <textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      );
    }
    ```

### Queueing a Series of State Updates
* Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render.
* React batches state updates
  * React waits until all code in the event handlers has run before processing your state updates.
  * React does not batch across multiple intentional events like clicks — each click is handled separately. 
    ```Javascript
    import { useState } from 'react';

    export default function Counter() {
      const [number, setNumber] = useState(0);

      return (
        <>
          <h1>{number}</h1>
          <button onClick={() => {
            setNumber(number + 1); // (0 + 1)
            setNumber(number + 1); // (0 + 1)
            setNumber(number + 1); // (0 + 1)
          }}>+3</button>
        </>
      )
    }
    ```
* Updating the same state multiple times before the next render
  ```Javascript
  import { useState } from 'react';

  export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(n => n + 1);  // updater function
          setNumber(n => n + 1);
          setNumber(n => n + 1);
        }}>+3</button>
      </>
    )
  }
  ```
  * Updater functions must be pure and only return the result. Don’t try to set state from inside of them or run other side effects.
### Updating Objects in State
* State can hold any kind of JavaScript value, including objects. But you shouldn't change objects that you hold in the React state directly. 
* Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.
* What’s a mutation? 
  ```Javascript
  const [position, setPosition] = useState({ x: 0, y: 0 });
  ```
  * Technically, it is possible to change the contents of the object itself. This is called a mutation.
  * However, although objects in React state are technically mutable, you should treat them as if they were immutable.
  * Instead of mutating them, you should always replace them.
* Treat state as read-only 
  ```Javascript
  import { useState } from 'react';

  export default function MovingDot() {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    return (
      <div
        onPointerMove={e => {
          // Replace position with this new object
          // And render this component again
          setPosition({
            x: e.clientX,
            y: e.clientY
          });
        }}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    );
  }
  ```
* Copying objects with the spread syntax
  * Note that the ... spread syntax is "shallow" — it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you'll have to use it more than once.

  ```Javascript
  setPerson({
    ...person, // Copy the old fields
    firstName: e.target.value // But override this one
  });
  ```

* Updating a nested object
  ```Javascript
  setPerson({
    ...person, // Copy other fields
    artwork: { // but replace the artwork
      ...person.artwork, // with the same one
      city: 'New Delhi' // but in New Delhi!
    }
  });
  ```
* Write concise update logic with Immer
  ```Javascript
  import { useImmer } from 'use-immer';

  // ...
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  // ...
  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }
  ```

### Updating Arrays in State
* Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state. 
* Updating arrays without mutation
  * avoid (mutates the array): push, unshift, pop, shift, splice, arr[i] = ... assignment, reverse, sort
  * prefer (returns a new array): concat, [...arr] spread syntax, filter, slice, map, copy the array first
* Adding to an array (spread syntax)
  ```Javascript
  setArtists([
    { id: nextId++, name: name },
    ...artists // Put old items at the end
  ]);
  ```
* Removing from an array (use filter)
  ```Javascript
  setArtists(
    artists.filter(a => a.id !== artist.id)
  );
  ```
* Transforming an array (use map)
  ```Javascript
  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // No change
        return shape;
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // Re-render with the new array
    setShapes(nextShapes);
  }
  ```
* Replacing items in an array (use map)
  ```Javascript
  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }
  ```
* Inserting into an array (use slice)
  ```Javascript
  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }
  ```
* Making other changes to an array
  * You can copy the array first, and then make changes to it.
    ```Javascript
    function handleClick() {
      const nextList = [...list];
      nextList.reverse();
      setList(nextList);
    }
    ```
* Updating objects inside arrays
  * When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level.
    ```Javascript
    function handleToggleYourList(artworkId, nextSeen) {
      setYourList(yourList.map(artwork => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen };
        } else {
          // No changes
          return artwork;
        }
      }));
    }
    ```
* Write concise update logic with Immer
  * Generally, you shouldn’t need to update state more than a couple of levels deep. If your state objects are very deep, you might want to restructure them differently so that they are flat.
  ```Javascript
  import { useImmer } from 'use-immer';

  const [yourList, updateYourList] = useImmer(
    initialList
  );
  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      // you’re not mutating the original state, but you’re mutating a special draft object provided by Immer.
      artwork.seen = nextSeen;
    });
  }
  ```

## Managing State
* As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. 
* Redundant or duplicate state is a common source of bugs.

### Reacting to Input with State
* How declarative UI compares to imperative
  ```Javascript
  // Imperative: You are responsible for keeping the DOM in sync with the application state.
  document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const counter = document.createElement('h1');
    // You manually create and update DOM elements
    counter.textContent = `Count: ${count}`;
    document.body.appendChild(counter);

    const button = document.createElement('button');
    button.textContent = 'Increment';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
      count += 1;
      // You explicitly define how the UI should change when the button is clicked.
      counter.textContent = `Count: ${count}`;
    });
  });


  // Declarative: you don't manually manipulate the DOM; React handles it for you.
  import { useState } from 'react';

  export default function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        // You describe the desired UI state
        <h1>Count: {count}</h1>
        // React automatically updates the DOM when the state (count) changes.
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```
* Thinking about UI declaratively:
  * Identify your component's different visual states.
    * If a component has a lot of visual states, it can be convenient to show them all on one page.
  * Determine what triggers those state changes.
  * Represent the state in memory using useState.
  * Remove any non-essential state variables.
    * our goal is to prevent the cases where the state in memory doesn't represent any valid UI that you'd want a user to see.
    * Here are some questions you can ask about your state variables:
      - Does this state cause a paradox?
      - Is the same information available in another state variable already?
      - Can you get the same information from the inverse of another state variable?
  * Connect the event handlers to set the state.
### Choosing the State Structure
* Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.
* Principles for structuring state
  * **Group related state**: if some two state variables always change together, it might be a good idea to unify them into a single state variable.
  ```Javascript
  // from this
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // to this
  const [position, setPosition] = useState({ x: 0, y: 0 });
  ```

  * **Avoid contradictions in state**: when the state is structured in a way that several pieces of state may contradict and "disagree" with each other, you leave room for mistakes.
  ```Javascript
  // from this (isSending and isSent should never be true at the same time)
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // to this (one status state variable)
  const [status, setStatus] = useState('typing');
  const isSending = status === 'sending';
  const isSent = status === 'sent';
  ```
  * **Avoid redundant state**: If you can calculate some information from the component's props or its existing state variables during rendering, you should not put that information into that component's state.
  ```Javascript
  // from this
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // to this
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const fullName = firstName + ' ' + lastName;
  ```

  * **Avoid duplication in state**: when the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
  ```Javascript
  // from this (the contents of the selectedItem is the same object as one of the items inside the items list)
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(
    items[0]
  );

  // to this
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  ```

  * **Avoid deeply nested state**: deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

  * **Don’t mirror props in state**: if you have a prop that is passed to a component, and you also have a state variable that is initialized with the same value, you should remove the state variable. This is because the prop will always be the source of truth for that value.
  ```Javascript
  // from this
  function Message({ messageColor }) {
    const [color, setColor] = useState(messageColor);
    // ...
  }

  // to this
  function Message({ messageColor }) {
    const color = messageColor;
    // ...
  }
  ```
* Ideally, you would also remove the deleted items (and their children!) from the "table" object to improve memory usage.
  ```Javascript
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  function handleComplete(parentId, childId) {
    updatePlan(draft => {
      // Remove from the parent place's child IDs.
      const parent = draft[parentId];
      parent.childIds = parent.childIds
        .filter(id => id !== childId);

      // Forget this place and all its subtree.
      deleteAllChildren(childId);
      function deleteAllChildren(id) {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      }
    });
  }
  ```

### Sharing State Between Components
* Lifting state up: Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 
* Lifting state up:
  * Step 1: Remove state from the child components.
  * Step 2: Pass hardcoded data from the common parent.
  * Step 3: Add state to the common parent.
* Controlled and uncontrolled components: 
  * It is common to call a component with some local state "uncontrolled". For example, the original Panel component with an isActive state variable is uncontrolled because its parent cannot influence whether the panel is active or not.
  * In contrast, you might say a component is "controlled" when the important information in it is driven by props rather than its own local state. This lets the parent component fully specify its behavior.
* A single source of truth for each state
  * For each unique piece of state, you will choose the component that "owns" it. This principle is also known as having a "single source of truth".
  * Instead of duplicating shared state between components, lift it up to their common shared parent, and pass it down to the children that need it.


### Preserving and Resetting State
* State is tied to a position in the render tree
  * React preserves a component’s state for as long as it’s being rendered at its position in the UI tree.
  * If it gets removed, or a different component gets rendered at the same position, React discards its state.
* Same component at the same position preserves state
  ```Javascript
  import { useState } from 'react';

  export default function App() {
    const [isFancy, setIsFancy] = useState(false);
    return (
      <div>
        {isFancy ? (
          <Counter isFancy={true} /> 
        ) : (
          <Counter isFancy={false} /> 
        )}
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
  }

  function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
    if (isFancy) {
      className += ' fancy';
    }

    return (
      <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}>
          Add one
        </button>
      </div>
    );
  }
  ```
  * It's the same component at the same position, so from React's perspective, it's the same counter.
  * It's the position in the UI tree—not in the JSX markup—that matters to React! 
* Different components at the same position reset state
  * When you render a different component in the same position, it resets the state of its entire subtree.
  * As a rule of thumb, if you want to preserve the state between re-renders, the structure of your tree needs to "match up" from one render to another.
  * This is why you should not nest component function definitions. Because every time the parent component's state is changed, a different nested component will be rendered at the same position, so React resets all state below.
* Resetting state at the same position  
  * If you want to reset the state of a component which stays at the same position, there are two ways to do it: 
    * Render components in different positions
    * Give each component an explicit identity with key
      ```Javascript
      import { useState } from 'react';

      export default function Scoreboard() {
        const [isPlayerA, setIsPlayerA] = useState(true);
        return (
          <div>
            {isPlayerA ? (
              // using key for resetting the state
              <Counter key="Taylor" person="Taylor" />
            ) : (
              <Counter key="Sarah" person="Sarah" />
            )}
            <button onClick={() => {
              setIsPlayerA(!isPlayerA);
            }}>
              Next player!
            </button>
          </div>
        );
      }

      function Counter({ person }) {
        const [score, setScore] = useState(0);
        const [hover, setHover] = useState(false);

        let className = 'counter';
        if (hover) {
          className += ' hover';
        }

        return (
          <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
          >
            <h1>{person}'s score: {score}</h1>
            <button onClick={() => setScore(score + 1)}>
              Add one
            </button>
          </div>
        );
      }
      ```
* Resetting a form with a key 
  ```Javascript
  import { useState } from 'react';
  import Chat from './Chat.js';
  import ContactList from './ContactList.js';

  export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    return (
      <div>
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={contact => setTo(contact)}
        />
        <!-- key for resetting the form -->
        <Chat key={to.id} contact={to} />
      </div>
    )
  }

  const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];
  ```

* Preserving state for removed components
  * There are a few ways to keep the state “alive” for a component that’s no longer visible
    * You could render all chats instead of just the current one, but hide all the others with CSS.
    * You could lift the state up and hold the pending message for each recipient in the parent component.
    * You might also use a different source in addition to React state. For example, reading from the localStorage, and save the drafts there too

### Extracting State Logic into a Reducer
* As your components grow in complexity, it can get harder to see at a glance all the different ways in which a component's state gets updated.
* To convert from useState to useReducer:
  * Step 1: Move from setting state to dispatching actions 
    ```Javascript
    function handleDeleteTask(taskId) {
      dispatch(
        // "action" object:
        {
          type: 'deleted',
          id: taskId,
        }
      );
    }
    ```
  * Step 2: Write a reducer function that returns the next state for a given state and action.
    ```Javascript
    function tasksReducer(tasks, action) {
      switch (action.type) {
        case 'deleted':
          return tasks.filter(task => task.id !== action.id);
        default:
          return tasks;
      }
    }
    ```
  * Step 3: Use the reducer from your component
    ```Javascript
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    ```
* We recommend using a reducer if you often encounter bugs due to incorrect state updates in some component, and want to introduce more structure to its code. 
* You don't have to use reducers for everything: feel free to mix and match!
* Writing reducers well
  * Reducers must be pure, so they shouldn't mutate state. Similar to state updater functions, reducers run during rendering!
  * Each action describes a single user interaction, even if that leads to multiple changes in the data.
* Writing concise reducers with Immer
  ```Javascript
  import { useImmerReducer } from 'use-immer';
  import AddTask from './AddTask.js';
  import TaskList from './TaskList.js';

  function tasksReducer(draft, action) {
    switch (action.type) {
      case 'added': {
        draft.push({
          id: action.id,
          text: action.text,
          done: false,
        });
        break;
      }
      case 'changed': {
        const index = draft.findIndex((t) => t.id === action.task.id);
        draft[index] = action.task;
        break;
      }
      case 'deleted': {
        return draft.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }

  export default function TaskApp() {
    const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
      dispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
    }

    function handleChangeTask(task) {
      dispatch({
        type: 'changed',
        task: task,
      });
    }

    function handleDeleteTask(taskId) {
      dispatch({
        type: 'deleted',
        id: taskId,
      });
    }

    return (
      <>
        <h1>Prague itinerary</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </>
    );
  }

  let nextId = 3;
  const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];
  ```

### Passing Data Deeply with Context
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
### Scaling Up with Reducer and Context

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
