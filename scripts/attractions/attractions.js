const attractionsConverter = (attractions, id) => {
    const attractionsHTMLRepresentation =
        `<h2 class="previewName">${attractions[id -1].name}</h2>
        <p>${attractions[id -1].city}, ${attractions[id -1].state}</p>
        <img class="icon" src="images/attraction-pin.png" alt="attraction_img">
        <div class="buttonBox">
        <button id="detailsButton__attraction" onclick="toggleHiddenAttractions()">Tourist Trap Details</button>
        </div>
        <p class="attractionDetails hidden">${attractions[id -1].description}</p>`

    return attractionsHTMLRepresentation
}

const attractionsDropdownConverter = (attractions) => {
    const attractionsDropdownHTMLRepresentation =
        `<option value="${attractions.id}">${attractions.state} - ${attractions.name}</option>`

    return attractionsDropdownHTMLRepresentation
}