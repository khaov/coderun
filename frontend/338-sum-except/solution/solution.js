function sumExcept(a, i, n) {

  const array = a.map(num => Number.isInteger(num) ? num : 0);
  const index = i >= 0 ? i : 0;
  const quantity = n >= 0 ? n : 0;

  if (index >= array.length) {
    return array.reduce((sum, num) => sum += num, 0);
  } else {
    return array.filter((_, i) => i < index || i >= index + quantity)
                .reduce((sum, num) => sum += num, 0);
  }
}

module.exports = sumExcept


sumExcept([1, 9, 8, 4], 1, 2) // 5
