
// function parkDataConverter(parkData) {
//     const parkDataHTML = `<option value="${parkData}">${parkData}</option>`

//     return parkDataHTML
// }
const clearDataConverter = () => {
    const locationParkList = document.querySelector(".park_dropdownBox")
    locationParkList.innerHTML = ""
}
function parkDataConverter(parkData) {
    
    const parkDataHTML = `<option class="option__parks" value="${parkData}">${parkData.fullName}</option>`

    return parkDataHTML
}