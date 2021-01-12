"use strict";

// Break and Continue
// 1. Create a file named break_and_continue.js in the js directory.
// 2. Prompt the user for an odd number between 1 and 50.
//    Use a loop and a break statement to continue prompting the user if they enter invalid input.
// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//    Your output should look like this:
// src - https://www.youtube.com/watch?v=ABvCASsgkTo

var userNum
function isValid(input) {
    input = parseFloat(input);
    var isNumeric = !isNaN(input);
    var isOdd = input % 2 !== 0;
    var isInCorrectRange = input >= 1 && input <= 50;
    return isNumeric && isOdd && isInCorrectRange;
}
function getUserNumber() {
    var userNum;

while(true) {
    var randomNumber = parseInt(prompt("Enter an odd number between 1 and 50."));
    if (randomNumber % 2 !== 0 && randomNumber <= 50 && randomNumber >= 1) {
        break;
    }
}
console.log ("Number to skip is: " + randomNumber);

for (var i = 1; i <= 50; i+=2) {
    if (i === randomNumber) {
        console.log('Yikes! Skipping number:' + i);
        continue;
    }
    console.log('Here is odd number: ' + i);
}};