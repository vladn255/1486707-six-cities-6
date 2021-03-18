import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType, placeCardType} from "../../types.js";
import {RoutePath, AuthorizationStatus} from "../../const.js";
import {targetCity} from "../../utils.js";
import {fetchFavoriteCards, fetchHotelId, fetchPlaceCardsNearby, fetchComments} from '../../store/api-actions.js';

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';
import LoadingScreen from "../loading-screen/loading-screen.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {ActionCreator} from '../../store/action.js';

const App = ({placeCards, isDataLoaded, authorizationStatus, getFavoriteCards, setActiveOffer, activeCard, setCurrentCity, fetchOfferData}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.MAIN} render={() => {
          if (!isDataLoaded) {
            return <LoadingScreen />;
          }
          return placeCards.length !== 0
            ? <MainScreen />
            : <MainEmpty />;
        }}>
        </Route>

        <Route exact path={RoutePath.LOGIN} render={() => {
          return authorizationStatus === AuthorizationStatus.AUTH
            ? <MainScreen />
            : <LoginScreen />;
        }}>
        </Route>

        <PrivateRoute exact
          path={RoutePath.FAVORITES}
          render={() => {
            getFavoriteCards();
            return <FavoritesScreen />;
          }}>
        </PrivateRoute>

        <Route exact
          path={`${RoutePath.OFFER}/:id?`}

          render={({match}) => {
            if (!isDataLoaded) {
              return <LoadingScreen />;
            }

            if (activeCard.id !== -1) {
              fetchOfferData(activeCard.id);
              setCurrentCity(targetCity(activeCard.city.name));
            } else {
              setActiveOffer(match.params.id);
            }

            return <OfferScreen />;
          }}>
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCards: placeCardsType,
  isDataLoaded: PropTypes.bool.isRequired,
  activeCard: placeCardType,
  authorizationStatus: PropTypes.string.isRequired,
  getFavoriteCards: PropTypes.func.isRequired,
  setActiveOffer: PropTypes.func.isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  fetchOfferData: PropTypes.func.isRequired
};

const mapStateToProps = ({placeCards, isDataLoaded, activeCard, authorizationStatus}) => ({
  placeCards,
  isDataLoaded,
  activeCard,
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteCards() {
    dispatch(fetchFavoriteCards());
  },

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

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
