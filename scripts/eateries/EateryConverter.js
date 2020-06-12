// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}

// CONVERTS HTML TEXT INTO PREVIEW BOX

function eateryPreviewConverter(eateryCollection, id) {
    for (object of eateryCollection) {
        if (object.id === id) {
            const previewHTML = `<h2 class="previewName">${object.businessName}</h2>
            <p>${object.city}, ${object.state}</p>
            <img class="icon" src="images/eatery-pin.png" alt="eatery_img">
            <div class="buttonBox">
                <button id="detailsButton__eatery" value="${object.id}">Restaurant Details</button>
            </div>`
            console.log('EATERY HTML', previewHTML)
            return previewHTML
        }
    }
}


// DETAILS BUTTON OVERLAY
// This is the modal popup that will display when you click the details button

const eateryDetailsConverter = (eateryCollection, eateryObject) => {
    for (object of eateryCollection) {
        if (object.id === eateryObject) {
            const eateryHTMLRepresentation = `<div class="modal-content">
            <span class="close">&times;</span>
            <h4>${object.businessName}</h4>
            <div class="content">
                <dl>
                    <dt>City</dt>
                    <dd>${object.city}</dd>
                    <dt>State</dt>
                    <dd>${object.state}</dd>
                    <dt>Description</dt>
                    <dd>${object.description}</dd>
                </dl>
            </div>
        </div>`
            console.log('EATERY DETAILS', eateryHTMLRepresentation)
            return eateryHTMLRepresentation
        }
    }
}
