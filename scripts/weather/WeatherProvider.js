fiveDayForecast = [];

parkLocation = ``

weatherUrl = ``

//retrieves openweathermap data for selected park 
const weatherAPI = {
fetchForecast = () => {
        return fetch("https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=537d2bcd65011c5597fa554c8c682b71")
            .then(httpResponse => { return httpResponse.json()})
            .then(forecastArray => {fiveDayForecast = forecastArray})

    }
}

fetchWeather()

console.log(fiveDayForecast)