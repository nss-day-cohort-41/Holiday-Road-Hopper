// Renders an HTML representation of each eatery to be rendered in the list container

function eateryConverter(eateryObject) {
    const eateryHTMLRepresentation = `<option value="${eateryObject.id}">${eateryObject.businessName}</option>`

return eateryHTMLRepresentation
}

// value="${eateryCollection[id -1]}"

// CONVERTS HTML TEXT INTO PREVIEW BOX

function eateryPreviewConverter(eateryCollection, id) {
    for (object of eateryCollection) {
        if (object.id === id) {
            const previewHTML = `<h2>${object.businessName}</h2>
            <div class="buttonBox">
                <button id="detailsButton" value="${object.id}">Park Details</button>
            </div>
            <img class="icon" src="" alt="">`
            console.log('EATERY HTML', previewHTML)
            return previewHTML
        }
    }
}


// DETAILS BUTTON OVERLAY

const eateryDetailsConverter = (eateryCollection, eateryObject) => {
    for (object of eateryCollection) {
        if (object.id === eateryObject) {
            const eateryHTMLRepresentation = `<div class="modal-content">
            <h2>${object.businessName}</h2>
            <span class="close">&times;</span>
            <div class="content">
                <p>Vegan lumbersexual pug, godard 8-bit sustainable four loko PBR&B 3 wolf moon copper mug edison bulb farm-to-table you probably haven't heard of them bicycle rights. Jean shorts cold-pressed tacos pabst raclette photo booth.</p>
            </div>
        </div>`
            console.log('EATERY DETAILS', eateryHTMLRepresentation)
            return eateryHTMLRepresentation
        }
    }
}


// console.log('THE STUFF I WANT TO BE READ', eateryObject)
//     const detailsHTML = `<div class="modal-content">
//         <h2>${eateryObject.businessName}</h2>
//         <span class="close">&times;</span>
//         <div class="content">
//             <p>Vegan lumbersexual pug, godard 8-bit sustainable four loko PBR&B 3 wolf moon copper mug edison bulb farm-to-table you probably haven't heard of them bicycle rights. Jean shorts cold-pressed tacos pabst raclette photo booth.</p>
//         </div>
//     </div>`
//     console.log('THE STUFF THAT ACTUALLY APPEARS', detailsHTML)

// return detailsHTML
// }

