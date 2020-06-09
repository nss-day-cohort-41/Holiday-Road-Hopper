import API from "../Settings.js"

let fiveDayForecast = [];

const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=${API.weatherKey}`

//retrieves openweathermap data for selected park 
const fetchWeatherData = (weatherUrl) => { return fetch(weatherUrl)
        .then(httpResponse => { return httpResponse.json()}) 
        .then(weatherArray => fiveDayForecast = weatherArray)   
}

