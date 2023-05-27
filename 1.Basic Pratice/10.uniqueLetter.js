function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let count = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(count);
    if (count[str[end]]) {
      count[str[start]]--;
      start++;
    } else {
      count[str[end]] = 1;
      end++;
      if (end - start > maxLength) {
        maxLength = end - start;
      }
    }
  }

  if (maxLength == -Infinity) {
    console.log("You can't find unique letters substring.");
    return null;
  } else {
    console.log(maxLength);
    return maxLength;
  }
}

uniqueLetterString(""); // You can't find unique letters substring.
uniqueLetterString("Thisisapen"); // 6

/*
{ T: 1 }
{ T: 1, h: 1 }
{ T: 1, h: 1, i: 1 }
{ T: 1, h: 1, i: 1, s: 1 }
{ T: 0, h: 1, i: 1, s: 1 }
{ T: 0, h: 0, i: 1, s: 1 }
{ T: 0, h: 0, i: 0, s: 1 }
{ T: 0, h: 0, i: 1, s: 1 }
{ T: 0, h: 0, i: 1, s: 0 }
{ T: 0, h: 0, i: 1, s: 1 }
{ T: 0, h: 0, i: 1, s: 1, a: 1 }
{ T: 0, h: 0, i: 1, s: 1, a: 1, p: 1 }
{ T: 0, h: 0, i: 1, s: 1, a: 1, p: 1, e: 1 }
*/
