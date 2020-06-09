

//module responsible for modifying the DOM
const weatherList = () => {
    weatherListGenerator(fiveDayForecast)
}


const weatherListGenerator = (data) => {
    console.log('List', data)
    for (let currentDay of data) {
        const weatherHTML = weatherConverter(currentDay)
        const weatherArticleElement = document.querySelector(".weatherBox")
        weatherArticleElement.innerHTML += weatherHTML
    }
}