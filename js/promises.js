// -------- MINI EXERCISE 1

// const isGoodDog = true;

/* TODO: Uncomment the line above then create a promise, haveTreat, that resolves
    with the string 'Good dog; have treat'
    if the above constant is assigned to true and and rejects with the string
    'Bad dog; no treat' if assigned false.
 */


// Defining a promise
// const haveTreat = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         if ('Good dog') {
//             resolve("have treat");
//         } else {
//             reject("Bad dog. No treat. :(");
//         }
//     // }, 5000);
// });
//
// console.log(haveTreat); // promise object


// TODO: handle the promise by console logging the result if resolved or rejected

// haveTreat
//     .then((blah)=> {
//     console.log(blah)
// })
//     .catch((err)=> {
//         console.error(err)
//     })


/* TODO: Refactor the promise above by wrapping the conditional logic of whether to resolve or reject
    in a setTimeout so that the promise will only resolve or reject after five seconds.
*/
// -------- MINI EXERCISE 2

/* TODO: using the code from the first mini-exercise, create a function, trainDog, that takes
    that takes in a single boolean argument, isGoodDog, and returns a promise. This promise
    has an identical definition as the haveTreat promise from the previous mini exercise.
 */
// function trainDog (isGoodDog) {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         if ('Good dog') {
//             resolve("have treat");
//         } else {
//             reject("Bad dog. No treat. :(");
//         }
//         // }, 5000);
//     });
// }


/* TODO: invoke the trainDog function passing in true as and argument
    chain then and catch methods to handle the returned promise. Refactor
    to pass in false to the function.
 */
// trainDog(true)
//     .then((data)=> {
//         console.log(data);
//     } )
//     .catch((data)=> {
//         console.error(data);
//     } )

// Write a function named wait that accepts a number as a parameter, and returns a promise
// that resolves after the passed number of milliseconds.
//
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


/* TODO: make a GET request using fetch to the url below to get an array of five cat fact objects.
    Log the text property of the first cat fact object. Be sure to log possible errors in a catch.
 */

const catFactsURL = 'https://cat-fact.herokuapp.com/facts';

fetch(catFactsURL)
    .then(response => response.json())
    .then(data =>{
        const firCat = data[0];
        const { text } = firCat;
        console.log(text)
        // console.log(data[0].text);
    })
    .catch(console.error)

// -------- MINI EXERCISE 4

/* TODO: Create a new endpoint on https://hookbin.com/ and use fetch to send some POST requests.
    Experiment with sending different shapes of data in the body of the request.
 */
// function newEndpoint() {
//     fetch('https://hookb.in/G9ZoNeDK6oTWGGeQqrXG',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//
//         })
//     })
// }




/* TODO: fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
    Generate a Personal Access Token for the GitHub API.We will use this
    so that we don't get rate limited when talking to the GitHub API.
    You can add the token to your requests
    like this:fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})
    Create a function that accepts a GitHub username, and returns a
    promise that resolves returning just the date of the last commit that user made.
    Reference the github api documentation to achieve this.\
 */

function lastCommit(user) {
    return fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${gitHub}`  }})
        .then((data) => {
            // console.log(data);
            return data.json()
            })
}

lastCommit('emihhorn').then((data) => console.log(data));
//my wifi is spotty and did not git my last push