let unsorted = [14, -4, 17, 6, 22, 1, -5];

selectionSort(unsorted);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
    console.log(arr);
  }
  console.log(arr);
  return arr;
}
