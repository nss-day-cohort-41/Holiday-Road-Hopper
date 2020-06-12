//gets itenerary from generated items

let parkPreview = ""
let attractionPreview = ""
let eateryPreview = ""

document.querySelector(".saveButton").addEventListener("click", event => {

    itineraryObj = {}

    // itineraryObj.parkName = document.querySelector("#parkPreview").value
    // itineraryObj.attractionName = document.querySelector("#attractionPreview").value
    // itineraryObj.eateryName = document.querySelector("#eateryPreview").value

    itineraryObj.parkName = parkPreview
    itineraryObj.attractionName = attractionPreview
    itineraryObj.eateryName = eateryPreview
    
    console.log(itineraryObj)

})