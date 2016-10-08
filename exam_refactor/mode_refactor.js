/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */

function getMaxOfArray(countArr) {
  return Math.max.apply(null, countArr);
}


function mode(arr) {

  var myObject = {};

  // Create an object and map all of the values in our input array (increment the count if encountered more than once)
  arr.forEach(function(item, index){
    if(!myObject[item]){
      myObject[item] = 1;
    } else {
      myObject[item] += Number(1);
    }
  })

  // Figure out which property of the element holds the highest count, then return the name of that property
  var countArr = [];

  for (var item in myObject) {  // get 'count' values from all object keys/properties
    countArr.push(myObject[item]);
  };

  var arrMax = getMaxOfArray(countArr); // figure out which count is max
  var indexMax = countArr.indexOf(arrMax); // find the index of the max count

  var keyNames = Object.keys(myObject); // get the keynames (will be in the same order as countArr, so once you have the index of the max, this points to the key name, which is our 'mode')

  return keyNames[indexMax];

}

console.log(mode([6,2,3,4,9,6,1,0,5, 3, 3, 5,5, 5]));

// console.log(mode([6,2,3,4,9,6,1,0,5]));






//   for (i = 0; i < arr.length; i++) {
//     var currVal = arr[i];
//     var numIndex = numArray.indexOf(currVal);

//     if (numIndex >= 0) {
//       // its in the numArray, so increment countArr at the right index
//       countArr[numIndex] ++;
//     } else {
//       // not in numArray so add it to numArray and add '1' to countArr
//       numArray.push(currVal);
//       countArr.push(1);
//     }
//   }

//   function getMaxOfArray(countArr) {
//     return Math.max.apply(null, countArr);
//   }

//   maxCount = getMaxOfArray(countArr);
//   maxIndex = countArr.indexOf(maxCount);

//   modeOutput = numArray[maxIndex];
//   return modeOutput;
// }



// Don't change below:

// module.exports = { mode: mode };
