

let fiveDayForecast = [];



//retrieves openweathermap data for selected park 
const fetchWeatherData = (weatherData) => { 
    return fetch(weatherData)
            .then(httpResponse => { return httpResponse.json()}) 
            .then(weatherArray => { fiveDayForecast = weatherArray })  
                
}


