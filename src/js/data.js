document.getElementById('calcBtn').addEventListener('click', _ => {
    window.location.href = 'calc.html'
});
document.getElementById('marketBtn').addEventListener('click', _ => {
    window.location.href = 'market.html'
});
document.getElementById('profileBtn').addEventListener('click', _ => {
    window.location.href = 'profile.html'
});

document.getElementById("locationHeading").textContent = window.localStorage.getItem('userCity') + ", " + window.localStorage.getItem('userState') + " Data";

const AGRO_API_KEY = 'b763a3b1d5efb4ecaceba3df59726e7e';
const POLY = '6423ed3050d9ff3a31558a78';

const urlSoil = `http://api.agromonitoring.com/agro/1.0/soil?polyid=${POLY}&appid=${AGRO_API_KEY}`;

fetch(urlSoil)
  .then(response => response.json())
  .then(data => {
    document.getElementById("soilMoist").textContent = "Soil Moisture % = " + (data.moisture).toFixed(2);
  })
  .catch(error => console.error(error));

const urlWeather = `https://api.agromonitoring.com/agro/1.0/weather?lat=${window.localStorage.getItem('userLatitude')}&lon=${window.localStorage.getItem('userLongitude')}&appid=${AGRO_API_KEY}`

fetch(urlWeather)
.then(response => response.json())
.then(data => {
    document.getElementById("temp").textContent = "Temperature (deg. C) = " + (data.main.temp - 273.15).toFixed(2);
    document.getElementById("humidity").textContent = "Humidity % = " + (data.main.humidity).toFixed(2);
    document.getElementById("wind").textContent = "Wind Speed (meter/sec) = " + (data.wind.speed).toFixed(2);
    if('rain' in data){
        document.getElementById("rain").textContent = "Rain Volume = " + (data.rain['3h']).toFixed(2);
    }
})
.catch(error => console.error(error));

