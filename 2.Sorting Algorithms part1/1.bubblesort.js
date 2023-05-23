function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    let swapping = false;
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swapping = true;
      }
    }
    if (swapping == false) {
      break;
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}

bubbleSort(test);
bubbleSort([5, 4, 3, 2, 1]);

//1
//5.4.3.2.1
//5.4.3.1.2
//5.4.1.3.2
//5.1.4.3.2
//1.5.4.3.2

//2
//1.5.4.2.3
//1.5.2.4.3
//1.2.5.4.3

//3
//1.2.5.3.4
//1.2.3.5.4

//4
//1.2.3.4.5

//n=5
//1/2 * n^2 - 1/2*n
//25/2 - 5/2 = 10
