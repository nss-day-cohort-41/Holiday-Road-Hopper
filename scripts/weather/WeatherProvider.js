

let fiveDayForecast = [];

const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=537d2bcd65011c5597fa554c8c682b71`

//retrieves openweathermap data for selected park 
const fetchWeatherData = () => { 
    return fetch(weatherApiUrl)
            .then(httpResponse => { return httpResponse.json()}) 
            .then(weatherArray => {
                console.log('inside', weatherArray)                
                fiveDayForecast = weatherArray
                console.log('insideForecast', fiveDayForecast)})  
                
}


