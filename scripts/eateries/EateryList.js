// Creates an HTML container element which renders individual eateries for each eatery in the collection

const eateryList = () => {
    eateryListGenerator(eateryCollection)
    // const filter = stateFilter()
    // eateryListGenerator(filter)
}

const eateryListGenerator = (theDataToDisplay) => {
    // Iterate the array of eateries
    for (const eateryObject of theDataToDisplay) {
        // Convert the current eatery to its HTML representation
        const eateryHTMLRepresentation = eateryConverter(eateryObject)
        // Find the HTML element in index.html
        const eateryArticleElement = document.querySelector(".eatery__Dropdown")
        // Put the eatery HTML representation inside the HTML element
        eateryArticleElement.innerHTML += eateryHTMLRepresentation
    }
}


//FILTER BY STATE

// const storedState = $("#stateSelect").on('change', function(){
//     const selectedState = $("#stateSelect option:selected").val();
//     console.log(selectedState);
//     // return selectedState
//     }
// )



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
    }
)




const activateButton = () => {
    contentOverlay(eateryCollection)
}

 
const detailsTarget = document.querySelector(".details")

detailsTarget.addEventListener("click", detailsButton => {
    const id = detailsButton.target.value
    const detailsHTML = detailsOverlay(eateryCollection, id)
    const element = document.querySelector(".popup")
    element.innerHTML = detailsHTML
    }
)







var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementsByClassName("details");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    modal.style.display = "none";
  }
}