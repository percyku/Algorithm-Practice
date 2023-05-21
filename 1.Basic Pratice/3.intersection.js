function intersection_way1(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  console.log(result);
  return result;
}

function intersection_way2(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else counter[arr3[i]]++;
  }
  console.log(counter);

  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }
  console.log(result);
  return result;
}
intersection_way1([1, 2, 4, 5], [232, 23131, 14, 1, 2, 3]);
intersection_way2([1, 2, 4, 5], [232, 23131, 14, 1, 2, 3]);
