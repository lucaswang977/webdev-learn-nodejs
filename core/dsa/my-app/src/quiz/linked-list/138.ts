/**
 * Definition for _Node.
 */
class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function headToList(head: (number | null)[][]): _Node | null {
  const nodeList: _Node[] = [];

  if (head.length === 0) return null;

  for (let i = 0; i < head.length; i++) {
    const node = new _Node(head[i][0]!);
    nodeList.push(node);

    if (i > 0) nodeList[i - 1].next = node;
  }

  for (let i = 0; i < head.length; i++) {
    const random = head[i][1];
    nodeList[i].random = random === null ? null : nodeList[random];
  }

  return nodeList[0];
}

function copyRandomList(head: _Node | null): _Node | null {
  const sourceList: (_Node | null)[] = [];
  const clonedList: (_Node | null)[] = [];

  if (!head) return head;

  let i = 0;
  while (head) {
    sourceList.push(head);
    const clonedNode = new _Node(head.val);
    if (head.random === null) clonedNode.random = null;

    clonedList.push(clonedNode);

    if (i > 0) clonedList[i - 1]!.next = clonedList[i];
    head = head.next;
    i++;
  }

  for (let i = 0; i < sourceList.length; i++) {
    if (sourceList[i]!.random !== null) {
      const index = sourceList.findIndex((v) => v === sourceList[i]!.random);
      if (index >= 0) {
        clonedList[i]!.random = clonedList[index];
      }
    }
  }

  return clonedList[0];
}

export default function testQuiz() {
  let head, headList: _Node | null;

  // [[7,null],[13,0],[11,4],[10,2],[1,0]]
  head = [
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ];
  headList = headToList(head);
  console.log(copyRandomList(headList));

  // [[1,1],[2,1]]
  head = [
    [1, 1],
    [2, 1],
  ];
  headList = headToList(head);
  console.log(copyRandomList(headList));

  // [[3,null],[3,0],[3,null]]
  head = [
    [3, null],
    [3, 0],
    [3, null],
  ];
  headList = headToList(head);
  console.log(copyRandomList(headList));
}
