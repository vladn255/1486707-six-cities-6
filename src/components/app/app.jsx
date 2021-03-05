import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {placeCardsType, reviewListType} from "../../types.js";
import {RoutePath} from "../../const.js";

import MainScreen from "../main/main.jsx";
import FavoritesScreen from "../favorites/favorites.jsx";
import LoginScreen from "../login/login.jsx";
import OfferScreen from "../offer/offer.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";
import MainEmpty from '../main-empty/main-empty.jsx';

const App = ({placeCards, placeCardsNearby, reviewList}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.MAIN} render={() => {
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

          return <OfferScreen
            placeCard={placeCard}
            placeCardsNearby={placeCardsNearby}
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
  placeCardsNearby: placeCardsType,
  reviewList: reviewListType
};

const mapStateToProps = ({placeCards}) => ({
  placeCards
});

export {App};
export default connect(mapStateToProps)(App);
