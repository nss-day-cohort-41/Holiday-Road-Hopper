//creat a function that runs when a user clocks on an item
//a park in the select element
//want the information from that park to be passed to addingpark html
//want that function to also display the park in its assigned container
// this function collects that data array from the fetch call on parkPreview
// this data is already the selected data

const actionAddingPark = (dataCollection, API) => {
    let myParkArray = [];
    //below is a event listener for the user selecting an option
    document.querySelector(".dropDownBoxParks").addEventListener("click", event => {
        let selectedPark = document.querySelector(".dropDownBoxParks").value
        let selectedParkData;
        
        if (selectedPark !== "none") {

            //this for looped is used to go through each item in the array of dataCOllection
            //slectedPark has a parkCode value
            //here we want to look in each obejct array and see if it has a value parkcode
            //and does this park code matches up with the object that was seleted if so pass this object locatied in array at spot i

            for (let i = 0; i < dataCollection.length; i++) {

                if (dataCollection[i].parkCode == selectedPark) {

                    selectedParkData = dataCollection[i]

                    let userCity = [];
                    userCity.push(selectedParkData.addresses[0])
                    
                    
                    let selectedCity = []
                    for(let j = 0; j < userCity.length; j++) {
                       console.log("gavinplease",userCity[j].city)
                       selectedCity.push(userCity[j].city)
                    }
                   
``                  
                    parkPreviewList(selectedParkData, selectedCity)
                    parkDetails(selectedParkData, selectedCity)
                    //passing selectedParkData into weather 
                    getWeather.fetchWeatherData(parkWeatherData.linkGenerator(selectedParkData, API))

                    myParkArray = [];

                }
            }
        }
    
    })
}  