class MyLinkedList {
  constructor() {
    this.data = [];
  }

  private data: (number | undefined)[];

  get(index: number): number {
    return this.data[index] !== undefined ? this.data[index] : -1;
  }

  addAtHead(val: number): void {
    this.data.splice(0, 0, val);
  }

  addAtTail(val: number): void {
    this.data.push(val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < this.data.length) this.data.splice(index, 0, val);
    else if (index === this.data.length) this.data.push(val);
  }

  deleteAtIndex(index: number): void {
    this.data.splice(index, 1);
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export default function testQuiz() {
  const result = [];
  let myLinkedList = new MyLinkedList();
  result.push(myLinkedList);
  result.push(myLinkedList.addAtHead(1));
  result.push(myLinkedList.addAtTail(3));
  result.push(myLinkedList.addAtIndex(1, 2)); // linked list becomes 1->2->3
  result.push(myLinkedList.get(1)); // return 2
  result.push(myLinkedList.deleteAtIndex(1)); // now the linked list is 1->3
  result.push(myLinkedList.get(1)); // return 3

  console.log(result);
}
