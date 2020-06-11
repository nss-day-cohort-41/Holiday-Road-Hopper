//creat a function that runs when a user clocks on an item
//a park in the select element
//want the information from that park to be passed to addingpark html
//want that function to also display the park in its assigned container

const actionAddingPark = (API) => {
    let myParkArray = [];
    //below is a event listener for the user selecting an option
    document.querySelector(".dropDownBoxParks").addEventListener("click", event => {
        // .option__parks
        // let selectedPark = [] 
        let selectedPark = document.querySelector(".dropDownBoxParks").value
        //    let selectedPark = document.querySelector(".option__parks").value
       
        // 
        console.log(selectedPark)
        
            const getParkData = () => {
                return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${selectedPark}&api_key=${API.npsKey}`).then(
                    (httpResponse) => {
                        return httpResponse.json()
                    }
                )
                    .then(
                        (arrayOfPark) => {

                            let localArrayofParks = []
                            localArrayofParks = arrayOfPark.data

                            //has to loop to pull data forward in the array to be access using .fullName
                            for (let park = 0; park < localArrayofParks.length; park++) {

                                // adding if statement that checks the state

                                myParkArray.push(localArrayofParks[park])
                                // parkData.push(localArrayofParks[park].states)
                            }
                            // console.log(parkData)

                            return myParkArray
                            // // console.log(arrayOfPark.data)
                            // myParkArray = []
                            // // // 100 percent sure the data is back
                            // myParkArray.push(arrayOfPark.data)
                            //  console.log(myParkArray)


                        }
                    ).then((arrayCollectionOfPark) => {

                        let singleParkData = [];
                        singleParkData = arrayCollectionOfPark[0]
                        // console.log(singleParkData.fullName)
                        parkPreviewList(singleParkData)
                        //s===========================
                        //singleParkData.longLat gives long and latitudes
                        //pass singleParkData
                        //singleParkData is ready to have a key put to it example singleParkData.key
                        getWeather.fetchWeatherData(parkWeatherData.linkGenerator(singleParkData, API))
                        //details

                        myParkArray = [];
                    })
            }

        if (selectedPark !== "none") {
    getParkData();}
    })

}