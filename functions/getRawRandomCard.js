import getAllCards from "./getAllCards";

function getRandomCard() {
  const cards = getAllCards();
  const randomIndex = Math.floor(Math.random() * cards.length);
  return cards[randomIndex];
}

export default getRandomCard;
