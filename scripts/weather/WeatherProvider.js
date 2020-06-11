

let fiveDayForecast = [];



//request inside an object
const getWeather =  {
    fetchWeatherData (weatherData) {
        return fetch(weatherData)
                .then(httResponse => {return httResponse.json()})
                .then(weatherArray => fiveDayForecast = weatherArray)
                .then(() => {
                    let blah = weatherSorter(fiveDayForecast) 
                    return blah})
                .then((sortedWeather) => {weatherList(sortedWeather)})

    }
}


