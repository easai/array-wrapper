/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper extends Array {
  constructor(nums) {
    super();
    for (var i = 0; i < nums.length; i++) {
      this.push(nums[i]);
    }
  }
}

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += Number(this[i]);
  }
  return sum;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  var str = "[";
  for (var i = 0; i < this.length; i++) {
    if (i > 0) {
      str += ",";
    }
    str += this[i];
  }
  str += "]";
  return str;
};

module.exports = ArrayWrapper;
