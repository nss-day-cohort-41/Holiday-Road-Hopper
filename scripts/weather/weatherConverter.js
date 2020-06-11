const weatherConverter = (forecastArray, weatherCity) => {
    //calls icon generator function
    
    const weatherHTMLRepresentation = 
    `<article class="weatherItem"> 
        <div class="weatherItem__data"> 
            <img class="weatherItem__data--icon "src="${weatherIcon.iconGenerete(forecastArray)}" alt="weather icon">
            <h5 class="weatehrItem__data--element">${weatherCity}</h5>
            <p class="weatherItem__data--element">${forecastArray.weather[0].main}</p>
            <p class="weatherItem__data--element">Max Temp: ${forecastArray.main.temp_max}</p>
            <p class="weatherItem__data--element" >Min Temp: ${forecastArray.main.temp_min}</p
        </div> 
    </article>`

    return weatherHTMLRepresentation
    
    
}
