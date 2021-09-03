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

async function searchBelgium(userInput) {
    const apiURL = "https://restcountries.eu/rest/v2/name/belgium"

    try {
        const response = await axios.get(apiURL + userInput)
        console.log(response)
        return response.data[0]
    } catch (error) {
        console.log(error)
    }

}
//2 Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name].
// It has a population of [amount] people.
async function searchCountry(userInput) {
    const apiURL = "https://restcountries.eu/rest/v2/name/"

    try {
        const response = await axios.get(apiURL + userInput)
        console.log(response)
        return response.data[0]
    } catch (error) {
        console.log(error)
    }

}

window.onload = function ()  {
    document.getElementById("search").addEventListener('click', async event => {
        console.log("kliked")
        const {value} = document.getElementById('query')
        console.log("search query", value)
        const countryDetails = await searchCountry(value)
        console.log(countryDetails)
    })
}

























