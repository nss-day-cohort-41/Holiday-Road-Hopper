

//module responsible for modifying the DOM



const weatherList = (data) => {
    console.log('List', data.list)
    for (let currentDay of data.list) {
        const weatherHTML = weatherConverter(currentDay)
        document.querySelector(".weatherBox").innerHTML += weatherHTML
    }
}