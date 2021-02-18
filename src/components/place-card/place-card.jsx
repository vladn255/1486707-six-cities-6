import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {placeCardType} from "../../types.js";

import {MAX_RATING_PERCENT} from "../../const.js";

const PlaceCard = ({placeCard, mouseOverHandler}) => {
  const {id, previewImage, price, priceText, rating, title, type, isPremium, isFavorite} = placeCard;

  return (
    <article className="cities__place-card place-card"
      onMouseOver={() => {
        mouseOverHandler(id);
      }}>

      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : null }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{priceText}</span>
          </div>
          <button className=
            {isFavorite
              ? `place-card__bookmark-button place-card__bookmark-button--active button`
              : `place-card__bookmark-button button`
            }
          type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${Math.floor(rating) / MAX_RATING_PERCENT}%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  placeCard: placeCardType,
  mouseOverHandler: PropTypes.func.isRequired
};

export default PlaceCard;
