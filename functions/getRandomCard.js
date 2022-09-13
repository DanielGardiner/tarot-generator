import getRawRandomCard from "./getRawRandomCard";
import getRandomOrientation from "./getRandomOrientation";

function getRandomCard() {
  const rawRandomCard = getRawRandomCard();
  const randomOrientation = getRandomOrientation();
  const selectedText = rawRandomCard?.text[randomOrientation];

  const randomCard = {
    ...rawRandomCard,
    selectedText,
    orientation: randomOrientation,
  };
  return randomCard;
}

export default getRandomCard;
