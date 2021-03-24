import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardType, placeCardsType, reviewListType} from "../../types.js";
import {getRatingWidth, getTargetCity} from "../../utils.js";
import {RoutePath} from "../../const.js";
import {ActionCreator} from '../../store/action.js';
import {fetchHotelId, fetchPlaceCardsNearby, fetchComments} from '../../store/api-actions.js';

import PlacesList from "../places-list/places-list.jsx";
import ReviewForm from '../review-form/review-form.jsx';
import Map from "../map/map.jsx";
import HeaderUserInfo from "../header-user-info/header-user-info.jsx";
import NotFound from "../not-found/not-found.jsx";
import FavoriteButton from "../favorite-button/favorite-button.jsx";
import {getPlaceCardsNearby, getReviews} from '../../store/offer-data/selectors.js';
import {getActiveCard} from '../../store/cards-data/selectors.js';

const FavoriteButtonSize = {
  WIDTH: 31,
  HEIGHT: 33
};

const Offer = ({activeCard, placeCardsNearby, fetchOfferData, setCurrentCity, setActiveOffer}) => {

  if (activeCard.id !== -1) {
    fetchOfferData(activeCard.id);
    setCurrentCity(getTargetCity(activeCard.city.name));
  } else {
    const {id} = useParams();
    setActiveOffer(id);
    return (
      <NotFound />
    );
  }

  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, priceText, goods, host, description} = activeCard;

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={RoutePath.MAIN} className="header__logo-link" >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <HeaderUserInfo />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {images.map((photoUrl, i) => {
                return (
                  <div key={i.toString()} className="property__image-wrapper">
                    <img className="property__image" src={photoUrl} alt="Photo studio"/>
                  </div>);
              })}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium
                ? <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                : null }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>

                <FavoriteButton
                  placeCard={activeCard}
                  buttonWidth={FavoriteButtonSize.WIDTH}
                  buttonHeight={FavoriteButtonSize.HEIGHT}
                />

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: `${getRatingWidth(rating)}%`
                  }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;{priceText}</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {goods.map((good, i) => {
                    return (
                      <li key={i.toString()} className="property__inside-item">
                        {good}
                      </li>);
                  })}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className=
                    {host.isPro
                      ? `property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper`
                      : `property__avatar-wrapper user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>

              <ReviewForm
                activeCardId={activeCard.id}/>

            </div>
          </div>
          <section className="property__map map">

            <Map
              placeCards = {placeCardsNearby}
              city = {getTargetCity(activeCard.city.name)} />

          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">

              <PlacesList placeCards = {placeCardsNearby} isMapChanging={false}/>

            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

Offer.propTypes = {
  activeCard: placeCardType,
  placeCardsNearby: placeCardsType,
  reviewList: reviewListType,
  fetchOfferData: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  setActiveOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  placeCardsNearby: getPlaceCardsNearby(state),
  activeCard: getActiveCard(state),
  reviewList: getReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(articleId) {
    return dispatch(fetchHotelId(articleId));
  },

  fetchOfferData(articleId) {
    dispatch(fetchPlaceCardsNearby(articleId));
    dispatch(fetchComments(articleId));
  },

  setCurrentCity(city) {
    dispatch(ActionCreator.setCity(city));
  }
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
