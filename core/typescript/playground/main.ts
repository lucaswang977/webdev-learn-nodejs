export function add(a: number, b: number): number {
  return a + b;
}

abstract class Animal {
  abstract getName(): string;
  printName() {
    console.log("Hello, " + this.getName());
  }
}
class Dog extends Animal {
  getName() {
    return "Dog";
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  const dog = new Dog();
  dog.printName();
}
