

//module responsible for modifying the DOM



const weatherList = (data) => {
    for (let currentDay of data.list) {
        const weatherHTML = weatherConverter(currentDay)
        console.log(document.querySelector(".weatherBox__elements"))
        document.querySelector(".weatherBox__elements").innerHTML += weatherHTML
    }
}