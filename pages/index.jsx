import { useState } from "react";
import getRandomCard from "/functions/getRandomCard";
import getAllCardsCount from "/functions/getAllCardsCount";
import SpreadAllCards from "/components/SpreadAllCards";
import SelectedCard from "/components/SelectedCard";
import MainLayout from "/components/layouts/MainLayout";

function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const allCardsCount = getAllCardsCount();

  const handleSelectCard = () => {
    const randomCard = getRandomCard();
    setSelectedCard(randomCard);
  };

  const handleDealCards = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <MainLayout>
        {selectedCard ? (
          <SelectedCard
            selectedCard={selectedCard}
            handleDealCards={handleDealCards}
          />
        ) : (
            <SpreadAllCards
              cardCount={allCardsCount}
              handleSelectCard={handleSelectCard}
            />
          )}
      </MainLayout>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
