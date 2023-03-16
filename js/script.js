//https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s

document.addEventListener("DOMContentLoaded", () => {
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

const grid = document.querySelector(".grid)");
/* asignamos a nestra constante grid la clase .grid
 que corresponde a nuestro div */

var cardsChosen = []; //Es un arrayd e nombre de cartas
var cardsChosenId = [];

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

function flipCard() {
  var cardId = this.getAttribute("data-id"); //En qué casilla he hecho clic
  cardsChosen.push(cardArray[cardId].name);
  this.setAttribute("src", cardArray[cardId].img); // Doy la vuelta a la carta elegida, ya no muestro blank sino su contenido
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500); //Si he escogido 2 cartas, compruebo si hay coincidencia o no
  }
}
