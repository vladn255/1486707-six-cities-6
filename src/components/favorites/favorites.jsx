import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchFavoriteCards} from '../../store/api-actions.js';

import FavoriteCardsInfo from "../favorite-cards-info/favorite-cards-info.jsx";

const Favorites = ({loadFavoriteCards}) => {

  loadFavoriteCards();

  return (
    <FavoriteCardsInfo />
  );
};

Favorites.propTypes = {
  loadFavoriteCards: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteCards() {
    dispatch(fetchFavoriteCards());
  }
});


export {Favorites};
export default connect(null, mapDispatchToProps)(Favorites);
