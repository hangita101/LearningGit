var countryJSON = {
    "Nepal": "Namaste",
    "India": "Namaste",
    "UK": "Hello",
    "France": "Bounjor",
    "Default": "Namaste"

};

var displayCountrys = function () {
    let temp = "<select name=\"Country\" id=\"CountrySelect\">";
    temp += `<option value=\"Default\">Country</option>`;
    for (let i in countryJSON) {
        temp += `<option value=\"${i}\">${i}</option>`;
    }
    temp += "</select>";

    document.getElementById('displayCountryNames').innerHTML = temp;
}

var greetFunc = function () {
    var country = document.getElementById('CountrySelect').value;
    document.getElementById('GreetHere').innerHTML = countryJSON[country];
}