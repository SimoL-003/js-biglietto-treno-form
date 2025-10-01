// Prendere il form e gli input

const formElem = document.querySelector("form");
const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ticketInput = document.getElementById("ticket");
const roundTripInput = document.getElementById("round-trip");

// Variabili per il calcolo del biglietto

const priceKm = 0.21;
const discountUnder18 = 0.2;
const discountOver65 = 0.4;

// All'invio del form

formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    const kmInputNum = parseInt(kmInput.value);

    const standardPrice = priceKm * kmInputNum;
    let finalPrice = standardPrice;

    if (ticketInput.value === "over65") {
        finalPrice = standardPrice - standardPrice * discountOver65;
    } else if (ticketInput.value === "under18") {
        finalPrice = standardPrice - standardPrice * discountUnder18;
    }

    if (roundTripInput.checked) {
        finalPrice = finalPrice * 2;
    }

    let result = finalPrice;
    console.log(result.toFixed(2));
})