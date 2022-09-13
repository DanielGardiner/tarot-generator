import { motion } from "framer-motion";
import { colors, breakpoints } from "/styles";
import RevealCard from "./RevealCard"

function SelectedCard({ selectedCard, handleDealCards }) {
  const {
    name: cardTitle,
    imageName: cardImage,
    selectedText: cardText,
    orientation: cardOrientation,
  } = selectedCard || {};

  const buttonVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 3.5,
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="button"
        variants={buttonVariants}
        initial={"initial"}
        animate={"animate"}
        onClick={handleDealCards}
      >
        <button onClick={() => { }}>Deal Cards</button>
      </motion.div>

      <div className="content-wrapper">
        <div className="content">
          <div className="cards">
            <RevealCard cardImage={cardImage} cardOrientation={cardOrientation} />
          </div>
          <div className="text">
            <motion.div
              variants={textVariants}
              initial={"initial"}
              animate={"animate"}
            >
              <h1>{cardTitle}</h1>
              <p>{cardText}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        button {
          position: absolute;
          top: 30px;
          left: 30px;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 16px;
          letter-spacing: 1px;
          font-weight: 400 !important;
          background: ${colors.secondaryBackground};
          color: ${colors.invertedText};
          margin: auto;
          text-align: center;
          display: inline-block !important;
          text-decoration: none;
          border: 0px;
          width: max-content;
          cursor: pointer;
          transition: all 0.3s 0s ease-in-out;
          &:hover {
            cursor: pointer;
          }
          z-index: 100;
        }
        .content-wrapper {
          height: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          position: relative;
          width: 620px;
          margin: 0 auto;
          display: flex;
          @media ${breakpoints.down.sm} {
            flex-direction: column;
            width: 100%;
            align-items: center;
          }
          @media ${breakpoints.up.sm} {
            flex-direction: row;
            padding: 0;
          }
        }

        .cards {
          min-height: 400px;
          @media ${breakpoints.down.sm} {
            width: 100%;
          }
          @media ${breakpoints.up.sm} {
            width: 50%;
          }
        }

        .text {
          padding-bottom: 60px;
          width: 80%;
          margin-left: 0;
          margin-top: 100px;
          text-align: center;

          @media ${breakpoints.up.sm} {
            padding-bottom: 0;
            width: 50%;
            margin-left: 60px;
            margin-top: 0;
            text-align: left;
          }

          h1 {
            font-family: "Alice in wonderland";
            letter-spacing: 5px;
            font-size: 52px;
            color: ${colors.primaryText};
            margin-top: -7px;
          }
          p {
            color: ${colors.primaryText};
            letter-spacing: 5px;
            font-size: 24px;
            margin: 20px 0;
            @media ${breakpoints.up.sm} {
              margin: 30px 0;
            }
          }
        }
      `}</style>
    </>
  );
}

export default SelectedCard;
