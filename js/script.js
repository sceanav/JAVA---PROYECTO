//https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s

document.addEventListener("DOMContentLoaded", () => {
  //Se dispara antes de que el html haya acabado de cargar
  const cardArray = [
    { name: "brocoli", img: "img/brocoli.png" },
    { name: "brocoli", img: "img/brocoli.png" },
    { name: "burrito", img: "img/burrito.png" },
    { name: "burrito", img: "img/burrito.png" },
    { name: "chicken", img: "img/chicken.png" },
    { name: "chicken", img: "img/chicken.png" },
    { name: "cocacola", img: "img/cocacola.png" },
    { name: "cocacola", img: "img/cocacola.png" },
    { name: "fried", img: "img/fried.png" },
    { name: "fried", img: "img/fried.png" },
    { name: "hamburguesa", img: "img/hamburguesa.png" },
    { name: "hamburguesa", img: "img/hamburguesa.png" },
    { name: "icecream", img: "img/icecream.png" },
    { name: "icecream", img: "img/icecream.png" },
    { name: "pizza", img: "img/pizza.png" },
    { name: "pizza", img: "img/pizza.png" },
  ];
});

cardArray.sort(() => 0.5 - Math.random());

const grid =
  document.querySelector(
    ".grid"
  ); /* asignamos a nuestra constante grid la clase .grid
 que corresponde a nuestro div */
const resultDisplay = document.querySelector("#result");
var cardsChosen = []; //Es un arrayd e nombre de cartas
var cardsChosenId = []; //Array con el ide de cada casilla
var cardsWon = []; // Array de pareja de cartas acertadas

/* Creamos el tablero */
function createBoard() {
  for (let i = 0; i < cardArray.length(); i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard); //pongo una escucha en cada casilla
    grid.appendChild(card);
  }
}

function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  //Comprobar si dos cartas son iguales
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("Coincidencia Encontrada");
    cards[optionOneId].setAttribute("src", "img/white.png"); //Si las cartas son iguales, las substitue por white
    cards[optionTwoId].setAttribute("src", "img/white.png");
  } else {
    alert("Eres una patata con patas");
    cards[optionOneId].setAttribute("src", "img/blank.png"); //Si las cartas son dieferentes, les doy la vuelta.
    cards[optionTwoId].setAttribute("src", "img/blank.png");
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "FELICIDADES, NO ERES TAN IDIOTA COMO PARECÍAS";
  }
}

function flipCard() {
  var cardId = this.getAttribute("data-id"); //En qué casilla he hecho clic
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img); // Doy la vuelta a la carta elegida, ya no muestro blank sino su contenido
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500); //Si ya he escogido 2 cartas, compruebo si hay coincidencia o no
  }
}
