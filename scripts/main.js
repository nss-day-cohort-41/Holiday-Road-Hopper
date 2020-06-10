getEateryData().then(
    () => {
        eateryList()
    }
)

getAttractions()
    .then(() => 
        renderAttractions()
    )

getAttractions()
    .then(() =>
        renderAttractionsDropdown()
    )