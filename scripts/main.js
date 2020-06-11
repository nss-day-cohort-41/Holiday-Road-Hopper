
  import API from "./Settings.js"

getEateryData().then(
    () => {
        eateryList()
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
    
