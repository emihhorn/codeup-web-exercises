(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    function addFullNameProperty(obj) {
        // your code here
        Object.defineProperty(obj, 'fullName', {
            get:  function(){
                return this.firstName + ' ' + this.lastName;
            },
            configurable:false
        });
    }

    var person = {
        firstName: 'Emily',
        lastName: 'Horn'
    };

    addFullNameProperty(person);

    console.log(person.fullName); // --> 'Emily Horn'



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


//alert("Hello World");

person.sayHello = function() {
    firstName: 'Emily'
};
    console.log(person.fullName);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
        {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
function calculateDiscount(amount, discountAmountThreshold, discountPercentage){
    if (amount > discountAmountThreshold) {
        return amount * discountPercentage;
    } else{
        return 0
    }
}
 function numToDollars(num) {
    return '$' +num.toFixed(2);

 }

     var discountAmountThreshold = 200;
     var discountPercentage = .12;

     shoppers.forEach(function(shopper) {
        var shopperName = shopper.name;
        var amountBeforeDiscount = shopper.amount;
        var amountOff = calculateDiscount(amountBeforeDiscount, discountAmountThreshold, discountPercentage);
        var totalCost = amountBeforeDiscount - amountOff;
        var message = shopperName +
            "purchased" + numToDollars(amountBeforeDiscount) +
            "and is getting" + numToDollars(amountOff) + " off the purchase price" +
            "and is paying" + numToDollars(totalCost);
        console.log(message);
     });
//higher order function


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

let books = [
        {title: 'JavaScript in 24hrs', author: {firstName: 'Phil', lastName: 'Ballard'}},
        {title: 'JavaScript the Good Parts', author: {firstName: 'Douglas', lastName: 'Crockford'}},
        {title: 'Basics Web Design', author: {firstName:'Fred', lastName: 'Thinker'}},
        {title: 'Teach yourself HTML,CSS', author: {firstName: 'Jennifer', lastName: 'Kyrnin'}},
        {title: 'You dont know JS,yet', author: {firstName: 'Kyle', lastName: 'Simmon'}},
        ]

console.log(books[1].title)
console.log(books[1].author.firstName)
console.log(books[1].author.lastName)

})();


/*
var books = [
        {
            title:'You dont know JS,yet',
            author: {
                firstName: "Kyle",
                lastName: "Simmon"
            }
        },

        {
            title1:'Teach yourself HTML, CSS, JS',
            author1: {
                firstName: "Jennifer",
                lastName: "Kynin"
            }
        },

        {
            title1:'Basics Web Design',
            author1: {
                firstName: "F3",
                lastName: "Thinker"
            }
        },

        {
            title1:'JavaScript the Good Parts',
            author1: {
                firstName: "Douglas ",
                lastName: "Crockford"
            }
        },

        {
            title1:'JavaScript in 24 Hrs',
            author1: {
                firstName: "Douglas ",
                lastName: "Crockford"
            }
        },
        ]
*/
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */






    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

//



//-- Mini Exercise 1
//Create a few beverage objects and assign values to each object for the following properties:
//    - brandName
//    - type
//    - volumeInLiters
//    - priceInCents
//    - expirationDate
//    - datesOfPreviousSips (use an array of strings)
//- isOpen
//Define your objects using both literal syntax to create all properties and values at once and also try defining empty objects and assign property values in separate statements using the dot notation.


/*
var beverages;
beverages = {
    brandName: 'ButterBeer',
    type: 'Cream Soda',
    volumeInLiters: '1 liter',
    priceInCents: '150',
    expirationDate: '01/01/2022',
    datesOfPreviousSips: [
        '01/01/2021',
        '01/02/2021',
        '01/03/2021',
    ]

};
*/

/* -- Mini Exercise 2

var users = [
    {
        givenName: 'Sam',
        age: 21
    },
    {
        givenName: 'Cathy',
        age: 34
    },
    {
        givenName: 'Karen',
        age: 43
    }
];

/*
 */
//Log all the users age

//console.log(users[0].age);
//console.log(users[1].age);
//console.log(users[2].age);

//for (var i = 0; i < users.length; i += 1) {
//    console.log(users[i].age);
//}

//users.forEach(function(user){
//   console.log(user.age);
//})



 // 1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"

//console.log(users[0].givenName + '' + user[1].givenName + '' + users[2].givenName);

 // 2. Change the names of all users to "John Doe"
//var users = 'John Doe';


//  3. Increase the current age of all users by 1
//users.forEach(function (user:){
//    user.age += 1
//    }
//)
//(+=)

//Can you accomplish each step using iteration?
/*
-- Mini Exercise 3
Create a dog object...
The dog object should have properties for:
breed (string),
    weightInPounds (number),
    age (number),
    color (string),
    canBreed (boolean),
    shotRecords (array of objects with properties for date and typeOfShot)
The dog object should have methods to:
    bark() - will console.log “Woof!”
    getOlder() - will increase age by 1
disableBreeding() - will set canBreed to false
vaccinate(nameOfVaccination) - takes in an argument for the name of the vaccination and adds a
new shot with the current date to the shotRecords array
 */

// var dog = {
//    breed : 'husky',
//    weightInPounds : '77lbs',
//    age : 4,
//    color : 'red',
//    canBreed : true,
//    shotRecords: ['rabbies', 'parvo', 'microchip'],
//    speak: function(){
//        console.log('Woof!');
//        console.log(this.age);
//        this.age += 1;
//    },
//    disableBreeding: function()
//    {
//        this.canBreed = false;
//    },
//    vaccinate: function (nameOfVaccine){
//    this.shotRecords.push({
//        typeOfShot : nameOfVaccine,
//        date: new Date()
//    })
//    }

//};

//var shotRecord = {
//    date: new Date (),
//    typeOfShot: 'rabies'
//};

//dog.speak();
//console.log(dog.age);
//dog.disableBreeding()
//console.log(dog.canBreed);
//dog.vaccinate('rabies');
//console.log(dog.shotRecords);
