

//module responsible for passing api data into html converter and modifying the DOM


//clears out weather data container
const clearWeatherData = () => {document.querySelector(".weatherBox__element").innerHTML = ""}


const weatherList = (data) => {
     
    clearWeatherData()
    document.querySelector(".weatherBox").classList.remove("hidden")
    for (let currentDay of data.forecast) {
        const weatherHTML = weatherConverter(currentDay, data.city)
        document.querySelector(".weatherBox__element").innerHTML += weatherHTML
        
        
    }
}