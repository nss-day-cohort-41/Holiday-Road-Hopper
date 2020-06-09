getEateryData().then(
    () => {
        eateryList()
    }
)


fetchWeatherData(weatherApiUrl).then(
    () => {weatherList()}
    )
