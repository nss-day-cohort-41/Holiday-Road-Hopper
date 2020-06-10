//make a function that can be used to add data to the DOM
//make a function that has HTML and return the string
// The string needs to include Park Name .fullName, images .images["url"]
// designation


const parkDetailsHTML = (selectedData) => {
    const parkDetails = `<h2>${selectedData.fullName}</h2> 
    <ol class="parkDeatilsList">
    <li class="parkDeatilsListItem park__designation">${selectedData.description}</li>
    </ol>`

    return parkDetails
}