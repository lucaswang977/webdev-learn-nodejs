import { ListNode, headToList, outputList } from "./linked-list";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let ptr1 = list1;
  let ptr2 = list2;
  let prev = list1;

  while (ptr1 && ptr2) {
    if (ptr1 && ptr2.val < ptr1.val) {
      const temp = ptr2.next;
      ptr2.next = ptr1;
      if (list1 === ptr1) {
        list1 = ptr2;
        ptr1 = list1;
      }

      ptr2 = temp;
    } else if (ptr1.next && ptr2.val >= ptr1.val && ptr2.val < ptr1.next.val) {
      const temp = ptr2.next;
      const next = ptr1.next;
      ptr1.next = ptr2;
      ptr2.next = next;
      ptr2 = temp;
    } else {
      prev = ptr1;
      ptr1 = ptr1.next;
    }
  }

  if (ptr2) {
    if (prev) prev.next = ptr2;
    else list1 = ptr2;
  }

  return list1;
}

export default function testQuiz() {
  let list1: number[], list2: number[], headList1, headList2;

  // [1,1,2,3,4,4]
  list1 = [1, 2, 4];
  list2 = [1, 3, 4];
  headList1 = headToList(list1);
  headList2 = headToList(list2);
  outputList(mergeTwoLists(headList1, headList2));

  // []
  list1 = [];
  list2 = [];
  headList1 = headToList(list1);
  headList2 = headToList(list2);
  outputList(mergeTwoLists(headList1, headList2));

  // [0]
  list1 = [];
  list2 = [0];
  headList1 = headToList(list1);
  headList2 = headToList(list2);
  outputList(mergeTwoLists(headList1, headList2));

  list1 = [1, 2, 3, 4];
  list2 = [2, 6];
  headList1 = headToList(list1);
  headList2 = headToList(list2);
  outputList(mergeTwoLists(headList1, headList2));
}
