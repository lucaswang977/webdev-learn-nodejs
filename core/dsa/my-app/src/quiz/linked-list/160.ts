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

function arrayToIntersectedList(
  listA: number[],
  listB: number[],
  skipA: number,
  skipB: number,
  intersectVal: number
): [ListNode | null, ListNode | null] {
  let nodeA = listA.length === 0 ? null : new ListNode(listA[0]);
  let nodeB = listB.length === 0 ? null : new ListNode(listB[0]);
  let ptrA = nodeA;
  let ptrB = nodeB;

  if (intersectVal === 0) {
    skipA = listA.length;
    skipB = listB.length;
  }

  for (let i = 1; i < skipA; i++) {
    const nextNode = new ListNode(listA[i]);
    ptrA!.next = nextNode;
    ptrA = nextNode;
  }

  for (let i = 1; i < skipB; i++) {
    const nextNode = new ListNode(listB[i]);
    ptrB!.next = nextNode;
    ptrB = nextNode;
  }

  for (let i = skipA; i < listA.length; i++) {
    const nextNode = new ListNode(listA[i]);
    ptrA!.next = nextNode;
    ptrA = nextNode;
    ptrB!.next = nextNode;
    ptrB = nextNode;
  }

  return [nodeA, nodeB];
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const setA = new Set<ListNode>();
  const setB = new Set<ListNode>();

  let ptrA = headA;
  let ptrB = headB;
  while (ptrA !== null || ptrB !== null) {
    if (ptrA) {
      setA.add(ptrA);

      if (setB.has(ptrA)) {
        return ptrA;
      }
      ptrA = ptrA.next;
    }
    if (ptrB) {
      setB.add(ptrB);

      if (setA.has(ptrB)) {
        return ptrB;
      }
      ptrB = ptrB.next;
    }
  }

  return null;
}

export default function testQuiz() {
  let intersectVal, listA, listB, skipA, skipB;
  let nodeA, nodeB;

  intersectVal = 8;
  listA = [4, 1, 8, 4, 5];
  listB = [5, 6, 1, 8, 4, 5];
  skipA = 2;
  skipB = 3;

  [nodeA, nodeB] = arrayToIntersectedList(
    listA,
    listB,
    skipA,
    skipB,
    intersectVal
  );

  console.log(getIntersectionNode(nodeA, nodeB));

  intersectVal = 2;
  listA = [1, 9, 1, 2, 4];
  listB = [3, 2, 4];
  skipA = 3;
  skipB = 1;

  [nodeA, nodeB] = arrayToIntersectedList(
    listA,
    listB,
    skipA,
    skipB,
    intersectVal
  );

  console.log(getIntersectionNode(nodeA, nodeB));

  intersectVal = 0;
  listA = [2, 6, 4];
  listB = [1, 5];
  skipA = 3;
  skipB = 2;

  [nodeA, nodeB] = arrayToIntersectedList(
    listA,
    listB,
    skipA,
    skipB,
    intersectVal
  );

  console.log(getIntersectionNode(nodeA, nodeB));
}
