"use strict";

var i = 2;
while (i <= 65536) {
    console.log(i);
    i *= 2;
}


/*
var allCones = Math.floor(Math.random() * 50) + 50;   // This is how you get a random number between 50 and 100
var conesToSell;
console.log('We have ' + allCones + ' to sell.');
do {
 */



function pluralOrSingularCones(numOfCones) {
    return (numOfCones > 1) ? 'cones' : 'cone';
}
function createRandomIceCreamOrder(allCones) {
    var conesToSell;
    conesToSell = Math.floor(Math.random() * 5) + 1;
    if (conesToSell <= allCones) {
        console.log(conesToSell + ' ' + pluralOrSingularCones(conesToSell) + ' sold... ');
        allCones -= conesToSell; // subtract conesToSell from all of the cones
    } else { // otherwise
        console.log('Cannot sell' + conesToSell + ' ' + pluralOrSingularCones(conesToSell) + ' I only have ' + allCones + ' ...')// log cannot sell message
    }
    console.log(allCones + ' are left');
    return allCones;
}
function runIceCreamStore() {
    var allCones = Math.floor(Math.random() * 50) + 50;

    console.log('We have ' + allCones + ' to sell.');



    do {
        allCones = createRandomIceCreamOrder(allCones);
    } while (allCones > 0);
    console.log('Yall come back ya hear!');
} runIceCreamStore();