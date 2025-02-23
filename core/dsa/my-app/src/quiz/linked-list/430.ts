/**
 * Definition for _Node.
 */
export class _Node {
  val: number;
  prev: _Node | null;
  next: _Node | null;
  child: _Node | null;

  constructor(val?: number, prev?: _Node, next?: _Node, child?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
    this.child = child === undefined ? null : child;
  }
}

export function convertToMultilevelLinkedList(
  data: (number | null)[]
): _Node | null {
  if (!data[0]) {
    return null;
  }

  let head: _Node | null = new _Node(data[0]);
  let ptr: _Node | null = head;
  let lastPtr: _Node | null = head;
  let newLine = false;

  for (let i = 1; i < data.length; i++) {
    if (data[i] === null && data[i - 1] !== null) {
      newLine = true;
    } else if (data[i] === null && data[i - 1] === null) {
      lastPtr = lastPtr!.next;
    } else if (data[i] !== null) {
      if (lastPtr && newLine) {
        const next = new _Node(data[i]!);
        ptr = next;
        lastPtr.child = ptr;
        lastPtr = ptr;
        newLine = false;
      } else {
        const next: _Node = new _Node(data[i]!, ptr!);
        ptr.next = next;
        ptr = next;
      }
    }
  }

  return head;
}

export function outputMultilevelList(head: _Node | null) {
  function* walk(ptr: _Node | null): Generator<number> {
    while (ptr) {
      yield ptr.val;
      if (ptr.child) yield* walk(ptr.child);
      ptr = ptr.next;
    }
  }

  const gen = walk(head);
  console.log([...gen].join(","));
}

function flatten(head: _Node | null): _Node | null {
  function* walk(ptr: _Node | null): Generator<_Node | null> {
    while (ptr) {
      yield ptr;
      if (ptr.child) yield* walk(ptr.child);
      ptr = ptr.next;
    }
  }

  const gen = [...walk(head)];
  for (let i = 0; i < gen.length; i++) {
    if (gen[i + 1]) {
      gen[i]!.next = gen[i + 1];
      gen[i + 1]!.prev = gen[i];
      gen[i]!.child = null;
    }
  }

  return gen[0];
}

export default function testQuiz() {
  let head, headList: _Node | null, flattened: _Node | null;

  head = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12];
  headList = convertToMultilevelLinkedList(head);
  flattened = flatten(headList);
  outputMultilevelList(flattened);

  head = [1, 2, null, 3];
  headList = convertToMultilevelLinkedList(head);
  flattened = flatten(headList);
  outputMultilevelList(flattened);
}
