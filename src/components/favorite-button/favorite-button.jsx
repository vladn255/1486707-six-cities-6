import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {changeFavoriteStatus} from "../../store/api-actions.js";
import {RoutePath, AuthorizationStatus} from '../../const.js';
import {getAuthorizationStatus} from '../../store/user-data/selectors.js';

const FavoriteButton = ({id, isFavorite, onChangeFavorite, authorizationStatus, buttonWidth, buttonHeight}) => {

  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);

  const history = useHistory();

  const changeFavorite = () => {
    onChangeFavorite(id, Number(!favoriteStatus));
    setFavoriteStatus(!favoriteStatus);
  };

  const favoriteButtonClickHandler = (evt) => {
    evt.preventDefault();

    return authorizationStatus === AuthorizationStatus.NO_AUTH
      ? history.push(RoutePath.LOGIN)
      : changeFavorite();

  };

  return (
    <button className= {`place-card__bookmark-button button
      ${favoriteStatus
      ? `place-card__bookmark-button--active`
      : ``}
    `}
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
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  buttonWidth: PropTypes.number.isRequired,
  buttonHeight: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavorite(id, status) {
    dispatch(changeFavoriteStatus(id, status));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
