
// function parkDataConverter(parkData) {
//     const parkDataHTML = `<option value="${parkData}">${parkData}</option>`

//     return parkDataHTML
// }
function parkDataConverter(parkData) {
    const parkDataHTML = `<option value="${parkData.fullName}">${parkData.fullName}</option>`

    return parkDataHTML
}