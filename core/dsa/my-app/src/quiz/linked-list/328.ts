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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let slowPtr: ListNode | null = head;
  let fastPtr: ListNode | null = head.next;
  let prev = null;

  while (slowPtr && fastPtr && fastPtr.next) {
    prev = slowPtr;
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    prev.next = fastPtr;
    fastPtr.next = slowPtr;
  }
}

export default function testQuiz() {
  let head: number[], headList;

  // [1,3,5,2,4]
  head = [1, 2, 3, 4, 5];
  headList = headToList(head);
  console.log(oddEvenList(headList));

  // [2,3,6,7,1,5,4]
  head = [2, 1, 3, 5, 6, 4, 7];
  headList = headToList(head);
  console.log(oddEvenList(headList));
}
