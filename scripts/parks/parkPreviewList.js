


//locate
//convert
//add to location

parkPreviewList = (parkData) => {

    let parkPreviewLocation = document.querySelector(".block__park")
    parkPreviewLocation.innerHTML = ""

    const parkHTMListPreview = parkDetailsHTML(parkData)

    parkPreviewLocation.innerHTML = parkHTMListPreview
}