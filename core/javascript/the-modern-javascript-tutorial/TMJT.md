# The Modern JavaScript Tutorial Learning Notes

- [The Modern JavaScript Tutorial Learning Notes](#the-modern-javascript-tutorial-learning-notes)
  - [Part 1: The JavaScript language](#part-1-the-javascript-language)
    - [JavaScript Fundamentals](#javascript-fundamentals)
    - [Code quality](#code-quality)
    - [Objects: the basics](#objects-the-basics)
    - [Data types](#data-types)
    - [Advanced working with functions](#advanced-working-with-functions)
    - [Object properties configuration](#object-properties-configuration)
    - [Prototypes, inheritance](#prototypes-inheritance)
    - [Classes](#classes)
    - [Error handling](#error-handling)
    - [Promises, async/await](#promises-asyncawait)
    - [Generators, advanced iteration](#generators-advanced-iteration)
    - [Modules](#modules)
    - [Miscellaneous](#miscellaneous)
  - [Part 2: Browser: Document, Events, Interfaces](#part-2-browser-document-events-interfaces)
    - [Document](#document)
    - [Introduction to Events](#introduction-to-events)
    - [UI Events](#ui-events)
    - [Forms, controls](#forms-controls)
    - [Document and resource loading](#document-and-resource-loading)
    - [Miscellaneous](#miscellaneous-1)
  - [Part 3: Additional articles](#part-3-additional-articles)
    - [Frames and windows](#frames-and-windows)
    - [Binary data, files](#binary-data-files)
    - [Network requests](#network-requests)
    - [Storing data in the browser](#storing-data-in-the-browser)
    - [Animation](#animation)
    - [Web components](#web-components)
    - [Regular expressions](#regular-expressions)

https://javascript.info/

## Part 1: The JavaScript language

### JavaScript Fundamentals
* Hello, world!
* Code structure
* The modern mode, "use strict"
* Variables
* Data types
* Interaction: alert, prompt, confirm
* Type Conversions
* Basic operators, maths
* Comparisons
* Conditional branching: if, '?'
* Logical operators
* Nullish coalescing operator '??'
* Loops: while and for
* The "switch" statement
* Functions
* Function expressions
* Arrow functions, the basics
* JavaScript specials

### Code quality
* Debugging in the browser
* Coding Style
* Comments
* Ninja code
* Automated testing with Mocha

### Objects: the basics
* Objects
* Object references and copying
* Garbage collection
* Object methods, "this"
* Constructor, operator "new"
* Optional chaining '?.'
* Symbol type
* Object to primitive conversion

### Data types
* Methods of primitives
* Numbers
* Strings
* Arrays
* Array methods
* Iterables
* Map and Set
* WeakMap and WeakSet
* Object.keys, values, entries
* Destructuring assignment
* Date and time
* JSON methods, toJSON

### Advanced working with functions
* Recursion and stack
* Rest parameters and spread syntax
* Variable scope, closure
* The old "var"
* Global object
* Function object, NFE
* The "new Function" syntax
* Scheduling: setTimeout and setInterval
* Decorators and forwarding, call/apply
* Function binding
* Arrow functions revisited

### Object properties configuration
* Property flags and descriptors
* Property getters and setters

### Prototypes, inheritance
* Prototypal inheritance
* F.prototype
* Native prototypes
* Prototype methods, objects without __proto__

### Classes
* Class basic syntax
* Class inheritance
* Static properties and methods
* Private and protected properties and methods
* Extending built-in classes
* Class checking: "instanceof"
* Mixins

### Error handling
* Error handling, "try...catch"
* Custom errors, extending Error

### Promises, async/await
* Introduction: callbacks
* Promise
* Promises chaining
* Error handling with promises
* Promise API
* Promisification
* Microtasks
* Async/await

### Generators, advanced iteration
* Generators
* Async iteration and generators

### Modules
* Modules, introduction
* Export and Import
* Dynamic imports

### Miscellaneous
* Proxy and Reflect
  ```Javascript
  let user = {
    name: "John",
  };

  user = new Proxy(user, {
    get(target, prop, receiver) {
      alert(`GET ${prop}`);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, val, receiver) {
      alert(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver);
    }
  });

  let name = user.name; // shows "GET name"
  user.name = "Pete"; // shows "SET name=Pete"
  ```

* Eval: run a code string
* Currying
  ```Javascript
  function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }

  function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }

  log = curry(log);

  log(new Date(), "DEBUG", "some debug"); // log(a, b, c)
  log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

  // logNow will be the partial of log with fixed first argument
  let logNow = log(new Date());
  // use it
  logNow("INFO", "message"); // [HH:mm] INFO message

  let debugNow = logNow("DEBUG");
  debugNow("message"); // [HH:mm] DEBUG message
  ```
* Reference Type
* BigInt
* Unicode, String internals
* WeakRef and FinalizationRegistry

## Part 2: Browser: Document, Events, Interfaces

### Document
* Browser environment, specs
* DOM tree
* Walking the DOM
* Searching: getElement*, querySelector*
* Node properties: type, tag and contents
* Attributes and properties
* Modifying the document
* Styles and classes
* Element size and scrolling
* Window sizes and scrolling
* Coordinates

### Introduction to Events
* Introduction to browser events
* Bubbling and capturing
* Event delegation
* Browser default actions
* Dispatching custom events

### UI Events
* Mouse events
* Moving the mouse: mouseover/out, mouseenter/leave
* Drag'n'Drop with mouse events
* Pointer events
* Keyboard: keydown and keyup
* Scrolling

### Forms, controls
* Form properties and methods
* Focusing: focus/blur
* Events: change, input, cut, copy, paste
* Forms: event and method submit

### Document and resource loading
* Page: DOMContentLoaded, load, beforeunload, unload
* Scripts: async, defer
* Resource loading: onload and onerror

### Miscellaneous
* Mutation observer
* Selection and Range
* Event loop: microtasks and macrotasks

## Part 3: Additional articles

### Frames and windows
* Popups and window methods
* Cross-window communication
* The clickjacking attack

### Binary data, files
* ArrayBuffer, binary arrays
* TextDecoder and TextEncoder
* Blob
* File and FileReader

### Network requests
* Fetch
* FormData
* Fetch: Download progress
* Fetch: Abort
* Fetch: Cross-Origin Requests
* Fetch API
* URL objects
* XMLHttpRequest
* Resumable file upload
* Long polling
* WebSocket
* Server Sent Events

### Storing data in the browser
* Cookies, document.cookie
* LocalStorage, sessionStorage
* IndexedDB

### Animation
* Bezier curve
* CSS-animations
* JavaScript animations

### Web components
* From the orbital height
* Custom elements
* Shadow DOM
* Template element
* Shadow DOM slots, composition
* Shadow DOM styling
* Shadow DOM and events

### Regular expressions
* Patterns and flags
* Character classes
* Unicode: flag "u" and class \p{...}
* Anchors: string start ^ and end $
* Multiline mode of anchors ^ $, flag "m"
* Word boundary: \b
* Escaping, special characters
* Sets and ranges [...]
* Quantifiers +, *, ? and {n}
* Greedy and lazy quantifiers
* Capturing groups
* Backreferences in pattern: \N and \k<name>
* Alternation (OR) |
* Lookahead and lookbehind
* Catastrophic backtracking
* Sticky flag "y", searching at position
* Methods of RegExp and String
