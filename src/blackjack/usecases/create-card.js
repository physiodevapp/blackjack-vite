
/**
 * 
 * @param {*} param0 
 * @param {HTMLElement} divCardsPlayers 
 */

export const createCard = ({ card, turn }, divCardsPlayers) => {
  const imgCard = document.createElement("img");
  imgCard.src = `assets/cards/${card}.png`;
  imgCard.classList.add("game-card");
  divCardsPlayers[turn].append(imgCard);
};