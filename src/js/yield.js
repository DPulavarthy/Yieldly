/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  NAV BAR


document.getElementById('dataBtn').addEventListener('click', _ => {
    window.location.href = 'data.html'
});
document.getElementById('calcBtn').addEventListener('click', _ => {
    window.location.href = 'calc.html'
});
document.getElementById('marketBtn').addEventListener('click', _ => {
    window.location.href = 'market.html'
});
document.getElementById('profileBtn').addEventListener('click', _ => {
    window.location.href = 'profile.html'
});


/////////////////////////////////////////////////////////////////////////////////////////////////////

const cropType = window.localStorage.getItem('selectedCrop');
const startDate = window.localStorage.getItem('selectedStartDate');
const harvestDate = window.localStorage.getItem('selectedHarvestDate');
const area = window.localStorage.getItem('acreArea');

document.getElementById('cropTypeTitleBox').innerHTML = cropType;
document.getElementById("startTxtBx").innerHTML = startDate;
document.getElementById("endTxtBx").innerHTML = harvestDate;


document.getElementById("restartYPBtn").addEventListener("click", _ => {
    window.location.href = 'calc.html';
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Yield Calcualtor

// calculate total days inbetween
const date1 = new Date(startDate);
const date2 = new Date(harvestDate);
const oneDay = 24 * 60 * 60 * 1000;
const totalDaysInBetween = Math.round(Math.abs((date2 - date1) / oneDay));

const lat = parseFloat(window.localStorage.getItem('userLatitude'));
const lon = parseFloat(window.localStorage.getItem('userLongitude'));
// const lat = 32.7767;
// const lon = -96.805;

// const turf = require('@turf/turf');
// const axios = require('axios');

// CREATE A POLYGON given total area of farm land
// const center = [lon, lat]; // longitude, latitude
// const distance = area / 2.471; // ha : 1 ha = 2.47 acres;

// const polygon = turf.polygon([[
//   turf.destination(center, distance, 45, { units: 'meters' }).geometry.coordinates,
//   turf.destination(center, distance, 135, { units: 'meters' }).geometry.coordinates,
//   turf.destination(center, distance, 225, { units: 'meters' }).geometry.coordinates,
//   turf.destination(center, distance, 315, { units: 'meters' }).geometry.coordinates,
//   turf.destination(center, distance, 45, { units: 'meters' }).geometry.coordinates
// ]]);

// const geoJson = {
//   name: 'Farm Land Testing',
//   geo_json: {
//     type: 'Feature',
//     properties: {},
//     geometry: polygon.geometry
//   }
// };

const AGRO_API_KEY = 'b763a3b1d5efb4ecaceba3df59726e7e';

window.localStorage.setItem('polygonID', '6423ed3050d9ff3a31558a78');

// Soil Data
const urlSoil = `http://api.agromonitoring.com/agro/1.0/soil?polyid=${window.localStorage.getItem('polygonID')}&appid=${AGRO_API_KEY}`;

(async () => {
    const raw = await fetch(urlSoil);
    const data = await raw.json();
    window.localStorage.setItem('soilmoist', data.moisture);
    //Weather Forcast
    const urlWeather = `https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=${lat}&lon=${lon}&appid=${AGRO_API_KEY}`;

    (async () => {
    const raw = await fetch(urlWeather);
    const data = await raw.json();
    let rainCount = 0;
    let totalTemp = 0;
    
    for (const item of data) {
        if ('main' in item) {
        totalTemp += (item.main.temp - 273.15);
        }
        if ('rain' in item) {
        rainCount++;
        }
    }
    
    window.localStorage.setItem('totalTemp', totalTemp);
    window.localStorage.setItem('rainCount', rainCount);
    })();
})();

// acres of land
// date of forcast = 6 days, 3 hrs each
const rainfall = window.localStorage.getItem('rainCount');
const temperature = window.localStorage.getItem('totalTemp');
const soilMoisture = window.localStorage.getItem('soilmoist');

const crops = {
  'Wheat': (rainfall, temperature) => (rainfall / 40) * (temperature / 10) * 5,
  'Tomatoes': (rainfall, temperature) => (rainfall / 40) * (temperature / 10) * 7,
  'Bananas': (rainfall, temperature) => (rainfall / 40) * (temperature / 10) * 10
};

// Just a Prototype, so for 3 crops: goes through each and uses user data to find yield for each
const yieldData = {};
for (const crop in crops) {
  yieldData[crop] = crops[crop](rainfall, temperature) * soilMoisture * area;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//              Calculate Price given Yield in Pounds
// Prototype: But Price Data will be fetched using USDA Market News API where each crop's price differs by state
// Current Prices below are from USDA 
const prices = {
    'Wheat': (yieldWheat) => (yieldWheat / 60) * 7.95,
    'Tomatoes': (yieldTomat) => (yieldTomat / 25) * 18.95,
    'Bananas': (yieldBana) => (yieldBana) * 20.50, 
}

// Prints Yield of The crop to HTML
for (const crop in yieldData) {
    if (crop == cropType.replace(/\s/g, '')) {
        //convert to pounds (lbs)
        let yieldLb = yieldData[cropType.replace(/\s/g, '')] * 2.205;
        yieldLb = yieldLb * (totalDaysInBetween / 6);
        document.getElementById('yieldNum').innerHTML = `${yieldLb.toFixed(2)} lbs`;

        const price = prices[cropType.replace(/\s/g, '')](yieldLb);
        document.getElementById('priceNum').innerHTML = `$ ${price.toFixed(2)}`;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('historyYPBtn').addEventListener('click', _ => {
    window.location.href = 'history.html'
});