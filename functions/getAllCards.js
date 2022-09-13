import cardsObject from "/data/parsedData/cards";

function getAllCards() {
  const { cards: cardsArray } = cardsObject;

  return cardsArray;
}

export default getAllCards;
