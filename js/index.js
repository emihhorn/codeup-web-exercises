let name = 'Emily'; //String literal
let age = 30; // Number Literal
let isApproved = true //Boolean Literal true or false


// Cannot be a reserved keywork
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)

let firstName = undefined;
let selectedColor = null; //clear value

let person = {
    name: 'Emily'
    age : 30
};

//Dot Notation
person.name = 'John';

//Bracket Notation
let selection = 'name';
person[selection] = 'Mary'

console.log(person.name);