import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardType} from "../../types.js";
import {changeFavoriteStatus} from "../../store/api-actions.js";
import {RoutePath, AuthorizationStatus} from '../../const.js';

const FavoriteButton = ({placeCard, onChangeFavorite, authorizationStatus, buttonWidth, buttonHeight}) => {
  const {id, isFavorite} = (placeCard);

  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  const history = useHistory();

  const changeFavorite = () => {
    onChangeFavorite(id, Number(!favoriteStatus));
    setFavoriteStatus(!favoriteStatus);
  };

  const redirectOnNoAuthorization = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(RoutePath.LOGIN);
    }
    return changeFavorite();
  };

  const favoriteButtonClickHandler = (evt) => {
    evt.preventDefault();

    redirectOnNoAuthorization();
  };

  return (
    <button className= {favoriteStatus
      ? `place-card__bookmark-button place-card__bookmark-button--active button`
      : `place-card__bookmark-button button`
    }
    type="button"
    onClick={favoriteButtonClickHandler}>
      <svg className="place-card__bookmark-icon" width={buttonWidth} height={buttonHeight}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  placeCard: placeCardType,
  onChangeFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  buttonHeight: PropTypes.number.isRequired
};

const mapStateToProps = ({authorizationStatus}) => ({
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavorite(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
