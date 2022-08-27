/**
 * Given an integer array nums of unique elements, return all possible subsets
 * (the power set). The solution must not contain duplicate subsets. Return the
 * solution in specified order.
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[], [1], [2], [1,2],[3],[1,3],[2,3],[1,2,3]]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [[], [0]]
 *
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */

/**
 *
 * @param array nums
 * @returns array
 */
function powerSet(nums) {
  const powerSet = [[]];
  const numsRef = {};

  for (let i = 0; i < nums.length; i++) {
    if (!numsRef[nums[i]]) {
      powerSet.push([nums[i]]);
      numsRef[nums[i]] = true;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (!numsRef[nums[j]]) {
        powerSet.push([nums[j]]);
        numsRef[nums[j]] = true;
      }
      powerSet.push([nums[i], nums[j]]);
    }
  }

  if (nums.length > 1) {
    powerSet.push(nums);
  }

  return powerSet;
}

module.exports = powerSet;
