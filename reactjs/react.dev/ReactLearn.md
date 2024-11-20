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
  - Start with the mockup 
  - Step 1: Break the UI into a component hierarchy
    * Programming: single responsibility principle
    * CSS: class selectors, granular than components
    * Design: organize the design's layers
    * Identified the components in the mockup, arrange them into a hierarchy.
  - Step 2: Build a static version in React
    * At this point, you should not be using any state values. 
    * The component at the top of the hierarchy will take your data model as a prop.
    * one-way data flow
  - Step 3: Find the minimal but complete representation of UI state
    * Think of state as the minimal set of changing data that your app needs to remember.
    * The most important principle for structuring state is to keep it DRY (Don’t Repeat Yourself).
    * Which of these are state?
      * Does it remain unchanged over time? If so, it isn’t state.
      * Is it passed in from a parent via props? If so, it isn’t state.
      * Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!
  - Step 4: Identify where your state should live
    * Often, you can put the state directly into their common parent.
    * You can also put the state into some component above their common parent.
    * If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common parent component.
  - Step 5: Add inverse data flow
    * You will need to support data flowing the other way: the components deep in the hierarchy need to update the state in the common parent component.

## Describing the UI
