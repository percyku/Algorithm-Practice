class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;
  }
  dequeue() {
    if (this.head === null) {
      return null;
    } else if (this.head === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }

  printAll() {
    if (this.head === null) {
      console.log("Nothing in this Queue.");
    } else {
      let currentNode = this.head;
      while (currentNode != null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

let myQueue = new Queue();
myQueue.enqueue("Apple");
myQueue.enqueue("banana");
myQueue.enqueue("cherry");

myQueue.dequeue();

myQueue.printAll();
