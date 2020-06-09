const parkList = () => {
    // iterate using for of loop
    for (const currentPark of parkData) {
        // convert the current LOCATION TO ITS HTML REPRESENTATION
        const convertParkList = parkDataConverter(currentPark)

        // this looks for the article element in the index 
        
        const locationParkList = document.querySelector(".park_dropdownBox")


        //put the Location HTML representation inside the article tag during each loop
        locationParkList.innerHTML += convertParkList

        //innerHTML allows editing to happen inside of the html document 
        //locationArticleElement has already be set equal to the .locationList class

    }
}