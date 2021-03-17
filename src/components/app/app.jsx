import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType, placeCardType} from "../../types.js";
import {RoutePath, AuthorizationStatus} from "../../const.js";
import {fetchPlaceCardsNearby, fetchComments, fetchFavoriteCards} from '../../store/api-actions.js';

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';
import LoadingScreen from "../loading-screen/loading-screen.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

const App = ({placeCards, isDataLoaded, setPlaceCardsNearby, activeCard, setReviews, authorizationStatus, getFavoriteCards}) => {
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

        <Route exact path={RoutePath.OFFER} render={() => {
          setPlaceCardsNearby(activeCard.id);
          setReviews(activeCard.id);
          return <OfferScreen/>;
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
  setPlaceCardsNearby: PropTypes.func.isRequired,
  activeCard: placeCardType,
  setReviews: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  getFavoriteCards: PropTypes.func.isRequired
};

const mapStateToProps = ({placeCards, isDataLoaded, activeCard, authorizationStatus}) => ({
  placeCards,
  isDataLoaded,
  activeCard,
  authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  setPlaceCardsNearby(cardId) {
    dispatch(fetchPlaceCardsNearby(cardId));
  },
  setReviews(cardId) {
    dispatch(fetchComments(cardId));
  },
  getFavoriteCards() {
    dispatch(fetchFavoriteCards());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
