import React, {useState} from 'react';

import {placeCardsType} from "../../types.js";

import PlaceCardComponent from "../place-card/place-card.jsx";

const PlacesList = ({placeCards}) => {
  let [activeCardId, setActiveCard] = useState(0);
  const mouseOverHandler = (articleId) => {
    activeCardId = articleId;
    setActiveCard(activeCardId);
  };

  return (
    <>
      {placeCards.map((placeCard) => <PlaceCardComponent key={placeCard.id.toString()} placeCard={placeCard} mouseOverHandler={mouseOverHandler}/>)}
    </>
  );
};

PlacesList.propTypes = {
  placeCards: placeCardsType,
};

export default PlacesList;
