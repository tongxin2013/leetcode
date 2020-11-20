/**
 * @param {number} x
 * @return {number}
 */

const MAX_INT = 2 ** 31 - 1
const MIN_INT = - (2 ** 31)

var reverse = function(x) {
  let str = x.toString() // number -> string
  let arr = str.split('') // string -> arr

  // 判断是否有负号
  if (arr[0] !== '-') {
    // reverse() 方法用于颠倒数组中元素的顺序
    // join() 方法用于把数组中的所有元素放入一个字符串
    let num = Number(arr.reverse().join(''))
    if (num <= MAX_INT && num >= MIN_INT) {
      return num
    } else {
      return 0
    }

  } else {
    delete arr[0]
    let num = Number(arr.reverse().join(''))
    if (num <= MAX_INT && num >= MIN_INT) {
      // ~ 取反
      return ~ num + 1
    } else {
      return 0
    }
  }
};
