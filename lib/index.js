module.exports = {
  maxProfit: function(prices) {
    // creating a array storing the differences
    // between adjacent elements
    var diff = [];
    for (var i = 0; i < prices.length; i++) {
      diff.push(prices[i+1] - prices[i]);
    }
    // loop through the diff array
    var max_diff = diff[0];
    for (var j = 1; j < diff.length; j++) {
      // if the price is higher than the previous price
      // sum up the differences
      if (diff[j-1] > 0) {
        diff[j] += diff[j-1];
      }
      // update the max_diff
      if (max_diff < diff[j]) {
        max_diff = diff[j];
      }
    }
    return max_diff;
  }
};