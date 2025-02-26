import { ListNode, headToList, outputList } from "./linked-list";

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l1Head = l1;
  let l1Prev = null;

  let carry = 0;
  while (l1) {
    l1.val += (l2 === null ? 0 : l2.val) + carry;
    if (l1.val >= 10) {
      carry = Math.floor(l1.val / 10);
      l1.val %= 10;
    } else {
      carry = 0;
    }

    l1Prev = l1;
    l1 = l1.next;
    l2 = l2 === null ? null : l2.next;
    if (!l1 && (carry > 0 || l2)) {
      l1Prev.next = new ListNode(carry, null);
      l1 = l1Prev.next;
      carry = 0;
    }
  }

  return l1Head;
}

export default function testQuiz() {
  let l1, l2;
  let list1, list2;

  // [7,0,8]
  l1 = [2, 4, 3];
  l2 = [5, 6, 4];

  list1 = headToList(l1);
  list2 = headToList(l2);
  outputList(addTwoNumbers(list1, list2));

  // [8,9,9,9,0,0,0,1]
  l1 = [9, 9, 9, 9, 9, 9, 9];
  l2 = [9, 9, 9, 9];

  list1 = headToList(l1);
  list2 = headToList(l2);
  outputList(addTwoNumbers(list1, list2));

  l1 = [9, 9, 9];
  l2 = [9, 9, 9, 9];

  list1 = headToList(l1);
  list2 = headToList(l2);
  outputList(addTwoNumbers(list1, list2));
}
