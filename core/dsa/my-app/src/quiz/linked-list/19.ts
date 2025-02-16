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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }

  let curr = head;
  let nthBefore = head;
  let prev = head;
  let i = 0;

  while (curr.next !== null && nthBefore.next !== null) {
    if (i !== n - 1) {
      i++;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev = nthBefore;
      nthBefore = nthBefore.next;
    }
  }
  if (nthBefore === head) {
    head = nthBefore.next;
  } else {
    prev.next = nthBefore.next;
  }

  return head;
}

export default function testQuiz() {
  let head, n, headList;

  head = [1, 2, 3, 4, 5];
  n = 2;
  headList = headToList(head);
  console.log(removeNthFromEnd(headList, n));

  head = [1];
  n = 1;
  headList = headToList(head);
  console.log(removeNthFromEnd(headList, n));

  head = [1, 2];
  n = 1;
  headList = headToList(head);
  console.log(removeNthFromEnd(headList, n));

  head = [1, 2];
  n = 2;
  headList = headToList(head);
  console.log(removeNthFromEnd(headList, n));
}
