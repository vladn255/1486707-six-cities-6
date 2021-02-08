import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainScreenComponent from "../main/main.jsx";
import FavoritesScreenComponent from "../favorites/favorites.jsx";
import LoginScreenComponent from "../login/login.jsx";
import OfferScreenComponent from "../offer/offer.jsx";
import NotFoundScreenComponent from "../not-found/not-found.jsx";

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id?`
};

const App = ({placeCards}) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreenComponent placeCards={placeCards} />
        </Route>

        <Route exact path={Routes.LOGIN}>
          <LoginScreenComponent />
        </Route>

        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreenComponent />
        </Route>

        <Route exact path={Routes.OFFER}>
          <OfferScreenComponent />
        </Route>

        <Route>
          <NotFoundScreenComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceText: PropTypes.string.isRequired,
    ratingWidth: PropTypes.number.isRequired,
    placeCardText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};

export default App;
