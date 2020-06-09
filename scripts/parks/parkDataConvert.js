
function parkDataConverter(parkData) {
    const parkDataHTML = `<option value="${parkData.fullName}">${parkData.fullName}</option>`

    return parkDataHTML
}