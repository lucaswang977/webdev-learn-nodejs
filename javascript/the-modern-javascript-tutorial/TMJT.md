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
