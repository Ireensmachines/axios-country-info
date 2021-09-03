//1 Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de
// console logt. Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.
//2 Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name].
// It has a population of [amount] people.

//3 Maak op basis van de response de volgende string en log dit in de console: The capital is [city]

//4 Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
// 1 valuta: and you can pay with [currency]'s
//2 valuta's: and you can pay with [currency]'s and [currency]'s
//5 Check of alles nog steeds werkt als je de gegevens over Aruba of Duitsland ophaalt!

// opdracht 1, Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt

async function searchBelgium() {
    const apiURL = "https://restcountries.eu/rest/v2/name/belgium"
    try {
        const response = await axios.get(apiURL)
        console.log(response)
        return response.data[0]
    } catch (error) {
        console.log(error)
    }

}
//2 Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name].
// It has a population of [amount] people.
async function searchCountryNameSubPop(userInput) {
    const apiURL = "https://restcountries.eu/rest/v2/name/"
    try {
        const response = await axios.get(apiURL + userInput )
        console.log(response)
        return response.data[0]

    } catch (error) {
        console.log(error)
    }

}


window.onload = function () {
    document.getElementById("search").addEventListener('click', async event => {
        console.log("kliked")
        let {value} = document.getElementById('query')
        if( value === ""){
            value = "belgium"
        }
        console.log("search query", value)
        const countryDetails = await searchCountryNameSubPop(value)
        console.log(countryDetails)
        console.log(countryDetails.name + " is situated in " + countryDetails.subregion + " It has a population of" + countryDetails.population + " people")
        console.log("The capital is " + countryDetails.capital)

        for (let i = 0; i < countryDetails.currencies.length; i++) {
            console.log(countryDetails.currencies[i].name)


        }
        const currencies = valuta2(countryDetails.currencies);
        console.log(currencies);
        document.getElementById("text").innerHTML = countryDetails.name + " is situated in " + countryDetails.subregion + ".<br>It has a population of " + countryDetails.population + " people.<br>" + "The capital is " + countryDetails.capital + "<br>" + currencies

    })
}

    function valuta (array) {
        // return array
        if (array.length === 1 ) {
            return "and you can pay with " + array[0].name;
        } else return "and you can pay with " + array[0].name + " and " + array[1].name;
    }

function valuta2 (array) {
    let text = "And you can pay with ";
    for (let i=0; i < array.length; i++) {
        text = text + array[i].name;
        if (i < array.length - 1) {
            text = text + " and ";
        }
    }
    return text;
}

























