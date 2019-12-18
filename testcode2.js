function fibIt(arr, num) {
  let newArr = [0];
  for (let i = 0; i < num; i++) {
    newArr.push((i += newArr[i - 1]));
  }
  return newArr;
}

console.log(fibIt([0, 1], 10));
