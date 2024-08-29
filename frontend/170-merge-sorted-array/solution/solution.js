/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */

module.exports = function merge(nums1, m, nums2, n) {
  // ваш код здесь
}


function merge(nums1, m, nums2, n) {
  for (let i = 0; i < nums2.length; i++) {
      nums1.push(nums2[i]);
  }

  return nums1.filter(num => num !== 0).sort((prev, next) => prev - next);
}

merge([46,55,88,0,0,0,0], 3, [18,29,80,90], 4);
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
