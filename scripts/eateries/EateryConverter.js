// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}

// value="${eateryCollection[id -1]}"

// CONVERTS HTML TEXT INTO PREVIEW BOX

function eateryPreviewConverter(eateryCollection, id) {
    const eateryHTMLRepresentation = `<h2>${eateryCollection[id -1].businessName}</h2>
    <div class="buttonBox">
	    <button id="detailsButton">Park Details</button>
    </div>
    <img class="icon" src="" alt="">`

return eateryHTMLRepresentation

}


// DETAILS BUTTON OVERLAY

const eateryDetailsConverter = (eateryObject) => {
    console.log('THE STUFF I WANT TO APPEAR', eateryObject)
    const detailsHTML = `<div class="modal-content">
        <h2>${eateryObject.businessName}</h2>
        <span class="close">&times;</span>
        <div class="content">
            <p>Vegan lumbersexual pug, godard 8-bit sustainable four loko PBR&B 3 wolf moon copper mug edison bulb farm-to-table you probably haven't heard of them bicycle rights. Jean shorts cold-pressed tacos pabst raclette photo booth.</p>
        </div>
    </div>`
    console.log('THE STUFF THAT ACTUALLY APPEARS', detailsHTML)

return detailsHTML
}

