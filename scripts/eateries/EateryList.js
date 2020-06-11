// Creates an HTML container element which renders individual eateries for each eatery in the collection

const eateryList = () => {
    eateryListGenerator(eateryCollection)
    // const filter = stateFilter()
    // eateryListGenerator(filter)
}

const eateryListGenerator = (theDataToDisplay) => {
    for (const eateryObject of theDataToDisplay) {
        const eateryHTMLRepresentation = eateryConverter(eateryObject)
        const eateryArticleElement = document.querySelector(".eatery__Dropdown")
        eateryArticleElement.innerHTML += eateryHTMLRepresentation
    }
}



//FILTER BY STATE
const stateTarget = document.querySelector(".eatery__Dropdown")
const clearList = () => stateTarget.innerHTML = ""

const storedState = $("#stateSelect").on('change', function() {
    const selectedState = $("#stateSelect option:selected").val()
    console.log(selectedState)
    // return selectedState
    if (selectedState === `${eateryCollection.state}`) {
        clearList()
        eateryList(filter)
    } else {
        clearList()
        eateryList()
    } 
})



// EVENT LISTENER DROPDOWN OPTION ON SELECTION, DISPLAY INTERPOLATED HTML TO EATERY PREVIEW BOX
const eateryPreviewList = () => {
    eateryPreviewGenerator(eateryCollection)
}

const contentTarget = document.querySelector(".eatery__Dropdown")

contentTarget.addEventListener("change", clickEvent => {
    const id = clickEvent.target.value
    const eateryHTMLRepresentation = eateryPreviewConverter(eateryCollection, id)
    const eateryArticleElement = document.querySelector(".eatery__block")
    eateryArticleElement.innerHTML = eateryHTMLRepresentation
    addDetailsEventListener()
    }
)


const eateryDisplay = () => {
    addDetailsEventListener(eateryCollection)
}

// EVENT LISTENER FOR DETAILS BUTTON CLICK
const addDetailsEventListener = () => {
    const detailsTarget = document.getElementById("detailsButton")
    detailsTarget.addEventListener("click", clickEvent => {
        const eateryObject = clickEvent.target.value  
        const detailsHTML = eateryDetailsConverter(eateryObject)
        console.log('EATERY OBJECT', eateryObject)
        const element = document.querySelector("#popup")
        element.innerHTML = detailsHTML
            console.log('THE STUFF DISPLAYED', eateryObject)
            console.log('Details Button clicked', detailsHTML)
            modalDisplayFunction()
        }
    )
}



// document.addEventListener("click", clickEvent => {
//     if document.querySelector("#detailsButton")
//     console.log('button clicked')
//     }
// )



// DECLARE 3 VARIABLES FOR EACH HTML ELEMENT
// WRITE FUNCTIONS TO DISPLAY AND CLOASE MODAL

const modalDisplayFunction = () => {
    var modal = document.getElementById("popup");
    var btn = document.getElementById("detailsButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
    modal.style.display = "block";
    console.log('button clicked')
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}