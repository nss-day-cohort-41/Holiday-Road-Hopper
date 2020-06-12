

const weatherConverter = {
    forecastConverter (forecastArray) {
        const weatherHTMLRepresentation = 
        `<article class="weatherItem"> 
            <div class="weatherItem__data"> 
                <img class="weatherItem__data--icon"src="${weatherIcon.iconGenerete(forecastArray)}" alt="weather icon">
                <p class="weatherItem__data--element">${forecastArray.dt_txt}</p>
                <p class="weatherItem__data--element">${forecastArray.weather[0].main}</p>
                <p class="weatherItem__data--element">Max Temp: ${forecastArray.main.temp_max}</p>
                <p class="weatherItem__data--element" >Min Temp: ${forecastArray.main.temp_min}</p
            </div> 
        </article>`
    
        return weatherHTMLRepresentation
        
    },
    cityConverter (city) {
        cityHTML = 
        `<h3>Five Day Forecast: ${city}</h3>`
        return cityHTML
    }
}