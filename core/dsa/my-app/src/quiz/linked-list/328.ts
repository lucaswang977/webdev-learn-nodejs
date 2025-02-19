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

function headToList(head: number[]): ListNode | null {
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

function outputList(head: ListNode | null) {
  const nodes: number[] = [];
  while (head) {
    nodes.push(head.val);
    head = head.next;
  }

  console.log(nodes.join(","));
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let i = 1;
  let insertNode: ListNode | null = head;
  let ptr: ListNode | null = head.next;
  let prev: ListNode | null = head;

  while (ptr) {
    if (i % 2 === 0) {
      // Remove the ptr from the list
      prev.next = ptr.next;

      // Insert the ptr node after the insertNode
      const temp = insertNode.next;
      insertNode.next = ptr;
      ptr.next = temp;

      // Next inserting position will be after the ptr
      insertNode = ptr;

      // Next iterating pos should be restored
      ptr = prev;
    }
    i++;
    prev = ptr;
    ptr = ptr.next;
  }

  return head;
}

export default function testQuiz() {
  let head: number[], headList;

  // [1,3,5,2,4]
  head = [1, 2, 3, 4, 5];
  headList = headToList(head);
  outputList(oddEvenList(headList));

  // [2,3,6,7,1,5,4]
  head = [2, 1, 3, 5, 6, 4, 7];
  headList = headToList(head);
  outputList(oddEvenList(headList));
}
