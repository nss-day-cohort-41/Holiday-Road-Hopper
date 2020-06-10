

 const myParkList = () => {
     parkList(parkData);
     
 }

 const parkList = (parkData) => {
    //  add clear and work with back button after MVP!!
    //  clearUserParkHTML() 
    // clearDataConverter();
    
     const locationParkList = document.querySelector(".park_dropdownBox")
    //  locationParkList.innerHTML = ""
        
     locationParkList.innerHTML += `<select class="dropDownBoxParks"></select>`
     // iterate using for of loop
     for (const currentPark of parkData) {
         // convert the current LOCATION TO ITS HTML REPRESENTATION
         const convertParkList = parkDataConverter(currentPark)

         // this looks for the article element in the index 
 
         //  const locationParkList = document.querySelector(".park__dropdown")
        const parkListLocation = document.querySelector(".dropDownBoxParks")

         
       

         //put the Location HTML representation inside the article tag during each loop
         parkListLocation.innerHTML += convertParkList
        

         //innerHTML allows editing to happen inside of the html document 
         //locationArticleElement has already be set equal to the .locationList class

     }
    }


