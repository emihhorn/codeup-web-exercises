// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');
window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}"https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=" +
        "${long}units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN`

            fetch(api)
                .then(response => {
                    return response.json();
        })
                .then(data =>{
                    console.log(data);
                })

            })

    }else{
        alert("Error, But the Weather is always Sunny inside your Heart!")
    }
})


// var button = addEventListener('click',function (name) {
//     fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=" +
//         "-98.4936&units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN)
//         .then(response => response.json())
//         .then(data => console.log(data))
// })



// let nameValue = data['name']
// let tempValue = data['main']['temp']
// let descValue = data['weather'][0]['description']
//17410251e7b42b9f75fd4e1e02e2b9d5






