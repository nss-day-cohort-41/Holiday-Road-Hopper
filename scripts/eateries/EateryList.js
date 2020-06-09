// Creates an HTML container element which renders individual eateries for each eatery in the collection

const eateryList = () => {
    eateryListGenerator(eateryCollection)
}

const eateryListGenerator = (theDataToDisplay) => {
    // Iterate the array of eateries
    for (const eateryObject of theDataToDisplay) {
        // Convert the current eatery to its HTML representation
        const eateryHTMLRepresentation = eateryConverter(eateryObject)
        // Find the HTML element in index.html
        const eateryArticleElement = document.querySelector(".eatery__Dropdown")
        // Put the eatery HTML representation inside the HTML element
        eateryArticleElement.innerHTML += eateryHTMLRepresentation
    }
}