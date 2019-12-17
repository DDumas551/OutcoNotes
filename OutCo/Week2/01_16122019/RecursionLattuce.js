const lP = (m, n) => {
  let x = 0;
  let y = 0;
  const helper = (x, y) => {
    if (x > m || y > n) return 0;
    if (x == m && y == n) {
      return 1;
    }
    return helper(x + 1, y) + helper(x, y + 1);
  };
  return helper(0, 0);
};
console.log(lP(16, 10));
