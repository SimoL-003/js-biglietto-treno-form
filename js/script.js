// Prendere il form e gli input

const formElem = document.querySelector("form");
const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const ticketInput = document.getElementById("ticket");
const roundTripInput = document.getElementById("round-trip");

// Elementi della card

const cardElem = document.querySelector(".card")
const nameElem = document.querySelector(".card .name");
const kmElem = document.querySelector(".card .km");
const roundTripElem = document.querySelector(".card .round-trip");
const discountElem = document.querySelector(".card .discount");
const priceElem = document.querySelector(".card .price");

// Variabili per il calcolo del biglietto

const priceKm = 0.21;
const discountUnder18 = 0.2;
const discountOver65 = 0.4;

// All'invio del form

formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    nameElem.textContent = nameInput.value;
    kmElem.innerHTML = `<strong>Validità del biglietto:</strong> ${kmInput.value} km`;
    if (roundTripInput.checked) {
        roundTripElem.innerHTML = `<strong>Tipo di biglietto:</strong> Andata e ritorno`;
    } else {
        roundTripElem.innerHTML = `<strong>Tipo di biglietto:</strong> Solo andata`;
    }
    discountElem.innerHTML = `<strong>Categoria di biglietto:</strong> ${ticketInput.value}`;
    priceElem.innerHTML = `<h5>Prezzo:</h5> ${calcFinalPrice().toFixed(2)} &euro;`
    cardElem.classList.remove("d-none");

    // formElem.reset();
})

function calcFinalPrice() {
    const kmInputNum = parseInt(kmInput.value);

    const standardPrice = priceKm * kmInputNum;
    let finalPrice = standardPrice;

    if (ticketInput.value === "Senior") { finalPrice = standardPrice - standardPrice * discountOver65; }
    if (ticketInput.value === "Minori") { finalPrice = standardPrice - standardPrice * discountUnder18; }

    if (roundTripInput.checked) { finalPrice = finalPrice * 2; }

    return finalPrice;
}