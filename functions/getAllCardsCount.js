import getAllCards from "./getAllCards";

function getAllCardsCount() {
  const allCards = getAllCards() || [];
  return allCards.length;
}

export default getAllCardsCount;
