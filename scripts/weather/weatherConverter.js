const weatherConverter = (weatherObject) => {
    //calls icon generator function
    const weatherIconLink = weatherIcon.iconGenerete(weatherObject)

    const weatherHTMLRepresentation = 
    `<article class="weatherItem"> 
        <div class="weatherItem__data"> 
            <img src="${weatherIconLink}" alt="weather icon">
            <p class="weatherItem__data--element">${weatherObject.weather[0].main}</p>
            <p class="weatherItem__data--element">Max Temp: ${weatherObject.main.temp_max}</p>
            <p class="weatherItem__data--element" >Min Temp: ${weatherObject.main.temp_min}</p
        </div> 
    </article>`
    return weatherHTMLRepresentation
}
