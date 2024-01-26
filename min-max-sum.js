"use strict";

function miniMaxSum(arr) {
  if (arr.length !== 5) {
    return null;
  }

  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  const min = arr.slice(0, len - 1).reduce((acc, cur) => acc + cur, 0);

  const max = arr.slice(1).reduce((acc, cur) => acc + cur, 0);
  console.log(max);
  console.log(min);
}

miniMaxSum([4, 2, 6, 8, 7]);
