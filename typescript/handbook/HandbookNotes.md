# The TypeScript Handbook Learning Notes

https://www.typescriptlang.org/docs/handbook/intro.html

## Side notes
Create a clean JS project by vite:
```bash
pnpm create vite x.x.x --template vanilla-ts
```

## TypeScript for JavaScript Programmers
* Types by Inference
* Defining Types (object, interface, typem, class, primitive types(any, unknown, void, never))
* Composing Types (unions, generics)
* Structural type system

## The Basics
* Over time, you may want to be a bit more defensive against mistakes, and make TypeScript act a bit more strictly. In that case, you can use the noEmitOnError compiler option.
* Type annotations never change the runtime behavior of your program.
* This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called **downleveling**.
* "strict": true in a tsconfig.json
* noImplicitAny: Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any.
* strictNullChecks: The strictNullChecks flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined.

## Everyday Types
