//make a function that can be used to add data to the DOM
//make a function that has HTML and return the string
// The string needs to include Park Name .fullName, images .images["url"]
// designation



const parkDetailsHTML = (selectedData, city) => {
    const parkDetails = `<h2 class="previewName" id="parkPreview">${selectedData.fullName}</h4> 
    <p>${city}, ${selectedData.states}</p>
            <img class="icon" src="images/park-pin.png" alt="eatery_img">
            <div class="buttonBox">
                <button id="detailsButton__park">Park Details</button>
            </div>`

    return parkDetails
}


