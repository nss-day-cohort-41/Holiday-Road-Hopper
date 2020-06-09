const renderAttractions = () => {
    for (const currentAttraction of attractions) {
    const attractionsHTML = attractionsConverter(currentAttraction)
    const attractionsArticleElement = document.querySelector(".block__attraction")
    attractionsArticleElement.innerHTML += attractionsHTML
    }
}