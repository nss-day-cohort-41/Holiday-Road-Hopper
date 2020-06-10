// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}



// CONVERTS HTML TEXT INTO PREVIEW BOX

function eateryPreviewConverter(eateryCollection, id) {
    const eateryHTMLRepresentation = `<h2>${eateryCollection[id -1].businessName}</h2>
    <div class="buttonBox">
	    <button class="details">Park Details</button>
    </div>
    <img class="icon" src="" alt="">`

return eateryHTMLRepresentation
}


// DETAILS BUTTON OVERLAY

function detailsOverlay(eateryCollection, id) {
    const detailsHTML = `
    <div class="popup__content">
        <h2>${eateryCollection[id -1].businessName}</h2>
        <span class="close">&times;</span>
        <div class="content">
            <p>Vegan lumbersexual pug, godard 8-bit sustainable four loko PBR&B 3 wolf moon copper mug edison bulb farm-to-table you probably haven't heard of them bicycle rights. Jean shorts cold-pressed tacos pabst raclette photo booth. Bespoke aesthetic yr, YOLO truffaut selvage plaid semiotics polaroid blue bottle williamsburg enamel pin paleo iceland drinking vinegar. Photo booth jianbing fam, etsy gentrify pour-over whatever af readymade kombucha vape twee echo park. Copper mug live-edge helvetica, iceland raw denim pour-over cardigan cray four loko vinyl trust fund gastropub jean shorts intelligentsia butcher.</p>
        </div>
    </div>`

return detailsHTML
}

/* <button class="details" type="button">Details</button> */

