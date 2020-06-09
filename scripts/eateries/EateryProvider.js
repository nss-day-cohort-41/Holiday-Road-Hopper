
//STORES ALL EATERY DATA FROM API
let eateryCollection = []

//Function to request data string from API, then convers the JSON string response into javascript objects 
const getEateryData = () => {
    return fetch("http://holidayroad.nss.team/eateries").then (
        (httpResponse) => {
            return httpResponse.json()
        }
    ) //Function THEN takes data from API, sets it as value for eateryCollection array
    .then (
        (eateriesFromAPI) => {
            eateryCollection = eateriesFromAPI
        }
    )
}
