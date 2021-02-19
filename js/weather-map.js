(function() {
    "use strict"
    var lat = 34.1941;
    var lng = -79.7636;
    var input = $("#user-input");
//     lat: 34.1941,
//     lon: -79.7636,
    //ajax request
    weatherMap();
    function weatherMap() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OWM_TOKEN,
            lat: lat,
            lon: lng,
            units: "imperial",
            exclude: "minutely,hourly"
        }).done(function (data) {
            console.log(data);
            renderHtml(data);
        });
    }
    //this function adds data to html bootstrap cards and displaya the weather
    function renderHtml(data) {
        var html = "";
        for(var i = 0; i < 5; i += 1) {
            var tempMax = data.daily[i].temp.max;
            var tempMin = data.daily[i].temp.min;
            var description = data.daily[i].weather[0].description;
            var windSpeed = data.daily[i].wind_speed;
            var pressure = data.daily[i].pressure;
            var humidity = data.daily[i].humidity;
            var iconCode = data.daily[i].weather[0].icon;
            var date = data.daily[i].dt;
            var date1 = new Date (date*1000);
            var date2 = date1.toLocaleDateString("en-US");
            html += "<div class='card' style='width: 17rem;'>";
            html += "<div class='card-header text-center'>" + date2 + "</div>";
            html += "<ul class='list-group list-group-flush'>";
            html += "<li class='list-group-item text-center'>" + tempMax + "°F" + " / " + tempMin + "°F" + "<br>" + "<img src='http://openweathermap.org/img/wn/" + iconCode + ".png'>" ;
            html += "<li class='list-group-item'>" + "Description: " + "<strong>" + description + "</strong>";
            html += "<li class='list-group-item'>" + "Humidity: " + "<strong>" + humidity + "</strong>";
            html += "<li class='list-group-item'>" + "Wind: " + "<strong>" + windSpeed + "</strong>";
            html += "<li class='list-group-item'>" + "Pressure: " + "<strong>" + pressure + "</strong>";
            html += "</ul>";
            html += "</div>";
        }
        $("#weather").html(html);
    }


})();




// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     APPID: OWM_TOKEN,
//     lat: 34.1941,
//     lon: -79.7636,
//     units: "imperial",
//     exclude: "minutely, hourly"
// }).done(function(data) {})
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
//youtube tutorial Dev Ed


// let nameValue = data['name']
// let tempValue = data['main']['temp']
// let descValue = data['weather'][0]['description']
//17410251e7b42b9f75fd4e1e02e2b9d5

