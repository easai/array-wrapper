"use strict";

var ArrayWrapper = require("./script.js");

describe("test suite", function () {
  it("test a", function () {
    var obj1 = new ArrayWrapper([1, 2]);
    var obj2 = new ArrayWrapper([3, 4]);
    res = obj1 + obj2; // 10

    ans = 10;
    console.log(res);
    expect(res).toEqual(ans);
  });
  it("test b", function () {
    var obj = new ArrayWrapper([23, 98, 42, 70]);
    res = String(obj);
    ans = "[23,98,42,70]";
    console.log(res);
    expect(res).toEqual(ans);
  });
  it("test c", function () {
    var obj1 = new ArrayWrapper([]);
    var obj2 = new ArrayWrapper([]);
    res = obj1 + obj2; // 0

    ans = 0;
    console.log(res);
    expect(res).toEqual(ans);
  });
});