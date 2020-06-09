const userInputParks = () => {
    // iterate using for of loop

    // convert the current LOCATION TO ITS HTML REPRESENTATION
    const userInputHTML = userParksSearch()

    const locationUserInput = document.querySelector(".dropdownBox")

    //put the Location HTML representation inside the article tag during each loop
    locationUserInput.innerHTML = userInputHTML

    //innerHTML allows editing to happen inside of the html document 
    //locationArticleElement has already be set equal to the .locationList class
}