import React, {useState} from 'react';

import {placeCardsType} from "../../types.js";

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = ({placeCards}) => {
  let [, setActiveCard] = useState(0);
  const mouseOverHandler = (articleId) => {
    setActiveCard(articleId);
  };

  return (
    <>
      {placeCards.map((placeCard) => <PlaceCard key={placeCard.id.toString()} placeCard={placeCard} mouseOverHandler={mouseOverHandler}/>)}
    </>
  );
};

PlacesList.propTypes = {
  placeCards: placeCardsType,
};

export default PlacesList;
