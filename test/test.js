var assert = require("chai").assert;
var stock = require("../lib/index");

describe("Find max profit of stock prices", function () {
  it("should return 16 if the stock prices are [45, 24, 35, 31, 40, 38, 11]", function() {
    var result = stock.maxProfit([45, 24, 35, 31, 40, 38, 11]);
    assert.isTrue(result === 16);
  });

  it("should return 38 if the stock prices are [45, 24, 7, 35, 2, 40, 11, 38]", function() {
    var result = stock.maxProfit([45, 24, 7, 35, 2, 40, 11, 38]);
    assert.isTrue(result === 38);
  });

  it("should return 8 if the stock prices are [2, 3, 10, 6, 4, 8, 1]", function() {
    var result = stock.maxProfit([2, 3, 10, 6, 4, 8, 1]);
    assert.isTrue(result === 8);
  });

  it("should return 2 if the stock prices are [ 7, 9, 5, 6, 3, 2 ]", function() {
    var result = stock.maxProfit([ 7, 9, 5, 6, 3, 2 ]);
    assert.isTrue(result === 2);
  });
});



