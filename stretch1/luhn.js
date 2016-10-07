var luhn = function (num) {
    
    var numArray = num.toString().split("").reverse();
    var checkDigit = Number(numArray.shift());

    var newArray = numArray.map(function(item, index) {
        if (index % 2 === 0) {
            return item = (item * 2);
        } else {
            return item;
        }
    });

    var separatedDigits = newArray.join("").split("");

    var sum = separatedDigits.reduce(function(previousVal, currentVal) {
        return Number(previousVal) + Number(currentVal);
    });

    return (sum + checkDigit) % 10 === 0 ? console.log("Your number is a valid card number!") : console.log("Your number is invalid.");
    
}

luhn(79927398713);
