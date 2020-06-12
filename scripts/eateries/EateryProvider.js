
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

let amenetyIcons = document.querySelector('.amenetyConverter');

const wheelchairAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.wheelchairAccessible === true) {
            key.icon1 = "images/wheelchair-icon.jpg"
            listedAmenities.push(key)
        } else {
            key.icon1 = "images/blank.png"
        }
    }
    return listedAmenities
}

const petAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.petFriendly === true) {
            key.icon2 = "images/pet-icon.png"
            listedAmenities.push(key)
        } else {
            key.icon2 = "images/blank.png"
        }
    }
    return listedAmenities
}

const wifiAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.wifi === true) {
            key.icon3 = "images/wifi-icon.png"
            listedAmenities.push(key)
        } else {
            key.icon3 = "images/blank.png"
        }
    }
    return listedAmenities
}

const diaperAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.diaperFacility === true) {
            key.icon4 = "images/diaper-icon.png"
            listedAmenities.push(key)
        } else {
            key.icon4 = "images/blank.png"
        }
    }
    return listedAmenities
}

const playgroundAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.playground === true) {
            key.icon5 = "images/playground-icon.png"
            listedAmenities.push(key)
        } else {
            key.icon5 = "images/blank.png"
        }
    }
    return listedAmenities
}

const restroomAmenety = () => {
    const listedAmenities = []
    for (const key of eateryCollection) {
        if (key.ameneties.restrooms === true) {
            key.icon6 = "images/restroom-icon.png"
            listedAmenities.push(key)
        } else {
            key.icon6 = "images/blank.png"
        }
    }
    return listedAmenities
}

