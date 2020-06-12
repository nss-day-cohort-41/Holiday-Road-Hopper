

// generates weather icon from openWeather API


const weatherIcon = {
    iconGenerete (weatherData) {

        //icon img link

        iconString = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

        return iconString
    }
}