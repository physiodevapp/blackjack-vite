import { getCard, storePoints, createCard } from "./index";

/**
 * Computer turn
 * @param {Array<String>} deck
 * @param {HTMLElement} domPersonPoints
 * @param {HTMLElement} domComputerPoints
 * @param {Array<Number>} playersPoints
 * @param {HTMLElement} divCardPlayers
 */

export const computerTurn = (
  deck,
  domPersonPoints,
  domComputerPoints,
  playersPoints,
  divCardsPlayers
) => {
  let computerPoints = 0;

  do {
    const card = getCard(deck);

    computerPoints = storePoints(
      { turn: playersPoints.length - 1, card },
      playersPoints,
      domPersonPoints,
      domComputerPoints
    );

    domComputerPoints.innerText = computerPoints;

    createCard({ card, turn: playersPoints.length - 1 }, divCardsPlayers);
  } while (computerPoints < playersPoints[0] && playersPoints[0] <= 21);

  setTimeout(() => {
    // endGame();

    const [personPoints, computerPoints] = playersPoints;

    const endMessage =
      computerPoints === personPoints
        ? "You tied!"
        : playersPoints[0] > 21
        ? "Try it again!"
        : computerPoints > 21
        ? "Wow, you win!"
        : "Try it again!";

    alert(endMessage);
  }, 100);

};
