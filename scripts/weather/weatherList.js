

//module responsible for modifying the DOM



const weatherList = (data) => {
    for (let currentDay of data) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox__element").innerHTML += weatherHTML
        
    }
}