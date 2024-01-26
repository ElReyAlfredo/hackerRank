function plusMinusOne(arr) {
  let zero = 0;
  let positive = 0;
  let negative = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log((zero / arr.length).toFixed(6));
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
}

plusMinusOne([1, 1, 0, -2, -2]);
