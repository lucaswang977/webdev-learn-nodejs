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

function reverseList(head: ListNode | null): ListNode | null {
  let ptr = head;
  let prev = null;

  while (ptr) {
    const next = ptr.next;
    ptr.next = prev;
    prev = ptr;
    ptr = next;
  }

  return prev;
}

export default function testQuiz() {
  let head: number[], headList;

  head = [1, 2, 3, 4, 5];
  headList = headToList(head);
  console.log(reverseList(headList));

  head = [1, 2];
  headList = headToList(head);
  console.log(reverseList(headList));

  head = [];
  headList = headToList(head);
  console.log(reverseList(headList));

  head = [1];
  headList = headToList(head);
  console.log(reverseList(headList));
}
