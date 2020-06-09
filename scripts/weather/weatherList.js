

//module responsible for modifying the DOM

const weatherList = (weather) => {
    for (let currentDay of weather) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox").innerHTML += weatherHTML
    }
}