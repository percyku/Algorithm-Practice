let heapSize;
//let arr = [15, 3, 17, 18, 20, 2, 1, 666];
let arr = [6, 13, 10, 4, 1, 5, 2, 8, 14, 9, 11, 7, 3, 15, 12];
heapSort();
console.log(arr);

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    //swap arr[i] wtih A[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    //exchange arr[0] with arr[i]
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
  }

  return arr;
}
