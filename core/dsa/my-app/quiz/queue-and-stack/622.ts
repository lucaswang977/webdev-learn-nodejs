class MyCircularQueue {
  private k: number;
  private data: (number | null)[];
  private head: number;
  private tail: number;

  constructor(k: number) {
    this.data = new Array(k).fill(null);

    this.k = k;
    this.head = 0;
    this.tail = 0;
  }

  private countNulls = () => this.data.filter((v) => v === null).length;

  enQueue(value: number): boolean {
    const nulls = this.countNulls();

    if (nulls === 0) {
      return false;
    } else {
      this.data[this.tail] = value;
      this.tail++;
      if (this.tail === this.k) this.tail = 0;
    }

    return true;
  }

  deQueue(): boolean {
    const nulls = this.countNulls();

    if (nulls === this.k) {
      return false;
    } else {
      this.data[this.head] = null;
      this.head++;
      if (this.head === this.k) this.head = 0;
    }

    return true;
  }

  Front(): number {
    const num = this.data[this.head];
    return num === null ? -1 : num;
  }

  Rear(): number {
    const num = this.data[this.tail];
    return num === null ? -1 : num;
  }

  isEmpty(): boolean {
    const nulls = this.countNulls();
    if (nulls === this.k) return true;
    return false;
  }

  isFull(): boolean {
    const nulls = this.countNulls();
    if (nulls === 0) return true;
    return false;
  }
}

export default function testQuiz() {
  let myCircularQueue = new MyCircularQueue(3);
  console.log(myCircularQueue.enQueue(1)); // return True
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.enQueue(4)); // return False
  console.log(myCircularQueue.Rear()); // return 3
  console.log(myCircularQueue.isFull()); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(4)); // return True
  console.log(myCircularQueue.Rear()); // return 4
}
