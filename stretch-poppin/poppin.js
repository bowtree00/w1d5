var money = process.argv[2];

// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

var start_bottles = money / 2;

console.log("Start bottles: " + start_bottles);

var new_bottles = start_bottles;

var emptys_remaining = 0;
var caps_remaining = 0;

i = 0;

while ((new_bottles + emptys_remaining) >= 2 || (new_bottles + caps_remaining) >= 4) {
  console.log("--------");
  console.log("i: ", i);
  var emptys = new_bottles;
  var caps = new_bottles;

  var new_bottles = Math.floor((Number(emptys) + Number(emptys_remaining)) / 2); // count new bottles and emptys
  emptys_remaining = (Number(emptys) + Number(emptys_remaining)) % 2;

  console.log("new bottles from emptys: " + new_bottles);

  bottles_from_caps = Math.floor((Number(caps) + Number(caps_remaining)) / 4); 
  caps_remaining = (Number(caps) + Number(caps_remaining)) % 4;

  console.log("new bottles from caps: " + bottles_from_caps);
  console.log();
  console.log("emptys remaining " + emptys_remaining);  
  console.log("caps remaining: " + caps_remaining);

  new_bottles = new_bottles + bottles_from_caps;

  console.log("total new bottles: " + new_bottles);

  i = i + 1;

  if (i === 10) {break}; // catch runaway loop
}


  // var new_bottles = Math.floor((Number(emptys) + Number(emptys_remaining)) / 2); // count new bottles and emptys
  // var emptys_remaining = emptys_remaining + ((emptys + emptys_remaining) % 2);


// };


