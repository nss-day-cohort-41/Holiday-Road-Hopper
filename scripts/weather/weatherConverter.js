const weatherConverter = (weatherObject) => {
    
    console.log('temp', weatherObject.main.temp)
    const weatherHTMLRepresentation = 
    `<article class="weatherItem"> 
        <div class="weatherItem__data"> 
            Temperature: ${weatherObject.main.temp} 
            Feels Like: ${weatherObject.main.feels_like}
            Max Temp: ${weatherObject.main.temp_max} 
            Min Temp: ${weatherObject.main.temp_min} 
        </div> 
    </article>`
    return weatherHTMLRepresentation
}