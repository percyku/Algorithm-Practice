maxSum_fast_version([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 35
minSum_slow_version([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum_fast_version(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let temValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    temValue = temValue + arr[j] - arr[j - size];
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}

function minSum_slow_version(arr, size) {
  let min_value = Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }

  console.log(min_value);
  return min_value;
}
