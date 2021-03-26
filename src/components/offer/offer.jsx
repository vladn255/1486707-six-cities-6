import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardType} from "../../types.js";
import {getTargetCity} from "../../utils.js";
import {RoutePath} from "../../const.js";
import {ActionCreator} from '../../store/action.js';
import {fetchHotelId, fetchPlaceCardsNearby, fetchComments} from '../../store/api-actions.js';

import HeaderUserInfo from "../header-user-info/header-user-info.jsx";
import NotFound from "../not-found/not-found.jsx";
import OfferInfo from "../offer-info/offer-info.jsx";
import {getActiveCard} from '../../store/cards-data/selectors.js';


const Offer = ({activeCard, fetchOfferData, setCurrentCity, setActiveOffer}) => {

  const {id} = useParams();

  if (activeCard.id === parseInt(id, 10)) {
    fetchOfferData(activeCard.id);
    setCurrentCity(getTargetCity(activeCard.city.name));

  } else if (activeCard.id === undefined) {
    return <NotFound />;

  } else {
    setActiveOffer(id);
  }

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

        <OfferInfo />

      </main>
    </div>
  );
};

Offer.propTypes = {
  activeCard: placeCardType,
  fetchOfferData: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  setActiveOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCard: getActiveCard(state)
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
