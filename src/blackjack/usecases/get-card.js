/**
 *
 * @param {Array<String>} deck
 * @returns {String}
 */

export const getCard = (deck) => {
  if (!deck || deck.length === 0) {
    throw "There are no cards left";
  }

  return deck.pop();
};
