class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    //check if the priority is empty
    if (this.values.length === 0) {
      this.values.push(newNode);
      return true;
    }

    this.values.push(newNode);
    let newIndex = this.values.length - 1;
    let parentIndex = Math.floor((newIndex - 1) / 2);
    while (
      parentIndex >= 0 &&
      this.values[newIndex].priority > this.values[parentIndex].priority
    ) {
      //swap parent and child
      let result = this.values[parentIndex];
      this.values[parentIndex] = this.values[newIndex];
      this.values[newIndex] = result;

      newIndex = parentIndex;
      parentIndex = Math.floor((newIndex - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return null;
    }
    if (this.values.length === 1) {
      let removeNode = this.values.pop();
      return removeNode;
    }

    //swap two nodes
    let temp = this.values.pop();
    this.values.push(this.values[0]);
    this.values[0] = temp;
    let removeNode = this.values.pop();

    this.maxHeapofy(0);

    return removeNode;
  }

  maxHeapofy(i) {
    let largest;
    let l = i * 2 + 1;
    let r = i * 2 + 2;

    if (
      l <= this.values.length - 1 &&
      this.values[l].priority > this.values[i].priority
    ) {
      largest = l;
    } else {
      largest = i;
    }

    if (
      r <= this.values.length - 1 &&
      this.values[r].priority > this.values[largest].priority
    ) {
      largest = r;
    }

    if (largest != i) {
      //swap
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      this.maxHeapofy(largest);
    }
  }
}

let pq = new PriorityQueue();
pq.enqueue("Eat Breakfast", 5);
pq.enqueue("Listen Podcast", 2);
pq.enqueue("Go to Work", 7);
pq.enqueue("Send Mail", 3);
pq.enqueue("Validate Code", 6);
pq.enqueue("Relax", 1);
// console.log(pq);

// let task = pq.dequeue();
// console.log(task);

// pq.dequeue();
// pq.dequeue();
// let task = pq.dequeue();
// console.log(task);

while (pq.values.length >= 1) {
  let task = pq.dequeue();
  console.log(task.value + "," + task.priority);
}
