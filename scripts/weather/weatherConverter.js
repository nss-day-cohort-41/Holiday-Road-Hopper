const weatherConverter = (weatherObject) => {
    
    const weatherHTMLRepresentation = 
    `<article class="weatherItem"> 
        <div class="weatherItem__data"> 
            Weather: ${weatherObject.weather.main}
            Max Temp: ${weatherObject.main.temp_max} 
            Min Temp: ${weatherObject.main.temp_min} 
        </div> 
    </article>`
    return weatherHTMLRepresentation
}