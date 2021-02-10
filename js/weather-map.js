var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

var button = addEventListener('click',function (name) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN)
        .then(response => response.json())
        .then(data => console.log(data))
})



// let nameValue = data['name']
// let tempValue = data['main']['temp']
// let descValue = data['weather'][0]['description']
//17410251e7b42b9f75fd4e1e02e2b9d5

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// https://stackoverflow.com/questions/4822852/how-to-get-the-day-of-week-and-the-month-of-the-year
// https://stackoverflow.com/questions/1056728/where-can-i-find-documentation-on-formatting-a-date-in-javascript




