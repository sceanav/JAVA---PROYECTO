//https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s
// BUG EN EL TUTORIAL. SI HACES CLICK SOBRE LA CARTA DETAPADA TE SALE ACIERTO


document.addEventListener("DOMContentLoaded", () => {
  //Se dispara antes de que el html haya acabado de cargar
  const cardArray = [ //Creamos el array de cartas
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

  cardArray.sort(() => 0.5 - Math.random()); //ordeno el Array de forma aleatoria

  const grid = document.querySelector(".grid"); //asigno el div grid a una variable para poder cambiar propiedades
  const resultDisplay = document.querySelector("#result");//asigno el div con id result a una constante
  let cardsChosen = [];//Array de nombres de las cartas elegidas
  let cardsChosenId = [];//Array de id de cada carta (del 0 al 15)
  let cardsWon = [];//Array de pareja acertada

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "img/blank.png"); //pongo la imagen de carta cubierta en cada carta
      card.setAttribute("data-id", i); //asigno una id a cada carta del array
      card.addEventListener("click", flipCard); //Agrega el listener a cada carta. Si hago click, llamo a la función f,ipCard()
      grid.appendChild(card); //agrego el <img> de la carta a mi div de clase grid
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) { //Si HAGO CLICK SOBRE LA CARTA DESTAPADA, LA VUELVE A TAPAR
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
      // alert("BIEN HECHO!");
    } else if (cardsChosen[0] === cardsChosen[1]) {// Si las ID's son diferentes, pero el nombre es el mismo, he encontrado pareja
      alert("BIEN HECHO");
      cards[optionOneId].setAttribute("src", "img/white.png"); //quito las fotos
      cards[optionTwoId].setAttribute("src", "img/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);//quito la escucha, si hago click en el espacio en blanco, ya no pasa nada
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/blank.png"); //si no son acierto, le doy la vuelta a las cartas
      cards[optionTwoId].setAttribute("src", "img/blank.png");
      alert("Lo siento, no coinciden");
    }
    cardsChosen = []; //borro el contenido de array de nombres
    cardsChosenId = []; //borro el contenido del array de id's
    resultDisplay.textContent = cardsWon.length; //actualizo el resultado
    if (cardsWon.length === cardArray.length / 2) {//Comparo el num de parejas obtenidas con el número de parejas totales
      resultDisplay.textContent = "FELICIDADES! LAS ENCONTRASTE TODAS!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id"); // obtengo la id de mi carta
    cardsChosen.push(cardArray[cardId].name); // Guardo el nombre en el array de nombres
    cardsChosenId.push(cardId); //Guardo la id en el array de id's
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) { //si he hecho dos veces click compruebo si las cartas son iguales y pongo un delay
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard(); //Llamo a iniciar el juego
});

