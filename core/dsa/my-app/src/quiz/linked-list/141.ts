/**
 * Definition for singly-linked list.
 **/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let result = false;

  let node = head;
  const nodeSet = new Set();
  while (node !== null) {
    console.log(node);
    if (node.next !== null && !nodeSet.has(node.next)) {
      result = true;
      break;
    } else {
      nodeSet.add(node);
    }
    node = node.next;
  }

  return result;
}

function headToList(head: number[], pos: number): ListNode | null {
  let headNode = null;
  let lastNextNode = null;

  if (head && head.length > 0) {
    headNode = new ListNode(head[0], null);
    let prevNode = headNode;
    if (pos === 0) lastNextNode = headNode;

    for (let i = 1; i < head.length; i++) {
      const currentNode = new ListNode(head[i], null);
      prevNode.next = currentNode;
      prevNode = currentNode;
      if (i === pos) lastNextNode = currentNode;
      if (i === head.length - 1) currentNode.next = currentNode;
    }
  }

  return headNode;
}

export default function testQuiz() {
  let head, pos;
  let headList;

  // true
  head = [3, 2, 0, -4];
  pos = 1;
  headList = headToList(head, pos);
  console.log(hasCycle(headList));

  // true
  head = [1, 2];
  pos = 0;
  headList = headToList(head, pos);
  console.log(hasCycle(headList));

  // false
  head = [1];
  pos = -1;
  headList = headToList(head, pos);
  console.log(hasCycle(headList));

  // false
  head = [1, 2];
  pos = -1;
  headList = headToList(head, pos);
  console.log(hasCycle(headList));
}
