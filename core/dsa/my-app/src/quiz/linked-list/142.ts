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
      if (i === head.length - 1) currentNode.next = lastNextNode;
    }
  }

  return headNode;
}

function detectCycle(head: ListNode | null): ListNode | null {
  let result = null;

  let node = head;
  const nodeSet = new Set();
  while (node !== null) {
    if (node.next !== null && nodeSet.has(node.next)) {
      result = node.next;
      break;
    } else {
      nodeSet.add(node);
    }
    node = node.next;
  }

  return result;
}

export default function testQuiz() {
  let head, pos;
  let headList;

  // 1
  head = [3, 2, 0, -4];
  pos = 1;
  headList = headToList(head, pos);
  console.log(detectCycle(headList));

  // 0
  head = [1, 2];
  pos = 0;
  headList = headToList(head, pos);
  console.log(detectCycle(headList));

  // null
  head = [1];
  pos = -1;
  headList = headToList(head, pos);
  console.log(detectCycle(headList));

  // null
  head = [1, 2];
  pos = -1;
  headList = headToList(head, pos);
  console.log(detectCycle(headList));
}
