// This function starts at the end of the array, and subtracts the min
// of the elements in the array to the left. 
// Repeats until finished, so the number of comparisons is much 
// smaller than the brute force method
// 

var market = [45, 24, 35, 31, 40, 38, 11];

var compArray = [];

for (i = market.length - 1; i > 0; i--) {
  var endItem = market[i];
  var remainingArr = market.slice(0, i);
  var minLeft = Math.min.apply(null, remainingArr);
  compArray.push(endItem - minLeft);
  // console.log("i ", i);
  // console.log("endItem ", endItem);
  // console.log("minLeft", minLeft);
}

function getMaxOfArray(compArray) {
  return Math.max.apply(null, compArray);
}

console.log(getMaxOfArray(compArray));