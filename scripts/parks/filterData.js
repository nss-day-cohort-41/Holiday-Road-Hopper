



const parkFilter = () => {
    const park_detailsTarget = document.querySelector(".parks__Filter__Data")

    console.log("readthisplease")
    park_detailsTarget.addEventListener("click", clickEvent => {
    console.log("readthispleasepart2")
        
        const detailsHTML = filterDetailsHTML()
        const element = document.querySelector("#popup")
        element.innerHTML = detailsHTML
        parkFilterDisplayFunction()
        }
    )
}


const parkFilterDisplayFunction = () => {
    var modal = document.getElementById("popup");
    // CHANGE var btn ELEMENT ID TO YOUR DETAILS BUTTON ID, delete comment
    var btn = document.getElementsByClassName("parks__Filter__Data");
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


