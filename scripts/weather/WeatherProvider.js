let fiveDayForecast = [];

parkLocation = ''

apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Nashville&units=imperial&appid=537d2bcd65011c5597fa554c8c682b71"

//retrieves openweathermap data for selected park 
const fetchWeatherData = (weatherUrl) => { return fetch(weatherUrl)
        .then(httpResponse => { return httpResponse.json()}) 
        .then(weatherArray => fiveDayForecast = weatherArray)   
}

