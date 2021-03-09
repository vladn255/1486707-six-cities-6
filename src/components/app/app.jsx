import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {placeCardsType, reviewListType} from "../../types.js";
import {RoutePath} from "../../const.js";
import {fetchPlaceCardsNearby} from '../../store/api-actions.js';

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';
import LoadingScreen from "../loading-screen/loading-screen";

const App = ({placeCards, reviewList, isDataLoaded}) => {
  useEffect(() => {}, [isDataLoaded]);

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

        <Route exact path={RoutePath.LOGIN}>
          <LoginScreen />
        </Route>

        <Route exact path={RoutePath.FAVORITES}>
          <FavoritesScreen placeCards={placeCards} />
        </Route>

        <Route exact path={RoutePath.OFFER} render={({match}) => {
          const placeCard = placeCards.find(({id}) => id === Number(match.params.id));
          fetchPlaceCardsNearby(placeCard.id);
          return <OfferScreen
            placeCard={placeCard}
            reviewList={reviewList}/>;
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
  reviewList: reviewListType,
  isDataLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = ({placeCards, isDataLoaded}) => ({
  placeCards,
  isDataLoaded
});

export {App};
export default connect(mapStateToProps)(App);
