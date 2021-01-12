"use strict";

//console.log ("For Loops Exercises")

// Exercises
// -Create an HTML file named loops.html. Each of the following sections will instruct you to create a new javascript file. For each exercise, you should include a script tag on your html page that links the correct .js file.
//
// For Loops
// 1. Create a file named for_loops.js inside the js directory and link it to your loops.html file.


// 2. Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var x = 1; x < 10; x++){
    console.log((num + '*' + x + '=' + (num)))
    }
}

//showMultiplicationTable(7);

// For example, showMultiplicationTable(7) should output
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70


// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// src - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//
function createTenRandomEvenOddMessages() {
    var random, evenOddString;
    for (var i = 0; i < 10; i += 1) {
        random = randomIntFromInterval(20, 200);
        evenOddString = (random % 2 === 0) ? "even" : "odd";
        console.log(random + " is " + evenOddString);
    }
}

//createTenRandomEvenOddMessages();

// 4. Create a for loop that uses console.log to create the output shown below.
for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}



// 5. Create a for loop that uses console.log to create the output shown below.


// for (var i = 100; i > 0; i -= 5 ); {
//     console.log(i);
// }