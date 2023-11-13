
/**
 * 
 * @param {*} card 
 * @returns 
 */

export const getCardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};