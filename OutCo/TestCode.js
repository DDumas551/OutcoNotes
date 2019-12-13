function evens(arr) {
  if (arr.length === 0) return undefined;
  let bucket = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) bucket.push(arr[i]);
  }
  return bucket;
}

// console.log(evens([4, 1, 5, 6, 7, 8, 10]));

const odds = arr => {
  if (arr.length === 0) return null;
  let bucket = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      bucket.push(arr[i]);
    }
  }
  return bucket;
};

// console.log(odds([1, 2, 3]));

const threes = num => {
  if (num <= 2 || num == 0) return null;
  let bucket = [];
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      bucket.push(i);
    }
  }
  return bucket;
};

console.log(threes(50));
