//make a function that can be used to add data to the DOM
//make a function that has HTML and return the string
// The string needs to include Park Name .fullName, images .images["url"]
// designation



const parkDetailsHTML = (selectedData) => {
    const parkDetails = `<h2 class="previewName">${selectedData.fullName}</h4> 
    <p>${selectedData.city}, ${selectedData.state}</p>
            <img class="icon" src="images/park-pin.png" alt="eatery_img">
            <div class="buttonBox">
                <button id="detailsButton">Park Details</button>
            </div>`

    return parkDetails
}


{/* <h4>${selectedData.fullName}</h4> 
    <ol class="parkDeatilsList">
    <li class="parkDeatilsListItem park__designation">${selectedData.description}</li>
    </ol> */}