import API from "./Settings.js"

getEateryData().then(
    () => {
        eateryList()
    }
)




fetchWeatherData()
    .then(() => {
            weatherList()
        }
    )
