

//forecast updated weather data 8 times a day, this reduces it to one check per day


weatherSorter = (weatherData) => {
    const sortedWeather = []
    for (let i = weatherData.list.length / 8; i <= weatherData.list.length; i += 8) {
        sortedWeather.push(weatherData.list[i])
    }   
    return sortedWeather
}

