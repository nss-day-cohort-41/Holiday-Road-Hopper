let attractions = []

const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => {
            return response.json()
        })
        .then(attractionsArray => {
            attractions = attractionsArray
        })
}