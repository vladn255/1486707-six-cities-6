import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType} from "../../types.js";
import {RoutePath} from "../../const.js";
import {getInitialPlaceCards} from '../../store/cards-data/selectors.js';
import {getServerErrorStatus} from '../../store/user-data/selectors.js';

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import LoadingScreen from "../loading-screen/loading-screen.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

const App = ({initialPlaceCards, serverErrorStatus}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.MAIN} render={() => {
          if (initialPlaceCards.length === 0 && !serverErrorStatus) {
            return <LoadingScreen />;
          }
          return <MainScreen />;
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
            if (initialPlaceCards.length === 0 && !serverErrorStatus) {
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
  initialPlaceCards: placeCardsType,
  serverErrorStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  initialPlaceCards: getInitialPlaceCards(state),
  serverErrorStatus: getServerErrorStatus(state)
});


export {App};
export default connect(mapStateToProps)(App);
