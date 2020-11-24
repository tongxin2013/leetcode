/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const len = nums.length
  let j = 0
  for(let i = 0; i < len; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i]
    }
    console.log(nums)
  }
  return j
};
