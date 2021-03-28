import React from 'react';
import {Link} from 'react-router-dom';

import {placeCardType} from "../../types.js";
import {getRatingWidth} from "../../utils.js";
import {RoutePath} from '../../const.js';

import FavoriteButton from "../favorite-button/favorite-button.jsx";

const FavoriteButtonSize = {
  WIDTH: 18,
  HEIGHT: 19
};

const FavoritePlaceCard = ({placeCard}) => {
  const {previewImage, price, rating, title, type, id, isFavorite} = placeCard;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={RoutePath.OFFER}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <FavoriteButton
            id={id}
            isFavorite={isFavorite}
            buttonWidth={FavoriteButtonSize.WIDTH}
            buttonHeight={FavoriteButtonSize.HEIGHT}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${getRatingWidth(rating)}%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={RoutePath.OFFER}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

FavoritePlaceCard.propTypes = {
  placeCard: placeCardType
};

export default FavoritePlaceCard;
