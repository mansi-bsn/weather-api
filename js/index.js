
// attach api key and url 
let apiKey = "99447f9797b5ad3c71ac56dc41c52dd2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// select searchbox and search button 

let searchBox = document.querySelector(".search input");
let submitBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");// select weather image for change according temprature


// create async function for attch api to project 
async function checkWeather(city) {// whose searched  by user
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // write if code for 404 error handling 
    if (response.json === 404){
        document.querySelector(".error").style.display = "block"; // if user search any undefined city then display error
        document.querySelector(".weather").style.display = "none";// and weather data's display are none
    }else {
        document.getElementById("city").innerHTML = data.name;// select and change city name according search box
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C"; // select and change temperature according search
        document.getElementById("humidity").innerHTML = data.main.humidity + "%"; // select and change according city temparature
        document.getElementById("wind").innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h"; // select and change wind according city temperature
    
        console.log(data); // check data in console
    
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./images/clouds.png";// if weather is clouds then image displays clouds.png
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./images/clear.png";// if weather is clear then image displays clear.png
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./images/rain.png";// if weather is rain then image displays rain.png
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";// if weather is drizzle then image displays drizzle.png
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "./images/mist.png";// if weather is mist then image displays mist.png
        }
        document.querySelector(".weather").style.display = 'block';// weather data display are block
    }
}

checkWeather("Bengaluru"); // default city 

// when user click on search icon then function call of checkweather
submitBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
