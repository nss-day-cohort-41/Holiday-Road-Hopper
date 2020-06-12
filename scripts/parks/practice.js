

document.querySelector(".saveButton").addEventListener("click", event => {
    let locationForParkPreview = document.querySelector(".block__park").value
    let locationForAttractionPreview = document.querySelector(".block__attraction").value
    let locationForEateryPreview = document.querySelector(".eatery__block").value
    if(locationForParkPreview) {
       //run save iterory here
    }
    else if(!locationForParkPreview && !locationForAttractionPreview && !locationForEateryPreview) {
       //make pop up that says that you must have a value in 
       //all three sections
    }
})