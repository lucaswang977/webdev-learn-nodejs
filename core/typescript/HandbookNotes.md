# The TypeScript Handbook Learning Notes

https://www.typescriptlang.org/docs/handbook/intro.html

## Side notes

Create a clean JS project by vite:

```bash
pnpm create vite x.x.x --template vanilla-ts
```

## TypeScript for JavaScript Programmers

- Types by Inference
- Defining Types (object, interface, type, class, primitive types(any, unknown, void, never))
- Composing Types (unions, generics)
- Structural type system

## The Basics

- Over time, you may want to be a bit more defensive against mistakes, and make TypveScript act a bit more strictly. In that case, you can use the noEmitOnError compiler option.
- Type annotations never change the runtime behavior of your program.
- This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called **downleveling**.
- "strict": true in a tsconfig.json
- noImplicitAny: Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.
- strictNullChecks: The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

## Everyday Types

- The primitives: string, number, and boolean, bigint, symbol
- Arrays: Array<number>, number[]
- any: noImplicitAny
- Type Annotations on Variables: automatically infer the types
- Functions: Parameter Type Annotations, Return Type Annotations, Anonymous Functions, contextual typing
- Object Types
- Union Types
- Type Aliases and Interfaces: the differences
- Type Assertions: TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
- Literal Types: Literal Inference; The "as const" suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
- null and undefined: strictNullChecks, Non-null Assertion Operator (Postfix !)
- Enums

## Narrowing

- Truthiness narrowing: equality narrowing, the in operator narrowing, instanceof narrowing, assignments narrowing,
- Beware of truthiness narrowing on coercing primitives such as 0, NaN, "", 0n, null, undefined, they are all coerced to false.
- Checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it's potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.
- Analysis of code based on reachability is called control flow analysis, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.
- Type predicate:
  ```Typescript
  function isFish(pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
  }
  ```
- Discriminated unions and never type and exhaustiveness checking

  ```Typescript
  interface Circle {
      kind: "circle";
      radius: number;
  }

  interface Square {
      kind: "square";
      sideLength: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape) {
      switch (shape.kind) {
          case "circle":
          return Math.PI * shape.radius ** 2;
          case "square":
          return shape.sideLength ** 2;
          default:
          const _exhaustiveCheck: never = shape;
          return _exhaustiveCheck;
      }
  }
  ```

  Adding a new member to the Shape union, will cause a TypeScript error:

  ```Typescript
  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }

  type Shape = Circle | Square | Triangle;

  function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        return Math.PI * shape.radius ** 2;
        case "square":
        return shape.sideLength ** 2;
        default:
        const _exhaustiveCheck: never = shape;
    // Error:Type 'Triangle' is not assignable to type 'never'.

        return _exhaustiveCheck;
    }
  }
  ```

## More on Functions

- Use a type alias to name a function type.
- What is Call Signature of a Typescript function? (describe something callable with properties) What is Constructor Signature?

  ```Typescript
  // Call signature
  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }

  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";

  doSomething(myFunc);

  // Constructor signature
  type SomeConstructor = {
    new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }
  ```

- Write good generic functions:
  - Push type parameters down
  - Use fewer type parameters
  - Type parameters should appear twice
- When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
- What is Function Overload Signatures and the Implementation Signature?
- Always prefer parameters with union types instead of overloads when possible.
- Understand those additional types: void, object, unknown, never, Function
- Understand rest parameters and rest arguments
- Use "as const" to make arrays immutable:
  ```Typescript
  const args = [8, 5] as const;
  const angle = Math.atan2(...args); // OK
  ```
- Try to understand this code piece on "this" in a function:

  ```Typescript
  interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }

  class DBImpl implements DB {
    private users: User[];

    constructor(users: User[]) {
      this.users = users;
    }

    filterUsers(filter: (this: User) => boolean): User[] {
      return this.users.filter(filter.bind(this));
    }
  }

  const db = new DBImpl([/* some users */]);
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });
  ```

- Return of void:

  - A contextual function type is a function type that provides type information for a function based on where it is assigned.
  - A contextual function type (type is inferred by compiler) with a void return type (type voidFunc = () => void), when implemented, can return any other value, but it will be ignored.

    ```Typescript
    type voidFunc = () => void;

    const f1: voidFunc = () => {
      return true;
    };
    ```

  - But when a literal function definition has a void return type, that function must not return anything.

    ```Typescript
    function f2(): void {
      // @ts-expect-error
      return true;
    }

    const f3 = function (): void {
      // @ts-expect-error
      return true;
    };
    ```

## Object Types

- Property Modifiers
  - Optional Properties
  ```Typescript
  function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {}
  ```
  - readonly Properties
  ```Typescript
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
  ```
  - Index Signatures
  ```Typescript
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  ```
- Excess Property Checks

  ```Typescript
  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown;
  }
  ```

- Extending Types and Intersection Types

  ```Typescript
  // Intersection
  interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }

  type ColorfulCircle = Colorful & Circle;

  // Extending
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  interface ColorfulCircle extends Colorful, Circle {}
  ```

- Generic Object Types: The Array Type, The ReadonlyArray Type, Tuple Types, readonly Tuple Types

## Classes

- Class Members

  - Fields (readonly)
  - Methods (Getters / Setters, Index Signatures)
  - Constructor (super call: before using any this members)
  - Visibility: public, protected (base and derived, visibility can be increased), private (only base, visibility cannot be increased)
  - Cross-instance private access: TypeScript does allow cross-instance private access:

    ```Typescript
    class A {
      private x = 10;

      public sameAs(other: A) {
        // No error
        return other.x === this.x;
      }
    }
    ```

  - static members: not associated with a particular instance, can be accessed through the class constructor object itself, also inherited.
  - Function properties like name, length, and call aren't valid to define as static members.
  - Static blocks: Static blocks allow you to write a sequence of statements with their own scope that can access private fields within the containing class.
  - Parameter Properties: turning a constructor parameter into a class property with the same name and value.

    ```Typescript
    class Params {
      constructor(
        public readonly x: number,
        protected y: number,
        private z: number
      ) {
        // No body necessary
      }
    }
    const a = new Params(1, 2, 3);
    console.log(a.x); // (property) Params.x: number
    console.log(a.z); // Error: Property 'z' is private and only accessible within class 'Params'.
    ```

  - Constructor Signatures: Given the type of a class itself, the InstanceType utility type models this operation.
  - Abstract: An abstract method or abstract field is one that hasn't had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

- Class Expressions: Class expressions are very similar to class declarations. The only real difference is that class expressions don't need a name.

  ```Typescript
  const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };

  const m = new someClass("Hello, world");
  ```

- Class Heritage
  - implements: check that a class satisfies a particular interface
  - extends: A derived class has all the properties and methods of its base class, and can also define additional members.
  - Overriding methods: A derived class must follow the same method signature as the base class, or it will throw a compile-time error.
  - Type-only field declaration: only want to re-declare a more accurate type for an inherited field, there should be no runtime effect for this field declaration.
  - The order of class initialization, as defined by JavaScript, is:
    - The base class fields are initialized
    - The base class constructor runs
    - The derived class fields are initialized
    - The derived class constructor runs
- Generic Class
  - The static members of a generic class can never refer to the class's type parameters.
- "this" at Runtime in Class

  - In Javascript, by default, the value of "this" inside a function depends on how the function was called.
  - Using arrow function as class method, and passing "this" as parameter, will provide a correct context.
  - "this" type: In classes, a special type called this refers dynamically to the type of the current class.

    ```Typescript
    class Box {
      content: string = "";
      sameAs(other: this) {
        return other.content === this.content;
      }
    }
    ```

  - this-based type guards: You can use this is Type in the return position for methods in classes and interfaces. When mixed with a type narrowing (e.g. if statements) the type of the target object would be narrowed to the specified Type.

    ```Typescript
    class Box<T> {
      value?: T;

      hasValue(): this is { value: T } {
        return this.value !== undefined;
      }
    }

    const box = new Box<string>();
    box.value = "Gameboy";
    box.value;    // (property) Box<string>.value?: string

    if (box.hasValue()) {
      box.value;  // (property) value: string
    }
    ```

- Relationships Between Classes

  - Empty classes have no members. In a structural type system, a type with no members is generally a supertype of anything else.

    ```Typescript
    class Empty {}

    function fn(x: Empty) {
      // can't do anything with 'x', so I won't
    }

    // All OK!
    fn(window);
    fn({});
    fn(fn);
    ```

## Type manipulation

- Keyof Type Operator

  - The keyof operator takes an object type and produces a string or numeric literal union of its keys.

  ```Typescript
  type Point = { x: number; y: number };
  type P = keyof Point; // type P = "x" | "y"
  ```

  - If the type has a string or number index signature, keyof will return those types instead:

    ```Typescript
    type Arrayish = { [n: number]: unknown };
    type A = keyof Arrayish; // type A = number
    ```

- Typeof Type Operator

  - This isn't very useful for basic types, but combined with other type operators, you can use typeof to conveniently express many patterns.
    ```Typescript
    function f() {
      return { x: 10, y: 3 };
    }
    type P = ReturnType<typeof f>;
    ```

- Indexed Access Types

  - Indexing type itself is a type too.

  ```Typescript
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"]; // type Age = number
  type I1 = Person["age" | "name"]; // type I1 = number | string
  type I2 = Person[keyof Person]; // type I2 = number | string | boolean
  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName]; // type I3 = boolean | string
  ```

  - Using "number" to get the type of an array's elements

  ```Typescript
  const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
  type Person = typeof MyArray[number]; // type Person = { name: string; age: number }
  type Age = typeof MyArray[number]["age"]; // type Age = number
  type Age2 = Person["age"]; // type Age2 = number
  ```

  - Only use types when indexing, use a type alias instead of a constant/variable.

  ```Typescript
  const key = "age";
  type Age = Person[key]; // Error: Type 'key' cannot be used as an index type.

  type key = "age";
  type Age = Person[key]; // OK
  ```

- Generic Types

  ```Typescript
  interface GenericIdentityFn<Type> {
    (arg: Type): Type;
  }

  function identity<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity;
  ```

  - Generic Classes

    ```Typescript
    class GenericNumber<NumType> {
      zeroValue: NumType;
      add: (x: NumType, y: NumType) => NumType;
    }
    ```

  - Generic Constraints

    - Using "extends" keyword to specify a constraint

      ```Typescript
      interface Lengthwise {
        length: number;
      }

      function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
        console.log(arg.length);
        return arg;
      }
      ```

    - Using Type Parameters in Generic Constraints

      ```Typescript
      function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key];
      }

      let x = { a: 1, b: 2, c: 3, d: 4 };

      getProperty(x, "a");
      getProperty(x, "m"); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
      ```

  - Class Types in generics (often used in Mixins)

    ```Typescript
    function create<Type>(c: { new (): Type }): Type {
      return new c();
    }
    ```

  - Generic Parameter Defaults

    ```Typescript
    declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
      element?: T,
      children?: U
    ): Container<T, U>;
    ```

- Conditional Types

  - Conditional types take a form that looks a little like conditional expressions: SomeType extends OtherType ? TrueType : FalseType;
  - Example:

    ```Typescript
    type NameOrId<T extends number | string> = T extends number ? IdLabel　: NameLabel;
    function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
      throw "unimplemented";
    }
    let a = createLabel("typescript");  // type a = NameLabel
    let b = createLabel(2.8);  // type b = IdLabel
    let c = createLabel(Math.random() ? "hello" : 42);  // type c = NameLabel | IdLabel
    ```

  - Conditional Type Constraints

    ```Typescript
    type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

    interface Email {
      message: string;
    }

    interface Dog {
      bark(): void;
    }

    type EmailMessageContents = MessageOf<Email>;  // type EmailMessageContents = string
    type DogMessageContents = MessageOf<Dog>;  // type DogMessageContents = never
    ```

  - Flatten array types

    ```Typescript
    type Flatten<T> = T extends any[] ? T[number] : T;
    type Str = Flatten<string[]>;  // type Str = string
    type Num = Flatten<number>;  // type Num = number

    type FlattenWithInfer<Type> = Type extends Array<infer Item> ? Item : Type;
    ```

  - Using infer to extract the return type

    ```Typescript
    type GetReturnType<Type> = Type extends (...args: never[]) => infer ReturnType
      ? ReturnType
      : never;
    type Num = GetReturnType<() => number>; // type Num = number
    type Str = GetReturnType<(x: string) => string>;  // type Str = string
    type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;  // type Bools = boolean[]
    ```

  - Distributive Conditional Types

    ```Typescript
    type ToArray<Type> = Type extends any ? Type[] : never;
    type StrArrOrNumArr = ToArray<string | number>;  // type StrArrOrNumArr = string[] | number[]

    type ToArrayNonDistCond<Type> = [Type] extends [any] ? Type[] : never;
    type StrArrOrNumArrNonDistCond = ToArrayNonDistCond<string | number>;  // type StrArrOrNumArrNonDistCond = string[] | number[]
    ```

- Mapped Types

  - Mapped types build on the syntax for index signatures.

    ```Typescript
    type OptionsFlags<Type> = {
      [Property in keyof Type]: boolean;
    };
    type Features = {
      darkMode: () => void;
      newUserProfile: () => void;
    };
    type FeatureOptions = OptionsFlags<Features>;  // type FeatureOptions = { darkMode: boolean; newUserProfile: boolean; }
    ```

  - Mapping Modifiers: There are two additional modifiers which can be applied during mapping: readonly and ?

    ```Typescript
    type CreateMutable<Type> = {
      -readonly [Property in keyof Type]: Type[Property];
    };
    type Concrete<Type> = {
      [Property in keyof Type]-?: Type[Property];
    };
    ```

  - Key Remapping via "as"

    ```Typescript
    type MappedTypeWithNewProperties<Type> = {
        [Properties in keyof Type as NewKeyType]: Type[Properties]
    };
    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
    };
    type RemoveKindField<Type> = {
        [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
    };

    // map over unions
    type EventConfig<Events extends { kind: string }> = {
        [E in Events as E["kind"]]: (event: E) => void;
    }
    ```

- Template Literal Types

  - They have the same syntax as template literal strings in JavaScript, but are used in type positions.

    ```Typescript
    type World = "world";
    type Greeting = `hello ${World}`;  // type Greeting = "hello world"
    ```

  - For each interpolated position in the template literal, the unions are cross multiplied.

    ```Typescript
    type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
    type Lang = "en" | "ja" | "pt";

    type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;  // type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
    ```

  - Defining a new string based on information inside a type.

    ```Typescript
    type PropEventSource<Type> = {
        on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
    };

    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });

    person.on("firstNameChanged", () => {});
    person.on("firstName", () => {});  // Prevent easy human error
    person.based("frstNameChanged", () => {}); // typo-resistant
    ```

  - Inference with Template Literals

    ```Typescript
    type PropEventSource<Type> = {
        on<Key extends string & keyof Type>
            (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
    };

    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });

    person.on("firstNameChanged", newName => {
      console.log(`new name is ${newName.toUpperCase()}`);
    });

    person.on("ageChanged", newAge => {
      if (newAge < 0) {
        console.warn("warning! negative age");
      }
    })
    ```

  - Intrinsic String Manipulation Types
    - Uppercase&lt;StringType&gt;, Lowercase&lt;StringType&gt;, Capitalize&lt;StringType&gt;, Uncapitalize&lt;StringType&gt;

## Modules - Theory

- This document will focus on two of the most important module systems today: ECMAScript modules (ESM) and CommonJS (CJS).
- TypeScript detects that a file is a CommonJS or ECMAScript module, it starts by assuming that file will have its own scope.
- Who is the host? the system that ultimately consumes the output code to direct its module loading behavior.
- Understand the rules of the host enough, to compile files into a valid **output module format**, to ensure that imports in those **outputs** will **resolve successfully**, and to know what **type** to assign to **imported names**.
- The module compiler option (the compiler needs an accurate understanding of the module system so it can type check properly)
  - control the module format of any JavaScript that gets emitted during compilation
  - serves to inform the compiler about how the module kind of each file should be detected
  - how different module kinds are allowed to import each other
  - whether features like import.meta and top-level await are available
- Node.js understands both ES modules and CJS modules, but the format of each file is determined by its file extension and the type field of the first package.json file.
- TypeScript applies this same algorithm to the project's input files to determine the module kind of each corresponding output file.
- ESM and CJS interoperability
  - ESM-only. Some runtimes, like browser engines, only support what's actually a part of the language: ECMAScript Modules.
  - Bundler-like. ESM-transpiled-to-CJS files interacted with hand-written-CJS files implied a set of permissive interoperability rules.
  - Node.js. CommonJS modules cannot load ES modules synchronously, they can only load them asynchronously with dynamic import() calls. ES modules can default-import CJS modules, which always binds to exports.
- Module resolution is host-defined (moduleResolution). TypeScript imitates the host's module resolution, but with types.
- The role of declaration files: the compiler assumes that wherever it sees a declaration file, there is a corresponding JavaScript file that is perfectly described by the type information in the declaration file.
  - The compiler always looks for TypeScript and declaration files first, and if it finds one, it doesn't continue looking for the corresponding JavaScript file.
  - If it finds a TypeScript input file, it knows a JavaScript file will exist after compilation.
  - If it finds a declaration file, it knows a compilation (perhaps someone else's) already happened and created a JavaScript file at the same time as the declaration file.

## tsconfig.json

- The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project.
- The tsconfig.json file specifies the root files and the compiler options required to compile the project.
- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
- When input files are specified on the command line, tsconfig.json files are ignored.
- There may be a base configuration which you can use at [here](https://github.com/tsconfig/bases).
- Root fields
  - **files**: Specifies an allowlist of files to include in the program.
  - **extends**: The value of extends is a string which contains a path to another configuration file to inherit from.
  - **include**: Specifies an array of filenames or patterns to include in the program.
  - **exclude**: Specifies an array of filenames or patterns that should be skipped when resolving include.
  - **references**: Project references are a way to structure your TypeScript programs into smaller pieces.
  - **compilerOptions**: These options make up the bulk of TypeScript's configuration and it covers how the language should work.
- Important compiler options:
  - **module**: You very likely want "nodenext" for modern Node.js projects and preserve or esnext for code that will be bundled.
  - **moduleResolution**: nodenext (import and require are both supported), bundler (never requires file extensions on relative paths in imports)
  - **target**: Modern browsers support all ES6 features, so ES6 is a good choice.
  - **lib**: dom, dom.iterable, esnext
  - **strict related**: strictPropertyInitialization,

## Decorators

- A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
- Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
- Class Decorators

  ```Typescript
  @sealed
  class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
      this.title = t;
    }
  }

  function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }
  ```

  - The decorator doesn't modify the original class directly but instead creates a subclass that inherits its behavior and adds new functionality.

- Method Decorators

  ```Typescript
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    @enumerable(false)
    greet() {
      return "Hello, " + this.greeting;
    }
  }

  function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
  }
  ```

- Accessor Decorators

  ```Typescript
  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    @configurable(false)
    get x() {
      return this._x;
    }

    @configurable(false)
    get y() {
      return this._y;
    }
  }

  function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
    };
  }
  ```

- Property Decorators

  ```Typescript
  class Greeter {
    @format("Hello, %s")
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      let formatString = getFormat(this, "greeting");
      return formatString.replace("%s", this.greeting);
    }
  }

  import "reflect-metadata";
  const formatMetadataKey = Symbol("format");
  function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
  }
  function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
  }
  ```

- Parameter Decorators

  ```Typescript
  class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
      this.title = t;
    }

    @validate
    print(@required verbose: boolean) {
      if (verbose) {
        return `type: ${this.type}\ntitle: ${this.title}`;
      } else {
      return this.title;
      }
    }
  }

  import "reflect-metadata";
  const requiredMetadataKey = Symbol("required");

  function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
  }

  function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    let method = descriptor.value!;

    descriptor.value = function () {
      let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
      if (requiredParameters) {
        for (let parameterIndex of requiredParameters) {
          if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
            throw new Error("Missing required argument.");
          }
        }
      }
      return method.apply(this, arguments);
    };
  }

  ```

## Mixin

- Class as a type

  ```Typescript
  // Declare a passed in type is a class
  type Constructor = new (...args: any[]) => {};

  // Declare a passed in type is a generic class and return the same generic type
  type GConstructor<T = {}> = new (...args: any[]) => T;
  ```

````

- Create mixins which only work when you have a particular base to build on:

  ```Typescript
  type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;

  function Jumpable<TBase extends Positionable>(Base: TBase) {
    return class Jumpable extends Base {
      jump() {
        // This mixin will only work if it is passed a base
        // class which has setPos defined because of the
        // Positionable constraint.
        this.setPos(0, 20);
      }
    };
  }
  ```
````
