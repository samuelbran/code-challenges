/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @returns {number}
 */
function removeDuplicates(nums) {
  let uniquesLength = 0;
  let dict = {};

  for (let i = 0; i < nums.length; i++) {
    if (!dict[nums[i]]) {
      dict[nums[i]] = true;
      uniquesLength++;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        nums[i + 1] = nums[j];
        break;
      }
    }
  }

  return uniquesLength;
}

module.exports = removeDuplicates;
