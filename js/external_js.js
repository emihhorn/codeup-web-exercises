"use strict";

console.log("Hello from Javascript!");

alert("Welcome to my website");

//MOVIES RENTED
var favcolor = prompt("What is your favorite color?");

alert("Great, " + favcolor + " is my favorite color too!");

var littleMermaid = prompt("How many days did you rent The little Mermaid for?");

var brotherBear = prompt("How many days did you rent Brother Bear for?");

var Hercules = prompt("How many days did you rent Hercules for?");

var totalCost = (Number(littleMermaid) + Number(brotherBear) + Number(Hercules)) * 3;

alert("Your total cost for your rentals is going to be: $" + totalCost);

//JOBS WORKED
var googlehours = prompt("How many hours did you work for Google?");

var googlepay = prompt("How much did Google pay you per hour?")

var amazonhours = prompt("How many hours did you work for Amazon?");

var amazonpay = prompt("How much did Amazon pay you per hour?")

var facebookhours = prompt("How many hours did you work for Facebook?");

var facebookpay = prompt("How much did Facebook pay you per hour?")

var totalhours = Number(googlehours) + Number(amazonhours) + Number(facebookhours)

var totalpay = (Number(googlehours) * Number(googlepay)) + (Number(amazonhours) * Number(amazonpay)) + (Number(facebookhours) * Number(facebookpay));

alert("Your total paycheck for " + totalhours + " hours of work is: $" + totalpay);

//CLASSES
alert("You are about to enroll in this course.");
var classSize = prompt("What is the class size?");
var classConflict = confirm("Are there no schedule conflicts?");
var classConfirm = (classSize < 17) && (classConflict == true);
console.log(classConfirm);
alert ("Welcome to the class! It's " + classConfirm + "!");

//PURCHASES
var numberOfItems = prompt("How may items are you purchasing?");

numberOfItems = parseInt(numberOfItems);
var offerIsExpired = false;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && !offerIsExpired) || (numberOfItems >= 2 && !offerIsExpired);

alert("offer is valid :" + isOfferValid);