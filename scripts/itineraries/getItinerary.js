//gets itenerary from generated items


document.querySelector(".saveButton").addEventListener("click", event => {

    itineraryObj = {}

    itineraryObj.parkName = document.querySelector("#parkPreview").value
    itineraryObj.attractionName = document.querySelector("#attractionPreview").value
    itineraryObj.eateryName = document.querySelector("#eateryPreview").value
    
    console.log(itineraryObj)

})