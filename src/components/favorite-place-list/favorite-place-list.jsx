import React from 'react';

import {placeCardsType} from "../../types.js";

import FavoritePlaceCard from "../favorite-place-card/favorite-place-card.jsx";

const FavoritePlacesList = ({placeCards}) => {

  return (
    <>
      {placeCards.map((placeCard) => <FavoritePlaceCard key={placeCard.id.toString()} placeCard={placeCard}/>)}
    </>
  );
};

FavoritePlacesList.propTypes = {
  placeCards: placeCardsType
};


export default FavoritePlacesList;
