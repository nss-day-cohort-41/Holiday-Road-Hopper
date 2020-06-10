const renderAttractions = () => {
    const attractionsHTML = attractionsConverter(attractions)
    const attractionsArticleElement = document.querySelector(".block__attraction")
    attractionsArticleElement.innerHTML = attractionsHTML
    }

const renderAttractionsDropdown = () => {
    for (const currentAttractionDropdown of attractions) {
    const attractionsDropdownHTML = attractionsDropdownConverter(currentAttractionDropdown)
    const attractionsDropdownArticleElement = document.querySelector(".bizarre__Dropdown")
    attractionsDropdownArticleElement.innerHTML += attractionsDropdownHTML
    }
}

const attractionsDropdown = document.querySelector(".bizarre__Dropdown")
const attractionsTarget = document.querySelector(".block__attraction")
const clearAttractions = () => attractionsTarget.innerHTML = ""

attractionsDropdown.addEventListener("change", (clickEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value
    const attractionsHTML = attractionsConverter(attractions, userChoice)
    const attractionsArticleElement = document.querySelector(".block__attraction")
    attractionsArticleElement.innerHTML = attractionsHTML
})

// Code for the details toggle button
const toggleHiddenAttractions = () => {
    document.querySelector(".attractionDetails").classList.toggle("hidden")}
