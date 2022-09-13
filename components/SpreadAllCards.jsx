import css from "styled-jsx/css";
import Image from "next/image";
import { motion } from "framer-motion";
import { breakpoints } from "/styles";

// framer motion and styled-jsx dont play nicely together
// so need to use css.resolve to add styles to a motion.div element
const {
  className: cardsContainerClass,
  styles: cardsContainerStyle,
} = css.resolve`
  div {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    row-gap: 5px;
    width: 100%;
  }
`;

const { className: cardsWrapperClass, styles: cardsWrapperStyle } = css.resolve`
  div {
    margin-right: -120px;
  }
`;

function SpreadAllCards({ cardCount = 50, handleSelectCard }) {
  const cardArray = Array.from(Array(cardCount).keys());

  const cardWrapperVariants = {
    animate: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: -500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="cards-container">
      <motion.div
        className={cardsContainerClass}
        variants={cardWrapperVariants}
        initial={"initial"}
        animate={"animate"}
      >
        {cardArray.map((i) => {
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              className={cardsWrapperClass}
            >
              <div onClick={handleSelectCard} className="card">
                <Image
                  src={`/images/cards/CardBackSmall.jpg`}
                  layout="fill"
                  priority={true}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      {cardsContainerStyle}
      {cardsWrapperStyle}

      <style jsx>{`
        .cards-container {
          // using flex
          max-width: 800px;
          margin: auto;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;

          @media ${breakpoints.down.sm} {
            padding: 20px 50px;
            transform: translateX(-35px);
          }
          @media ${breakpoints.up.sm} {
            padding: 50px;
            transform: translateX(-20px);
          }
          @media ${breakpoints.up.md} {
            transform: translateX(-15px);
          }
        }
        .card {
          position: relative;
          transition: all 0.1s;
          border: 1px solid black;
          height: 110px;
          width: 90px;
          &:hover {
            cursor: pointer;
            border: 3px solid #fff;
            border-radius: 4px;
            box-shadow: 0 0 10px #fff;
          }
        }
      `}</style>
    </div>
  );
}

export default SpreadAllCards;
