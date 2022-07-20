// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
console.log("Please pick a number from 0 to 10")
var fortune = 6
// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
console.log("Fortune selected:" + fortune)
if (fortune >= 0 && fortune <= 3) {
    console.log("You have a weak fortune, too bad")
}
else if (fortune > 3 && fortune <= 7) {
    console.log("Your fortune is average, nothing to get excited over")
}
else if (fortune > 7 && fortune <=10) {
    console.log("Your fortune is pretty good, I would play the lottery if I were you")
}
else {
    console.log("Next time, listen to directions")
}
