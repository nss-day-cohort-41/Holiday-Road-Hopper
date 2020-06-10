

//module responsible for modifying the DOM



const weatherList = (data) => {
    for (let currentDay of data.list) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox__element").innerHTML += weatherHTML
    }
}