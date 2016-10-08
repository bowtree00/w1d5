// given list of stock prices for a day
// returns the maximum profit that could have been made
// by buying a stock at the given price and selling it later

var market = [45, 24, 35, 31, 40, 38, 11];

// find the lowest - 
// If lowest is the last entry of the day, ignore.
// 
var compArray = [];

for (i = 0; i < market.length; i++) {
  //var j = 0;
  for (j = i + 1; j < market.length; j++) {
    compArray.push(market[j] - market[i]);
  }
}

function getMaxOfArray(compArray) {
  return Math.max.apply(null, compArray);
}

console.log(getMaxOfArray(compArray));
