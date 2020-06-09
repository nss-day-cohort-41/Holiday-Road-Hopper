let fiveDayForecast = [];

parkLocation = ``

weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=537d2bcd65011c5597fa554c8c682b71`

//retrieves openweathermap data for selected park 
const fetchForecast = (API) => {
    console.log(API)      
    return fetch(API)
        .then(httpResponse => { return httpResponse.json()})
        .then(forecastArray => {
            console.log(forecastArray)
            fiveDayForecast = forecastArray})

}


fetchForecast(weatherUrl)

console.log(fiveDayForecast)