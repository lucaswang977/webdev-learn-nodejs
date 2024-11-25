# The Modern JavaScript Tutorial Learning Notes

https://javascript.info/

## Side notes

Create a clean JS project by vite:

```bash
pnpm create vite x.x.x --template vanilla
```

## Part 1: The JavaScript language

### JavaScript Fundamentals

- special numeric values:
  - NaN: represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance: alert( "not a number" / 2 );
  - Infinity / -Infinity : represents the mathematical Infinity ∞. It is a special value that’s greater than any number. alert( 1 / 0 );
- In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”.
- The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined.
- typeof:
  - typeof Symbol("id") // "symbol"
  - typeof null // "object"
  - typeof NaN // "number"
  - typeof undefined // "undefined"
  - typeof Infinity // "number"
  - typeof Math // "object"
  - typeof alert // "function"
- Numeric conversion: Number(), unary +
- The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned. let a = (1 + 2, 3 + 4); // a == 7
- OR "||" finds the first truthy value, if all operands have been evaluated (i.e. all were false), returns the last operand : alert( null || 0 || 1 ); // 1 (the first truthy value)
- AND "&&" finds the first falsy value, if all operands have been evaluated (i.e. all were truthy), returns the last operand : alert( null && 5 ); // null
- A double NOT !! is sometimes used for converting a value to boolean type: alert( !!"non-empty string" ); // true;; alert( !!null ); // false
- The precedence of AND && operator is higher than OR ||. So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
- nullish coalescing operator: The result of a ?? b is: if a is defined, then a, if a isn’t defined (null/undefined), then b.
- || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values.
- The precedence of the ?? operator is the same as ||.
- Variables declared outside of any function are called global. It’s a good practice to minimize the use of global variables.
- Default parameters in old JavaScript code: text = text || 'no text given';
- Difference between Function Declaration and Function Expression.
- Arrow functions: let func = (arg1, arg2, ..., argN) => expression;

### Objects: the basics

- Difference between accessing object properties using dot notation (.) and bracket notation ([]).
- Why does the "in" operator exist? Isn’t it enough to compare against "undefined"? Why not just use Object.hasOwnProperty()?
- What is integer property? What is the different behaviors of integer property in array and object?
- Object.assign(dest, ...sources); spread syntax: clone = {...user}; clone = structuredClone(user); function properties will be cloned? \_.cloneDeep(obj);
- What is reachability? How does mark-and-sweep garbage collection work?
- How is "this" determined when "this" is defined in the global context, function call, method call, constructor call? Beware of losing context, and arrow functions do not have "this".
- What are the differences between a constructor function and a normal function? (calling syntax, return value, purpose, this keyword)
- What is the usage of "new.target" property? (enforcing constructor calls, detecting constructor calls)
- How to define methods in constructors? When to define?
- Best practices on using optional chaining (?.)? (safe reading and deleting, but not writing)
- Only two primitive types may serve as object property keys: string and symbol.
- What is symbol and its characteristics? Can Object.assign() copy symbols?
- What is global symbols? How to use them?
- What is Symbol.toPrimitive()? What is toString() method and valueOf() method?

### Data types

- There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
- The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt.
- Numbers:
  - How to represent Hex, binary and octal numbers? toString(base)
  - Rounding: Math.floor, Math.ceil, Math.round, Math.trunc, num.toFixed(precision)
  - Imprecise calculation of 64bit format IEEE-754
  - isFinite and isNaN, Number.isNaN and Number.isFinite
  - Object.is and ===
  - parseInt and parseFloat
- Strings:
  - Quotes: single quotes and double qoutes and backticks
  - Special characters
  - String length is a read-write property: If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated.
  - Accessing characters: string[index], str.at(pos)
  - Strings are immutable
  - Searching for a substring: str.indexOf, str.lastIndexOf(substr, position), str.includes(substr, pos), str.startsWith, str.endsWith
  - Getting a substring: str.slice(start [, end]), str.substring(start [, end]), str.substr(start [, length])
  - Comparing strings: str.codePointAt(pos), String.fromCodePoint(code), str.localeCompare(str2)
- Arrays:
  - Declaration: let arr = new Array(); let arr = [];
  - Get last elements with "at": arr.at(-1), arr[arr.length - 1]
  - Methods pop/push, shift/unshift: arr.pop(), arr.push(), arr.shift(), arr.unshift()
  - Loops: for (let i = 0; i < arr.length; i++) {}; for (let fruit of fruits) {}; Difference between for..in and for..of?
  - new Array(2): it creates an array without items, but with the given length.
  - Multidimensional arrays
  - Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".
  - Don’t compare arrays with ==: if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.
  - Add/remove items: arr.push(...items), arr.pop(), arr.unshift(...items), arr.shift()
  - Delete an element: arr.splice(start[, deleteCount, elem1, ..., elemN]) , returns the array of removed elements
  - Getting a part of array: arr.slice([start], [end])
  - Concatenation: arr.concat(arr2, arr3, ...)
  - Iterate: forEach: arr.forEach(callback, thisArg)
  - Searching in array: arr.indexOf(item, from); arr.includes(item, from); arr.lastIndexOf(item)
  - Sorting: arr.sort([compareFunction])

### Advanced working with functions

### Object properties configuration

### Prototypes, inheritance

### Classes

### Error handling

### Promises, async/await

### Generators, advanced iteration

### Modules

### Miscellaneous

## Part 2: Browser: Document, Events, Interfaces

### Document

### Introduction to Events

### UI Events

### Forms, controls

### Document and resource loading

### Miscellaneous

## Part 3: Additional articles

### Frames and windows

### Binary data, files

### Network requests

### Storing data in the browser

### Animation

### Web components

### Regular expressions
