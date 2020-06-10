//creat a function that runs when a user clocks on an item
//a park in the select element
//want the information from that park to be passed to addingpark html
//want that function to also display the park in its assigned container


const actionAddingPark = () => {
    //below is a event listener for the user selecting an option
    document.querySelector(".dropDownBoxParks").addEventListener("click", event => {
        // .option__parks
    let selectedPark = [] 
    selectedPark = slectedPark.push(document.querySelector(".dropDownBoxParks").value)
    
    console.log(selectedPark)

})
}