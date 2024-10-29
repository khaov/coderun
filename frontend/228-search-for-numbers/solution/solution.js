/** @returns Boolean */
module.exports = function(nums, k) {
  return nums.some((currentNum, currentIndex) => nums.some((someNum, someIndex) => currentIndex !==someIndex && currentNum + someNum === k));
}

// function search(nums, k) {
//   return nums.some((currentNum, currentIndex) => nums.some((someNum, someIndex) => currentIndex !==someIndex && currentNum + someNum === k));
// }

// search([10, 15, 3, 7], 17)