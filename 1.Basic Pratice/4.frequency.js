function sameFrequency(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!counter1[arr1[i]]) {
      counter1[arr1[i]] = 1;
    } else {
      counter1[arr1[i]]++;
    }
    if (!counter2[arr2[i]]) {
      counter2[arr2[i]] = 1;
    } else {
      counter2[arr2[i]]++;
    }
  }

  console.log(counter1, counter2);

  for (let property in counter1) {
    if (!counter2[property] || counter2[property] !== counter1[property]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency("aacabb", "bwbaaa"));
