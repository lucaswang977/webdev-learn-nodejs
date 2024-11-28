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

- Over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly. In that case, you can use the noEmitOnError compiler option.
- Type annotations never change the runtime behavior of your program.
- This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called **downleveling**.
- "strict": true in a tsconfig.json
- noImplicitAny: Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.
- strictNullChecks: The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

## Everyday Types

- Differences Between Type Aliases and Interfaces
- TypeScript only allows type assertions which convert to a more specific or less specific version of a type.
- The "as const" suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
- Literal Types and Literal Inference
- strictNullChecks
- Non-null Assertion Operator (Postfix!)

## Narrowing

- Truthiness narrowing: equality narrowing, the in operator narrowing, instanceof narrowing, assignments narrowing,
- Beware of truthiness narrowing on coercing primitives such as 0, NaN, "", 0n, null, undefined, they are all coerced to false.
- Checking whether something == null actually not only checks whether it is specifically the value null - it also checks whether it’s potentially undefined. The same applies to == undefined: it checks whether a value is either null or undefined.
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
- What is Call Signature of a Typescript function? What is Constructor Signature?
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
