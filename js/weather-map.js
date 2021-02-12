$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OWM_TOKEN,
    lat: 34.1941,
    lon: -79.7636,
    units: "imperial",
    exclude: "minutely, hourly"
}).done(function(data) {})
    // console.log(data);
//-79.76, 34.19













    // fetch(api)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(data =>{
    //         console.log(data);


// window.addEventListener('load', ()=> {
//     let long;
//     let lat;
//     let temperatureDescription = document.querySelector(".temperature-description");
//     let temperatureDegree = document.querySelector(".temperature-degree");
//     let locationTimeZone = document.querySelector(".location-timezone");
//
//
    // if(navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         long = position.coords.longitude;
    //         lat = position.coords.latitude;

        //     const proxy = "https://cors-anywhere.herokuapp.com/"
        //     const api = `${proxy}"https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=" +
        // "${long}units=imperial&exclude=minutely,hourly&appid=" + OWM_TOKEN`



                    //Set DOM Elements from API
                    // temperatureDegree.textContent = temperature;
                    // temperatureDescription.textContent= summary;
            //     })
            //
            // })

    // }else{
    //     alert("Error, But the Weather is always Sunny inside your Heart!")
//     }
// })
// });

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






