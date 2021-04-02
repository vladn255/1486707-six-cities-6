import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {placeCardType} from "../../types.js";
import {getRatingWidth} from "../../utils.js";
import {RoutePath} from '../../const.js';

import FavoriteButton from "../favorite-button/favorite-button.jsx";

const FavoriteButtonParams = {
  WIDTH: 18,
  HEIGHT: 19,
  CLASS: `place-card`
};

const PlaceCard = ({placeCard, mouseOverHandler}) => {
  const {id, previewImage, price, rating, title, type, isPremium, isFavorite} = placeCard;

  return (
    <article className="cities__place-card place-card"
      onMouseOver={() => {
        mouseOverHandler(placeCard);
      }}>
      <Link to={`${RoutePath.OFFER}/${id}`}>
        {isPremium
          ? <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : null }

        <div className="cities__image-wrapper place-card__image-wrapper">

          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>

        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            <FavoriteButton
              id={id}
              isFavorite={isFavorite}
              buttonWidth={FavoriteButtonParams.WIDTH}
              buttonHeight={FavoriteButtonParams.HEIGHT}
              buttonClass={FavoriteButtonParams.CLASS}
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
            {title}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>
    </article>
  );
};

PlaceCard.propTypes = {
  placeCard: placeCardType,
  mouseOverHandler: PropTypes.func.isRequired
};

export default PlaceCard;
