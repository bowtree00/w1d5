var money = process.argv[2];

// For every two empty bottles, you can get one free (full) bottle of pop
// For every four bottle caps, you can get one free (full) bottle of pop
// Each bottle of pop costs $2 to purchase

if (money < 2) {
  console.log("Not enough money to buy a bottle of pop");
} else {

  var start_bottles = money / 2;

  console.log("Start bottles: " + start_bottles);

  var new_bottles = start_bottles;

  var empties_remaining = 0;
  var caps_remaining = 0;

  var bottles_from_empties_count = 0;
  var bottles_from_caps_count = 0;

  i = 0;

  while ((new_bottles + empties_remaining) >= 2 || (new_bottles + caps_remaining) >= 4) {
    console.log("--------");
    console.log("i: ", i);
    var empties = new_bottles;
    var caps = new_bottles;

    var new_bottles = Math.floor((Number(empties) + Number(empties_remaining)) / 2); // count new bottles and empties
    empties_remaining = (Number(empties) + Number(empties_remaining)) % 2;

    bottles_from_empties_count = bottles_from_empties_count + new_bottles;

    console.log("new bottles from empties: " + new_bottles);

    bottles_from_caps = Math.floor((Number(caps) + Number(caps_remaining)) / 4); 
    caps_remaining = (Number(caps) + Number(caps_remaining)) % 4;

    console.log("new bottles from caps: " + bottles_from_caps);
    console.log();
    console.log("empties remaining " + empties_remaining);  
    console.log("caps remaining: " + caps_remaining);

    new_bottles = new_bottles + bottles_from_caps;

    bottles_from_caps_count = bottles_from_caps_count + bottles_from_caps;

    console.log("total new bottles: " + new_bottles);

    i = i + 1;
  };

  var total_bottles = start_bottles + bottles_from_empties_count + bottles_from_caps_count;

  console.log();
  console.log("================================================")
  console.log("Bottles originally purchased: " + start_bottles);
  console.log("Bottles obtained through bottle recycling: " + bottles_from_empties_count);
  console.log("Bottles obtained through cap recycling: " + bottles_from_caps_count);
  console.log("Remaining empties: " + empties_remaining + ", Remaining caps: " + caps_remaining);
  console.log("Total bottles obtained for $" + money + " = " + (total_bottles));
  console.log("Cost per bottle: $" + Math.round(100 * (money / total_bottles)) / 100);
  console.log("================================================")

}

  // var new_bottles = Math.floor((Number(empties) + Number(empties_remaining)) / 2); // count new bottles and empties
  // var empties_remaining = empties_remaining + ((empties + empties_remaining) % 2);


// };


