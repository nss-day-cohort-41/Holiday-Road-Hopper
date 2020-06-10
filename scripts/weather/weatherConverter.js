const weatherConverter = (weatherObject) => {
    
    const weatherHTMLRepresentation = 
    `<article class="weatherItem"> 
        <div class="weatherItem__data"> 
            <p class="weatherItem__data--element">Weather: ${weatherObject.weather[0].main}</p>
            <p class="weatherItem__data--element">Max Temp: ${weatherObject.main.temp_max}</p>
            <p class="weatherItem__data--element" >Min Temp: ${weatherObject.main.temp_min}</p
        </div> 
    </article>`
    return weatherHTMLRepresentation
}