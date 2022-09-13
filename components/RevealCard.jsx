import Image from "next/image";
import css from "styled-jsx/css";
import { motion } from "framer-motion";
import { breakpoints } from "/styles";

// framer motion and styled-jsx dont play nicely together
// so need to use css.resolve to add styles to a motion.div element
const { className: cardsWrapperClass, styles: cardsWrapperStyle } = css.resolve`
  div {
    width: 300px;
    height: 360px;
  }
`;

function RevealCard({ cardImage, cardOrientation }) {
  const cardFrontVariants = {
    initial: {
      opacity: 0,
      rotateY: 180,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  const cardBackVariants = {
    initial: {
      opacity: 0,
      rotateY: 0,
    },
    animate: {
      opacity: 1,
      rotateY: -180,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="card-wrapper">
          <motion.div
            style={{
              WebkitBackfaceVisibility: "hidden",
            }}
            className={cardsWrapperClass}
            variants={cardFrontVariants}
            initial={"initial"}
            animate={"animate"}
          >
            <div className="card">
              <Image
                src={`/images/cards/${cardImage}`}
                width={300}
                height={360}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
        <div className="card-wrapper">
          <motion.div
            style={{
              WebkitBackfaceVisibility: "hidden",
            }}
            className={cardsWrapperClass}
            variants={cardBackVariants}
            initial={"initial"}
            animate={"animate"}
          >
            <div className="card">
              <Image
                src={`/images/cards/CardBackSmall.jpg`}
                width={300}
                height={360}
                priority={true}
                quality='40'
              />
            </div>
          </motion.div>
        </div>
      </div>
      {cardsWrapperStyle}

      <style jsx>{`
        .card-wrapper {
          transform: ${cardOrientation === "flipped"
          ? "rotate(180deg)"
          : "rotate(0)"};
          width: 300px;
          height: 365px;
          position: absolute;
          top: 0;
          @media ${breakpoints.down.sm} {
            padding-top: 100px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .card {
          position: absolute;
          border: 4px solid white;
          box-shadow: 0 0 10px #fff;
        }
      `}</style>
    </>
  );
}

export default RevealCard
