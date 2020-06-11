

const parkWeatherData = {
    linkGenerator (locationData, apiData) {
        //generates api access link from park lat & long data along with the api key

         let weatherLink = `https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.latitude}&lon=${locationData.longitude}&units=imperial&appid=${apiData.weatherKey}`



        return weatherLink
    }
}

