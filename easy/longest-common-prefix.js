/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = strs[0]
  if(!str) return ''
  let res = ''
  for(let i = 0; i < str.length; i++) {
    // every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
    // let flag = strs.every(checkItem)
    // function checkItem(item) {
    //   return item[i] === str[i]
    // }
    let flag = strs.every(item => item[i] === str[i])
    if (flag) {
      res += str[i]
    } else {
      return res
    }
  }
  return res
};
