//toggles hidden class on .weatherBox

const weatherToggle = document.querySelector("parkPreview")

weatherToggle.addEventListener("click", clickEvent => {
    document.querySelector(".weatherBox").classList.toggle("hidden")
})