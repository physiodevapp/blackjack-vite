import { getCardValue } from "./index";

/**
 * Store points
 * @param {*} param0
 * @param {Number} playersPoints
 * @param {HTMLElement} domPersonPoints
 * @param {HTMLElement} domComputerPoints
 * @returns
 */

export const storePoints = (
  { turn, card },
  playersPoints,
  domPersonPoints,
  domComputerPoints
) => {

  playersPoints[turn] = playersPoints[turn] + getCardValue(card);
  switch (turn) {
    case 0:
      domPersonPoints.innerText = playersPoints[turn];
      break;

    case playersPoints.length - 1:
      domComputerPoints.innerText = playersPoints[turn];
      break;

    default:
      break;
  }

  return playersPoints[turn];
};
