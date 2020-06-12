


//locate
//convert
//add to location

parkPreviewList = (parkData) => {

    parkPreviewLocation = document.querySelector(".block__park")
    parkPreviewLocation.innerHTML = ""

    const parkHTMListPreview = parkDetailsHTML(parkData)

    parkPreviewLocation.innerHTML = parkHTMListPreview
}


const parkDetails = (parkData, city) => {
    const park_detailsTarget = document.getElementById("detailsButton__park")

    const parkHTMListPreview = parkDetailsHTML(parkData, city)
    park_detailsTarget.addEventListener("click", clickEvent => {
        
        const detailsHTML = parkDetailsConverter(parkData, city)
        const element = document.querySelector("#popup")
        element.innerHTML = detailsHTML
        parkDisplayFunction()
        }
    )
}
const parkDisplayFunction = () => {
    var modal = document.getElementById("popup");
    // CHANGE var btn ELEMENT ID TO YOUR DETAILS BUTTON ID, delete comment
    var btn = document.getElementById("detailsButton__park");
    var span = document.getElementsByClassName("close")[0];

  
    btn.onclick = function() {
    modal.style.display = "block";
    console.log('button clicked')
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}