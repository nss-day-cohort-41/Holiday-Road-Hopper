// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}



// CONVERTS HTML TEXT INTO PREVIEW BOX

function eateryPreviewConverter(eateryCollection, id) {
    const eateryHTMLRepresentation = `<h2>${eateryCollection[id -1].businessName}</h2>
        <button class="details" type="button">Details</button>
    <img class="icon" src="" alt="">`

return eateryHTMLRepresentation
}
