const attractionsConverter = (attractions) => {
    const attractionsHTMLRepresentation =
    `<ul>
        <li>${attractions.name}</li>
        <li>${attractions.city}, ${attractions.state}</li>
        <li>${attractions.description}
    </ul>`

return attractionsHTMLRepresentation
}