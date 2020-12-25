

// //**********WHILE PRACTICE 1****************
// // !! make a loop to go from 20 to 50 with increments of ten !!

var i = 20

while (i <= 50) {
    console.log('while loop iteration #' + i);
    i++;
}


// //**********WHILE PRACTICE 2****************
// // !! write a program that will keep running until the user clicks ok !!




// //**********WHILE PRACTICE 3****************
// //create a function which puts on a coat if it's cold outside
// //use a while loop


//var x = 10;
//while (x > 5) {
//    console.log(x);
//   x--;

//for (int i = 0; i < 20; i++) {
    //do something
}

//var i = 20;//

//while (i < 51) {
 //   console.log('while loop iteration #' + i);
//    i++ +10;// should be plus equals +=
}
//

var i = 20;

while (i < 51) {
    console.log('while loop iteration #' + i);
    i+=10;
}
//
var i = 10;

do {
    confirm("click OK if you want this look to stop working");
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);
//

var temp = prompt("Enter the temp from outside");
var sky = prompt("tell us what it is like outside put ether sun, rain, snow (it is case sensitive so follow orders.)");
function getHot(temp) {
    if (temp >= 100) {
        alert("Bet u wish you could go naked but shorts and T-shirt will do.");
    }
    else if (temp >= 60) {
        alert("Ok thats a bit better but i would say shorts and T-shirt would be good.")
    }
    else if (temp >= 40){
        alert("Getting a bit nippy out maybe get some pants and a jacket.")
    }
    else if (temp >= 0){
        alert("Its cold outside put your heavy coat on.")
    }
    else if (temp <= -1){
        alert("Stay inside you fool theres no need to freeze to death.")
    }
    else {
        alert("you mess with me i mess with you refresh to do this right.")
    }
}
function getLight(sky) {
    if (sky == "sun"){
        alert("Enjoy the light get out your house it's good for you inless it's to hot or to cold then hide from the light.")
    }
    else if (sky == "rain"){
        alert("Can't beleave you have to ask this but get a umbrella and maybe a poncho.")
    }
    else if (sky = "snow"){
        alert("If you are afraid of getting wet then use a umbrella other then that bundle up.")
    }
    else {
        alert("not going to tell you again follow what i say refresh and do it again.")
    }
}

getHot(temp);
getLight(sky);

//Create a function that makes your $100k Tesla speed until the police are looking
//
function speedUntilPoliceAreLooking() {
    var isCop = false
    do {
    var response = prompt('is cop still looking?')
    if (response == 'yes')
    {isCop = true }
        alert("C'mon Grandma hit the lead")
    }
    while(isCop)
    }
//
for (var i = 1; i < 100; ++i) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
};


