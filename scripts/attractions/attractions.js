const attractionsConverter = (attractions) => {
    const attractionsHTMLRepresentation =
        `<h2>${attractions.name}</h2>
        <ul>
            <li>${attractions.city}, ${attractions.state}</li>
            <li>${attractions.description}
        </ul>`

    return attractionsHTMLRepresentation
}


const attractionsDropdownConverter = (attractions) => {
    const attractionsDropdownHTMLRepresentation =
        `<option value="${attractions.state}">${attractions.state} - ${attractions.name}</option>`

    return attractionsDropdownHTMLRepresentation
}