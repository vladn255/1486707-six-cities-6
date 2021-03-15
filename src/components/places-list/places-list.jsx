import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType} from "../../types.js";
import {fetchHotelId} from '../../store/api-actions.js';

import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = ({placeCards, setActivePlaceCard}) => {
  const mouseOverHandler = (articleId) => {
    setActivePlaceCard(articleId);
  };

  return (
    <>
      {placeCards.map((placeCard) => <PlaceCard key={placeCard.id.toString()} placeCard={placeCard} mouseOverHandler={mouseOverHandler}/>)}
    </>
  );
};

PlacesList.propTypes = {
  placeCards: placeCardsType,
  setActivePlaceCard: PropTypes.func.isRequired
};

const mapStateToProps = ({activeCardId}) => ({
  activeCardId
});

const mapDispatchToProps = (dispatch) => ({
  setActivePlaceCard(articleId) {
    dispatch(fetchHotelId(articleId));
  }
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
