

//forecast updated weather data 8 times a day, this reduces it to one check per day


weatherSorter = (weatherData) => {
    
    const sortedWeather = {}
    sortedWeather.city = weatherCity.getCity(weatherData)
    sortedWeather.forecast = []

    for (let i = weatherData.list.length / 8; i <= weatherData.list.length; i += 8) {
        sortedWeather.forecast.push(weatherData.list[i])
    } 
    
    return sortedWeather
}

