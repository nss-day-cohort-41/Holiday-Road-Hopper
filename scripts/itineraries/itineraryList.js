



// FUNCTION THAT STORES PREVIEW ITEMS INTO STRING ARRAY
const threeDestinations =[]


// FUNCTION THAT COMMUNICATES BETWEEN STRING ARRAY AND EVENT LISTENER
const threeDestinationNames = []

for (name in threeDestinations) {
    threeDestinationNames.push(threeDestinations[name])
}


// FUNCTION THAT LISTENS FOR CLICK ON 'SAVE ITINERARY' BUTTON
const clickSave = document.addEventListener('click', function (event) {
	console.log('SaveItinerary button clicked');

}, false);


// FUNCTION THAT PUSHES STRING ARRAY INTO NEW HTML ELEMENT 


