import { headToList, ListNode, outputList } from "./linked-list";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let headPtr = head;

  return head;
}

export default function testQuiz() {
  let head, k, headList: ListNode | null;

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
}
