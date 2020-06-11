

const parkWeatherData = {
    linkGenerator (locationData, apiData) {
        //generates api access link from park lat & long data along with the api key
        console.log('park locat', locationData)
        console.log('api key', apiData)
         let weatherLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.latitude}&lon=${locationData.longitude}&units=imperial&appid=${apiData.weatherKey}`

         console.log('weatherLink', weatherLink)

        return weatherLink
    }
}

