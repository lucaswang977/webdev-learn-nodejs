class MyCircularQueue {
  private k: number;
  private data: (number | null)[];
  private head: number;
  private tail: number;
  private nulls: number;

  constructor(k: number) {
    this.data = new Array(k).fill(null);

    this.k = k;
    this.head = 0;
    this.tail = 0;
    this.nulls = k;
  }

  enQueue(value: number): boolean {
    if (this.nulls === 0) {
      return false;
    } else {
      if (this.data[this.tail] !== null) {
        this.tail++;
        if (this.tail === this.k) this.tail = 0;
      }
      this.data[this.tail] = value;
      this.nulls--;
    }

    return true;
  }

  deQueue(): boolean {
    if (this.nulls === this.k) {
      return false;
    } else {
      this.data[this.head] = null;
      this.nulls++;
      const next = this.head + 1 === this.k ? 0 : this.head + 1;
      if (this.data[next] !== null) this.head = next;
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
    if (this.nulls === this.k) return true;
    return false;
  }

  isFull(): boolean {
    if (this.nulls === 0) return true;
    return false;
  }
}

export default function testQuiz() {
  let myCircularQueue;

  myCircularQueue = new MyCircularQueue(3);
  console.log(myCircularQueue.enQueue(1)); // return True
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.enQueue(4)); // return False
  console.log(myCircularQueue.Rear()); // return 3
  console.log(myCircularQueue.isFull()); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(4)); // return True
  console.log(myCircularQueue.Rear()); // return 4
  console.log("--");

  myCircularQueue = new MyCircularQueue(6);
  console.log(myCircularQueue.enQueue(6)); // return True
  console.log(myCircularQueue.Rear()); // return 6
  console.log(myCircularQueue.Rear()); // return 6
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(5)); // return True
  console.log(myCircularQueue.Rear()); // return 5
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.Front()); // return -1
  console.log(myCircularQueue.deQueue()); // return False
  console.log(myCircularQueue.deQueue()); // return False
  console.log(myCircularQueue.deQueue()); // return False
  console.log("--");

  myCircularQueue = new MyCircularQueue(1);
  console.log(myCircularQueue.enQueue(6)); // return True
  console.log(myCircularQueue.Rear()); // return 6
  console.log(myCircularQueue.enQueue(5)); // return False
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.deQueue()); // return False
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.Front()); // return 2
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(1)); // return True
  console.log(myCircularQueue.Rear()); // return 1
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.deQueue()); // return False
  console.log("--");

  myCircularQueue = new MyCircularQueue(3);
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.Rear()); // return 2
  console.log(myCircularQueue.Front()); // return 2
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.Front()); // return -1
  console.log(myCircularQueue.deQueue()); // return False
  console.log(myCircularQueue.Front()); // return -1
  console.log(myCircularQueue.enQueue(4)); // return True
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.enQueue(3)); // return False
  console.log("--");

  myCircularQueue = new MyCircularQueue(2);
  console.log(myCircularQueue.enQueue(1)); // return True
  console.log(myCircularQueue.enQueue(2)); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.Front()); // return 3
  console.log("--");

  myCircularQueue = new MyCircularQueue(7);
  console.log(myCircularQueue.enQueue(0)); // return True
  console.log(myCircularQueue.Front()); // return 0
  console.log(myCircularQueue.enQueue(4)); // return True
  console.log(myCircularQueue.Rear()); // return 4
  console.log(myCircularQueue.enQueue(6)); // return True
  console.log(myCircularQueue.enQueue(3)); // return True
  console.log(myCircularQueue.Rear()); // return 3
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.Front()); // return 4
  console.log(myCircularQueue.deQueue()); // return True
  console.log(myCircularQueue.Front()); // return 6
  console.log("--");
}
