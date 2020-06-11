

filterDataHTML = () => {
    const filterDataHTMLCovert = `<fieldset>
    <div class="cost">
    <label for="costOfPark">Date of entry</label>
<!-- start of input -->
    <input type="range" name="costOfPark" id="costOfPark" min="0" max="50">
    </div>

    <button id="saveFilterData">Add</button>
</fieldset>`

    return filterDataHTMLCovert
}