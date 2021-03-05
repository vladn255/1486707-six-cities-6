import React from 'react';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action.js';
import {functionType, placeCardsType} from "../../types.js";

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = ({placeCards, onSetActiveCard}) => {
  const mouseOverHandler = (articleId) => {
    onSetActiveCard(articleId);
  };

  return (
    <>
      {placeCards.map((placeCard) => <PlaceCard key={placeCard.id.toString()} placeCard={placeCard} mouseOverHandler={mouseOverHandler}/>)}
    </>
  );
};

PlacesList.propTypes = {
  placeCards: placeCardsType,
  onSetActiveCard: functionType
};

const mapStateToProps = ({activeCardId}) => ({
  activeCardId
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveCard(articleId) {
    dispatch(ActionCreator.setActiveCard(articleId));
  }
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
