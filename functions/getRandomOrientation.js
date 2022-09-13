import { orientations } from "/utils/statics";

function getRandomOrientation() {
  const randomOrientation =
    Math.random() >= 0.5 ? orientations.NORMAL : orientations.FLIPPED;
  return randomOrientation;
}

export default getRandomOrientation;
