// api key
// 1629b09032d858fcfca8c3d4e14f11c9

const apiKey = "1629b09032d858fcfca8c3d4e14f11c9"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector('input');
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        const data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/hr';
    
        const weatherIcon = document.querySelector('.weatherIcon');
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = 'images/clouds.png'
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'images/clear.png'
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'images/rain.png'
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        } else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'images/mist.png'
        } else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'images/snow.png'
        } else if (data.weather[0].main == 'Wind') {
            weatherIcon.src = 'images/wind.png'
        }
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
})
 