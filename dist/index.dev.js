"use strict";

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function ArrayWrapper(nums) {
  var _nums = nums;
};
/**
 * @return {number}
 */


ArrayWrapper.prototype.valueOf = function () {};
/**
 * @return {string}
 */


ArrayWrapper.prototype.toString = function () {
  var str = "[";

  for (var i = 0; i < _nums.length; i++) {
    if (i > 0) {
      str += ",";
    }

    str += _nums[i];
  }

  return str;
};
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */


module["export"] = ArrayWrapper;