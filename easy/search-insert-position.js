/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let last = nums.length - 1
  if (target > nums[last]) return last + 1
  else if (target < nums[0]) return 0

  let start = 0
  let end = last
  let middle = 0
  let m_num = 0
  while(true){
    middle = Math.floor((start + end) / 2)
    m_num = nums[middle]
    if (target === m_num) return middle
    else if (end - start === 1) return start + 1
    else if (target > m_num) start = middle
    else if (target < m_num) end = middle
  }
};
