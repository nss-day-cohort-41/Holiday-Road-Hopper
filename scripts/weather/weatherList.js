

//module responsible for passing api data into html converter and modifying the DOM



const weatherList = (data) => {
    for (let currentDay of data) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox__element").innerHTML += weatherHTML
        
    }
}