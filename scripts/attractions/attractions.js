const attractionsConverter = (attractions, id) => {
    const attractionsHTMLRepresentation =
        `<h2>${attractions[id -1].name}</h2>
        <p>${attractions[id -1].city}, ${attractions[id -1].state}</p>
        <p>${attractions[id -1].description}</p>
        </ul>`

    return attractionsHTMLRepresentation
}


const attractionsDropdownConverter = (attractions) => {
    const attractionsDropdownHTMLRepresentation =
        `<option value="${attractions.id}">${attractions.state} - ${attractions.name}</option>`

    return attractionsDropdownHTMLRepresentation
}