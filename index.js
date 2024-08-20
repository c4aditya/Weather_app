// Geting search weather 
let search = document.querySelector('.search_weather')
// search button
let search_section = document.querySelector('.search_section')
// main section
let main = document.querySelector(".main")
// geting description
let dec = document.querySelector(".dec")
// geting wind speed 
let wind_speed = document.querySelector(".wind_speed")
//humidity
let humidity = document.querySelector('.humidity')
// cloud
let cloud = document.querySelector(".cloudshow")
// temperture 
let temperture = document.querySelector(".Temperture")
// city name 
let city_name = document.querySelector(".city_name")


// grant access click
let API_key = "1d4d58b5231eb39b6dea9da4a4e0c4e2"
let grant_access = document.querySelector(".grant_access")
// when you click on the grant location then it automatically fetch your location
grant_access.addEventListener("click", async function () {
    grant_access.style.color = "red";

    // Nmvigatior is the inbuild API that fetch the current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            try {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                console.log(data);
                console.log(data.weather[0].description);
                console.log(data.wind.speed);

                // Update the DOM with the weather data
                city_name.innerHTML = data.name;

                wind_speed.innerHTML = data.wind.speed + "km/hr";

                humidity.innerHTML = data.main.humidity

                cloud.innerHTML = data.clouds.all

                dec.innerHTML = data.weather[0].description;

                temperture.innerHTML = data.main.temp - 273 + "C"

                weather.classList.add("weather_active");

                main.classList.add("main_remove");

               

            } catch (err) {
                console.log("Getting a problem to fetch data", err);
            }
        }, function (error) {
            console.log("Error getting location", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

});


// on your weather click 

let your_weather = document.querySelector('.your_weather')

let weather = document.querySelector('.weather')

your_weather.addEventListener("click", async () => {
    weather.classList.add("weather_active")
    main.classList.add("main_remove")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            try {
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data = await response.json();
                console.log(data);
                console.log(data.weather[0].description);
                console.log(data.wind.speed);

                // Update the DOM with the weather data
                city_name.innerHTML = data.name;

                wind_speed.innerHTML = data.wind.speed + "km/hr";

                humidity.innerHTML = data.main.humidity

                cloud.innerHTML = data.clouds.all

                dec.innerHTML = data.weather[0].description;

                temperture.innerHTML = data.main.temp - 273 + "C"

                weather.classList.add("weather_active");

                main.classList.add("main_remove");

               

            } catch (err) {
                console.log("Getting a problem to fetch data", err);
            }
        }, function (error) {
            console.log("Error getting location", error);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    

})



// on click of search weather 
search.addEventListener("click", async () => {
    search.style.color = "red";
    search_section.classList.add("search_section_active")
    main.classList.add("main_remove")

})

// on click of search icon
// let search_city=document.querySelector(".search_city")

let search_icon = document.querySelector(".search_icon")

search_icon.addEventListener("click", async () => {
    let search_city = document.querySelector(".search_city").value;

    weather.classList.add("weather_active")




    let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${API_key}`)

    let data = await responce.json()
    city_name.innerHTML = data.name;
    dec.innerHTML = data.weather[0].description;
    wind_speed.innerHTML = data.wind.speed + "km/hr";

    humidity.innerHTML = data.main.humidity

    cloud.innerHTML = data.clouds.all

    temperture.innerHTML = data.main.temp - 273 + "C"
    console.log(data);


})

//total tem = k-273.15
