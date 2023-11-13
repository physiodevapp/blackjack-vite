import _ from "underscore";
import {
  createDeck,
  getCard,
  computerTurn,
  storePoints,
  createCard
} from "./usecases/index";

/*
  C stands for Clubs
  D stadns for Diamonds
  H stadns for Hearts
  S stadns for Spades
*/

const myModule = (() => {
  "use strict";

  // ? Scope variable declaration

  let deck = [];
  const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  let playersPoints;

  // ? Function definition

  const startGame = (numPlayers = 2) => {
    deck = createDeck(types, specials);

    playersPoints = [];

    for (let i = 0; i < numPlayers; i++) {
      playersPoints.push(0);
    }

    domPersonPoints.innerText = 0;
    domComputerPoints.innerText = 0;

    document.querySelectorAll(".game-card").forEach((el) => el.remove());

    btnCard.disabled = false;
    btnStop.disabled = false;
  };

  // ? DOM references

  const btnReset = document.querySelector("#btnReset"),
    btnCard = document.querySelector("#btnCard"),
    btnStop = document.querySelector("#btnStop");

  const divCardsPlayers = document.querySelectorAll(".divCards");

  const domPersonPoints = document.querySelector("#personPoints");

  const domComputerPoints = document.querySelector("#computerPoints");

  // ? DOM events

  btnCard.addEventListener("click", () => {
    const card = getCard(deck);

    const personPoints = storePoints({ turn: 0, card }, playersPoints, domPersonPoints, domComputerPoints);

    domPersonPoints.innerText = personPoints;

    createCard({ card, turn: 0 }, divCardsPlayers);

    if (personPoints > 21) {
      btnCard.disabled = true;
      btnStop.disabled = true;
      computerTurn(deck, domPersonPoints, domComputerPoints, playersPoints, divCardsPlayers);
    } else if (personPoints === 21) {
      btnCard.disabled = true;
      btnStop.disabled = true;
      computerTurn(deck, domPersonPoints, domComputerPoints, playersPoints, divCardsPlayers);
    }
  });

  btnStop.addEventListener("click", () => {
    btnCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(deck, domPersonPoints, domComputerPoints, playersPoints, divCardsPlayers);
  });

  btnReset.addEventListener("click", () => {
    startGame();
  });

  return {
    newGame: startGame,
  };
})();
