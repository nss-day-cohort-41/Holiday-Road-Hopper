
  import API from "./Settings.js"

getEateryData().then(
    () => {
        eateryList()
        detailsDisplay()
    }
)


 userInputParks();
 myUserInputSearch(API);




getAttractions()
    .then(() => 
        renderAttractions()
    )

getAttractions()
    .then(() =>
        renderAttractionsDropdown()
    )


 parkWeatherData.linkGenerator()
    
