# The Modern JavaScript Tutorial Learning Notes
https://javascript.info/

## Side notes
Create a clean JS project by vite:
```bash
pnpm create vite x.x.x --template vanilla
```

## Part 1: The JavaScript language
### JavaScript Fundamentals
  * special numeric values:
    * NaN: represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance: alert( "not a number" / 2 ); 
    * Infinity / -Infinity : represents the mathematical Infinity ∞. It is a special value that’s greater than any number. alert( 1 / 0 ); 
  * In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages. It’s just a special value which represents “nothing”, “empty” or “value unknown”.
  * The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined.
  * typeof: 
    * typeof Symbol("id") // "symbol"
    * typeof null // "object"
    * typeof NaN // "number"
    * typeof undefined // "undefined"
    * typeof Infinity // "number"
    * typeof Math // "object"
    * typeof alert // "function"
  * Numeric conversion: Number(), unary +
  * The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned. let a = (1 + 2, 3 + 4); // a == 7
  * OR "||" finds the first truthy value, if all operands have been evaluated (i.e. all were false), returns the last operand : alert( null || 0 || 1 ); // 1 (the first truthy value)
  * AND "&&" finds the first falsy value, if all operands have been evaluated (i.e. all were truthy), returns the last operand : alert( null && 5 ); // null
  * A double NOT !! is sometimes used for converting a value to boolean type: alert( !!"non-empty string" ); // true;; alert( !!null ); // false
  * The precedence of AND && operator is higher than OR ||. So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
  * The result of a ?? b is: if a is defined, then a, if a isn’t defined (null/undefined), then b.
  * || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values.
  * The precedence of the ?? operator is the same as ||. 

### Code quality
### Objects: the basics
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