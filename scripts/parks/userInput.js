const userParksSearch = () => {
    const userParSearchHTMLString = `<fieldset>
    <label for="parkSearch">Search</label>
    <input type="text" id="parkSearch" placeholder="Enter Park Name" autofocus />
</fieldset>
<fieldset>
    <label for="states">Enter State</label>
    <select name="parkState" id="parkState" required>
	<option class="select__State" value="AL">Alabama</option>
	<option class="select__State" value="AK">Alaska</option>
	<option class="select__State" value="AZ">Arizona</option>
	<option class="select__State" value="AR">Arkansas</option>
	<option class="select__State" value="CA">California</option>
	<option class="select__State" value="CO">Colorado</option>
	<option class="select__State" value="CT">Connecticut</option>
	<option class="select__State" value="DE">Delaware</option>
	<option class="select__State" value="DC">District Of Columbia</option>
	<option class="select__State" value="FL">Florida</option>
	<option class="select__State" value="GA">Georgia</option>
	<option class="select__State" value="HI">Hawaii</option>
	<option class="select__State" value="ID">Idaho</option>
	<option class="select__State" value="IL">Illinois</option>
	<option class="select__State" value="IN">Indiana</option>
	<option class="select__State" value="IA">Iowa</option>
	<option class="select__State" value="KS">Kansas</option>
	<option class="select__State" value="KY">Kentucky</option>
	<option class="select__State" value="LA">Louisiana</option>
	<option class="select__State" value="ME">Maine</option>
	<option class="select__State" value="MD">Maryland</option>
	<option class="select__State" value="MA">Massachusetts</option>
	<option class="select__State" value="MI">Michigan</option>
	<option class="select__State" value="MN">Minnesota</option>
	<option class="select__State" value="MS">Mississippi</option>
	<option class="select__State" value="MO">Missouri</option>
	<option class="select__State" value="MT">Montana</option>
	<option class="select__State" value="NE">Nebraska</option>
	<option class="select__State" value="NV">Nevada</option>
	<option class="select__State" value="NH">New Hampshire</option>
	<option class="select__State" value="NJ">New Jersey</option>
	<option class="select__State" value="NM">New Mexico</option>
	<option class="select__State" value="NY">New York</option>
	<option class="select__State" value="NC">North Carolina</option>
	<option class="select__State" value="ND">North Dakota</option>
	<option class="select__State" value="OH">Ohio</option>
	<option class="select__State" value="OK">Oklahoma</option>
	<option class="select__State" value="OR">Oregon</option>
	<option class="select__State" value="PA">Pennsylvania</option>
	<option class="select__State" value="RI">Rhode Island</option>
	<option class="select__State" value="SC">South Carolina</option>
	<option class="select__State" value="SD">South Dakota</option>
	<option class="select__State" value="TN">Tennessee</option>
	<option class="select__State" value="TX">Texas</option>
	<option class="select__State" value="UT">Utah</option>
	<option class="select__State" value="VT">Vermont</option>
	<option class="select__State" value="VA">Virginia</option>
	<option class="select__State" value="WA">Washington</option>
	<option class="select__State" value="WV">West Virginia</option>
	<option class="select__State" value="WI">Wisconsin</option>
    <option class="select__State" value="PR">PUERTO RICO</option>
	<option class="select__State" value="GU">GUAM</option>
	<option class="select__State" value="VI">VIRGIN ISLANDS</option>
</select>
<button class="parks__UserInputSearch">Search</button>
</fieldset>`

    return userParSearchHTMLString;
}



const clearUserParkHTML = () => {
    const locationUserInput = document.querySelector(".dropdownBox")

    locationUserInput.innerHTML = ""
}