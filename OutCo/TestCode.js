function findNumber(arr, k) {
  if (arr.length < 1) return false;
  if (arr.length > 10 ** 5) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 ** 9) return false;
    if (arr[i] !== k) {
      console.log("NO");
    } else {
      return console.log("YES");
    }
  }
}

findNumber([1, 2, 3, 4, 5], 3);
