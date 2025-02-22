export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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
  let head: _Node | null = null;
  let ptr: _Node | null = head;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === null && data[i - 1] !== null) {
    } else if (data[i] !== null) {
      if (head === null) {
        head = new _Node(data[i]!);
        ptr = head;
      } else {
        ptr!.next = new _Node(data[i]!);
        ptr = ptr!.next;
      }
    }
  }

  return head;
}

export function outputMultilevelList(head: _Node | null) {}

export function headToList(head: number[]): ListNode | null {
  if (head && head.length > 0) {
    const headList = new ListNode(head[0]);
    let p = headList;
    let i = 1;
    while (i < head.length) {
      const node = new ListNode(head[i]);
      p.next = node;
      p = p.next;
      i++;
    }

    return headList;
  }

  return null;
}

export function outputList(head: ListNode | null) {
  const nodes: number[] = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  console.log(nodes.join(","));
}
