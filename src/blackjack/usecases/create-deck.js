
import _ from "underscore";

/**
 * Creates a new deck
 * @param {Array<string>} types Example: ["C", "D", "H", "S"]
 * @param {Array<string>} specials Example: ["A", "J", "Q", "K"]
 * @returns {Array<string>} return new array of cards
 */
export const createDeck = (types, specials) => {
  if (!types || types.length === 0) throw new Error("Card type is required!");
  
  if (!specials || specials.length === 0) throw new Error("Special type is required!");

  const deck = [];

  for (let i = 2; i < 10; i++) {
    for (const type of types) {
      deck.push(i + type);
    }
  }

  for (const type of types) {
    for (const special of specials) {
      deck.push(special + type);
    }
  }

  return _.shuffle(deck);
};

export default createDeck;
