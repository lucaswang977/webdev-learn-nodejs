import { headToList, ListNode, outputList } from "./linked-list";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let headPtr = head;
  let prev = null;
  let len = 0;

  if (!head || k === 0) return head;
  while (headPtr) {
    len++;
    prev = headPtr;
    headPtr = headPtr.next;
  }
  k %= len;
  prev!.next = head;

  headPtr = head;
  for (let i = 0; i < len - k; i++) {
    prev = headPtr;
    headPtr = headPtr!.next;
  }
  prev!.next = null;

  return headPtr;
}

export default function testQuiz() {
  let head: number[], k, headList: ListNode | null;

  // [4,5,1,2,3]
  head = [1, 2, 3, 4, 5];
  k = 2;
  headList = headToList(head);
  outputList(rotateRight(headList, k));

  // [2,0,1]
  head = [0, 1, 2];
  k = 4;
  headList = headToList(head);
  outputList(rotateRight(headList, k));

  head = [];
  k = 0;
  headList = headToList(head);
  outputList(rotateRight(headList, k));
}
