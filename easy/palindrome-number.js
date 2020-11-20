/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var str = x.toString()
  // 判断两个字符串是否相同
  // reverse() 方法用于颠倒数组中元素的顺序
  // join() 方法用于把数组中的所有元素放入一个字符串
  if ((str.split('').reverse().join('')) === str) {
    return true
  } else {
    return false
  }
};
