
  import API from "./Settings.js"

getEateryData().then(
    () => {
        eateryList()
        // eateryDisplay()
    }
)


 userInputParks();
 myUserInputSearch(API);
 parkFilter();



getAttractions()
    .then(() => 
        renderAttractions()
    )

getAttractions()
    .then(() =>
        renderAttractionsDropdown()
    )


 parkWeatherData.linkGenerator()
    
