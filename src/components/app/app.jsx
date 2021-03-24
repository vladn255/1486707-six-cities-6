import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType, placeCardType} from "../../types.js";
import {RoutePath} from "../../const.js";

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';
import LoadingScreen from "../loading-screen/loading-screen.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import {getActiveCard, getIsDataLoaded, getPlaceCards} from '../../store/cards-data/selectors.js';

const App = ({placeCards, isDataLoaded}) => {

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
          return <LoginScreen />;
        }}>
        </Route>

        <PrivateRoute exact
          path={RoutePath.FAVORITES}
          render={() => {
            return <FavoritesScreen />;
          }}>
        </PrivateRoute>

        <Route exact
          path={`${RoutePath.OFFER}/:id`}

          render={() => {
            if (!isDataLoaded) {
              return <LoadingScreen />;
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
  activeCard: placeCardType
};

const mapStateToProps = (state) => ({
  placeCards: getPlaceCards(state),
  isDataLoaded: getIsDataLoaded(state),
  activeCard: getActiveCard(state)
});


export {App};
export default connect(mapStateToProps)(App);
