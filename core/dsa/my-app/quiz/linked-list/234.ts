import { ListNode, headToList } from "./linked-list";

function isPalindrome(head: ListNode | null): boolean {
  let result = true;

  // reverse the next pointer on the first half
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    if (!slow) break;
    const temp = slow.next;
    slow.next = prev;
    prev = slow;

    slow = temp;
  }

  if (fast && slow) {
    slow = slow.next;
  }

  // check if the first half and second half are the same
  while (slow && prev) {
    if (slow.val !== prev.val) {
      result = false;
      break;
    }

    slow = slow.next;
    prev = prev.next;
  }

  return result;
}

export default function testQuiz() {
  let head, headList;

  // true
  head = [1, 2, 2, 1];
  headList = headToList(head);
  console.log(isPalindrome(headList));

  // false
  head = [1, 2];
  headList = headToList(head);
  console.log(isPalindrome(headList));

  head = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  headList = headToList(head);
  console.log(isPalindrome(headList));
}
