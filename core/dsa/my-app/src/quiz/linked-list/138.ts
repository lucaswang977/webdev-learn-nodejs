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

function copyRandomList(head: _Node | null): _Node | null {}

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

  // [[1,1],[2,1]]
  head = [
    [1, 1],
    [2, 1],
  ];

  // [[3,null],[3,0],[3,null]]
  head = [
    [3, null],
    [3, 0],
    [3, null],
  ];
}
