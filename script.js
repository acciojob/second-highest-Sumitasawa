function secondHighest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return -Infinity;

  let nums = arr.map(Number);

  let max = -Infinity;
  let second = -Infinity;

  for (let num of nums) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num < max && num > second) {
      second = num;
    }
  }

  return second === -Infinity ? -Infinity : second;
}
