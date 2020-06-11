

//module responsible for passing api data into html converter and modifying the DOM


//clears out weather data container
const clearWeatherData = () => {document.querySelector(".weatherBox__element").innerHTML = ""}


const weatherList = (data) => {
     
    clearWeatherData()
    for (let currentDay of data) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox__element").innerHTML += weatherHTML
        
    }
}