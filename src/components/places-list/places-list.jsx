import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType, placeCardType} from "../../types.js";
import {ActionCreator} from '../../store/action.js';
import {getActiveCard} from '../../store/cards-data/selectors.js';

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = ({activeCard, placeCards, setActivePlaceCard, isMapChanging}) => {
  const mouseOverHandler = (evt) => {
    if (isMapChanging && evt !== activeCard) {
      setActivePlaceCard(evt);
    }
  };
  return (
    <>
      {placeCards.map((placeCard) => <PlaceCard key={placeCard.id.toString()} placeCard={placeCard} mouseOverHandler={mouseOverHandler}/>)}
    </>
  );
};

PlacesList.propTypes = {
  activeCard: placeCardType,
  placeCards: placeCardsType,
  setActivePlaceCard: PropTypes.func.isRequired,
  isMapChanging: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => ({
  activeCard: getActiveCard(state)
});


const mapDispatchToProps = (dispatch) => ({
  setActivePlaceCard(articleId) {
    dispatch(ActionCreator.setActiveCard(articleId));
  }
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
