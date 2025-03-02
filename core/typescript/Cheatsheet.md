# Typescript Cheat Sheet
- [Typescript Cheat Sheet](#typescript-cheat-sheet)
  - [1. Interface](#1-interface)
    - [Common Syntax](#common-syntax)
    - [Generics](#generics)
    - [Overloads](#overloads)
    - [Get \& Set](#get--set)
    - [Extension via merging](#extension-via-merging)
    - [Class conformance](#class-conformance)
  - [2. Type](#2-type)
    - [Object Literal Syntax](#object-literal-syntax)
    - [Features](#features)
      - [Primitive Type](#primitive-type)
      - [Object Literal Type](#object-literal-type)
      - [Tuple Type](#tuple-type)
      - [Union Type](#union-type)
      - [Intersection Type](#intersection-type)
      - [Type from Value](#type-from-value)
      - [Type from Function Return](#type-from-function-return)
      - [Type from Module](#type-from-module)
    - [Advanced Features](#advanced-features)
      - [Mapped Types](#mapped-types)
      - [Conditional Types](#conditional-types)
      - [Template Union Types](#template-union-types)
  - [3. Class](#3-class)
    - [Common Syntax](#common-syntax-1)
    - [Generics](#generics-1)
    - [Parameter Properties](#parameter-properties)
    - [Abstract Classes](#abstract-classes)
    - [Decorators and Attributes](#decorators-and-attributes)

## 1. Interface
* Key points:
  * Used to describe the shape of objects, and can be extended by others.
  * Almost everything in Javascript is an object and _interface_ is built to match their runtime behavior.
* Built-in Type Primitives:
  * boolean, string, number, undefined, null, any
  * unknown, never, void, bigint, symbol
* Common Built-in JS Object:
  * Date, Error, Array, Map, Set, Regexp, Promise
* Type Literals:
  * Object: { field: string }
  * Function: (arg: number) => string
  * Array: string[] or Array\<string>
  * Tuple: [string, number]
* Avoid: Object, String, Number, Boolean

### Common Syntax

```Typescript
// Optionally take properties from existing interface or type
interface JSONResponse extends Response, HTTPAble {
  version: number;
  
  // JSDoc comment attached to show in editors
  /** In bytes */
  payloadSize: number;

  // This property might not be on the object
  outOfStock?: boolean;

  // These are two ways to describe a property which is a function
  update: (retryTimes: number) => void;
  update(retryTimes: number): void;

  // You can call this object via () - (functions in JS are objects which can be called)
  (): JSONResponse;

  // You can use new on the object this interface describes
  new(s: string): JSONResponse;

  // Any property not described already is assumed to exist, and all properties must be numbers
  [key: string]: number;

  // Tells Typescript that a property can not be changed
  readonly body: string;
}
```

### Generics
* Declare a type which can change in your interface.
```Typescript
// Response: Type parameter
interface APICall<Response> {
  data: Response;   // Used here
}
```
* Usage
```Typescript
const api: APICall<ArtworkCall> = ...;
api.data    // Artwork
```

* You can constrain what types are accepted into the generic parameter via the extends keyword.
```Typescript
// Set a constraint on the type which means only types with a "status" property can be used
interface APICall<Response extends { status: number }> {
  data: Response;
}
const api: APICall<ArtworkCall> = ...;
api.data.status
```

### Overloads
A callable interface can have multiple definitions for different sets of parameters.
```Typescript
interface Expect {
  (matcher: boolean): string;
  (matcher: string): boolean;
}
```

### Get & Set
Objects can have custom getters or setters.
```Typescript
interface Ruler {
  get size(): number;
  set size(value: number | string);
}

// Usage
const r: Ruler = ...;
r.size = 12;
r.size = "36";
```

### Extension via merging
Interfaces are merged, so multiple declarations will add new fields to the type definition.
```Typescript
interface APICall {
  data: Response;
}

interface APICall {
  error?: Error;
}
```

### Class conformance
You can ensure a class conforms to an interface via _implements_.
```Typescript
interface Syncable { sync(): void }
class Account implements Syncable { ... }
```

## 2. Type
* Key points:
  * Full name is "type alias" and are used to provide names to type literals.
  * Supports more rich type-system features than interfaces.
* Type vs Interface:
  * Interfaces can only describe object shapes.
  * Interfaces can be extended by declaring it multiple times.
  * In performance critical types interface comparison checks can be faster.
* Think of Types Like Variables:
  * Much like how you can create variables with the same name in different scopes, a type has similar semantics.
* Build with Utility Types:
  * Typescript includes a lot of global types which will help you do common tasks in the type system. Check the [site](https://www.typescriptlang.org/docs/handbook/utility-types.html) for them.

### Object Literal Syntax
```Typescript
type JSONResponse = {
  version: number;                          // Field
  /** In bytes **/                          // Attached docs
  payloadSize: number;                      //
  outOfStock?: boolean;                     // Optional
  update: (retryTimes: number) => void;     // Arrow func field
  update(retryTimes: number): void;         // Function
  (): JSONResponse                          // Type is callable
  [key: string]: number;                    // Accepts any index
  new (s: string): JSONResponse;            // Newable
  readonly body: string;                    // Readonly property
}
```

Terser for saving space, see Interface Cheat Sheet for more info, everything but "static" matches.

### Features

#### Primitive Type
Useful for documentation mainly

```Typescript
type SanitizedInput = string;
type MissingNo = 404;
```

#### Object Literal Type
```Typescript
type Location = {
  x: number;
  y: number;
};
```

#### Tuple Type
A tuple is a special-cased array with known types at specific indexes.
```Typescript
type Data = [
  location: Location,
  timestamp: string
];
```

#### Union Type
Describes a type which is one of many options, for example a list of known strings.

```Typescript
type Size = "small" | "medium" | "large";
```

#### Intersection Type
A way to merge/extend types.

```Typescript
type Response = { data: { ... }};
type Data = Response["data"];   // { ... }
```

#### Type from Value
Re-use the type from an existing Javascript value via the _typeof_ operator.
```Typescript
const data = { ... };
type Data = typeof data;
```

#### Type from Function Return
Re-use the return value from a function as a type.
```Typescript
const createFixtures = () => { ... };
type Fixtures = ReturnType<typeof createFixures>;
function test(fixture: Fixtures) {}
```

#### Type from Module
```Typescript
const data: import("./data").data;
```

### Advanced Features
These features are great for building libraries, describing existing Javascript code and you may find you rarely reach for them in mostly Typescript applications.

#### Mapped Types
Acts like a map statement for the type system, allowing an input type to change the structure of the new type.

```Typescript
type Artist = { name: string, bio: string };

// Property in keyof Type: Loop through each field in the type generic parameter "Type"
// (newValue: Type[Property]) => void: Sets type as a function with original type as param
type Subscriber<Type> = {
  [Property in keyof Type]: (newValue: Type[Property]) => void;
};

// { name: (nv: string) => void, 
//   bio: (nv: string) => void }
type ArtistSub = Subscriber<Artist>;
```

#### Conditional Types
Act as "if statements" inside the type system. Created via generics, and then commonly used to reduce the number of options in a type union.
```Typescript
type HasFourLegs<Animal> = Animal extends { legs: 4 } ? Animal : never;
type Animals = Bird | Dog | Ant | Wolf;
type FourLegs = HasFourLegs<Animals>;   // Dog | Wolf
```

#### Template Union Types
A template string can be used to combine and manipulate text inside the type system.
```Typescript
type SupportLangs = "en" | "pt" | "zh";
type FooterLocaleIDs = "header" | "footer";

// "en_header_id" | "en_footer_id" | "pt_header_id" | "pt_footer_id" | "zh_header_id" | "zh_footer_id"
type AllLocaleIDs = `${SupportedLangs}_${FooterLocaleIDs}_id`;
```

## 3. Class
* Key points: A Typescript class has a few type-specific extensions to ES2015 Javascript classes, and one or two runtime additions.
* Create an class instance:
```Typescript
class ABC { ... }
const abc = new ABC();  // Parameters to the new ABC come from the constructor function.
```
* private x vs #private
  * The prefix "private" is the type-only addition, and has no effect at runtime. Code outside of the class can reach into the item in the following case:
    ```Typescript
    class Bag {
      private item: any;
    }
    ```
  * #private which is runtime private and has enforcement inside the Javascript engine that it is only accessible inside the class:
    ```Typescript
    class Bag {
      #item: any;
    }
    ```
* "this" in classes:
  * The value of "this" inside a function depends on how the function is called. It is not guaranteed to always be the class instance which you may be used to in other languages.
  * You can use "this parameter", use the bind function, or arrow functions to work around the issue when it occurs.
* Type and Value:
  * Surprise, a class can be used as both a type or a value:
    ```Typescript
    const a: Bag = new Bag();   // the first Bag is a type, the second one is a value.
    ```
  * So, be careful to not do this:
    ```Typescript
    class C implements Bag {}
    ```
### Common Syntax
```Typescript
// Account: subclasses this class
// implements: ensures that the class conforms to a set of interfaces or types
class User extends Account implements Updatable, Serializable {
  id: string;                       // A field
  displayName?: boolean;            // An optional field
  name!: string;                    // A "trust me, it's there" field
  #attributes: Map<any, any>;       // A private field
  roles = ["user"];                 // A field with a default
  readonly createdAt = new Date();  // A readonly field with a default

  // The code called on "new"
  constructor(id: string, email: string) {
    super(id);
    // In strict: true, this code is checked against the fields to ensure it is set up correctly.
    this.email = email;
    ...
  }

  // Ways to describe class method (and arrow function fields)
  setName(name: string) { this.name = name; }
  verifyName = (name: string) => { ... }

  // A function with 2 overload definitions
  sync(): Promise<{ ... }>
  sync(cb: ((result: string) => void)): void
  sync(cb?: ((result: string) => void)): void | Promise<{ ... }> { ... }

  // Getters and Setters
  get accountID() { }
  set accountID(value: string) { }

  // Private access is just to this class, protected allows to subclasses. Only used for type checking, public is the default.
  private makeRequest() { ... }
  protected handleRequest() { ... }

  // Static fields / methods
  static #userCount = 0;
  static registerUser(user: User) { ... }

  // Static blocks for setting up static vars. "this" refers to the static class.
  static { this.#userCount = -1; }
}
```

### Generics
Declare a type which can change in your class methods.
```Typescript
// Class type parameter
class Box<Type> {
  contents: Type;
  // Used here
  constructor(value: Type) {
    this.contents = value;
  }
}

const StringBox = new Box("a package");
```

### Parameter Properties
A Typescript specific extension to classes which automatically set an instance field to the input parameter.
```Typescript
class Location {
  constructor(public x: number, public y: number) {}
}
const loc = new Location(20, 40);
loc.x   // 20
loc.y   // 40
```

### Abstract Classes
A class can be declared as not implementable, but as existing to be subclassed in the type system. As can members of the class.
```Typescript
abstract class Animal {
  abstract getName(): string;
  printName() {
    console.log("Hello, " + this.getName())
  }
}
class Dog extends Animal {
  getName(): { ... }
}
```

### Decorators and Attributes
You can use decorators on classes, class methods, accessors, property and parameters to methods.
```Typescript
import { Syncable, triggerSync, preferCache, required } from "mylib"

@Syncable
class User {
  @triggerSync()
  save() { ... }

  @preferCache(false)
  get displayName() { ... }

  update(@required info: Partial<User>) { ... }
}
```