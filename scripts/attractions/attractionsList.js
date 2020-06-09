const renderAttractions = () => {
    for (let currentAttraction of attractions) {
    const attractionsHTML = attractionsConverter(currentAttraction)
    const attractionsArticleElement = document.querySelector(".block__attraction")
    attractionsArticleElement.innerHTML += attractionsHTML
    }
}

const renderAttractionsDropdown = () => {
    for (const currentAttractionDropdown of attractions) {
    const attractionsDropdownHTML = attractionsDropdownConverter(currentAttractionDropdown)
    const attractionsDropdownArticleElement = document.querySelector(".bizarre__Dropdown")
    attractionsDropdownArticleElement.innerHTML += attractionsDropdownHTML
    }
}