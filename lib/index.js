module.exports = {
  maxProfit: function(prices) {
    var diff = [];
    for (var i = 0; i < prices.length; i++) {
      diff.push(prices[i+1] - prices[i]);
    }
    var max_diff = diff[0];
    for (var j=0; j < prices.length-1; j++) {
      if (diff[j-1] > 0) {
        diff[j] += diff[j-1];
      }
      if (max_diff < diff[j]) {
        max_diff = diff[j];
      }
    }
    console.log(max_diff);
    return max_diff;
  }
};