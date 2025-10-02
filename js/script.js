// Prendere il form e gli input

const formElem = document.querySelector("form");
const nameInput = document.getElementById("name");
const titleInput = document.getElementById("title")
const kmInput = document.getElementById("km");
const ticketInput = document.getElementById("ticket");
const roundTripInput = document.getElementById("round-trip");

// Elementi della card

const cardElem = document.querySelector(".card")
const nameElem = document.querySelector(".card .name");
const kmElem = document.querySelector(".card .km-text");
const roundTripElem = document.querySelector(".card .round-trip-text");
const discountElem = document.querySelector(".card .discount-text");
const priceElem = document.querySelector(".card .price-text");

// Variabili per il calcolo del biglietto

const priceKm = 0.21;
const discountUnder18 = 0.2;
const discountOver65 = 0.4;

// All'invio del form

formElem.addEventListener("submit", function (event) {
    event.preventDefault();

    nameElem.textContent = titleInput.value + " " + nameInput.value;
    kmElem.innerHTML = `${kmInput.value} km`;
    if (roundTripInput.checked) {
        roundTripElem.innerHTML = "Andata e ritorno";
    } else {
        roundTripElem.innerHTML = "Solo andata";
    }
    discountElem.innerHTML = ticketInput.value;
    priceElem.innerHTML = `${calcFinalPrice().toFixed(2)} &euro;`
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