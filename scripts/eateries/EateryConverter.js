// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}