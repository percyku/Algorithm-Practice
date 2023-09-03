function permutationV1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i == k || j == k || i == j) {
          continue;
        }
        console.log(arr[i] + "," + arr[j] + "," + arr[k]);
      }
    }
  }
}

function permutationV2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        if (i == k || j == k) {
          continue;
        }
        console.log(arr[i] + "," + arr[j] + "," + arr[k]);
      }
    }
  }
}

function permutationV3(arr, start) {
  if (start >= arr.length) {
    console.log("add:", arr);
    result.push([...arr]);
  } else {
    for (let i = start; i < arr.length; i++) {
      console.log("swap before:", arr);
      swap(arr, i, start);
      console.log("swap after :", arr);
      console.log("start:", start);
      console.log("i    :", i);

      permutationV3(arr, start + 1);
      console.log("swap recover before :", arr);
      swap(arr, i, start);
      console.log("swap recover after  :", arr);
      console.log("recover start:", start);
      console.log("recover i    :", i);
    }
  }
}

function swap(arr, n1, n2) {
  let temp = arr[n1];
  arr[n1] = arr[n2];
  arr[n2] = temp;
}

let x = ["A", "B", "C"];
// let x = ["A", "B", "C", "D", "E"]
// permutationV1(x);
// permutationV2(x);
let result = [];
permutationV3(x, 0);
console.log(result);

console.log("x final", x);
