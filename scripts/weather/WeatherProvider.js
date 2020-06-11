

let fiveDayForecast = [];



//retrieves openweathermap data for selected park 
const fetchWeatherData = (weatherData) => { 
    return fetch(weatherData)
            .then(httpResponse => { return httpResponse.json()}) 
            .then(weatherArray => { fiveDayForecast = weatherArray })  
                
}


//request inside an object
const getWeather =  {
    fetchWeatherData (weatherData) {
        return fetch(weatherData)
                .then(httResponse => {return httResponse.json()})
                .then(weatherArray => fiveDayForecast = weatherArray)
                .then(() => {
                    console.log('forecast data', fiveDayForecast)
                    let blah = weatherSorter(fiveDayForecast) 
                    return blah})
                .then((sortedWeather) => {weatherList(sortedWeather)})

    }
}


