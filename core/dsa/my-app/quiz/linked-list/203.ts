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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let ptr = head;
  let prev: ListNode | null = null;

  while (ptr) {
    if (ptr.val === val) {
      if (prev === null) {
        head = ptr.next;
      } else {
        (prev as ListNode).next = ptr.next;
      }
    } else {
      prev = ptr;
    }
    ptr = ptr.next;
  }

  return head;
}

export default function testQuiz() {
  let head: number[], val, headList;

  // [1,2,3,4,5]
  head = [1, 2, 6, 3, 4, 5, 6];
  val = 6;
  headList = headToList(head);
  console.log(removeElements(headList, val));

  // []
  head = [];
  val = 1;
  headList = headToList(head);
  console.log(removeElements(headList, val));

  // []
  head = [7, 7, 7, 7];
  val = 7;
  headList = headToList(head);
  console.log(removeElements(headList, val));
}
